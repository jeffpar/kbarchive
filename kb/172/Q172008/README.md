---
layout: page
title: "Q172008: Default NTFS Permissions in Windows NT 3.5 and 3.51"
permalink: /kb/172/Q172008/
---

## Q172008: Default NTFS Permissions in Windows NT 3.5 and 3.51

	Article: Q172008
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists default permissions of an drive that has been formatted to
	NTFS for the first time. Some of these directories will not be present on a
	Windows NT Workstation, and some of these directories are hidden by default.
	
	MORE INFORMATION
	================
	
	The following lists default NTFS permissions on common Windows NT directories on
	drive C:
	
	C:\-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  System - Full Control
	
	C:\Msapps and <subdirectories>-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\Program Files and <subdirectories>-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\Temp-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  System - Full Control
	
	C:\Users-
	
	  Administrators - Special (RWXD)
	  Everyone - List (RX)
	  System - Full Control
	
	C:\Users\Default-
	
	  Creator/Owner - Full Control
	  Everyone - Special (RWX)
	  System - Full Control
	
	C:\Win32app-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Read (RX)
	  Server Operators - Full Control
	  System - Full Control
	
	C:\%SystemRoot%-
	
	  Administrators- Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Config-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Cookies-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Cursors-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Desktop-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Fonts-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Help-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\History-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Inf-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Java and <subdirectories>-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Media-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Nwspool-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\Profiles-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\profiles\Administrators
	
	  Administrators - Full Control
	  System - Full Control
	
	C:\%SystemRoot%\profiles\All Users and <subdirectories>-
	
	  Administrators - Full Control
	  Everyone - Read
	  System - Full Control
	
	C:\%SystemRoot%\profiles\Default User and <subdirectories>-
	
	  Administrators - Full Control
	  Everyone - Read
	  System - Full Control
	
	C:\%SystemRoot%\Profiles\<username> and <subdirectories>-
	
	  Administrators - Full Control
	  <username> - Full Control
	  System - Full Control
	
	C:\%SystemRoot%\Repair-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Read
	  Server Operators - Full Control
	  System - Full Control
	
	C:\%SystemRoot%\Shellnew-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\System-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\System32-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\System32\Cache-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\System32\Config-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - List
	  Server Operators - List
	  System - Full Control
	
	C:\%SystemRoot%\System32\Dhcp-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Read (RX)
	  Server Operators - Full Control
	  System - Full Control
	
	C:\%SystemRoot%\System32\Drivers and <subdirectories>-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Read (RX) Server Operators - Full Control
	  System - Full Control
	
	C:\%SystemRoot%\System32\Inetsrv and <subdirectories>-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\System32\Lls-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\System32\Logfiles-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\System32\Netmon and <subdirectories>-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\System32\Os2 and <subdirectories>-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\System32\Ras
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change (RWXD)
	  Server Operators - Full Control
	  System - Full Control
	
	C:\%SystemRoot%\System32\Repl
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Read (RX)
	  Server Operators - Full Control
	  System - Full Control
	
	C:\%SystemRoot%\System32\Repl\Export and <subdirectories>-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Read (RX)
	  Replicator- Change (RWXD)
	  Server Operators - Change (RWXD)
	  System - Full Control
	
	C:\%SystemRoot%\System32\repl\import and <subdirectories>-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Read (RX)
	  Replicator- Change (RWXD)
	  Server Operators - Change (RWXD)
	  System - Full Control
	
	C:\%SystemRoot%\System32\Spool and <subdirectories>-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Read (RX)
	  Print Operators- Full Control
	  Server Operators - Full Control
	  System - Full Control
	
	C:\%SystemRoot%\System32\Viewers-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	C:\%SystemRoot%\System32\Spool\Wins-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change (RWXD)
	  Server Operators - Change (RWXD)
	  System - Full Control
	
	C:\%SystemRoot%\Temporary Internet Files and <subdirectories>
	
	  Administrators- Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	Any other directories-
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Change
	  Server Operators - Change
	  System - Full Control
	
	NOTE: These permissions do not apply to a drive that is converted to NTFS using
	the CONVERT utility. A converted NTFS drive consists of all files and
	directories with Everyone - Full Control as the default permission.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q148437 Default NTFS Permissions in Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	Hardware          : ALPHA PPC x86
	Issue type        : kbinfo
	
	=============================================================================
	
