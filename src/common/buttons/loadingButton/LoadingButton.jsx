import LoadingButton from '@mui/lab/LoadingButton';

const MuiLoadingButton = ({
    onClick,
    loading,
    label
}) => {
    return(
        <LoadingButton
            color="primary"
            onClick={onClick}
            loading={loading}
            loadingPosition="start"
            variant="contained"
            sx={{ml: "auto", width: "25vh", fontSize: "16px", alignItems: "flex-end" }}
            size="small"
          >
          <span>{label}</span>
        </LoadingButton>
    );
}

export default MuiLoadingButton;