---
layout: page
title: "Q245063: Games Error Message: Setup Failed to Extract Files From..."
permalink: /kb/245/Q245063/
---

## Q245063: Games Error Message: Setup Failed to Extract Files From...

{% raw %}

	Article: Q245063
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II Expansion: The Conquerors 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the programs listed at the beginning of this
	article, you may receive one of the following error messages
	
	- Microsoft Age of Empires II Expansion: The Conquerors
	
	  Setup failed to extract files from <drive>:\msgame.cab. This is most
	  likely caused by low memory (low disk space for swapping file) or a corrupted
	  cabinet file. Please restart your machine and run setup again.
	
	- Microsoft Combat Flight Simulator 2
	
	  Setup failed to extract files from <drive>:\cfs2.cab. This is most
	  likely caused by low memory (low disk space for swapping file) or a corrupted
	  cabinet file. Please restart your machine and run setup again.
	
	- Microsoft Flight Simulator 2000
	
	  Setup failed to extract files from <drive>:\game2.cab. This is most
	  likely caused by low memory (low disk space for swapping file) or a corrupted
	  cabinet file. Please restart your machine and run setup again.
	
	where <drive> is the drive letter of the CD-ROM drive.
	
	- Microsoft Flight Simulator 2002
	
	  Setup failed to Extract File (cab). This is most likely caused by low memory
	  (low disk space for swapping file) or a corrupted cabinet file. Please
	  restart your machine and run setup again.
	
	  -or-
	
	  xxxx.cab encounter a disk error to file-in xxxx
	
	- Microsoft Train Simulator
	
	  Setup failed to extract files from <drive>:\usa1.cab. This is most
	  likely caused by low memory (low disk space for swapping file) or a corrupted
	  cabinet file. Please restart your machine and run setup again.
	
	where <drive> is the drive letter of the CD-ROM drive.
	
	- Microsoft Train Simulator
	
	  Setup failed to extract files from <drive>:\USA2.CAB. This is most
	  likely caused by low memory (low disk space for swapping files) or a
	  corrupted cabinet file. Please restart your machine and run setup again.
	
	where <drive> is the drive letter of the CD-ROM drive.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions is true:
	
	- The hard disk on which your Microsoft Windows swap file is resident is
	  fragmented.
	
	- Your Windows swap file is damaged.
	
	- There is a problem reading the CD-ROM.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Disable Direct Memory Access (DMA) on the CD-ROM Drive
	------------------------------------------------------
	
	To disable DMA on the CD-ROM drive:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, click View Devices By Type.
	
	4. Click the plus sign (+) next to CDROM to expand the branch.
	
	5. Click the CD-ROM drive that you want to change, and then click Properties.
	
	6. Click the Settings tab.
	
	7. Click to clear the DMA check box, and then click Close.
	
	8. Close Control Panel, and then restart the computer.
	
	
	If the issue continues to occur, proceed to the next method.
	
	Reduce Caching on the CD-ROM Drive
	----------------------------------
	
	To reduce caching on the CD-ROM drive:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click File System.
	
	4. On the CD-ROM tab, move the Supplemental Cache Size slider to the Small
	  position.
	
	5. In the Optimize Access Pattern For box, click No Read-Ahead.
	
	6. Click OK, and then click Close.
	
	7. When you are prompted to restart your computer, click Yes.
	
	If the issue continues to occur, proceed to the next method.
	
	Run ScanDisk
	------------
	
	To run ScanDisk:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click ScanDisk.
	
	2. In the "Select the drive(s) you want to check for errors" box, click the
	  first hard disk in the list. Do not click a floppy disk drive.
	
	3. Under "Type of test", click Standard.
	
	4. Click to select the "Automatically fix errors" check box.
	
	5. Click Start.
	
	6. Repeat steps two through five for each additional hard disk installed in your
	  computer.
	
	If the issue continues to occur, proceed to the next method.
	
	Defragment the Hard Disk
	------------------------
	
	To defragment your hard disk:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Disk Defragmenter.
	
	2. In the "Which drive do you want to defragment?" box, click All Hard Drives.
	
	3. Click OK.
	
	If the issue continues to occur, proceed to the next method.
	
	Rebuild the Windows Swap File
	-----------------------------
	
	To rebuild the Windows swap file:
	
	1. Click Start, and then click Shut Down.
	
	2. Click "Restart in MS-DOS mode," and then click OK.
	
	3. At the command prompt, type the following lines, pressing ENTER after you
	  type each line:
	
	  cd\windows
	  del win386.swp
	  exit
	
	4. Click Start, point to Settings, and then click Control Panel.
	
	5. Double-click System.
	
	6. Click the Performance tab.
	
	7. Click Virtual Memory.
	
	8. Click "Let me specify my own virtual memory settings."
	
	9. In the Hard Disk box, make sure that at least 50 megabytes (MB) of space is
	  available on the hard disk.
	
	  If multiple hard disks are installed in your computer, make sure that at least
	  50 MB of space is available on the hard disk on which Windows is installed.
	
	10. Click Cancel, and then click OK.
	
	Inspect the CD-ROM
	------------------
	
	Inspect the CD-ROM for visible deformation or scratches. If the disc is damaged,
	contact Microsoft Sales at 800-360-7561 to obtain a replacement CD-ROM.
	
	Clean the CD-ROM
	----------------
	
	Clean the CD-ROM. To do this, use a CD-ROM cleaning kit, or gently wipe the
	silver side of the CD-ROM with a soft, lint-free cotton cloth. Do not use paper
	cloth which can scratch the plastic and leave streaks. When you clean the
	CD-ROM, wipe from the center of the disc outward. Do not use a circular motion.
	
	If the issue continues to occur, clean the CD-ROM with a damp cloth or a
	commercial CD cleaning solution. Dry the CD-ROM thoroughly before you insert it
	into the CD-ROM drive.
	
	If the issue continues to occur, proceed to the next method.
	
	Clean the CD-ROM Drive
	----------------------
	
	If cleaning the CD-ROM does not resolve the issue, clean the CD-ROM drive using a
	CD-ROM drive cleaning disc if you have one. If you do not have one, obtain one.
	CD-ROM drive cleaning discs are available in most computer stores.
	
	MORE INFORMATION
	================
	
	For additional information about how to troubleshoot CD-ROM read errors, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Issues
	
	Additional query words: msgame combatfs cfs2 flightsim fltsim fs2k fs2000 game2.cab aoe2 aoeii aok trainsim
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch _IK kbAOESearch kbAOE2ExpConquerors kbCombatFlightSim2 kbCombatFlightSimSearch kbFlightSim2000 kbTrainSim kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
