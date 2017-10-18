---
layout: page
title: "Q155217: How to Enable or Disable Automatically Running CD-ROMs"
permalink: kb/155/Q155217/
---

## Q155217: How to Enable or Disable Automatically Running CD-ROMs

	Article: Q155217
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to enable or disable automatically running CD-ROMs.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If there is a CD-ROM changer attached to your computer, you may want to disable
	automatically running CD-ROMs (the automatic running of a compact disc [CD] or
	the automatic playing of an audio CD-ROM). If automatically running CD-ROMs is
	enabled with a CD-ROM changer, each time that you insert a new CD-ROM into one
	of the trays, Windows cycles through every tray in the changer.
	
	There is no option to enable or disable automatically running CD-ROMs in the user
	interface. To enable or disable automatically running CD-ROMs, you must edit the
	registry:
	
	1. Click Start, click Run, type "regedit" (without the quotation marks) in the
	  Open box, and then press ENTER.
	
	2. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\CDRom
	
	3. To disable automatically running CD-ROMs, change the Autorun value to 0
	  (zero). To enable automatically running CD-ROMs, change the Autorun value to
	  1.
	
	4. Restart your computer.
	
	NOTE: This method disables automatically running CD-ROMs. If you want to disable
	automatically running CD-ROMs depending on the CD-ROM that you insert in the
	CD-ROM drive, you can press and hold down one of the SHIFT key while you insert
	the CD-ROM.
	
	
	Additional Information
	----------------------
	
	There are two other registry keys that can affect this functionality:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer
	  NoDriveTypeAutoRun = 0x00000095
	
	  -and-
	
	  HKEY_USERS\.DEFAULT\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer
	  NoDriveTypeAutoRun = 0x00000095
	
	The correct value for each is 0x00000095.
	
	Additional query words: prodnt auto autoinsert notification autorun inf autoplay
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
