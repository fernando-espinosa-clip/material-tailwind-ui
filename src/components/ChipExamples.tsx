import { Chip } from './Chip';
import { Avatar } from './Avatar';
import { Check, ScanFaceIcon as Face, Home } from 'lucide-react';

export const ChipExamples = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Basic chips</h2>
        <div className="flex flex-wrap gap-2">
          <Chip label="Basic" />
          <Chip label="Disabled" disabled />
          <Chip label="Clickable" onClick={handleClick} />
          <Chip label="Deletable" onDelete={handleDelete} />
          <Chip
            label="Clickable Deletable"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            label="Custom delete icon"
            onDelete={handleDelete}
            deleteIcon={<Check className="h-4 w-4" />}
          />
          <Chip label="Custom color" color="primary" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Outlined chips</h2>
        <div className="flex flex-wrap gap-2">
          <Chip label="Basic" variant="outlined" />
          <Chip label="Disabled" variant="outlined" disabled />
          <Chip label="Clickable" variant="outlined" onClick={handleClick} />
          <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
          <Chip
            label="Clickable Deletable"
            variant="outlined"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            label="Custom delete icon"
            variant="outlined"
            onDelete={handleDelete}
            deleteIcon={<Check className="h-4 w-4" />}
          />
          <Chip label="Custom color" variant="outlined" color="primary" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Chip colors</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Chip label="Default" />
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Error" color="error" />
            <Chip label="Info" color="info" />
            <Chip label="Success" color="success" />
            <Chip label="Warning" color="warning" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip label="Default" variant="outlined" />
            <Chip label="Primary" variant="outlined" color="primary" />
            <Chip label="Secondary" variant="outlined" color="secondary" />
            <Chip label="Error" variant="outlined" color="error" />
            <Chip label="Info" variant="outlined" color="info" />
            <Chip label="Success" variant="outlined" color="success" />
            <Chip label="Warning" variant="outlined" color="warning" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Chip sizes</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Chip label="Small" size="small" />
          <Chip label="Medium" />
          <Chip label="Large" size="large" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Chip with avatar</h2>
        <div className="flex flex-wrap gap-2">
          <Chip
            avatar={
              <Avatar
                alt="Avatar"
                src="https://mui.com/static/images/avatar/3.jpg"
                className="h-6 w-6"
              />
            }
            label="Avatar"
          />
          <Chip
            avatar={
              <Avatar
                alt="Avatar"
                src="https://mui.com/static/images/avatar/3.jpg"
                className="h-6 w-6"
              />
            }
            label="Avatar"
            variant="outlined"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Chip with icon</h2>
        <div className="flex flex-wrap gap-2">
          <Chip icon={<Face className="h-4 w-4" />} label="With Icon" />
          <Chip
            icon={<Face className="h-4 w-4" />}
            label="With Icon"
            variant="outlined"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Clickable link chips</h2>
        <div className="flex flex-wrap gap-2">
          <Chip
            component="a"
            href="#basic-chip"
            clickable
            icon={<Home className="h-4 w-4" />}
            label="Clickable Link"
          />
          <Chip
            component="a"
            href="#basic-chip"
            clickable
            icon={<Home className="h-4 w-4" />}
            label="Clickable Link"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};
