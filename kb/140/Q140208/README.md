---
layout: page
title: "Q140208: Cannot Use Both Dial-Up Networking and Direct Cable Connection"
permalink: kb/140/Q140208/
---

## Q140208: Cannot Use Both Dial-Up Networking and Direct Cable Connection

	Article: Q140208
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience either of the following symptoms:
	
	- When you try to connect to a server or provider using Dial-Up Networking, you
	  may receive the following error message:
	
	  Another Dial-Up Networking connection is active.
	  Disconnect the other connection, and then try again.
	
	- When you try to establish a connection using Direct Cable Connection, you may
	  receive the following error message:
	
	  Cannot connect to host computer. Make sure you have run Direct Cable
	  Connection on the host computer and you have connected your cable to both
	  computers.
	
	CAUSE
	=====
	
	Both Dial-Up Networking and Direct Cable Connection use the same network
	interface (Pppmac.vxd). You cannot have more than one instance of Pppmac.vxd
	running at one time.
	
	RESOLUTION
	==========
	
	Close Dial-Up Networking to run Direct Cable Connection, or close Direct Cable
	Connection to run Dial-Up Networking. You cannot run both at the same time.
	
	Additional query words: dcc
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
