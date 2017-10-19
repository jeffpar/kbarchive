---
layout: page
title: "Q132072: FLIGHT SIMULATOR 5.1: Contents of README1.TXT"
permalink: /kb/132/Q132072/
---

## Q132072: FLIGHT SIMULATOR 5.1: Contents of README1.TXT

	Article: Q132072
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kb3rdparty kbgraphic kbmm kbreadme kbref
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article is the contents of the Microsoft Flight Simulator version
	5.1 for MS-DOS README1.TXT file located in the root directory of the Flight
	Simulator 5.1 CD-ROM.
	
	MORE INFORMATION
	================
	
	****************************************
	MICROSOFT FLIGHT SIMULATOR  Version 5.1
	
	    R E L E A S E    N O T E S
	
	****************************************
	
	This document contains important information about Microsoft
	Flight Simulator. For more details on how to fly, read the
	Microsoft Flight Simulator Pilot's Handbook.
	
	World Airports:
	FSSYSTEM System Startup (Boot) Disk:
	Hard Disk Space Requirement:
	Joystick Support:
	Memory Configuration:
	Navigation Information:
	Running Flight Simulator under Microsoft Windows:
	Running Flight Simulator under OS/2 2.1:
	Scenery Add-Ons:
	Scenery Library:
	Sound Support:
	SVGA Support:
	
	Memory Configuration
	
	To run Microsoft Flight Simulator 5.1, you need a computer
	with at least 500 kilobytes (K) of free conventional memory.
	If your computer does not have an expanded memory manager
	(EMM), you need 560K of free conventional memory. Flight
	Simulator displays a message if your computer has
	insufficient conventional memory, and you cannot run the
	program.  Please refer to the "Troubleshooting Guide for
	Setup" in Chapter 24 of the Flight Simulator Pilot's
	Handbook for tips on optimizing your system performance.
	
	You can significantly enhance Flight Simulator's performance
	if you configure your computer for expanded memory.  Please
	refer to the "Troubleshooting Guide for Setup" in Chapter 24
	of the Flight Simulator Pilot's Handbook or to your MS-DOS
	manual for instructions on how to configure your computer
	for expanded memory.
	
	If you have no extended or expanded memory, or encounter out
	of memory errors when running Flight Simulator, you will get
	better performance if you turn off the sound option.  To do
	this, choose Preferences from the Options menu, and then
	choose the Sound button. In the Sound Preferences dialog
	box, choose No Sound Device from the Sound Board list.  This
	will save additional conventional memory and allow more
	features to run.
	
	If your machine has only 4 megabytes (MB) of memory, Flight
	Simulator will run better if you use the RAM memory
	parameter (see MS-DOS help on EMM386.EXE) with no EMS
	limiter syntax used in the emm386 line in CONFIG.SYS for MS-
	DOS version 6.0 or later. If you are running MS-DOS version
	5.0, you will have better memory and system performance if
	you upgrade to MS-DOS version 6.0 or later.
	
	For example, the RAM memory parameter is as follows:
	
	 DEVICE=C:\DOS\EMM386.EXE RAM H=255 D=64
	
	Your actual line may have slightly different arguments, but
	the important thing is the presence of the RAM argument.
	H=255 is the number of EMS handles, and D=64 is the number
	of direct memory access buffers.  The values shown are best
	for Flight Simulator.
	
	Hard Disk Space Requirement
	
	If your hard drive has 16K clusters (16384 bytes/cluster),
	the save load time disk space requirement is 22 MB. If your
	hard drive has 8K clusters (8192/cluster), the hard disk
	space requirement is 15 MB.  The Setup program checks for 20
	MB available on the hard disk.
	
	Running Flight Simulator under Microsoft Windows
	
	To run Flight Simulator under Windows, you must configure
	your system for expanded memory.  Running Flight Simulator
	under Windows with extended memory may cause memory errors.
	In such a case, Windows terminates your Flight Simulator
	session.  Please refer to the "Troubleshooting Guide for
	Setup" in Chapter 24 of the Flight Simulator Pilot's
	Handbook or to your MS-DOS manual for instructions on how to
	configure your computer for expanded memory.
	
	Loading Sound into Conventional Memory:
	
	Flight Simulator loads sound files into XMS memory for
	storage and quick playback.  Running under Windows can cause
	this memory to be moved, resulting in noisy sounds or system
	crashes.  Windows informs you of any system problems with an
	error dialog.  If this occurs, choose Preferences from the
	Options menu, and then choose the Sound button.  In the
	Sound Preferences dialog box, change the Use XMS Memory
	option to No.  When you select this option, Flight Simulator
	uses additional conventional memory but resolves sound
	playback problems that would occur using XMS memory.
	
	If the aircraft in Flight Simulator are not flying smoothly
	under Windows, you should run Flight Simulator directly from
	MS-DOS.  This will result in a higher display rate and
	smoother flying aircraft.
	
	If you cannot get Flight Simulator to run properly under
	Windows, you should run Flight Simulator in MS-DOS mode.
	Refer to Windows online Help for information on running in
	MS-DOS mode.
	
	You can use FSSYSTEM to build a system startup disk to
	configure your system so that it runs Flight Simulator
	properly.  If you are running Windows with protected mode
	drivers for your CD-ROM, FSSYSTEM will not be able to load
	these drivers for you. You will need to add these drivers to
	the configuration files on the system startup disk created
	by FSSYSTEM.  Refer to your CD-ROM or computer manual for
	information on setting up your CD-ROM drivers.
	
	Running Flight Simulator Under OS/2 2.1
	
	For best system performance, make sure that the following
	settings are selected for your MS-DOS session:
	
	   HW_TIMER = ON
	   VERTICAL_RETRACE_EMULATION = OFF
	
	If you are running SVGA graphics, switching back to the
	desktop may cause screen refresh problems.  Press CTRL+ESC,
	and then press ENTER to return to Flight Simulator.
	
	To run Flight Simulator in a window, select VGA 320x200 256
	color graphics mode.  Press ALT+HOME and you can toggle
	between full screen and a window.
	
	Joystick Support
	
	You can operate thrust reversers with the joystick as
	follows. Pull the joystick throttle all the way back, then
	press F2 or KEYPAD 3 a few times to engage the thrust
	reversers. Turn off the thrust reversers by pressing F1 (cut
	throttle) or giving more than 1/8 forward thrust with
	joystick (nudge the joystick throttle forward a bit).
	
	A Colorado Spectrum Notebook Gameport driver is included for
	use with the appropriate joystick. To use this driver, type
	the following line in your FS5.INI file:
	
	   DEVICE=CS_STIK.FSO
	
	NOTE:  The gameport driver (NG.EXE from Colorado Spectrum)
	must be installed for this to work.  For information on
	installing gameport software, see documentation from the
	manufacturer.
	
	If your joystick has throttle control, then it is best to
	calibrate the system with the throttle slightly off the full
	closed stop.
	
	Joystick Drivers
	
	The following drivers exist:
	
	   STICK2.FSO
	   CS_STIK.FSO
	
	When no other joystick driver is specified in the DEVICE=
	line in the FS5.INI file, the CH products driver is the
	default (CH Flightstick Pro works best this way).
	
	STICK2.FSO supports a generic two-button joystick.
	CS_STIK.FSO is discussed in the earlier paragraph on the
	Colorado Spectrum Notebook Gameport driver.
	
	SVGA Support
	
	In order for the SVGA mode to function on an Orchid
	Fahrenheit (S3) or Thunder & Lightning (Cirrus) card, the
	monitor selection must be correct.  Improper monitor
	selection may cause the display to sync improperly resulting
	in an unstable picture, or a screen that looks "squashed."
	For more information, refer to the documentation for your
	specific video board.
	
	VESA 1.2 Compatibility
	
	Some VESA 1.2 drivers are not fully implemented.  Function 7
	and modes 100h or 101h must be implemented for Flight
	Simulator to work in the SVGA mode.  Refer to the
	documentation that came with your video board for more
	information.  If Flight Simulator does not display properly
	when you select SVGA using a VESA driver, run Flight
	Simulator Setup again from the Flight Simulator directory
	and select the VGA display option. Contact your video board
	manufacturer for an updated VESA 1.2 compatible driver.
	
	SVGA 320x200 Mode
	
	Although this mode may run 10% to 20% faster than the VGA
	320x200 mode, some graphics cards do not support this mode.
	If your screen flashes or does not display at all, select
	VGA 320x200 mode.  VESA support on SVGA  320x200 is
	equivalent to selecting VGA 320x200.
	
	ATI Mach 64 Cards
	
	Older ATI Mach 64 cards may need a BIOS upgrade.  BIOS
	versions .15, dated 1994/6/10 or newer is required.
	
	Sound Support
	
	Using Flight Simulator under Microsoft Windows NT, Windows
	95, or Windows 3.X, PC Speaker sound causes problems.  Avoid
	these problems by choosing No Sound Device from the Sound
	Board list when you install Flight Simulator under Windows.
	
	Running Microsoft Flight Simulator under DR DOS. PC Speaker
	cockpit sounds cause problems under DR DOS.  Avoid these
	problems by choosing No Sound Device from the Sound Board
	list when you install Flight Simulator.  If you want to play
	sounds other than cockpit sounds (plane crashes and wheel
	screeches), choose Preferences from the Options menu, and
	then choose the Sound button. In the Sound Preferences
	dialog box, turn off the Cockpit Sounds check box. Then (and
	only then) choose PC Speaker from the Sound Board list to
	turn the sound back on.
	
	Media Vision - Pro Audio Spectrum Sound Cards
	
	You must correctly install the Media Vision driver
	(MVSOUND.SYS) before setting Flight Simulator 5.1 to run
	with this sound card. Please refer to the Media Vision
	documentation for instructions.  If the driver is not
	installed correctly, you will get an error message. If you
	get poor sound support from the Media Vision - Pro Audio
	Spectrum sound card, you may need to disable DMA sharing
	with your card.  Please refer to the documentation that came
	with the card for instructions.
	
	To run Pro Audio Spectrum/Studio sound cards as Sound
	Blaster compatible you must have a SET BLASTER line in your
	AUTOEXEC.BAT file. For example:
	
	   SET BLASTER=A220 I7 D1 H5 P330 T6
	
	Additionally, you need the appropriate Media Vision driver
	installed in the CONFIG.SYS file. For example, in the sound
	card line of your CONFIG.SYS, you should see MVSOUND.SYS for
	the Pro Audio Spectrum/Studio or PA3D.SYS for the Media
	Vision Premium 3D sound card.  Flight Simulator only
	recognizes the MVSOUND.SYS line. If you have another Media
	Vision sound card, select Media Vision - Pro Audio Spectrum
	sound driver during Flight Simulator Setup or choose
	Preferences from the Options menu, and then choose the Sound
	button.  In the Sound Preferences dialog box, change the
	sound board accordingly.
	
	Gravis Ultrasound Sound Card
	
	The Gravis Ultrasound driver uses the SBOS or MEGAEM Sound
	Blaster emulation.  Make sure that you have one of these
	drivers loaded before running Flight Simulator.
	
	Loading Sound into XMS Memory
	
	Flight Simulator loads sound files into XMS memory for
	storage and quick playback.  Certain memory configurations
	can cause this memory to be moved, resulting in noisy sounds
	or system crashes.  If this occurs, choose Preferences from
	the Options menu, and then choose the Sound button. In the
	Sound Preferences dialog box, change the Use XMS Memory
	option to No. When you select this option, Flight Simulator
	uses additional conventional memory but resolves sound
	playback problems that would occur using XMS memory.
	
	Navigation Information
	
	The VOR frequency for Martha's Vineyard is 114.5, not 108.2
	as shown on the New York and Boston Area chart.
	
	The VOR frequency for Deer Park is 117.7, not 111.2 as shown
	on the New York and Boston Area chart.
	
	FSSYSTEM System Startup (Boot) Disk
	
	If you created a system startup disk and transferred it to
	your hard disk, temporary CONFIG.SYS and AUTOEXEC.BAT files
	are switched in when FS5.1 begins running.  Your system's
	original CONFIG.SYS and AUTOEXEC.BAT are temporarily saved
	in CONFIG.FSS and AUTOEXEC.FSS.  Under normal conditions you
	should never have to use these files.  If something goes
	wrong and the current CONFIG.SYS and AUTOEXEC.BAT are not
	the correct files, copy these .FSS files back to your
	CONFIG.SYS and AUTOEXEC.BAT files.  Then restart your
	computer.
	
	Do NOT create a system startup (boot) disk if you are
	running under the Win NT operating system.
	
	Scenery Add-Ons
	
	Older scenery areas, such as New York, San Francisco, and
	Paris should be installed in Flight Simulator SCENERY directory.
	
	For example, If Flight Simulator version 5.1 is installed in
	C:\FLTSIM5, then these scenery areas should be installed
	into the C:\FLTSIM5\SCENERY subdirectory. Running Setup for
	these scenery products installs everything correctly.
	Ignore the message that states Disabling Scenery not Found.
	
	Before using the Japan, Caribbean, and Europe 1 scenery
	products with FS5.1 CD-ROM, read the README.DOC file in the
	ADDONS directory of the CD-ROM.
	
	Before running the performance booster(s) available with
	scenery add-ons released on CD-ROM prior to 5/01/95, follow
	these instructions. First, copy the booster from your
	FLTSIM5 directory to the cache directory of the CD-ROM
	product.  For example, if you are running Europe 1 from the
	CD-ROM, then copy the booster file from C:\FLTSIM5 to
	C:\FLTSIM5\EUROPE1.
	
	This will overwrite the booster file shipped with Europe1.
	This change affects Las Vegas and Europe 1 only.
	
	If you are seeing scenery conflicts while flying in a
	scenery add-on, turn off the FS5.1 performance booster that
	corresponds to this area.  For example, while flying in the
	Japan scenery area, turn off the FS5.1 Asia booster.
	
	If you want to go to an airport in your add-on scenery
	product that exists on the Flight Simulator CD-ROM as well,
	choose Airports from the World menu, then chose the scenery
	area you want and choose the airport you want. Make sure you
	choose the airport from the scenery add-on and not the FS5.1
	CD-ROM. For example, from the list of airports, choose JAPAN
	- Japan Add-on (instead of Asia) to go to an airport in the
	Japan scenery add-on.
	
	Scenery Library
	
	Metro areas should always be the highest layer priority
	value (the lower the layer number, the higher the priority
	value) in the regional scenery type.  For example, if there
	are two regional scenery areas active then the FS5 Metro
	area should be at the top of the regional areas (layer value
	of 1).
	
	Scenery areas and performance boosters must include an
	appropriate SCENERY and TEXTURE directory under the main
	scenery directory.  For example, the JAPAN scenery directory
	must have a SCENERY subdirectory containing the appropriate
	scenery files, and a TEXTURE subdirectory containing the
	appropriate texture files.  If these directories do not
	exist, Flight Simulator will report a DATABASE ERROR when
	you are flying though these scenery areas.
	
	World Airports
	
	In the CD-ROM release, a document file exists that outlines
	all new airports, facilities, navaids, and fuel boxes unique
	to the FS 5.1 CD-ROM version.  This file is called:
	
	   AIRPORTS.DOC.
	
	The user will note the level of detail of the additional
	airports is not 100%.  For example, taxiways may not exist
	or there may be an absence of runway extensions. Fuel boxes
	are available at most new airports to allow for around-the-
	world flight.
	
	Some airports have associated NDBs on their ILS runways.
	The active NDB frequency is the closest station.  There will
	be a limited delay (hysteresis) in station switching as your
	closest station changes.
	
	Airports listed in the Airport dialog box are not
	necessarily grouped in the booster of the same name.  If you
	go to a particular airport, and it is not there, try turning
	on neighboring boosters.  For example, the San Jose airport
	in Costa Rica, is listed in North America but is within the
	South American booster.  Therefore, to go to the Costa Rican
	airport, you must have the South America booster active in
	the Scenery Library.
	
	Additional query words: 5.10 kbhowto flightsim fltsim dos d_fltsim
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim510DOS kbSimSearch
	Version           : MS-DOS:5.1
	Issue type        : kbinfo
	
	=============================================================================
	
