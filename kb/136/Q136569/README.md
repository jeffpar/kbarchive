---
layout: page
title: "Q136569: Error Message Received in WINS Manager When Viewing Other Server"
permalink: kb/136/Q136569/
---

## Q136569: Error Message Received in WINS Manager When Viewing Other Server

	Article: Q136569
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to view a Windows Internet Name Service (WINS) database that is
	not participating in a Push\Pull relationship, the following error message
	appears:
	
	  The Windows Internet Name Service is not running on the target machine, or
	  the target machine is not accessible.
	
	
	CAUSE
	=====
	
	This error occurs when you set the view preference for the WINS server by name
	only or by name and IP address.
	
	WORKAROUND
	==========
	
	To work around this problem, choose Options, choose Preferences, and change the
	address display from Computer Name Only to IP Address Only. This will set the
	view to IP Address until a method of name resolution is in place to resolve the
	other WINS servers name.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
