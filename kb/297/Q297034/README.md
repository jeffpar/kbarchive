---
layout: page
title: "Q297034: Age of Empires II: Setup Stops, Program Is Uninstalled"
permalink: kb/297/Q297034/
---

## Q297034: Age of Empires II: Setup Stops, Program Is Uninstalled

	Article: Q297034
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Age of Empires II: The Age of Kings, Setup
	stops and then the following message appears:
	
	  Initializing Uninstaller
	
	Age of Empires II is uninstalled. You receive the following message:
	
	  Age of Empires II Setup was not completed successfully.
	  Click the Install button on the Setup menu to try again.
	
	You are unable to install Age of Empires II.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- The CD-ROM drive is configured to use Direct Memory Access (DMA).
	
	  -or-
	
	- The Windows\Temp folder is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Method 1: Turn Off DMA for the CD-ROM Drive
	-------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click System.
	
	3. In the System Properties dialog box, on the Device Manager tab, click "View
	  devices by type".
	
	4. Expand CDROM, and then under CDROM, double-click the CD-ROM drive that you
	  want.
	
	5. In the "<Model> CD-ROM Properties" dialog box, on the Settings tab,
	  click to clear the DMA check box, and then click OK.
	
	6. Click Close, and then click Yes to restart the computer.
	
	Method 2: Delete the Windows\Temp Folder
	----------------------------------------
	
	To delete the Windows\Temp folder, use the appropriate method for your version of
	Microsoft Windows.
	
	Microsoft Windows 95:
	
	1. Click Start, and then click Shut Down.
	
	2. Click "Restart in MS-DOS mode", and then click OK.
	
	3. At the command prompt, type the following lines, pressing ENTER after you
	  type each line:
	
	  Deltree C:\Windows\Temp
	  Y
	  Exit
	
	4. Restart Windows without loading any programs from the Startup folder or any
	  terminate and stay resident (TSR) programs, and then install Age of Empires
	  II.
	
	For additional information about how to start Windows 95 without loading TSRs and
	without running programs in the Startup folder, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	Microsoft Windows 98, Microsoft Windows 2000, and Microsoft Windows Millennium Edition (Me):
	
	Use the Disk Cleanup tool to remove temporary files. To do this, follow these
	steps:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Disk Cleanup.
	
	2. In the Drives box, click the hard disk on which Windows is installed, and
	  then click OK.
	
	3. Under "Files to delete", click to select the "Temporary files" check box, and
	  then click OK.
	
	4. Click Yes.
	
	5. When the Disk Cleanup tool is finished, restart the computer, and then
	  install Age of Empires II.
	
	  NOTE: If the issue continues to occur, restart the computer without loading
	  any programs from the Startup folder or any terminate and stay resident (TSR)
	  programs, and then install the game.
	
	MORE INFORMATION
	================
	
	For additional information about how to start your version of Windows without
	loading TSRs or programs in the Startup folder, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	For additional information about troubleshooting CD-ROM read issues, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Issues
	
	Additional query words: msgame aoe aok uninstall
	
	======================================================================
	Keywords          : kbimu 
	Issue type        : kbprb
	
	=============================================================================
	
