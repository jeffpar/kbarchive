---
layout: page
title: "Q326000: Casino: Game Closes Unexpectedly When Accepting a Comp"
permalink: kb/326/Q326000/
---

## Q326000: Casino: Game Closes Unexpectedly When Accepting a Comp

	Article: Q326000
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Casino 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are playing Microsoft Casino, the game closes unexpectedly when you try
	to accept a comp.
	
	CAUSE
	=====
	
	This behavior may occur if the program is damaged or corrupted.
	
	RESOLUTION
	==========
	
	
	To resolve this problem, follow these steps in the order in which they are
	presented.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Perform a Clean Boot Operation
	------------------------------
	
	Start Windows by loading a minimal set of drivers and services. This process,
	also known as a clean boot, provides as "clean" an installation environment as
	possible in which to reinstall a program. To perform a clean boot, follow the
	steps that are appropriate for your operating system.
	
	NOTE: For more information about how to use a clean boot in other operating
	systems, see the "More Information" section later in this article.
	
	Microsoft Windows 98:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. Click the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	3. Click OK, and then restart your computer when you are prompted to do so.
	
	For additional information about how to perform a clean boot, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	Microsoft Windows XP:
	
	NOTE:You must be logged on as an administrator or a member of the Administrators
	group in to complete this procedure. If your computer is connected to a network,
	network policy settings may also prevent you from completing this procedure.
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process SYSTEM.INI File
	   - Process WIN.INI File
	   - Load Startup Items
	
	  You cannot clear the Use Original BOOT.INI check box.
	
	3. On the Services tab, click to select the "Hide All Microsoft Services" check
	  box, and then click Disable All.
	
	4. Click OK, and then click Restart to restart your computer.
	
	For additional information about how to perform a clean boot, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	Remove Casino
	-------------
	
	In Windows 98:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, double-click Microsoft Casino.
	
	4. Click to select the Uninstall check box, and then click OK.
	
	5. When the removal is completed, click OK, and then close the Add/Remove
	  Programs window.
	
	In Windows XP:
	
	1. Click Start, and then click Control Panel.
	
	2. Double-click "Add or Remove Programs".
	
	3. In the "Currently installed programs" list, click Microsoft Casino.
	
	4. Click Change/Remove.
	
	5. Follow the on-screen instructions to remove the program, and then close the
	  Add/Remove Programs window.
	
	Delete the Casino Folder
	------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following:
	
	"c:\program files\microsoft games" (with the quotation marks)
	
	3. Click OK.
	
	4. Right-click the Microsoft Casino folder, and then click Delete.
	
	5. Click Yes, and then close the Microsoft Games window.
	
	Empty the Temp Folder in Windows
	--------------------------------
	
	1. Double-click My Computer.
	
	2. Locate and then click the following temp folder:
	
	In Windows 98: C:\Windows\Temp
	
	In Windows XP: C:\Documents and Settings\<user name>\Local Settings\Temp
	
	3. On the Edit menu, click Select All.
	
	4. On the File menu, click Delete, and then click Yes.
	
	Perform Disk Maintenance
	------------------------
	
	To try to resolve any hard disk problems, follow these steps:
	
	1. On the Desktop, right-click Recycle Bin, and then click Empty Recycle Bin. If
	  you are prompted to confirm, click Yes.
	
	2. Click Start, point to Programs or All Programs, point to Accessories, point
	  to System Tools, and then click Disk Cleanup.
	
	3. If you are prompted to select a drive, select the drive on which you plan to
	  install Casino, and then click OK.
	
	4. Click OK, and then click Yes.
	
	5. In Windows 98, click Start, point to Programs, point to Accessories, point to
	  System Tools, and then click ScanDisk.
	
	  NOTE: ScanDisk is not available in Windows XP. Go to step 8.
	
	6. Click to select the Thorough check box, click to select the "Automatically
	  fix errors" check box, and then click Start.
	
	7. When ScanDisk is completed, click Close two times.
	
	8. Click Start, point to Programs or All Programs, point to Accessories, point
	  to System Tools, and then click Disk Defragmenter.
	
	9. If you are prompted to select a drive, select the drive on which you plan to
	  install Casino, and then click OK.
	
	10. If the Disk Defragmenter does not start automatically, click Defragment.
	
	11. When the disk is defragmented, close Disk Defragmenter.
	
	Reinstall Casino
	----------------
	
	Insert the Microsoft Casino disc into your CD-ROM drive or DVD-ROM drive, and
	then follow the on-screen instructions to reinstall the program.
	
	Return from a Clean Boot State
	------------------------------
	
	In Windows 98:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. Click the General tab, click Normal Startup, and then click OK.
	
	3. When you are prompted to restart your computer, click Yes.
	
	In Windows XP:
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Normal Startup - load all device drivers and
	  services".
	
	3. Click OK. Click Restart when you are prompted to restart your computer.
	
	MORE INFORMATION
	================
	
	For more information about casino comps, enter any casino in Microsoft Casino,
	select a game, and then click the Comps icon in the lower-right corner of the
	screen.
	
	For additional information about how to perform a clean boot, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q243039 How to Perform a Clean Boot in Windows 95
	
	  Q281770 How to Perform Clean-Boot Troubleshooting for Windows 2000
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeMMsearch kbGamesSearch kbCasino
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
