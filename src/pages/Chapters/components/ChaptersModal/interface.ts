export interface NewChapterModalProps {
  visible: boolean;
  onClose: () => void;
  onSend: (title: string, description: string, page: string) => void;
}
