import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

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
            startIcon={<SaveIcon />}
            variant="contained"
            sx={{ml: "auto", width: "25vh", fontSize: "16px", alignItems: "flex-end" }}
            size="small"
          >
          <span>{label}</span>
        </LoadingButton>
    );
}

export default MuiLoadingButton;