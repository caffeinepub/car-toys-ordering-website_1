import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { User, Calendar, Shield } from 'lucide-react';

export default function ProfilePage() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const { data: userProfile, isLoading, isFetched } = useGetCallerUserProfile();

  const isAuthenticated = !!identity;

  // Show login prompt for unauthenticated users
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <Card className="border-accent/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="text-2xl font-display">Members Only</CardTitle>
            <CardDescription className="text-base">
              Please log in to view your profile
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-8">
            <Button
              onClick={login}
              disabled={loginStatus === 'logging-in'}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              {loginStatus === 'logging-in' ? 'Logging in...' : 'Login'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show loading state
  if (isLoading || !isFetched) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-6 w-48" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show profile data
  if (userProfile) {
    const registrationDate = new Date(Number(userProfile.registrationTimestamp) / 1_000_000);
    const formattedDate = registrationDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <Card className="border-accent/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <User className="h-6 w-6 text-accent" />
              </div>
              <div>
                <CardTitle className="text-2xl font-display">Your Profile</CardTitle>
                <CardDescription>Member information and registration details</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                <User className="h-4 w-4" />
                Name
              </label>
              <p className="text-lg font-medium text-foreground">{userProfile.name}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Principal ID
              </label>
              <p className="text-sm font-mono text-foreground break-all bg-muted/50 p-3 rounded-md">
                {userProfile.principal.toString()}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Member Since
              </label>
              <p className="text-lg font-medium text-foreground">{formattedDate}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
