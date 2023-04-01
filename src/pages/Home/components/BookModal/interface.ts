export interface NewBookModalProps {
  visible: boolean;
  onClose: () => void;
  onSend: (title: string, description: string) => void;
}
