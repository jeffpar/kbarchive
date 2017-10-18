---
layout: page
title: "Q158489: XFOR: Err Msg: The Selected Postoffice is Read Only..."
permalink: kb/158/Q158489/
---

## Q158489: XFOR: Err Msg: The Selected Postoffice is Read Only...

	Article: Q158489
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you migrate users from Microsoft Mail for PC Networks using the Microsoft
	Exchange Migration Wizard, you may receive the following error:
	
	  The selected Postoffice is read only. It must be writeable.
	
	Verify that the Master.glb file is not locked open. For more information about
	this problem, please see the following article in the Microsoft Knowledge Base:
	
	  Q147506 XFOR: Err Msg: The Selected Postoffice is Read Only...
	
	If it is not locked open, running the MAILINT utility against the postoffice will
	return the following error:
	
	  The GLB subdirectory was a file.
	
	Checking the permissions of the GLB subdirectory will show that the subdirectory
	has Read Only permissions. Removing that restriction will allow the Migration to
	complete successfuly.
	
	Note: MAILINT is a utility that checks the basic integrity of an Microsoft Mail
	postoffice. It is available in the Microsoft Mail Resource Kit.
	
	Additional query words: GLB directory files
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
