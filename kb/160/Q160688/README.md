---
layout: page
title: "Q160688: Monster Truck: Retail Version Does Not Run But Demo Does"
permalink: /kb/160/Q160688/
---

## Q160688: Monster Truck: Retail Version Does Not Run But Demo Does

	Article: Q160688
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Monster Truck Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the retail version of Monster Truck Madness, the computer may stop
	responding (hang) or the video may not display correctly. However, the demo
	version does not exhibit this behavior.
	
	RESOLUTION
	==========
	
	The video card does not support Hardware Acceleration.
	
	To resolve the issue, try one of the following:
	
	Turn Off Hardware Acceleration in Monster Truck Madness
	-------------------------------------------------------
	
	1. Start Monster Truck Madness without the compact disc in the drive.
	
	  NOTE: This will NOT work if Monster Truck Madness was installed using the
	  Compact option.
	
	2. On the Options menu, click Graphics, and clear the Use Hardware Acceleration
	  check box.
	
	Turn Off Hardware Acceleration in Windows
	-----------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Performance tab, and then click Graphics in the Advanced Settings
	  section.
	
	4. Move the Hardware Acceleration slider to the None setting (all the way to the
	  left), and then click OK.
	
	5. In the System Properties box, click OK.
	
	Update Your Video Driver with a DirectX Compatible Driver
	---------------------------------------------------------
	
	First, contact your video card manufacturer and follow the manufacturer's
	instructions to get the latest driver. Typically this will be a PKZip file, or a
	self-extracting executable file.
	
	If the manufacturer of your video card includes specific instructions for
	installing the driver, follow them. Otherwise, unzip the files into a temporary
	folder on your hard disk, or onto a floppy disk. Then follow the instructions
	below:
	
	1. Open the Display Properties dialog box by using your right mouse button to
	  click the Desktop and then click Properties from the popup menu.
	
	2. In the Display Properties dialog box, click the Settings tab.
	
	3. Click Change Display Type.
	
	4. In the Advanced Display Properties dialog box, click the Adapter tab.
	
	5. Click Change.
	
	6. In the Select Device dialog box, click Have Disk.
	
	7. If you have the latest video driver from your video card manufacturer on a
	  disk or compact disc, select the appropriate drive and click OK. Otherwise
	  click Browse and from the temporary folder you created for your video card
	  manufacturer's files, and open the file called Display.inf.
	
	8. In the Select Device dialog box, choose the driver that matches your video
	  card and then click OK.
	
	9. Click OK as many times as necessary to accept the changes.
	
	10. Click Yes in the System Settings Change dialog box to restart your computer.
	
	MORE INFORMATION
	================
	
	The Demo version of Monster Truck Madness did not use hardware acceleration.
	
	NOTE: Most DirectX related problems have been resolved in the latest version of
	DirectX. Download the latest version of DirectX or, if you own a game that
	installs a later version of DirectX, install DirectX from the newer game's
	disc.
	
	The latest version of DirectX is available at the following Microsoft Web site:
	
	  http://www.microsoft.com/directx
	
	For more information about how to obtain the latest version of DirectX, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	For more information about troubleshooting video problems, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q127139 Troubleshooting Video Problems in Windows 95
	
	  Q155641 DirectX 2.0 Notes and Troubleshooting
	
	Additional query words: 1.00 mtm video demo acceleration hardware hang lockup lock up crash freeze
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu 
	Technology        : kbGamesSearch kbZNotKeyword kbMonsterTMSearch kbMonsterTM
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
