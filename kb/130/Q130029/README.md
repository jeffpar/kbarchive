---
layout: page
title: "Q130029: Error Message: The Emergency Repair Disk Is Full"
permalink: /kb/130/Q130029/
---

## Q130029: Error Message: The Emergency Repair Disk Is Full

{% raw %}

	Article: Q130029
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0,4.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create an Emergency Repair Disk (ERD) using the Rdisk.exe
	tool, you may receive one of the following error messages:
	
	- The emergency repair disk is full. The configuration files were saved on your
	  hard disk.
	
	- Repair disk utility could not copy all files to the emergency repair disk.
	
	CAUSE
	=====
	
	This behavior can occur if the combined size of the files in the
	%SystemRoot%\Repair folder exceeds the capacity of one floppy disk.
	
	RESOLUTION
	==========
	
	To work around this issue, use the appropriate method:
	
	Update Your Repair Information to Your Hard Disk
	------------------------------------------------
	
	If the files located in the %SystemRoot%\Repair folder exceed the capacity of a
	single floppy disk, you cannot create an ERD that contains all of your current
	repair information. If this occurs, you can update your repair information to
	your hard disk. In most cases you can use the updated repair information on your
	hard disk when you repair your Windows NT installation.
	
	To update your repair information to your hard disk, use the Update Repair Info
	option in the Rdisk.exe tool.
	
	NOTE: If you do not have an ERD and the SystemRoot%\Repair folder on your hard
	disk becomes unavailable, you cannot repair your Windows NT installation. As a
	precaution you should make a backup copy of the %SystemRoot%\Repair folder.
	
	Create the ERD Without Using the /s Command-Line Switch
	-------------------------------------------------------
	
	When you use the /s command-line switch with the Rdisk.exe tool, the Sam._ and
	Security._ database files are copied to the %SystemRoot%\Repair folder and to
	the ERD. If your repair information exceeds the capacity of a single floppy
	disk, you may not be able to use the /s command-line switch when you create the
	ERD.
	
	To create an ERD without copying the Sam._ and Security._ database files, run the
	Rdisk.exe tool with no command-line switches. Use the Update Repair Info option,
	and click Yes when you are prompted to create an ERD.
	
	For additional information about the /s command-line switch, see the following
	article in the Microsoft Knowledge Base:
	
	  Q122857 : RDISK /S and RDISK /S- Options in Windows NT
	
	If you used the /s command-line switch with the Rdisk.exe tool, the Sam._ and
	Security._ databases were copied to your %SystemRoot%\Repair folder. You may be
	able to create an ERD by using an older version of these files. If you have a
	version of the Sam._ and Security._ files from an earlier backup or ERD, copy
	them to the %SystemRoot%\Repair folder. Run the Rdisk.exe tool, use the Update
	Repair Info option, and click Yes when you are prompted to create an ERD.
	
	NOTE: If you use an older version of your Sam._ and Security._ files when you
	repair your Windows NT installation, you may lose user account and machine
	account information.
	
	MORE INFORMATION
	================
	
	The ERD is intended to provide just enough recovery to restore your computer to
	a bootable state. It is not a replacement for regular backups.
	
	As you add components and install programs on your Windows NT-based computer,
	some Windows NT configuration files may grow in size. Your Sam._ and Security._
	database files may also become larger as you add more user accounts and machine
	accounts to your computer or domain.
	
	This table lists the files used to repair a Windows NT installation.
	
	  File          Description
	  -------------------------------------------------------
	  Autoexec.nt   Startup file for MS-DOS-based programs
	  Config.nt     Startup file for MS-DOS-based programs
	  Default._     Hkey_Users\.Default registry hive
	  Ntuser.da_    New user profile (Windows NT 4.0 only)
	  Sam._         Hkey_Local_Machine\Sam registry hive
	  Security._    Hkey_Local_Machine\Security registry hive
	  Setup.log     Configuration and repair information file
	  software._    Hkey_Local_Machine\Software registry hive
	  system._      Hkey_Local_Machine\System registry hive
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ450
	Version           : winnt:3.51,4.0,4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
