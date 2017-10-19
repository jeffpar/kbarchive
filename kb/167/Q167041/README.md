---
layout: page
title: "Q167041: 8.3 File Names Are Displayed When Viewing an NDS Directory"
permalink: /kb/167/Q167041/
---

## Q167041: 8.3 File Names Are Displayed When Viewing an NDS Directory

	Article: Q167041
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbinfo kbArtTypeINF
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Only 8.3 filenames are displayed when you view a directory map alias in NetWare
	Directory Services (NDS) which is pointing to a directory on a NetWare 4.x
	server that has long file name (LFN) enabled (OS/2 Name Space).
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below, then do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe), and from the HKEY_LOCAL_MACHINE
	  subtree, go to the following key:
	
	  \System\CurrentControlSet\Services\NWRDR\parameters
	
	2. From the Edit menu, click Add Value.
	
	3. Add the following:
	
	     Value Name: FavourLongNames
	     Data Type: REG_DWORD
	     Data: 0x1 (Hex)
	
	4. Click OK and quit Registry Editor.
	
	5. Shut down your computer and restart Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51 and 4.0. This problem has been corrected in the latest U.S. Service Pack
	for Microsoft Windows NT version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	A NetWare directory map object contains two properties, a volume and a path. The
	administrator types the path when the directory map object is set up. On a
	volume with short and long name spaces, the path of the directory map can be
	either the long name space path or the short name space path.
	
	If the short and long name space paths are both the same, and the FavourLongNames
	registry flag is set, the redirector will correctly connect to the long name
	space.
	
	If the directory map object path attribute contains the long name space path,
	this version will correctly connect the long name space.
	
	The only case that is not handled is when the directory map object contains the
	short name space path and that path differs from the long name space path. This
	case will not work regardless of the registry setting. When the FavourLongNames
	bit is not set, the redirector will connect the short name space to the
	directory map.
	
	Additional query words: 3 LFN csnw gsnw
	
	======================================================================
	Keywords          : kbnetwork kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
