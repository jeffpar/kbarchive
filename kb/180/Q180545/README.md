---
layout: page
title: "Q180545: Error Message: The Server on Which the Printer Resides..."
permalink: kb/180/Q180545/
---

## Q180545: Error Message: The Server on Which the Printer Resides...

	Article: Q180545
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 01-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Windows NT server or workstation print share
	and automatically download a printer driver that is known to be installed on the
	share, you may receive the following error message:
	
	  The server on which the printer resides does not have a suitable
	  <type of printer> printer driver installed. Click OK if you wish to
	  install the driver on your local machine.
	
	CAUSE
	=====
	
	This behavior can occur if the %SystemRoot%\System32\Spool\Drivers folder (or a
	folder below it) does not have the correct NTFS file system permissions to allow
	you to access the printer driver files. Instead of receiving an error message
	stating that access is denied, you receive the error message listed above.
	
	RESOLUTION
	==========
	
	The system administrator must assign you sufficient permissions to access the
	files. The system administrator may also need to check the share-level
	permissions for the printer share if the default permissions were changed. The
	default permissions are:
	
	  %SystemRoot%\System32\Spool\Drivers (and subfolders)
	
	  Administrators - Full Control
	  Creator/Owner - Full Control
	  Everyone - Read (RX)
	  Server Operators - Full Control
	  System - Full Control
	
	The Print$ share contains the Everyone group by default and has read
	permissions.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
