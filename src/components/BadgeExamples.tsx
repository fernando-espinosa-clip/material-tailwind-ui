import * as React from 'react';
import { Badge } from './Badge';
import { Mail, Bell, MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { IconButton } from './IconButton';

export const BadgeExamples: React.FC = () => {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Basic badges</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge badgeContent={4}>
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <Mail className="h-6 w-6" />
          </Badge>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Badge visibility</h2>
        <div className="flex flex-wrap items-center gap-4">
          <div className="space-y-2">
            <div className="flex gap-4">
              <Badge badgeContent={count} color="primary">
                <Mail className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={count} color="primary" showZero>
                <MessageCircle className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={count} color="primary" invisible={invisible}>
                <Bell className="h-6 w-6" />
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button
                size="small"
                onClick={() => setCount((c) => Math.max(0, c - 1))}
              >
                -1
              </Button>
              <Button size="small" onClick={() => setCount((c) => c + 1)}>
                +1
              </Button>
              <Button size="small" onClick={() => setInvisible(!invisible)}>
                Toggle visibility
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Maximum value</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge badgeContent={99} color="primary">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={100} color="primary">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={1000} max={999} color="primary">
            <Mail className="h-6 w-6" />
          </Badge>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Dot badge</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="dot" color="primary">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge variant="dot" color="secondary">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge variant="dot" color="success">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge variant="dot" color="error">
            <Mail className="h-6 w-6" />
          </Badge>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Badge alignment</h2>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-4">
            <Badge badgeContent={4} color="primary" anchorOrigin="top-right">
              <Mail className="h-6 w-6" />
            </Badge>
            <Badge badgeContent={4} color="primary" anchorOrigin="top-left">
              <Mail className="h-6 w-6" />
            </Badge>
            <Badge badgeContent={4} color="primary" anchorOrigin="bottom-right">
              <Mail className="h-6 w-6" />
            </Badge>
            <Badge badgeContent={4} color="primary" anchorOrigin="bottom-left">
              <Mail className="h-6 w-6" />
            </Badge>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Badge overlap</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge badgeContent={4} color="primary" overlap="circular">
            <div className="rounded-full bg-grey-200 p-2">
              <Mail className="h-6 w-6" />
            </div>
          </Badge>
          <Badge badgeContent={4} color="primary" overlap="circular">
            <IconButton icon={<Mail />} />
          </Badge>
          <Badge badgeContent={4} color="primary" overlap="rectangular">
            <div className="rounded-md bg-grey-200 p-2">
              <Mail className="h-6 w-6" />
            </div>
          </Badge>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Color variations</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge badgeContent={4} color="default">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={4} color="info">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <Mail className="h-6 w-6" />
          </Badge>
          <Badge badgeContent={4} color="warning">
            <Mail className="h-6 w-6" />
          </Badge>
        </div>
      </div>
    </div>
  );
};
