---
layout: page
title: "Q134607: Error Attempting to Specify a DBCS Security Provider"
permalink: kb/134/Q134607/
---

## Q134607: Error Attempting to Specify a DBCS Security Provider

	Article: Q134607
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot add user-level access when you try to add users or groups from a
	double-byte character set (DBCS) domain. When you type the name of an existing
	DBCS domain in the "Obtain list of users and groups from" box, you receive the
	following error message:
	
	  Windows could not find the specified security provider on the network. Do you
	  want to use the name you typed in anyway?
	
	If you click Yes, using the domain name you typed, and specifying that the
	authenticator is a domain, everything works correctly despite the error
	message.
	
	However, if you type the name of an existing DBCS server in the box, it is
	accepted without an error message.
	
	CAUSE
	=====
	
	The problem lies with the Windows NT domain controller, which returns an empty
	list when calling the enumeration function with a DBCS domain. Windows NT
	handles DBCS servers correctly, and handles DBCS domains correctly, except in
	the situation described above.
	
	RESOLUTION
	==========
	
	Click Yes when you receive the error message and continue. There is no loss of
	functionality or data.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
