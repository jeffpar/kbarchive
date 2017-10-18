---
layout: page
title: "Q98562: Multimedia Err Msg: Unexpected Error [MCI602]."
permalink: kb/098/Q98562/
---

## Q98562: Multimedia Err Msg: Unexpected Error [MCI602].

	Article: Q98562
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the applications listed at the top of this article, you
	may receive the following error message:
	
	  Unexpected error [MCI602]. Cannot play sounds. Would you like to continue
	  using <program Name> without sound?
	
	If you choose Yes, the application will continue running, but you will not have
	sounds.
	
	If you choose No, you will receive the following error message:
	
	  Not enough memory to run. Exiting now.
	
	CAUSE
	=====
	
	These error messages occur when the Windows 3.1x [MCI] Sound driver is not
	installed.
	
	Or when the Windows 95 Wave Audio Device (Media Control) is not installed.
	Windows 95 needs drivers but you don't see the same error message.
	
	
	In Windows 95, verify that the Wave Audio Device (Media Control) driver is
	installed and enabled (see below).
	
	To Install the Wave Audio Device (Media Control) driver
	-------------------------------------------------------
	
	1. Double-click the Add New Hardware icon in the Windows 95 Control Panel.
	
	2. Choose the Next button.
	
	3. Select the No radio button from the Add New Hardware Wizard dialog box, then
	  choose the Next button.
	
	4. From the Hardware types list box, choose Sound, Video and Game Controllers.
	  Choose the Next button.
	
	5. Select Microsoft MCI from the Manufacturers list box.
	
	6. Select Wave Audio Device (Media Control) from the Models list box, and choose
	  the Next button.
	
	7. Choose the Finish button.
	
	The Wave Audio Device (Media Control) driver should now be installed.
	
	To Verify that the Wave Audio Device (Media Control) driver is
	
	enabled
	-------
	
	1. Double-click the Multimedia icon in the Windows 95 Control Panel.
	
	2. Select the Advanced tab.
	
	3. Click the plus (+) symbol next to the Media Control Devices entry.
	
	4. Select Wave Audio Device (Media Control).
	
	5. Choose the Properties button.
	
	6. Make sure the Use This Media Control Device button is selected.
	
	7. Choose OK.
	
	Under Windows 3.1x, install the [MCI] Sound driver in the Windows 3.1x Control
	Panel to solve this problem:
	
	To Install the [MCI] Sound Driver
	---------------------------------
	
	1. Double-click the Drivers icon in Windows Control Panel.
	
	2. Choose the Add button.
	
	3. From the displayed list of drivers, select [MCI] Sound.
	
	4. Choose OK.
	
	[MCI] Sound should now be installed and listed in the Installed Drivers box.
	
	
	Additional query words: multimedia multi media multi-media waveform wave .WAV WAV start run audio won't start kbmm dinos dev/drv sound bits win95
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbZNotKeyword kbDangerousCreatures kbDinosaurs100 kbMusicalInst kbArtGallery
	Version           : 1.0
	
	=============================================================================
	
