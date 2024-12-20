import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListMenuEspressoBased } from "./utils/espressobased";
import { ListMenuFlavored } from "./utils/flavored";
import { ListMenuNonCoffee } from "./utils/noncoffee";
import Image from "next/image";
import logoinertia from "@/app/assets/img/Logo/logo.jpg";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";
export default function Home() {
	return (
		<>
			{" "}
			<div className="mt-10 mb-10 flex items-center justify-center ">
				<Tabs defaultValue="coffee">
					<div className="flex justify-center">
						<Image src={logoinertia} alt="logoinerria" className=" mb-10 font-semibold rounded-full w-[99px]" />
					</div>
					<TabsList className="flex items-center justify-center w-full bg-black gap-x-3">
						<TabsTrigger className="bg-transparent	 text-white/60" value="coffee">
							Coffee
						</TabsTrigger>
						<TabsTrigger className="bg-transparent	 text-white/60" value="flavored">
							Flavored
						</TabsTrigger>
						<TabsTrigger className="bg-transparent	 text-white/60" value="non-coffee">
							Non Coffee
						</TabsTrigger>
					</TabsList>
					<TabsContent value="coffee" className="mt-10 px-10 py-1.5">
						<div className="flex items-center justify-center w-full ">
							<div className=" flex flex-col gap-y-12  ">
								{ListMenuEspressoBased.map((data, index) => {
									return (
										<div key={index} className="grid grid-cols-3 items-center gap-y-3">
											<div className="col-span-2 ">
												<h1 className="font-semibold">{data.title}</h1>
											</div>
											<p className="block font-mono ">{data.pricelist}</p>
											<div className="alert-dialog-show-product col-span-3 ">
												<AlertDialog>
													<AlertDialogTrigger asChild>
														<Button className="bg-[#323232] text-white hover:bg-[#323232]">Detail</Button>
													</AlertDialogTrigger>
													<AlertDialogContent className="w-[87%]  bg-[#323232]  rounded-md  border-none">
														<AlertDialogHeader>
															<AlertDialogDescription className="text-white text-justify ">
																<div className="flex justify-center">
																	{/* <Image
															src={data.imageproduct}
															alt="imageproduct"
															className="  aspect-auto h-fit w-3/4 object-center"
														/> */}
																</div>
															</AlertDialogDescription>
														</AlertDialogHeader>
														<AlertDialogFooter className="">
															<AlertDialogAction className="text-white font-bold ">Close</AlertDialogAction>
														</AlertDialogFooter>
													</AlertDialogContent>
												</AlertDialog>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</TabsContent>
					<TabsContent value="flavored" className="mt-10 px-10 py-1.5">
						<div className="flex items-center justify-center w-full">
							<div className=" flex flex-col gap-y-12  ">
								{ListMenuFlavored.map((data, index) => {
									return (
										<div key={index} className="grid grid-cols-3 items-center gap-y-3">
											<div className="col-span-2 ">
												<h1 className="font-semibold">{data.title}</h1>
											</div>
											<p className="block font-mono ">{data.pricelist}</p>
											<div className="alert-dialog-show-product col-span-3 ">
												<AlertDialog>
													<AlertDialogTrigger asChild>
														<Button className="bg-[#323232] text-white hover:bg-[#323232]">Detail</Button>
													</AlertDialogTrigger>
													<AlertDialogContent className="w-[87%]  bg-[#323232]  rounded-md  border-none">
														<AlertDialogHeader>
															<AlertDialogDescription className="text-white text-justify ">
																{/* <div className="flex justify-center">
														<Image
															src={data.imageproduct}
															alt="imageproduct"
															className="  aspect-auto h-fit w-3/4 object-center"
														/>
													</div> */}
															</AlertDialogDescription>
														</AlertDialogHeader>
														<AlertDialogFooter className="">
															<AlertDialogAction className="text-white font-bold ">Close</AlertDialogAction>
														</AlertDialogFooter>
													</AlertDialogContent>
												</AlertDialog>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</TabsContent>
					<TabsContent value="non-coffee" className="mt-10 px-10 py-1.5	">
						<div className="flex items-center justify-center w-full ">
							<div className=" flex flex-col gap-y-12  ">
								{ListMenuNonCoffee.map((data, index) => {
									return (
										<div key={index} className="grid grid-cols-3 items-center gap-y-3">
											<div className="col-span-2 ">
												<h1 className="font-semibold">{data.title}</h1>
											</div>
											<p className="block font-mono ">{data.pricelist}</p>
											<div className="alert-dialog-show-product col-span-3 ">
												<AlertDialog>
													<AlertDialogTrigger asChild>
														<Button className="bg-[#323232] text-white hover:bg-[#323232]">Detail</Button>
													</AlertDialogTrigger>
													<AlertDialogContent className="w-[87%]  bg-[#323232]  rounded-md  border-none">
														<AlertDialogHeader>
															<AlertDialogDescription className="text-white text-justify ">
																<div className="flex justify-center">
																	<Image src={data.imageproduct} alt="imageproduct" className="  h-fit w-[70%]" />
																</div>
															</AlertDialogDescription>
														</AlertDialogHeader>
														<AlertDialogFooter className="">
															<AlertDialogAction className="text-white font-bold ">Close</AlertDialogAction>
														</AlertDialogFooter>
													</AlertDialogContent>
												</AlertDialog>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>
			<div className="footer flex justify-center py-12">
				<h1>
					Powered By @ash4rr | 2024<span className="text-2xl ">®</span>
				</h1>
			</div>
		</>
	);
}
