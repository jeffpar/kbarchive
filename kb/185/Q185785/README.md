---
layout: page
title: "Q185785: Unable to View Entire NetWare Volume Name"
permalink: /kb/185/Q185785/
---

## Q185785: Unable to View Entire NetWare Volume Name

	Article: Q185785
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 98,95
	Operating System(s): 
	Keyword(s): kbnetwork win95 win98
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a Novell NetWare volume using the DIR command or the VOL command
	at an MS-DOS prompt in Windows 95, only the first eight characters of the volume
	name may be displayed.
	
	RESOLUTION
	==========
	
	To work around this issue, use either of the following methods:
	
	- View the NetWare volume in Windows Explorer.
	
	- Use the MAP command at an MS-DOS prompt to display the list of mapped drives
	  and their volume names. To do so, type the following command at the MS-DOS
	  prompt, and then press ENTER:
	
	  " map " (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95.
	
	MORE INFORMATION
	================
	
	This behavior can occur when you use Microsoft Client for NetWare Networks, or
	Microsoft NetWare Directory Services (MSNDS).
	
	Additional query words: volume label incomplete short
	
	======================================================================
	Keywords          : kbnetwork win95 win98 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : 98,95
	Issue type        : kbprb
	
	=============================================================================
	
