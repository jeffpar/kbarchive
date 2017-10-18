---
layout: page
title: "Q132609: &quot;Error 58&quot; with Server-Based Windows 95 Setup"
permalink: kb/132/Q132609/
---

## Q132609: &quot;Error 58&quot; with Server-Based Windows 95 Setup

	Article: Q132609
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
	
	If you log on to a Windows NT domain account in real mode, and your account has
	the "User must change password at next logon" setting enabled or your password
	has expired, you are not notified that you must change your password. Instead,
	when you try to access a network server in the domain you receive the error
	message "Error 58."
	
	CAUSE
	=====
	
	The real-mode network client for Windows 95 does not support logon validation.
	Therefore, the client cannot determine when a password is about to expire or has
	already expired.
	
	This problem is most likely to occur with a server-based Setup, when you must log
	on to the network before you can set up Windows 95.
	
	RESOLUTION
	==========
	
	Use the NET PASSWORD command to change your password.
	
	MORE INFORMATION
	================
	
	Network administrators should avoid using the "User must change password at next
	logon" option when Windows 95 server-based Setup is being used.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
