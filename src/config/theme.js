import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark', // 다크 모드 설정
        background: {
            default: '#181818', // 배경색
            paper: '#1e1e1e', // 카드, 모달 등 서브 배경색
        },
        text: {
            primary: '#f5f5f5', // 기본 텍스트 색상
            secondary: '#b0b0b0', // 보조 텍스트 색상
        },
        primary: {
            main: '#9d4edd', // 강조색
        },
        secondary: {
            main: '#c77dff', // 버튼 호버 또는 보조 강조색
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // 버튼 텍스트 대문자 변환 비활성화
                    '&:hover': {
                        backgroundColor: '#c77dff', // 버튼 호버 색상
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#181818', // AppBar 배경색
                },
            },
        },
    },
});

