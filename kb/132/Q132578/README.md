---
layout: page
title: "Q132578: Incorrect Error When Attempting Remote Administration"
permalink: kb/132/Q132578/
---

## Q132578: Incorrect Error When Attempting Remote Administration

	Article: Q132578
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to use remote administration with a computer running the
	File And Printer Sharing For Microsoft Networks network component that has not
	been configured for remote administration, you receive a password prompt instead
	of a descriptive error message.
	
	CAUSE
	=====
	
	Windows cannot determine whether you do not have administration rights on the
	remote computer or the computer cannot be remotely administered.
	
	RESOLUTION
	==========
	
	Cancel the password prompt. Configure the computer for remote administration or
	contact your system administrator.
	
	MORE INFORMATION
	================
	
	This behavior affects only computers using user-level access control.
	
	Additional query words: admin
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
