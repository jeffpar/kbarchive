---
layout: page
title: "Q299745: TrainSim: Err &quot;Incompatible sound card&quot; or Sounds Are Not Played"
permalink: /kb/299/Q299745/
---

## Q299745: TrainSim: Err &quot;Incompatible sound card&quot; or Sounds Are Not Played

	Article: Q299745
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 22-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Train Simulator, one of the following may happen:
	
	- Sounds may not be played.
	- Sounds may be played quietly or too fast.
	- Sounds may be distorted.
	
	Or you may receive the following error message:
	
	  Train Simulator has detected a sound card that may be incompatible.
	
	  To ensure compatibility, please make sure that you have the latest drivers for
	  your sound card, available from your sound card manufacturer's Web site. You
	  may also want to turn down hardware acceleration for your sound card in the
	  Windows Control Panel.
	
	  Would you like to continue?
	
	  Click Yes, and the game will continue to load.
	
	  Click No, and you are returned back to the launcher.
	
	Or you may experience a blue screen, and the system stops responding (hangs).
	
	Or you may see a blue screen with one of the following error message:
	
	  Fatal Exception 0e has occurred at 0028:c17f2523 in VXD au300wav.
	
	  -or-
	
	  Fatal Exception 0E has occurred at 0028:c16cbc73 in VxD ASP4WAVE
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions is true:
	
	- The sound card does not have current drivers installed.
	
	- A sound card based on the Vortex Aureal chip set is installed in your
	  computer.
	
	- The DirectX Hardware Sound Acceleration Level is set too high.
	
	- The sound card is not compatible with Train Simulator.
	
	RESOLUTION
	==========
	
	Method 1: Update Sound Card Drivers
	-----------------------------------
	
	To resolve this issue, install the latest drivers. You can obtain updated drivers
	from either your computer manufacturer or your sound card manufacturer. For
	information about how to contact either you computer or sound card manufacturer,
	click the appropriate article number in the following list to view the article
	in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Determine the Model of Your Sound Card:
	
	To identify the manufacturer and model of your video adapter, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. If you have a Windows 95- or Windows 98-based computer, click the Device
	  Manager tab.
	
	  If you are using a Windows 2000- or Windows XP-based computer, click the
	  Hardware tab, and then click Device Manager.
	
	4. Expand the "Sound, Video and Game Controllers Adapters" folder.
	
	5. Under the "Sound, Video and Game Controllers" folder, note the manufacturer
	  and model of your sound card, and then click OK.
	
	Determine The Version Number of Sound Driver:
	
	To determine the version number of the sound driver installed on your computer,
	use the DirectX Diagnostic Tool. to do this:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Sound tab.
	
	4. Under Drivers, note the version number on the Version line.
	
	5. When you have noted the version numbers for all of the sound card` installed
	  on your computer, click Exit.
	
	For additional information about the DirectX Diagnostic Tool, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q190900 DirectX: Description of the DirectX Diagnostic Tool
	
	After you update your drivers, use the Microsoft Train Simulator Troubleshooter
	to reprofile your Soundcard and drivers. For information about how to do this,
	see "Method 2".
	
	Method 2: Reprofile The Sound Card Drivers
	------------------------------------------
	
	1. Quit Train Simulator.
	
	2. Click Start, point to Programs, point to Microsoft Games, point to Train
	  Simulator, and then click Train Simulator Troubleshooter.
	
	3. Click Change Video Driver.
	
	4. Quit Train Simulator Troubleshooter.
	
	5. Start Train Simulator.
	
	NOTE: When you click Change Video Driver, your computer reprofiles all hardware
	including sound card drivers.
	
	For additional information about Train Simulator Troubleshooter, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q299760 Train Simulator: How to Use the Troubleshooter
	
	If the issue continues to occur, to workaround this issue, reduce the sound
	playback quality.
	
	Method 3: Reduce the Sound Playback Quality
	-------------------------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Sound tab.
	
	4. Under DirectX Features, move the "Hardware Sound Acceleration Level slider"
	  all the way to the left (the "No acceleration" setting).
	
	5. Click Exit.
	
	6. Start Train Simulator.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	The following sound cards use the Aureal chipset: Vortex 1 chipset cards:
	
	  Aureal Vortex 1 PCI (OEM)
	  Aztech PCI 338 A3D
	  DCS S805
	  Diamond Sonic Impact S90
	  Gallant Audiostorm A3D
	  Genius Soundmaker 64
	  Hi-Val A3D PCI 338
	  Intresource TeraSound A3D PCI
	  I/O Magic MagicWave PCI A3D
	  Mediatek Sound Image Symphonic PCI-1
	  Multiwave AudioWave PCI DigitalSound
	  Orchid NuSound PCI
	  Samtek Rock'n98 A3D
	  Shark Predator PCI
	  Skywell Magic Sound
	  Techworks Power Vortex 1
	  Terratec Xlerate PCI
	  Turtle Beach Montego A3Dxstream
	  Xitel Storm VX
	
	Vortex 2 chipset cards:
	
	  Aureal Vortex2 PCI (OEM)
	  Aureal Vortex2 SQ2500
	  Aureal Vortex2 SQ3500 Turbo
	  Aureal Vortex2 SuperQuad Digital PCI (OEM)
	  Absolute Multimedia Outrageous 3D Sound
	  Diamond Monster Sound MX300
	  Digital Research Thunderstorm Vortex2
	  Hi-Val PCI 576 A3D
	  I/O Magic MagicWaveV2
	  Techworks Power Vortex 2
	  Terratec XLerate Pro
	  Turtle Beach Montego II
	  Turtle Beach Montego II Home Studio
	  Turtle Beach Montego II Plus
	  Turtle Beach Montego II Quadzilla
	  Videologic SonicVortex2
	  Xitel Storm Platinum
	
	Vortex Advantage chipset based sound cards:
	
	  Aureal Vortex SQ1500
	  Absolute Multimedia Outrageous 3D Sound Lite
	  Digital Research Thunderstorm Vortex Advantage
	  I/O Magic MagicWaveV1
	
	These motherboards shipped with a Vortex Advantage chipset integrated on them:
	
	  Abit WX6
	  Gigabyte GA-6CX
	  Gigabyte GA-6CXC
	  Soyo 6IWM
	  Soyo 6IWM/L
	  Soyo 7IWA
	  Soyo 7IWA-F
	
	Additional query words: msgame trainsim
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbTrainSim kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
