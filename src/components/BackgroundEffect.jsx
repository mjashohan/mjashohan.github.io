import { Box } from '@mui/material';

// Decorative animated background — fixed behind everything else.
export default function BackgroundEffect() {
  return (
    <>
      <div className="grid-bg" />
      <Box
        aria-hidden
        sx={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          className="glow-orb"
          sx={{
            width: 480,
            height: 480,
            top: '-10%',
            left: '-8%',
            background: 'radial-gradient(circle, rgba(100,255,218,0.18), transparent 70%)',
            animationDelay: '0s',
          }}
        />
        <Box
          className="glow-orb"
          sx={{
            width: 380,
            height: 380,
            bottom: '5%',
            right: '-6%',
            background: 'radial-gradient(circle, rgba(255,126,95,0.14), transparent 70%)',
            animationDelay: '-3s',
          }}
        />
      </Box>
    </>
  );
}
