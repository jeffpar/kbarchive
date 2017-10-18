---
layout: page
title: "Q128828: PC Ext: DrivesDynamic Problems with Station Restrictions"
permalink: kb/128/Q128828/
---

## Q128828: PC Ext: DrivesDynamic Problems with Station Restrictions

	Article: Q128828
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When EXTERNAL.EXE is operating with the DrivesDynamic=dd or -Fdd option, and it
	attempts to connect dynamically to a server, the following errors may occur.
	
	The error on remote client is:
	
	  Postoffice has not accepted mail item
	
	The error on the PC running External is:
	
	  Caller: Sign-on ID or password incorrect.
	
	CAUSE
	=====
	
	The Novell Server being dialed has restricted the user to be logged in from a
	specific workstation.
	
	RESOLUTION
	==========
	
	To remove the restriction in Novell, the server supervisor should perform the
	following procedure:
	
	1. In Novell, type the following:
	
	  "syscon" (without the quotation marks)
	
	2. Select User Information.
	
	3. Select Station Restrictions. The Network Address will appear on the screen.
	
	4. Press the INSERT key, and type the address of the machine running External.
	
	Novell NetWare is manufactured by Novell, a vendor independent of Microsoft, we
	make no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: 3.00 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300
	Version           : WINDOWS:3.0,3.2,3.2a
	
	=============================================================================
	
