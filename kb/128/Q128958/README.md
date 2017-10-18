---
layout: page
title: "Q128958: Mac Wkst: Using Mail Notifier and Novell NetWare 4.1"
permalink: kb/128/Q128958/
---

## Q128958: Mac Wkst: Using Mail Notifier and Novell NetWare 4.1

	Article: Q128958
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Microsoft Mail Notifier extension included with
	Microsoft Mail for AppleTalk Network, MS-DOS workstation, you may receive the
	following error message:
	
	  The control panel Microsoft Mail Notifier cannot be used with this Macintosh.
	
	CAUSE
	=====
	
	This error will occur if the Microsoft Mail for PC Networks postoffice you are
	connecting to is on a Novell NetWare version 4.1 server using the Netware
	Directory Services (NDS) for authentication.
	
	The problem occurs because the Microsoft Mail Notifier requires that the network
	drive be mounted on the Macintosh's desktop on startup. However, NetWare 4.1
	using NDS will not allow the network drive to be mounted.
	
	NOTE: Notifier works fine when using Novell NetWare 4.1 and Bindery Emulation.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0
	
	=============================================================================
	
