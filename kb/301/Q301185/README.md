---
layout: page
title: "Q301185: Train Simulator: Err Msg: Train Simulator Has Encountered..."
permalink: /kb/301/Q301185/
---

## Q301185: Train Simulator: Err Msg: Train Simulator Has Encountered...

{% raw %}

	Article: Q301185
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Train Simulator, you may receive the following error
	message:
	
	  Microsoft Train Simulator has encountered a problem and needs to close. We
	  are sorry for the inconvenience.
	
	If you click Click Here, a second dialog box that contains information about the
	error opens. The information contains one of the following:
	
	  Error Signature
	  AppName: train.exe AppVer: 1.16.5.912 ModName: D3Dim700.dll
	  ModVer: 4.8.0.400 Offset: 00015eae
	
	  -or-
	
	  Error Signature
	  AppName: train.exe AppVer: 1.16.5.912 ModName: train.exe
	  ModVer: 1.16.5.912 Offset: 002b0503
	
	  -or-
	
	  Error Signature
	  AppName: train.exe AppVer: 1.16.5.912 ModName: train.exe
	  ModVer: 1.16.5.912 Offset: 002ad896
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- Your video driver is incompatible with DirectX 7.0 or later.
	
	  -or-
	
	- Your computer video card is using outdated drivers.
	
	  -or-
	
	- Your video card does not meet the minimum memory requirements.
	
	For a list of video chip sets and cards that have exhibited this behavior, see
	the "More Information" section of this article.
	
	RESOLUTION
	==========
	
	Verify that your drivers are compatible with DirectX 7.0 or later. To do this,
	follow these steps:
	
	1. On the Windows Start menu, click Run.
	
	2. In the Open box, type "dxdiag.exe" (without the quotation marks), and then
	  click OK.
	
	3. Click Save All Information.
	
	4. In the Save In box, click Desktop, and then click Save.
	
	5. Click Exit.
	
	6. Open the Dxdiag.txt file on your desktop.
	
	7. In the Display Devices section, locate the DDI Version line. The version
	  listed here must be at least 7 for the game to function correctly. The DDI
	  version is a reference to your video drivers.
	
	If your drivers are compatible with DirectX 7.0 or later, download and install an
	updated video card driver.
	
	For information about how to contact your video card, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To identify the manufacturer and model of your video adapter, follow these
	steps:
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Expand (click the plus sign next to) the Display Adapters folder.
	
	5. Note the manufacturer and model of your video adapter, and then click OK.
	
	6. Close Control Panel.
	
	After installing the updated video drivers Train Simulator must redetect the
	adaptor.
	
	1. To open the Troubleshooter, point to Start, point to Programs, point to
	  Microsoft Games, point to Train Simulator, and then click on "Train Simulator
	  Troubleshooter".
	
	2. Click "Change Video Driver".
	
	3. Click to select the new driver from the drop down list and click OK.
	
	4. Exit the troubleshooter and start Train Simulator normally.
	
	Verify that your video card has at least for 4 megabytes (MB) of memory. To
	determine how much video memory is installed on your video card, use the DirectX
	Diagnostic Tool (Dxdiag.exe). To do this, follow these steps:
	
	1. On the Windows Start menu, click Run.
	
	2. In the Open box, type "dxdiag.exe" (without the quotation marks), and then
	  click OK.
	
	3. Click the Display tab.
	
	4. In the Device section, look for the Approx. Total Memory option and note the
	  total amount of memory installed on your video adapter.
	
	5. Click Exit.
	
	If less than 4 megabytes (MB) of video memory are installed on your video
	adapter, install additional video memory on your video adapter, or install a
	video adapter with more video memory.
	
	An update has been created to resolve some compatibility problems with several
	video cards. To download and install the update, browse to the following
	Microsoft Web site:
	
	  http://www.microsoft.com/games/trainsim
	
	Install Update
	--------------
	
	An update has been created to resolve some compatibility problems with several
	video cards. To download and install the update, browse to the following
	Microsoft Web site:
	
	  http://www.microsoft.com/games/trainsim
	
	To resolve the issue with Diamond Speedstar A50 based on SIS 6326 chipset,
	install reference drivers from:
	
	  http://www.sis.com.tw/support/download/6326.htm
	
	MORE INFORMATION
	================
	
	This behavior has been reported in the following video chip sets and cards:
	
	- ATI Mach 64 Rage Pro Rev
	
	- ATI Rage IIc
	
	- ATI Rage Pro
	
	   - ALL-IN-WONDER PRO
	
	   - XPERT 98
	
	   - XPERT@WORK
	
	   - XPERT@PLAY 98
	
	   - XPERT@PLAY
	
	   - XPERT XL
	
	- ATI Rage Pro II and Rage Pro II+
	
	   - ALL-IN-WONDER
	
	   - 3D PRO TURBO
	
	   - 3D PRO TURBO PC2TV
	
	   - 3D XPRESSION+
	
	   - 3D XPRESSION+ PC2TV
	
	- ATI Rage Pro LT
	
	   - XPERT@PLAY 98
	
	   - XPERT 98
	
	   - XPERT LCD
	
	- ATI Rage Pro Turbo
	
	  The RAGE PRO TURBO is functionally identical (and should be considered
	  equivalent) to the original RAGE PRO.
	
	- ATI Rage 128
	
	   - RAGE FURY
	
	   - RAGE MAGNUM
	
	   - XPERT 99
	
	   - XPERT 128
	
	   - XPERT 2000
	
	- Cirrus Logic 546 X 1.70J
	
	- Intel i740
	
	   - Accelstar II 3d
	
	   - Acorp A-740
	
	   - AOpen Inc. PA740
	
	   - ASUSTeK Computer V2740
	
	   - A-Trend Technology Co. ATC-2740A
	
	   - Biostar Group ORION740
	
	   - Chaintech Computer i7000
	
	   - DataExpert DIT5740
	
	   - DFI AGP7410
	
	   - Diamond Multimedia StealthII G460
	
	   - Diamond Speedstar A50
	
	   - Elitegroup Computer Systems 3D Vision
	
	   - Full Yes Industrial Intel740
	
	   - Gainward Co., Ltd. CardExpert
	
	   - Gigabyte Technology GA-612
	
	   - Guillemot International Maxi Gamer2D/3D AGP
	
	   - Hercules Computer Technology Terminator 2x/i
	
	   - Intel Corporation Intel Express 3D
	
	   - Jet-Way Information J-740-3D
	
	   - Leadtek Research Inc. WinFast 3D S-900
	
	   - Lucky Star Technology i740AGP
	
	   - Machspeed Raptor 740/AGP
	
	   - NewTech ColorMax740
	
	   - Palit Daytona AGP740
	
	   - Power Color C.P. Technology Co., Ltd. C740AGP
	
	   - Prolink MVGA i740A
	
	   - Protac AG240D/VC240
	
	   - Real 3D StarFighter
	
	   - Shuttle Computer Hot-158
	
	   - Sparkle SP-740A
	
	   - SuperPower Computer Electronics Co. SP-740AT
	
	   - Tekram Technology AGP6000
	
	   - Teleshine GI-740
	
	   - Tops CCC Intel740
	
	   - Win Tech AGP-740A
	
	- Intel 810, 810e, 815, 820 and other 8XX Intel chipsets (82810, 82810e, 82815,
	  82815e).
	
	  Many motherboards and systems manufacturers use this integrated chipset.
	
	  For more information contact your system manufacturer or visit the following
	  Web site:
	
	  http://developer.intel.com/design/chipsets/sitemap.htm
	
	- Diamond Speedstar A50
	
	- 3Dlabs Permedia 2 3D Accelerator
	
	- MPACT (Chromatic Research) 5 Mb
	
	  Chromatic Research Inc., who made the Mpact! Series of chips, is out of
	  business. Please contact your system manufacturer for more information.
	
	- Matrox Millennium G200 AGP
	
	- Graphics Blaster Riva 128 Zx
	
	- Si S6326
	
	- Trident 9750
	
	   - Jaton Video-87AGP_3D
	
	   - Jaton Video-773D&TV
	
	- Jaton Video-67Pro
	
	Certain Silicon Motion series graphics cards do not meet requirement for game to
	run. The following cards are 2d only cards:
	
	- Lynx
	
	- LynxE
	
	- LynxEM
	
	- LynxEM+
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	REFERENCES
	==========
	
	For additional information about the Error Reporting tool in Train Simulator,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q300963 Train Simulator: Description of Error Reporting Tool
	
	Additional query words: msgame trainsim
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbTrainSim
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
