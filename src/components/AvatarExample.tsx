import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

export const AvatarExample = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Image avatars</h2>
        <div className="flex flex-wrap gap-4">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Letter avatars</h2>
        <div className="flex flex-wrap gap-4">
          <Avatar>H</Avatar>
          <Avatar color="primary">N</Avatar>
          <Avatar color="secondary">OP</Avatar>
          <Avatar color="error">CB</Avatar>
          <Avatar color="info">ZD</Avatar>
          <Avatar color="success">YX</Avatar>
          <Avatar color="warning">WV</Avatar>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar
            size="small"
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            size="large"
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Avatar
            variant="circular"
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            variant="square"
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Fallbacks</h2>
        <div className="flex flex-wrap gap-4">
          <Avatar alt="Remy Sharp" src="/broken-image.jpg" />
          <Avatar alt="Remy Sharp" src="/broken-image.jpg">
            RS
          </Avatar>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Grouped</h2>
        <div className="space-y-4">
          <AvatarGroup>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/5.jpg"
            />
          </AvatarGroup>

          <AvatarGroup max={4}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/5.jpg"
            />
          </AvatarGroup>

          <AvatarGroup spacing="small" max={4} total={24}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
          </AvatarGroup>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">With badge</h2>
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-background bg-success-500" />
          </div>
          <div className="relative">
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-background bg-error-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
