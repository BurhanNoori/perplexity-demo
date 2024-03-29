import React from "react";
import "./Content.css";
import { ReactSVG } from "react-svg";
import focusIcon from "../images/focus.svg";
function Content() {
	return (
		// <div class='h-full'>
		// 	<div class='w-full h-full mx-auto  max-w-screen-md md:px-lg  px-md h-full'>
		// 		<div class='relative h-full flex flex-col'>
		// 			<div class='md:hidden border-b py-lg flex items-center justify-between border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 				<div class='h-auto group w-40 md:w-52'>
		// 					<svg
		// 						viewBox='0 0 151 36'
		// 						fill='none'
		// 						xmlns='http://www.w3.org/2000/svg'>
		// 						<path
		// 							d='M24.0655 1.39844L14.5703 10.9021H24.0655V1.3984  4Z'
		// 							class='stroke-super dark:stroke-superDark stroke-[1.3px] transition-all duration-300'
		// 							stroke-miterlimit='10'></path>
		// 						<path
		// 							d='M14.57 10.9021L5.07422 1.39844V10.9021H14.57Z'
		// 							class='stroke-super dark:stroke-superDark stroke-[1.3px] transition-all duration-300'
		// 							stroke-miterlimit='10'></path>
		// 						<path
		// 							d='M14.5488 0L14.5488 36'
		// 							class='stroke-super dark:stroke-superDark stroke-[1.3px] transition-all duration-300'
		// 							stroke-miterlimit='10'></path>
		// 						<path
		// 							d='M24.0655 20.4041L14.5703 10.9004V24.5252L24.0655 34.0288V20.4041Z'
		// 							class='stroke-super dark:stroke-superDark stroke-[1.3px] transition-all duration-300'
		// 							stroke-miterlimit='10'></path>
		// 						<path
		// 							d='M5.07422 20.4041L14.57 10.9004V24.5252L5.07422 34.0288V20.4041Z'
		// 							class='stroke-super dark:stroke-superDark stroke-[1.3px] transition-all duration-300'
		// 							stroke-miterlimit='10'></path>
		// 						<path
		// 							d='M1 10.9004V24.4705H5.07437V20.4041L14.5701 10.9004H1Z'
		// 							class='stroke-super dark:stroke-superDark stroke-[1.3px] transition-all duration-300'
		// 							stroke-miterlimit='10'></path>
		// 						<path
		// 							d='M14.5703 10.9004L24.0655 20.4041V24.4705H28.1405V10.9004H14.5703Z'
		// 							class='stroke-super dark:stroke-superDark stroke-[1.3px] transition-all duration-300'
		// 							stroke-miterlimit='10'></path>
		// 						<path
		// 							d='M55.9605 13.0284C56.5531 11.9196 57.3829 11.0651 58.4511 10.4648C59.5182 9.86569 60.7706 9.56555 62.206 9.56555C63.6414 9.56555 64.8312 9.86098 65.8263 10.4518C66.8226 11.0427 67.5674 11.8254 68.0608 12.8012C68.5542 13.7769 68.8009 14.8457 68.8009 16.0086V17.6187H57.6296C57.7193 19.0147 58.1903 20.1246 59.0425 20.9474C59.8948 21.7713 61.0386 22.1821 62.4752 22.1821C63.6414 22.1821 64.535 21.9455 65.1535 21.4711C65.7732 20.9968 66.2253 20.34 66.5133 19.4985H69.0713C68.7301 20.8049 68.0349 21.9372 66.9855 22.8942C65.9361 23.8523 64.4323 24.3301 62.4763 24.3301C61.0044 24.3301 59.7071 24.03 58.5857 23.4309C57.4643 22.8318 56.5979 21.9773 55.9876 20.8673C55.3774 19.7574 55.0728 18.4509 55.0728 16.9478C55.0728 15.4448 55.3691 14.1383 55.9617 13.0284H55.9605ZM66.1096 15.6049C66.1096 14.3878 65.7956 13.4356 65.1677 12.7459C64.5397 12.0573 63.5529 11.7124 62.206 11.7124C60.9501 11.7124 59.9219 12.0479 59.124 12.7188C58.3248 13.3897 57.8362 14.3525 57.6567 15.6049H66.1096Z'
		// 							class=' block fill-textMain dark:fill-textMainDark'></path>
		// 						<path
		// 							d='M72.1566 9.96796V12.1961C72.1566 12.322 72.2192 12.3844 72.3455 12.3844C72.4175 12.3844 72.4706 12.3667 72.5072 12.3302C72.5438 12.2938 72.5792 12.2231 72.6146 12.116C73.0809 10.6495 74.2388 9.91499 76.0873 9.91499H77.2713V12.3302H75.7368C74.5339 12.3302 73.6368 12.6163 73.0443 13.1895C72.4517 13.7627 72.1554 14.7019 72.1554 16.0084V23.9275H69.732V9.96796H72.1566Z'
		// 							class=' block fill-textMain dark:fill-textMainDark'></path>
		// 						<path
		// 							d='M91.4988 20.9874C90.8614 22.1055 90.0363 22.9424 89.0223 23.4968C88.0084 24.0511 86.9177 24.3289 85.7514 24.3289C83.4544 24.3289 81.8384 23.4167 80.9059 21.5912C80.8338 21.4487 80.7441 21.3769 80.6367 21.3769C80.5293 21.3769 80.475 21.4311 80.475 21.5382V29.0276H78.0516V9.96805H80.475V12.3574C80.475 12.4645 80.5293 12.5187 80.6367 12.5187C80.7441 12.5187 80.8338 12.4469 80.9059 12.3044C81.8384 10.4789 83.4544 9.56669 85.7514 9.56669C86.9177 9.56669 88.0084 9.84447 89.0223 10.3988C90.0363 10.9532 90.8614 11.7901 91.4988 12.9083C92.1362 14.0264 92.455 15.3741 92.455 16.9478C92.455 18.5215 92.1362 19.8692 91.4988 20.9874ZM88.6989 13.0954C87.8101 12.1738 86.6391 11.7124 85.186 11.7124C83.7329 11.7124 82.5608 12.1738 81.6731 13.0954C80.7843 14.017 80.4585 15.3012 80.4585 16.9478C80.4585 18.5945 80.7843 19.8786 81.6731 20.8002C82.562 21.7218 83.7329 22.1832 85.186 22.1832C86.6391 22.1832 87.8112 21.723 88.6989 20.8002C89.5877 19.8786 90.0316 18.5945 90.0316 16.9478C90.0316 15.3012 89.5877 14.0182 88.6989 13.0954Z'
		// 							class=' block fill-textMain dark:fill-textMainDark'></path>
		// 						<path
		// 							d='M95.9712 4.59961V23.9263H93.5478V4.59961H95.9712Z'
		// 							class=' block fill-textMain dark:fill-textMainDark'></path>
		// 						<path
		// 							d='M97.966 13.0284C98.5585 11.9196 99.3883 11.0651 100.457 10.4648C101.524 9.86569 102.776 9.56555 104.211 9.56555C105.647 9.56555 106.837 9.86098 107.832 10.4518C108.828 11.0427 109.573 11.8254 110.066 12.8012C110.56 13.7769 110.806 14.8457 110.806 16.0086V17.6187H99.6351C99.7248 19.0147 100.196 20.1246 101.048 20.9474C101.9 21.7713 103.044 22.1821 104.481 22.1821C105.647 22.1821 106.54 21.9455 107.159 21.4711C107.779 20.9968 108.231 20.34 108.519 19.4985H111.077C110.736 20.8049 110.04 21.9372 108.991 22.8942C107.942 23.8523 106.438 24.3301 104.482 24.3301C103.01 24.3301 101.713 24.03 100.591 23.4309C99.4698 22.8318 98.6034 21.9773 97.9931 20.8673C97.3828 19.7574 97.0783 18.4509 97.0783 16.9478C97.0783 15.4448 97.3746 14.1383 97.9671 13.0284H97.966ZM108.115 15.6049C108.115 14.3878 107.801 13.4356 107.173 12.7459C106.545 12.0573 105.558 11.7124 104.211 11.7124C102.956 11.7124 101.927 12.0479 101.129 12.7188C100.33 13.3897 99.8416 14.3525 99.6622 15.6049H108.115Z'
		// 							class=' block fill-textMain dark:fill-textMainDark'></path>
		// 						<path
		// 							d='M109.728 23.3894L115.273 16.5438L110.724 10.5045V9.96777H113.389L117.186 15.1749L121.278 9.96777H123.996V10.5316L118.774 16.9475L123.593 23.3894V23.9261H120.982L116.863 18.3164L112.449 23.9261H109.73V23.3894H109.728Z'
		// 							class=' block fill-textMain dark:fill-textMainDark'></path>
		// 						<path
		// 							d='M127.514 5.4245V8.44591H124.684V5.4245H127.514ZM127.367 23.9273H124.943V9.96781H127.367V23.9273Z'
		// 							class=' block fill-textMain dark:fill-textMainDark'></path>
		// 						<path
		// 							d='M128.131 9.96828H130.767V6.21005H133.191V9.96828H135.965L136.646 12.014H133.191V18.6924C133.191 19.6046 133.168 20.2802 133.123 20.7192C133.078 21.1582 133.056 21.4219 133.056 21.5114C133.056 21.6373 133.091 21.735 133.163 21.8068C133.235 21.8786 133.333 21.9139 133.46 21.9139C133.549 21.9139 133.814 21.8915 134.254 21.8468C134.693 21.8021 135.371 21.7797 136.287 21.7797H137.229V23.9266H135.345C133.801 23.9266 132.652 23.5511 131.899 22.799C131.146 22.0469 130.768 20.9028 130.768 19.3633V12.014H128.133V9.96828H128.131Z'
		// 							class=' block fill-textMain dark:fill-textMainDark'></path>
		// 						<path
		// 							d='M136.695 9.96777H139.165L143.176 21.6792C143.231 21.8228 143.316 22.0123 143.591 22.0123C143.866 22.0123 143.951 21.8228 144.005 21.6792L148.016 9.96777H150.32V10.5045L145.302 25.5633C144.871 26.8522 144.266 27.7514 143.486 28.2611C142.705 28.7707 141.798 29.0261 140.289 29.0261H137.705V26.8793H139.671C140.299 26.8793 140.81 26.9016 141.205 26.9463C141.599 26.9911 141.851 27.0134 141.959 27.0134C142.264 27.0134 142.47 26.8793 142.579 26.6109L143.333 24.5711C143.423 24.3569 143.431 24.1956 143.36 24.0874C143.324 24.0156 143.28 23.9708 143.226 23.9532C143.172 23.9355 143.091 23.9261 142.984 23.9261H141.342L136.697 9.96777H136.695Z'
		// 							class=' block fill-textMain dark:fill-textMainDark'></path>
		// 						<path
		// 							d='M53.5331 21.0098C52.8957 22.128 52.0706 22.9648 51.0566 23.5192C50.0427 24.0736 48.952 24.3514 47.7857 24.3514C45.4887 24.3514 43.8727 23.4392 42.9402 21.6136C42.8682 21.4712 42.7784 21.3994 42.671 21.3994C42.5636 21.3994 42.5093 21.4535 42.5093 21.5607V29.0501H40.0859V9.99051H42.5093V12.3799C42.5093 12.487 42.5636 12.5411 42.671 12.5411C42.7784 12.5411 42.8682 12.4693 42.9402 12.3269C43.8727 10.5013 45.4887 9.58915 47.7857 9.58915C48.952 9.58915 50.0427 9.86693 51.0566 10.4213C52.0706 10.9757 52.8957 11.8125 53.5331 12.9307C54.1705 14.0489 54.4893 15.3966 54.4893 16.9703C54.4893 18.5439 54.1705 19.8916 53.5331 21.0098ZM50.7332 13.1179C49.8444 12.1963 48.6734 11.7349 47.2203 11.7349C45.7672 11.7349 44.5951 12.1963 43.7074 13.1179C42.8186 14.0395 42.4928 15.3236 42.4928 16.9703C42.4928 18.6169 42.8186 19.9011 43.7074 20.8227C44.5963 21.7443 45.7672 22.2057 47.2203 22.2057C48.6734 22.2057 49.8455 21.7455 50.7332 20.8227C51.622 19.9011 52.0659 18.6169 52.0659 16.9703C52.0659 15.3236 51.622 14.0407 50.7332 13.1179Z'
		// 							class=' block fill-textMain dark:fill-textMainDark'></path>
		// 					</svg>
		// 				</div>
		// 				<div class='flex items-center gap-x-sm'>
		// 					<a
		// 						class='bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'
		// 						style='-webkit-tap-highlight-color:transparent'
		// 						href='/download-mobile'>
		// 						<div class='flex items-center leading-none justify-center gap-xs'>
		// 							<svg
		// 								aria-hidden='true'
		// 								focusable='false'
		// 								data-prefix='fab'
		// 								data-icon='android'
		// 								class='svg-inline--fa fa-android fa-fw fa-1x '
		// 								role='img'
		// 								xmlns='http://www.w3.org/2000/svg'
		// 								viewBox='0 0 576 512'>
		// 								<path
		// 									fill='currentColor'
		// 									d='M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55'></path>
		// 							</svg>
		// 							<div class='text-align-center relative'>Get App</div>
		// 						</div>
		// 					</a>
		// 				</div>
		// 			</div>
		// 			<div class='w-full grow flex items-center -mt-2xl md:mt-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 				<div class='mb-lg md:mb-xl w-full'>
		// 					<div class=''>
		// 						<div class='md:text-center mb-lg pb-xs flex items-center justify-center'>
		// 							<div class='default font-sans text-base text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
		// 								<span class='text-4xl font-display font-regular'>
		// 									Where knowledge begins
		// 								</span>
		// 							</div>
		// 						</div>
		// 						<div class='grow'>
		// 							<div>
		// 								<div class='rounded-md'>
		// 									<div class='relative flex items-center'>
		// 										<div class='w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff shadow-sm rounded-t-md rounded-b-md text-base p-md pb-xl'>
		// 											<textarea
		// 												autofocus=''
		// 												placeholder='Ask anything...'
		// 												class='overflow-auto max-h-[50vh] outline-none w-full flex items-center font-sans duration-200 transition-all caret-superDuper resize-none selection:bg-superDuper selection:text-textMain dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark bg-background text-textMain placeholder-textOff'
		// 												autocomplete='off'
		// 												style='height: 48px !important;'></textarea>
		// 										</div>
		// 										<div
		// 											class='absolute m-[1px] bottom-0 flex justify-between px-[6px] bg-background focus:bg-background dark:bg-offsetDark dark:focus:bg-offsetDark rounded-b-md '
		// 											style='width:calc(100% - 2px)'>
		// 											<div class='absolute flex items-center bg-background dark:bg-offsetDark rounded-t-lg bottom-0 pb-xs mb-xs left-[6px] left-sm'>
		// 												<div class=''>
		// 													<div>
		// 														<button
		// 															type='button'
		// 															class='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'>
		// 															<div
		// 																class='flex items-center leading-none justify-center gap-xs'
		// 																style='max-width:120px'>
		// 																<svg
		// 																	aria-hidden='true'
		// 																	focusable='false'
		// 																	data-prefix='fasr'
		// 																	data-icon='magnifying-glass'
		// 																	class='svg-inline--fa fa-magnifying-glass fa-fw fa-1x '
		// 																	role='img'
		// 																	xmlns='http://www.w3.org/2000/svg'
		// 																	viewBox='0 0 512 512'>
		// 																	<path
		// 																		fill='currentColor'
		// 																		d='M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1l124 124 17 17L478.1 512l-17-17-124-124z'></path>
		// 																</svg>
		// 																<div class='text-align-center relative truncate'>
		// 																	Focus
		// 																</div>
		// 															</div>
		// 														</button>
		// 													</div>
		// 												</div>
		// 												<div>
		// 													<button
		// 														type='button'
		// 														class='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'>
		// 														<div class='pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1'>
		// 															<div class='py-xs px-sm rounded flex items-center gap-x-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlusDark'>
		// 																<div class='default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
		// 																	<span class='text-textMainDark'>
		// 																		Upload a text or PDF file (4 max, 25MB
		// 																		each). Sign in to upload files.
		// 																	</span>
		// 																</div>
		// 															</div>
		// 														</div>
		// 														<div class='flex items-center leading-none justify-center gap-xs'>
		// 															<svg
		// 																aria-hidden='true'
		// 																focusable='false'
		// 																data-prefix='fasr'
		// 																data-icon='circle-plus'
		// 																class='svg-inline--fa fa-circle-plus fa-fw fa-1x '
		// 																role='img'
		// 																xmlns='http://www.w3.org/2000/svg'
		// 																viewBox='0 0 512 512'>
		// 																<path
		// 																	fill='currentColor'
		// 																	d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 368h48V344 280h64 24V232H344 280V168 144H232v24 64H168 144v48h24 64v64 24z'></path>
		// 															</svg>
		// 															<div class='text-align-center relative'>
		// 																File
		// 															</div>
		// 														</div>
		// 													</button>
		// 													<input
		// 														type='file'
		// 														multiple=''
		// 														accept='text/*,application/pdf,.pdf,.txt,.py,.ipynb,.js,.jsx,.html,.css,.java,.cs,.php,.c,.cpp,.cxx,.h,.hpp,.rs,.R,.Rmd,.swift,.go,.rb,.kt,.kts,.ts,.tsx,.m,.scala,.rs,.dart,.lua,.pl,.pm,.t,.sh,.bash,.zsh,.csv,.log,.ini,.config,.json,.yaml,.yml,.toml,.lua,.sql,.bat,.md,.coffee,.tex,.latex'
		// 														style='display:none'
		// 													/>
		// 												</div>
		// 											</div>
		// 											<div class='absolute flex items-center gap-sm bg-background dark:bg-offsetDark rounded-full right-sm bottom-0 pb-xs mb-xs'>
		// 												<button
		// 													type='button'
		// 													class='   text-textOff dark:text-textOffDark md:hover:text-textMain  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8'>
		// 													<div class='pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1'>
		// 														<div class='py-xs px-sm rounded flex items-center gap-x-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlusDark'>
		// 															<div class='border border-borderMain/40 rounded py-two px-xs default text-[11px] font-bold tracking-wide font-mono leading-none uppercase text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
		// 																<span class='text-textMainDark'>
		// 																	Ctrl + .
		// 																</span>
		// 															</div>
		// 															<div class='default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
		// 																<span class='text-textMainDark'>
		// 																	Use Copilot for more comprehensive
		// 																	answers.
		// 																</span>
		// 															</div>
		// 														</div>
		// 													</div>
		// 													<div class='flex items-center leading-none justify-center gap-xs'>
		// 														<div>
		// 															<div class='rounded-full  p-three border  transition duration-300 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 																<div class='relative w-8 transition duration-200 ease-in-out'>
		// 																	<div class='rounded-full h-4 w-4 transition-all duration-300 ease-in-out shadow-sm md:group-hover:scale-90 ml-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlus dark:bg-offsetPlusDark'></div>
		// 																</div>
		// 															</div>
		// 														</div>
		// 														<div class='text-align-center relative'>
		// 															Copilot
		// 														</div>
		// 													</div>
		// 												</button>
		// 												<button
		// 													type='button'
		// 													class='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'>
		// 													<div class='flex items-center leading-none justify-center gap-xs'>
		// 														<svg
		// 															aria-hidden='true'
		// 															focusable='false'
		// 															data-prefix='fasr'
		// 															data-icon='arrow-right'
		// 															class='svg-inline--fa fa-arrow-right fa-fw fa-1x '
		// 															role='img'
		// 															xmlns='http://www.w3.org/2000/svg'
		// 															viewBox='0 0 448 512'>
		// 															<path
		// 																fill='currentColor'
		// 																d='M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z'></path>
		// 														</svg>
		// 													</div>
		// 												</button>
		// 											</div>
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 						<div class=' mt-lg '>
		// 							<div class='mb-sm md:text-center flex items-center gap-x-xs md:justify-center'>
		// 								<div class='inline default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
		// 									<svg
		// 										aria-hidden='true'
		// 										focusable='false'
		// 										data-prefix='fasr'
		// 										data-icon='arrow-right-to-arc'
		// 										class='svg-inline--fa fa-arrow-right-to-arc '
		// 										role='img'
		// 										xmlns='http://www.w3.org/2000/svg'
		// 										viewBox='0 0 512 512'>
		// 										<path
		// 											fill='currentColor'
		// 											d='M232.3 134.4l112 104L363.3 256l-18.9 17.6-112 104-17.6 16.3-32.7-35.2 17.6-16.3L266.9 280 24 280 0 280l0-48 24 0 242.9 0-67.2-62.4-17.6-16.3 32.7-35.2 17.6 16.3zM464 256c0-114.9-93.1-208-208-208l-24 0 0-48 24 0C397.4 0 512 114.6 512 256s-114.6 256-256 256l-24 0 0-48 24 0c114.9 0 208-93.1 208-208z'></path>
		// 									</svg>
		// 								</div>
		// 								<div class='inline  default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain'>
		// 									Try<span> asking </span>
		// 								</div>
		// 							</div>
		// 							<div class='flex gap-sm md:gap-xs md:justify-center md:items-center flex-wrap'>
		// 								<a href='/search?q=history%20of%20Argentina'>
		// 									<div class='animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 										<div class='md:hidden'>
		// 											<button
		// 												type='button'
		// 												class='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														history of Argentina
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 										<div class='hidden md:block'>
		// 											<button
		// 												type='button'
		// 												class='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														history of Argentina
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 									</div>
		// 								</a>
		// 								<a href='/search?q=unique%20colorado%20flowers'>
		// 									<div class='animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 										<div class='md:hidden'>
		// 											<button
		// 												type='button'
		// 												class='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														unique colorado flowers
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 										<div class='hidden md:block'>
		// 											<button
		// 												type='button'
		// 												class='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														unique colorado flowers
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 									</div>
		// 								</a>
		// 								<a href='/search?q=checkout%20time%20w%20hotel%20cdmx'>
		// 									<div class='animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 										<div class='md:hidden'>
		// 											<button
		// 												type='button'
		// 												class='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														checkout time w hotel cdmx
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 										<div class='hidden md:block'>
		// 											<button
		// 												type='button'
		// 												class='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														checkout time w hotel cdmx
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 									</div>
		// 								</a>
		// 								<a href='/search?q=how%20to%20center%20a%20div'>
		// 									<div class='animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 										<div class='md:hidden'>
		// 											<button
		// 												type='button'
		// 												class='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														how to center a div
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 										<div class='hidden md:block'>
		// 											<button
		// 												type='button'
		// 												class='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														how to center a div
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 									</div>
		// 								</a>
		// 								<a href='/search?q=brown%20dog%20name%20ideas'>
		// 									<div class='animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 										<div class='md:hidden'>
		// 											<button
		// 												type='button'
		// 												class='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														brown dog name ideas
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 										<div class='hidden md:block'>
		// 											<button
		// 												type='button'
		// 												class='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														brown dog name ideas
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 									</div>
		// 								</a>
		// 								<a href='/search?q=healthy%20restaurants%20in%20sf'>
		// 									<div class='animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 										<div class='md:hidden'>
		// 											<button
		// 												type='button'
		// 												class='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														healthy restaurants in sf
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 										<div class='hidden md:block'>
		// 											<button
		// 												type='button'
		// 												class='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														healthy restaurants in sf
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 									</div>
		// 								</a>
		// 								<a href='/search?q=d%2Fdx%20x%5E2%20y%5E4%2C%20d%2Fdy%20x%5E2%20y%5E4&amp;focus=wolfram'>
		// 									<div class='animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 										<div class='md:hidden'>
		// 											<button
		// 												type='button'
		// 												class='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														d/dx x^2 y^4, d/dy x^2 y^4
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 										<div class='hidden md:block'>
		// 											<button
		// 												type='button'
		// 												class='md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6'>
		// 												<div class='flex items-center leading-none justify-center gap-xs'>
		// 													<div class='text-align-center relative'>
		// 														d/dx x^2 y^4, d/dy x^2 y^4
		// 													</div>
		// 												</div>
		// 											</button>
		// 										</div>
		// 									</div>
		// 								</a>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div class='hidden md:block pb-md'>
		// 				<div>
		// 					<div class='flex md:justify-center flex-wrap gap-x-md gap-y-sm px-sm md:px-0 pb-2xl md:pb-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
		// 						<a href='/pro'>
		// 							<div class='hover:underline super font-sans text-sm text-super dark:text-superDark selection:bg-superDuper selection:text-textMain'>
		// 								Try Pro
		// 							</div>
		// 						</a>
		// 						<a href='/about'>
		// 							<div class='hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
		// 								Careers
		// 							</div>
		// 						</a>
		// 						<a
		// 							target='_blank'
		// 							href='https://perplexity-ai.notion.site/Perplexity-AI-FAQs-0a9141bdd1b94c76b955e892f73451ff?pvs=4'>
		// 							<div class='hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
		// 								FAQ
		// 							</div>
		// 						</a>
		// 						<a target='_blank' href='https://labs.perplexity.ai'>
		// 							<div class='hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
		// 								Labs
		// 							</div>
		// 						</a>
		// 						<a href='/blog'>
		// 							<div class='hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
		// 								Blog
		// 							</div>
		// 						</a>
		// 						<a href='/privacy'>
		// 							<div class='hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
		// 								Privacy
		// 							</div>
		// 						</a>
		// 						<a href='/tos'>
		// 							<div class='hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain'>
		// 								Terms
		// 							</div>
		// 						</a>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div class='md:hidden left-0 fixed z-20 bottom-0 right-0 px-sm pb-sm border-t border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
		// 			<div class='flex items-center gap-x-sm pt-sm pb-md'>
		// 				<button
		// 					type='button'
		// 					class='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8'>
		// 					<div class='flex items-center leading-none justify-center gap-xs'>
		// 						<svg
		// 							aria-hidden='true'
		// 							focusable='false'
		// 							data-prefix='fasr'
		// 							data-icon='right-to-bracket'
		// 							class='svg-inline--fa fa-right-to-bracket fa-fw fa-1x '
		// 							role='img'
		// 							xmlns='http://www.w3.org/2000/svg'
		// 							viewBox='0 0 512 512'>
		// 							<path
		// 								fill='currentColor'
		// 								d='M128 224l48 0 0-48 0-28.1L284.1 256 176 364.1l0-28.1 0-48-48 0-80 0 0-64 80 0zm190.1-1.9L192 96l-16 0-48 0 0 32 0 16 0 32-48 0-32 0L0 176l0 48 0 64 0 48 48 0 32 0 48 0 0 32 0 16 0 32 48 0 16 0L318.1 289.9 352 256l-33.9-33.9zM344 432l-24 0 0 48 24 0 144 0 24 0 0-24 0-400 0-24-24 0L344 32l-24 0 0 48 24 0 120 0 0 352-120 0z'></path>
		// 						</svg>
		// 						<div class='text-align-center relative'>Login</div>
		// 					</div>
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<div className='content-container'>
			<div className='content-heading'>
				<span>Where knowledge begins</span>
			</div>
			<div className='content-input'>
				<textarea className="content-textarea" placeholder='Ask anything...' height="50" width="670"></textarea>
				<div>
					<button
						type='button'>
						<div>
							<ReactSVG src={focusIcon}/>
							<div>Focus</div>
						</div>
					</button>
				</div>
			</div>
			<div className='content-tags'></div>
			<div className='content-links'></div>
		</div>
	);
}

export default Content;
