---
layout: page
title: "Q177659: Security Tab Missing in File Properties in Windows NT Explorer"
permalink: /kb/177/Q177659/
---

## Q177659: Security Tab Missing in File Properties in Windows NT Explorer

	Article: Q177659
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you map a network drive to a remote share and view the properties of a file
	or folder in that share, the Security tab may be missing.
	
	CAUSE
	=====
	
	This behavior can occur if the shared folder has a long file name and does not
	conform to the 8.3 naming format.
	
	
	RESOLUTION
	==========
	
	Use one of the following workarounds to resolve this issue:
	
	- Use a Universal Naming Convention (UNC) connection to connect to the share
	  instead of mapping a drive letter. UNC connections use the following format:
	  \\<servername>\<sharename>, where <servername> is the name
	  of the server to which you want to connect and <sharename> is the name
	  of the share to which you want to connect.
	
	- Use File Manager (Winfile.exe) instead of Windows NT Explorer.
	
	- Rename the folder using the 8.3 naming format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	Additional query words: explorer.exe Security permissions auditing ownership
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
