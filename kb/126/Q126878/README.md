---
layout: page
title: "Q126878: Baseball 1995: BS95READ.TXT Contents (Part 2 of 3)"
permalink: kb/126/Q126878/
---

## Q126878: Baseball 1995: BS95READ.TXT Contents (Part 2 of 3)

	Article: Q126878
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete Baseball Guide for Windows, 1995 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is part 2 of the BS95READ.TXT included with Microsoft Complete
	Baseball for Windows, 1995 edition.
	
	FONT DISPLAY PROBLEMS
	---------------------
	
	Complete Baseball uses two TrueType fonts for its display.  If you
	receive a message stating that one of the fonts is unavailable, make
	sure that TrueType fonts are enabled on your computer.
	
	1.  From the Windows Control Panel, select Fonts and then click the
	TrueType button.
	
	2.  In the True Type dialog, make sure the Enable True Type Fonts
	check box is selected (an X appears in the check box when it's
	selected).
	
	3.  If the Enable True Type Fonts check box is selected, in the Fonts
	dialog, click Help for more information on adding fonts.
	
	The fonts you need are installed with Windows and can be found in the
	Windows system directory.  Make sure to add all the Arial and Times
	New Roman fonts to your computer.
	
	------------------
	LARGE FONT DRIVERS
	------------------
	
	If you are using a Large Font driver, some statistical columns in the
	Team Rosters section may appear clipped and some statistics in
	Baseball Daily may appear clipped or overlapped.  Switching to the
	Small Font version of the driver will fix this problem.  For more
	information on installing or changing video drivers, consult your
	Windows documentation.
	
	------------------
	ATI/MACH32 DRIVERS
	------------------
	
	If you are using an ATI video card and video driver, and you're
	having display problems, make sure you reset the RLEFIX setting in
	Complete Baseball's MSSPORTS.INI file as described above.
	
	Also, for Complete Baseball to run on the ATI driver, the "256 color
	palette" control in the "Advanced features" of the "ATI Control
	Panel" needs to be set to ON.  See your video card documentation for
	more information.
	
	If you are using a mach32 video card and driver, image quality will
	be lost if Crystal fonts are enabled. Make sure that Crystal fonts
	are disabled.
	
	1.  Open the mach32 Utilities program group.
	
	2.  Open the Mach FlexDesk Control Panel.
	
	3.  Click on the Crystal button to get to FlexDesk Crystal Tune.
	
	4.  Choose "off" under the "Crystal" options and click on Ok to save
	this setting.
	
	Image quality will also be lost if you are using a Super VGA video
	driver with a mach32 video card. Run Windows Setup (described above)
	to check your video driver and switch to the mach32 driver for better
	image quality.
	
	If you continue to have problems, try contacting ATI Technologies to
	see if they have a newer version of the driver you're using.
	
	For information about ATI video cards, contact ATI Technical Support
	at (416) 756-0711. The ATI cards and driver products referenced here
	are manufactured by ATI Technologies, Inc., a vendor independent of
	Microsoft;
	we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	--------------------
	CIRRUS LOGIC DRIVERS
	--------------------
	
	The 64k-color Cirrus Logic video driver, v1.32, that shipped with the
	Compaq ProLinea and Presario (and presumably other systems having
	these drivers) is incompatible with the VfW 1.1 drivers shipped with
	Complete Baseball, 1994. As a result, during Complete Baseball Setup,
	your system may crash when profiling your video display. This problem
	does not occur with the latest versions of the 64K-color Cirrus Logic
	video driver, v1.41 and v1.43.
	
	To upgrade your Cirrus Logic video drivers, contact Cirrus Logic
	product support at:
	
	   Cirrus Logic
	   3100 W. Warren Ave.
	   Freemont, CA  94538
	   (510) 623-8300
	
	The Cirrus Logic driver products referenced here are manufactured by
	Cirrus Logic, a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding these products' performance or
	reliability.
	
	---------------
	TOSHIBA DRIVERS
	---------------
	
	If you are using the Toshiba t44v480c.DRV video driver, Complete
	Baseball video may appear pink.  To fix this problem, go into your
	WIN.INI [drawdib] section and change 1,0,0,0 to 5,0,0,0.  The
	[drawdib] section should appear similarly to the example shown below:
	
	   [drawdib]
	   t44v480c.drv 640x480x8(5)=5,0,0,0
	
	Save your WIN.INI file and then try playing video in Complete Baseball
	again.
	
	--------------------
	64,000 COLOR DRIVERS
	--------------------
	
	If your machine has a 16 bit video card, and you are using a 64,000
	color driver, some images in Complete Baseball may not display. To
	fix this problem, switch to a 256 color driver.  For more information
	on installing video drivers, consult your Windows
	manual.
	
	=================================================================
	5. AUDIO PROBLEMS
	=================================================================
	
	Although you can install and run Complete Baseball without a sound
	card, to hear the sounds that come with the product, a sound card is
	required.  If you're sure you have a sound card, read through the
	troubleshooting information listed below, or consult the user manual
	that came with your sound card for more information.
	
	--------------------
	GENERAL SOUND ISSUES
	--------------------
	
	Audio problems can have many causes. Other applications that play
	sounds may interrupt sounds in Complete Baseball because your
	computer cannot play two sounds simultaneously.  This is generally a
	temporary clash that will resolve itself. However, a few applications
	that play sounds, such as some screen savers, may remove audio
	capability from all other Windows applications. If you suspect you
	have such an application, turn it off or do not run it while running
	Complete Baseball.
	
	-------------------------
	SOUNDS PLAY, BUT NOT WELL
	-------------------------
	
	Sound distortion is often caused by sending a higher volume or
	amplitude of sound than the speakers are able to handle.  Also, if
	the volume control on your audio card is set too high it may cause
	distortion from the amplifier on the audio card.  Sometimes speakers
	that are not of high quality will distort at a lower volume than
	better speakers.
	
	It is also possible that the software settings on your sound board
	are causing distortion.  For example, if the sound card volume or
	"WAVE file input" is set to near its maximum, it will produce
	amplification distortion, just as it would on a stereo system.  To
	find out how to change your sound board settings, check the
	documentation that came with your sound board.  This is normally done
	with either a volume dial on the back of your audio card (in the rear
	of your computer where the speakers plug in) or with a program that
	is often called a "mixer," which is usually installed in the Windows
	Control Panel of the Main program group.  Some audio cards use both
	types of controls, and they must both be adjusted.
	
	Media Vision Pro Audio Spectrum Cards
	-------------------------------------
	
	Audio clips may sound "scratchy" (that is, distorted) when played
	from the Media Vision Pro Audio Spectrum card. To correct this
	problem, change the Media Vision driver DMA setting to 7.
	
	To change the driver setting:
	
	1. Choose the Drivers icon in the Windows Control Panel.
	
	2. Select the Media Vision Wave/MIDI/Aux driver, and then choose Setup.
	
	3. Under the DMA setting, set the selection to 7.
	
	4. Choose OK, and then choose Restart Now.
	
	Audio clips should now play correctly.
	
	The Pro Audio Spectrum sound card and driver products referenced here
	are manufactured by Media Vision, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.  For more information, call
	Media Vision, Inc. Technical Support at (800) 638-2807 or (510)
	770-9905. On CompuServe, Media Vision can be reached by typing GO
	MEDIAVISION at any prompt.
	
	Additional query words: kbhowto 1995multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbCompleteBaseballSearch kbCompleteBaseball1995
	Version           : WINDOWS:
	
	=============================================================================
	
