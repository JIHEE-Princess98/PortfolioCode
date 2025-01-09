import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark', // 다크 모드 설정
        background: {
            default: '#262737', // 배경색
            paper: '#292a3b', // 카드, 모달 등 서브 배경색
        },
        text: {
            primary: '#f5f5f5', // 기본 텍스트 색상
            secondary: '#b0b0b0', // 보조 텍스트 색상
        },
        primary: {
            main: '#ca6378', // 강조색
        },
        secondary: {
            main: '#cc5f75', // 버튼 호버 또는 보조 강조색
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // 버튼 텍스트 대문자 변환 비활성화
                    '&:hover': {
                        backgroundColor: '#434352',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: 0,
                        height: '2px',
                        backgroundColor: '#cc5f75',
                        transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                        width: '100%',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#262737', // AppBar 배경색
                },
            },
        },
    },
});

