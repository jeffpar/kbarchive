---
layout: page
title: "Q170049: XCLN: Exchange Client Cannot Change Password Under OS/2 3.x"
permalink: /kb/170/Q170049/
---

## Q170049: XCLN: Exchange Client Cannot Change Password Under OS/2 3.x

	Article: Q170049
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Client on an IBM OS/2 version 3.x platform,
	the following error may occur when you try to change the password:
	
	  The NT Domain password could not be changed. A required action was not
	  successful due to an unspecified error.
	
	If you press F2, the following message displays:
	
	  MS Exch cli 0 - [8100342B]
	
	CAUSE
	=====
	
	This error occurs if the OS/2 client is using only the NetBIOS transport. This
	behavior is by product design.
	
	WORKAROUND
	==========
	
	To initiate the password change to the Windows NT Server, you must have TCP/IP,
	SPX, or Named Pipes enabled on the OS/2 client.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
