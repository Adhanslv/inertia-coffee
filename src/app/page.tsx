import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListMenuEspressoBased } from "./utils/espressobased";
import { ListMenuFlavored } from "./utils/flavored";
import { ListMenuNonCoffee } from "./utils/noncoffee";
import Image from "next/image";
import logoinertia from "@/app/assets/img/Logo/inertialogo.jpg";
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
		<div className="px-[4vw] mt-10 mb-10">
			<div className="button-switch flex items-center gap-x-3 mb-20 justify-center w-full">
				<Tabs defaultValue="coffee" className="">
					<div className="flex justify-center">
						<Image
							src={logoinertia}
							alt="logoinerria"
							className=" mb-10 font-semibold rounded-full w-[99px] bg-none	 "
						/>
					</div>
					<TabsList className="grid w-full grid-cols-3 bg-black">
						<TabsTrigger className="bg-transparent	 text-white/60" value="coffee">
							Espresso Based
						</TabsTrigger>
						<TabsTrigger className="bg-transparent	 text-white/60" value="flavored">
							Flavored
						</TabsTrigger>
						<TabsTrigger className="bg-transparent	 text-white/60" value="non-coffee">
							Non Coffee
						</TabsTrigger>
					</TabsList>
					<TabsContent value="coffee" className="mt-10">
						<div className="flex items-center justify-center w-full">
							<div className=" flex flex-col gap-y-12  ">
								{ListMenuEspressoBased.map((data, index) => {
									return (
										<div key={index} className="grid grid-cols-3 items-center gap-y-3">
											<div className="col-span-2 ">
												<h1 className="font-semibold">{data.title}</h1>
											</div>
											<p className="block font-mono ">{data.pricelist}</p>
											<div>
												<button className="bg-gray-800 text-white rounded-md px-2 py-1.5">Detail</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</TabsContent>
					<TabsContent value="flavored" className="mt-10">
						<div className="flex items-center justify-center w-full">
							<div className=" flex flex-col gap-y-12  ">
								{ListMenuFlavored.map((data, index) => {
									return (
										<div key={index} className="grid grid-cols-3 items-center gap-y-3">
											<div className="col-span-2 ">
												<h1 className="font-semibold">{data.title}</h1>
											</div>
											<p className="block font-mono ">{data.pricelist}</p>
											<div>
												<button className="bg-gray-800 text-white rounded-md px-2 py-1.5">Detail</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</TabsContent>
					<TabsContent value="non-coffee" className="mt-10">
						<div className="flex items-center justify-center w-full">
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
														<Button className="w-fit bg-[#323232] text-white hover:bg-[#323232]">Detail</Button>
													</AlertDialogTrigger>
													<AlertDialogContent className="w-[87%]  bg-[#323232]  rounded-md  border-none">
														<AlertDialogHeader>
															<AlertDialogDescription className="text-white text-justify ">
																<div className="flex justify-center">
																	<Image
																		src={data.imageproduct}
																		alt="imageproduct"
																		className="  aspect-auto h-fit w-3/4 object-center"
																	/>
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
		</div>
	);
}
