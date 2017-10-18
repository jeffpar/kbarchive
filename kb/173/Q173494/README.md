---
layout: page
title: "Q173494: Cannot Send Messages Using WinPopup"
permalink: kb/173/Q173494/
---

## Q173494: Cannot Send Messages Using WinPopup

	Article: Q173494
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send a message using the WinPopup tool, you may receive one
	of the following error messages:
	
	  Messages sent through a NetWare server are limited to 38 characters. Shorten
	  your message, and then try again.
	
	  The name you specified cannot be found on the network. Check the name, and
	  then try sending your message again.
	
	CAUSE
	=====
	
	These error messages can occur when you send WinPopup messages to an invalid or
	inaccessible computer name, or when you send to a computer with the same name as
	the sender's user name (whether or not it is also a valid computer name on the
	network).
	
	The first error message occurs when you attempt to send a WinPopup message longer
	than 38 characters.
	
	The second error message occurs when you attempt to send a WinPopup message with
	38 characters or less.
	
	RESOLUTION
	==========
	
	Use a computer naming convention such that no user name or computer name is the
	same. Do not attempt to send WinPopup messages to a computer name or user name
	that is the same as your current user name. If you are still having trouble
	sending messages to a unique computer name or user name, check for network
	connectivity to that computer.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For information about troubleshooting network connectivity, see the following
	articles in the Microsoft Knowledge Base:
	
	  Q134304 Troubleshooting Browsing with Client for Microsoft Networks
	
	  Q152262 Mismatched IPX/SPX Frame Types Prevent Connectivity
	
	Additional query words: unable to
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
