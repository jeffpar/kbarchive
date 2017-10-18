---
layout: page
title: "Q120607: Cannot Browse If No SMB Server Exists in Your Workgroup"
permalink: kb/120/Q120607/
---

## Q120607: Cannot Browse If No SMB Server Exists in Your Workgroup

	Article: Q120607
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can browse only Novell NetWare servers in your workgroup.
	
	CAUSE
	=====
	
	Windows 95 does not support browsing in a workgroup that does not contain an SMB
	server.
	
	RESOLUTION
	==========
	
	If your workstation is in a workgroup containing no SMB servers, follow these
	steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. Click the Identification tab.
	
	4. In the Workgroup box, enter the name of a workgroup that contains an SMB
	  server.
	
	5. Click OK.
	
	These steps enable you to browse SMB servers in other workgroups.
	
	Note that this creates two workgroups with the same name in Network Neighborhood.
	One workgroup displays "Microsoft file and print" and the other displays
	"Microsoft file and print services for NetWare."
	
	Additional query words: admin administrator netadmin
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
