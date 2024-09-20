import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/ui/mp-dialog";

const FoodCard: React.FC<FoodCardProps> = ({
  image,
  title,
  description,
  category,
}) => (
  <Dialog
    transition={{
      type: "spring",
      bounce: 0.05,
      duration: 0.25,
    }}
  >
    <DialogTrigger
      style={{
        borderRadius: "12px",
      }}
      className="flex max-w-[270px] flex-col overflow-hidden bg-[#d6e5d8] rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
    >
      <DialogImage
        src={image}
        alt={title}
        hoverEffect={true}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-grow flex-row items-end justify-between p-2">
        <div>
          <DialogTitle className="text-zinc-950 dark:text-zinc-50 text-xl font-semibold">
            {title}
          </DialogTitle>
          <DialogSubtitle className="text-zinc-600 dark:text-zinc-400">
            {category}
          </DialogSubtitle>
        </div>
      </div>
    </DialogTrigger>
    <DialogContainer>
      <DialogContent
        style={{
          borderRadius: "24px",
        }}
        className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-[#d6e5d8] dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
      >
        <DialogImage src={image} alt={title} className="h-full w-full" />
        <div className="p-6">
          <DialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50 font-semibold">
            {title}
          </DialogTitle>
          <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
            {category}
          </DialogSubtitle>
          <DialogDescription
            disableLayoutAnimation
            variants={{
              initial: { opacity: 0, scale: 0.8, y: 100 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.8, y: 100 },
            }}
          >
            <p className="mt-2 text-zinc-500 dark:text-zinc-500">
              {description}
            </p>
            {/* <p className="text-zinc-500">{description}</p> */}
          </DialogDescription>
        </div>
        <DialogClose className="text-zinc-50" />
      </DialogContent>
    </DialogContainer>
  </Dialog>
);

export default FoodCard;
