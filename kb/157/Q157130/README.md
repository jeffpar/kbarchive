---
layout: page
title: "Q157130: XCLN: Error Message From MS-DOS Client on Diskless Workstation"
permalink: /kb/157/Q157130/
---

## Q157130: XCLN: Error Message From MS-DOS Client on Diskless Workstation

	Article: Q157130
	Product(s): Microsoft Exchange
	Version(s): MS-DOS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange MS-DOS client on a Novell Diskless
	workstation, the following error message might be displayed when you attempt to
	start the client:
	
	  The MS Exchange directory service could not be opened. A network error has
	  occurred. Quit and Restart MS Exchange.
	
	CAUSE
	=====
	
	This error occurs because the workstation does not have a C:\ drive.
	
	WORKAROUND
	==========
	
	You can workaround this problem by mapping a network share to drive letter C.
	This can be automated in your Novell logon script.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3 kbExchange400DOS
	Version           : MS-DOS:4.0
	
	=============================================================================
	
