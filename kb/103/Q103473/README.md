---
layout: page
title: "Q103473: SFM: MacFile Menu Not Displayed if NTAS Drive Letter Changes"
permalink: kb/103/Q103473/
---

## Q103473: SFM: MacFile Menu Not Displayed if NTAS Drive Letter Changes

	Article: Q103473
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the drive letter of the logical drive where Windows NT Advanced Server is
	installed changes, the MacFile menu in File Manager and Server Manager may not
	appear.
	
	CAUSE
	=====
	
	Windows NT Advanced Server Services for Macintosh records fully qualified
	filenames (including paths) to the registry to enable File Manager and Server
	Manager to provide MacFile menus. If you change the drive letter of the drive
	where Windows NT Advanced Server is installed, Windows File Manager and Server
	Manager will not find the Services for Macintosh AddOns and will not display the
	MacFile menus.
	
	RESOLUTION
	==========
	
	To correct this problem, use the Registry Editor (REGEDT32.EXE) and change the
	following keys to the correct path and filename:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use Registry Editor can be
	solved. Use this tool at your own risk.
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\File Manager\AddOns
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\Network\SMAddOns
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sfm prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
