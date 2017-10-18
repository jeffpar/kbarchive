---
layout: page
title: "Q114233: Flight Simulator 5.0a README.DOC Contents"
permalink: kb/114/Q114233/
---

## Q114233: Flight Simulator 5.0a README.DOC Contents

	Article: Q114233
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0a 
	-------------------------------------------------------------------------------
	
	The following is the contents of the README.DOC located on Flight
	Simulator 5.00a Disk 1:
	
	SUMMARY
	=======
	
	********************************************************************
	
	              MICROSOFT FLIGHT SIMULATOR  Version 5.0a
	                     R E L E A S E    N O T E S
	
	********************************************************************
	
	This document contains important information about Microsoft Flight
	Simulator. For more details on how to fly, read the Microsoft Flight
	Simulator  Pilot's Handbook.
	
	Memory Configuration:
	* To run Microsoft Flight Simulator 5.0, you need a computer with at
	least 530K of free conventional memory. If your computer does not
	have an expanded memory manager, you need 560K of free conventional
	memory. Flight Simulator informs you if your computer has
	insufficient conventional memory and you cannot run the program.
	Please refer to the troubleshooting section on the inside back cover
	of the Flight Simulator Pilot's Handbook for tips on optimizing your
	system performance.
	
	* You can significantly enhance Flight Simulator's performance if you
	configure your computer for expanded memory. Please refer to the
	troubleshooting section on the inside back cover of the Flight
	Simulator Pilot's Handbook or to your MS-DOS manual for instructions
	on how to configure your computer for expanded memory.
	
	* If you have no extended or expanded memory, or encounter out of
	memory errors when running Flight Simulator, you can get better
	performance if you turn off the sound option.  To do this, choose
	Preferences from the Options menu, and then choose the Sound button.
	In the Sound Preferences dialog box, choose No Sound Device from the
	Sound Board list. When you turn off the sound option in the
	Preferences dialog box, you can save additional conventional memory
	and run more features.
	
	Running Flight Simulator under Microsoft Windows:
	* To run Flight Simulator under Windows, you must configure your
	system for expanded memory.  If you run Flight Simulator under
	Windows with extended memory it can cause memory errors and Windows
	will terminate your Flight Simulator session.  Please refer to the
	troubleshooting section on the inside back cover of the Flight
	Simulator Pilot's Handbook or to your MS-DOS manual for instructions
	on how to configure your computer for expanded memory.
	
	* Loading Sound into Conventional Memory.
	Flight Simulator loads sound files into XMS memory for storage and
	quick playback.  Running under Windows can cause this memory to be
	moved, resulting in noisy sounds or system crashes.  Windows informs
	you of any system problems.  If this occurs, choose Preferences from
	the Options menu, and then choose the Sound button.  In the Sound
	Preferences dialog box, change the Use XMS Memory option to No.  When
	you choose this option, Flight Simulator uses additional conventional
	memory but resolves sound playback problems using XMS memory.
	
	* If the aircraft in Flight Simulator are not flying smoothly under
	Windows, run Flight Simulator directly from MS-DOS for a higher
	display rate and smoother flying.
	
	Running Flight Simulator under OS/2 2.1:
	* For best system performance, make sure that you have the following
	settings for your MS-DOS session:
	
	 HW_TIMER = ON
	 VERTICAL_RETRACE_EMULATION = OFF
	
	* If you are running SVGA graphics, switching back to the desktop may
	cause the screen not to refresh.  Press CTRL+ESC, and then press
	ENTER to return to Flight Simulator.
	
	* To run Flight Simulator in a window, select VGA 320x200 256 color
	graphics mode.  Press ALT+HOME to switch between full screen and a
	window.
	
	Joystick Support:
	* You cannot engage thrust reversers on the Learjet with the
	joystick. You must press F2 to decrease your thrust and engage the
	thrust reversers.
	
	* A Colorado Spectrum Notebook Gameport driver is included for use
	with the joystick.  You must add the line DEVICE=CS_STIK.FSO to your
	FS5.INI file to use it.  NOTE:  You must also install the gameport
	driver (NG.EXE from Colorado Spectrum) for your joystick to work.
	For more information on installing the gameport software, see the
	manufacturer's instructions.
	
	SVGA Support:
	* Orchid Fahrenheit (S3) and Thunder & Lightning (Cirrus) cards. The
	monitor selection must be correct in order for SVGA mode to function
	on these cards.  Improper monitor selection can cause the display to
	sync improperly resulting in an unstable picture, or a screen that
	looks compressed.  For more information, refer to the documentation
	included with your video board.
	
	* VESA 1.2 Compatibility
	 Some VESA 1.2 drivers are not fully implemented.  Function 7 and
	modes 100h or 101h must be implemented in order for Flight Simulator
	to work in SVGA mode. For more information, refer to the
	documentation included with your video board. If Flight Simulator
	does not display properly when you select SVGA using a VESA driver,
	run Flight Simulator Setup again from the Flight Simulator directory
	and select the VGA display option. Contact your video board
	manufacturer for an updated VESA 1.2 compatible driver.
	
	* VGA 320x200 Mode
	 Flight Simulator 5.0a supports certain SVGA cards in the 320x200
	mode. You can choose these cards from the list of video board
	manufacturers when you select VGA 320x200 mode.  Although selecting a
	specific manufacturer in this mode may increase your frame rate to 10
	to 20 percent faster than the standard VGA 320x200 option, some
	graphics cards may not work properly. If your screen flashes or does
	not display at all, choose standard VGA when you select the VGA
	320x200 mode.  VESA support on VGA 320x200 is equivalent to standard
	VGA.
	
	Sound Support:
	* Using Flight Simulator under Microsoft Windows NT.
	 PC Speaker sound causes problems under Windows NT.  Avoid these
	problems by choosing No Sound Device from the Sound Board list when
	you install Flight Simulator.
	
	* Running Microsoft Flight Simulator under DR DOS.
	 PC Speaker cockpit sounds cause problems under DR DOS.  Avoid these
	problems by choosing No Sound Device from the Sound Board list when
	you install Flight Simulator.  If you want to play sounds other than
	cockpit sounds (plane crashes and wheel screeches), choose
	Preferences from the Options menu, and then choose the Sound button.
	In the Sound Preferences dialog box, turn off the Cockpit Sounds
	check box. Then (and only then) choose PC Speaker from the Sound
	Board list to turn the sound back on.
	
	* The Sound Blaster Options
	 The Sound Blaster/Sound Blaster Pro driver is designed for optimal
	performance on any Sound Blaster or compatible sound card. If you
	experience any problems with this driver, choose the Sound Blaster
	Universal driver from the Sound Board list.  Make sure that the Sound
	Blaster software is properly installed on your system before
	selecting either of these drivers.  Without the proper Sound Blaster
	software installation, Flight Simulator may crash when you try to
	access the sound card.  For proper software installation
	instructions, refer to the documentation included with your sound
	card.
	
	* Media Vision Pro Audio Spectrum Sound Cards.
	 It is very important to correctly install Media Vision's driver
	(MVSOUND.SYS) before running Flight Simulator 5.0 with this sound
	card. If the driver is not installed correctly, your system will
	crash. or more information on installation, refer to the
	documentation included with your sound card.  If you get poor sound
	support from the Media Vision Pro Audio Spectrum Sound Card, you may
	need to disable DMA sharing with your card.  Again, for more
	information, refer to the documentation included with your sound
	card.  You should not set the Pro Audio Spectrum card to INT 1 or
	your system may crash.
	
	* Gravis Ultrasound Sound Card.
	 The Gravis Ultrasound driver uses the SBOS or MEGAEM Sound Blaster
	emulation.  Make sure that you have one of these drivers loaded
	before running Flight Simulator.
	
	* Loading Sound into XMS Memory.
	 Flight Simulator loads sound files into XMS memory for storage and
	quick playback. Certain memory configurations can cause this memory
	to be moved, resulting in noisy sounds or system crashes.  If this
	occurs, choose Preferences from the Options menu, and then choose the
	Sound button. In the Sound Preferences dialog box, change the Use XMS
	Memory option to No. When you select this option, Flight Simulator
	uses additional conventional memory but resolves sound playback
	problems using XMS memory.
	
	Undocumented Features:
	* ADF Radio Improvements.
	 The ADF can be converted to a 5-digit ADF, tunable in 100 Hz
	increments. Choose Preferences from the Options menu, and then choose
	the Instrument button. In the Instrument Preferences dialog box,
	choose the 100 Hz ADF Frequency Adjustability option. NDBs on .1
	increments are common in Europe.
	
	* Autopilot Improvement: One Keystroke Altitude Hold.
	 Press CTRL+Z (instead of just Z) to activate the autopilot, turn on
	altitude hold, and set the altitude to your current flight altitude.
	All other autopilot settings are unaffected.
	
	* EFIS VOR Tracking Improvement.
	 Tracking altitude is now MSL rather than AGL.  This eliminates the
	roller coaster effects as ground altitude changes under you, and lets
	you find the path at the altimeter altitude you specified for the
	EFIS altitude.
	
	Additional query words: 5.00 5.00a flightsim fltsim dos FS5 readme read
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbSimSearch
	Version           : MS-DOS:5.0a
	Issue type        : kbinfo
	
	=============================================================================
	
