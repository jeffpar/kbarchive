---
layout: page
title: "Q169405: XFOR: Novell GroupWise Shared Code Directory Was Not Found"
permalink: kb/169/Q169405/
---

## Q169405: XFOR: Novell GroupWise Shared Code Directory Was Not Found

	Article: Q169405
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the GroupWise Migration utility for migrating to Exchange Server,
	the following error message may appear:
	
	  Novell GroupWise shared code directory was not found. Please reinstall
	  the GroupWise client and try the migration again.
	
	In addition, when you start the GroupWise 16-bit client, the following error
	message appears:
	
	  The directory path for the shared code is invalid.
	
	CAUSE
	=====
	
	The GroupWise 16-bit client cannot locate the WPC20 subdirectory in the local
	computer. The WPC20 subdirectory is installed during the installation process of
	the GroupWise client.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Reinstall the GroupWise 16-bit client.
	
	MORE INFORMATION
	================
	
	A Standard installation of GroupWise 4.1 copies files to the following
	locations:
	
	  GroupWise Program:   C:\OFWIN40     (These are the core files)
	  WPC Shared Files:    C:\WPC20       (This is Shared Code)
	
	If you are unsure of how to properly configure and run the GroupWise client,
	contact Novell GroupWise support for assistance.
	
	GroupWise is manufactured by Novell, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
