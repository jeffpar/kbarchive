---
layout: page
title: "Q143155: No Audio with Crystal Audio or SoundBlaster AWE32"
permalink: kb/143/Q143155/
---

## Q143155: No Audio with Crystal Audio or SoundBlaster AWE32

	Article: Q143155
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsound kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You do not receive audio from your Crystal Semiconductor audio chip or Creative
	Labs SoundBlaster AWE32 PnP Wavetable Synthesizer.
	
	CAUSE
	=====
	
	This problem may occur for either of the following reasons:
	
	- You ran PnPISA from the Windows NT 4.0 CD (or any of the Service Packs) and
	  selected "Do not install a driver (Windows NT will not prompt you again)."
	
	- The Creative Labs Advanced Wavetable Effects (AWE) Synthesizer is installed
	  and a Windows NT driver was not available when you were prompted to use the
	  Windows NT default driver. In this scenario, Do Not Install Driver was chosen
	  automatically.
	
	RESOLUTION
	==========
	
	You can resolve this problem by obtaining the Windows NT 4.0 Service Pack 3
	CD-ROM or by downloading Service Pack 3. For information on obtaining the latest
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Service Pack 3 - CD-ROM Version
	-------------------------------
	
	Using the Windows NT 4.0 Service Pack 3 CD-ROM, perform the following steps to
	correct this problem:
	
	1. Start a command prompt.
	
	2. Go to the folder on the Service Pack 3 CD-ROM for your architecture (for
	  example, i386 for Intel.)
	
	3. Type the following command:
	
	  "devpre devupd.inf" (without the quotation marks)
	
	  NOTE: Devpre does not support UNC paths. You must map a network drive if you
	  are attaching to the Service Pack 3 CD-ROM across a network.
	
	4. A dialog box titled Windows NT Setup reads "Setup is examining your
	  computer's hardware."
	
	5. You may receive a prompt for the path of your audio drivers.
	
	  a. Enter the path name to the Service Pack 3 CD-ROM for the Audio driver.
	
	  b. Click OK on the Select Device screen.
	
	  c. If you are not presented with resource settings, click Set Configuration
	     Manually.
	
	  d. If there are conflicting devices at the bottom of the screen, resolve them
	     first by selecting a basic configuration that allows the selection of
	     resources that do not conflict with devices already installed.
	
	     To change resources, highlight the offending setting in the Resource
	     Settings window, click Change Setting and select a setting that does not
	     conflict with another device, and then click OK. Repeat for any settings
	     that show a conflict.
	
	6. If you receive a prompt for any other functions, follow the previous steps.
	
	7. Restart your computer.
	
	8. Your audio card should be working properly at this point. If you need to
	  change the resources that your card is using, open the Multimedia utility in
	  Control Panel, click the Devices tab, click Properties for the Crystal
	  Semiconductor driver or the Creative Labs SoundBlaster Plug and Play driver,
	  and then click Settings. This opens the same resource dialog box that was
	  invoked when installing the device.
	
	Service Pack 3 - Download Version
	---------------------------------
	
	Because the downloadable version of the Service Pack is in CAB format, you must
	manually extract the files with the /x switch before running DEVPRE. Please see
	the Readme.txt file included with the self-extracting version of Service Pack 3
	for more information.
	
	1. Start a command prompt.
	
	2. Create a temporary folder on your hard disk, copy the Service Pack executable
	  to this folder, and extract the files contained in the Service Pack by typing
	  the name of the executable followed by the /x switch:
	
	  <Filename> /x
	
	3. Type the following command:
	
	  "devpre devupd.inf" (without the quotation marks)
	
	  NOTE: Devpre does not support UNC paths. You must map a network drive if you
	  are attaching to the Service Pack 3 CD-ROM across a network.
	
	4. A dialog box titled Windows NT Setup reads "Setup is examining your
	  computer's hardware."
	
	5. You may receive a prompt for the path of your audio drivers.
	
	  a. Enter the path name to the Service Pack 3 CD-ROM for the Audio driver.
	
	  b. Click OK on the Select Device screen.
	
	  c. If you are not presented with resource settings, click Set Configuration
	     Manually.
	
	  d. If there are conflicting devices at the bottom of the screen, resolve them
	     first by selecting a basic configuration that allows the selection of
	     resources that do not conflict with devices already installed.
	
	     To change resources, highlight the offending setting in the Resource
	     Settings window, click Change Setting and select a setting that does not
	     conflict with another device, and then click OK. Repeat for any settings
	     that show a conflict.
	
	6. If you receive a prompt for any other functions, follow the previous steps.
	
	7. Restart your computer.
	
	8. Your audio card should be working properly at this point. If you need to
	  change the resources that your card is using, open the Multimedia utility in
	  Control Panel, click the Devices tab, click Properties for the Crystal
	  Semiconductor driver or the Creative Labs SoundBlaster Plug and Play driver,
	  and then click Settings. This opens the same resource dialog box that was
	  invoked when installing the device.
	
	Additional query words: prodnt sb
	======================================================================
	Keywords          : kbhw kbsound kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
