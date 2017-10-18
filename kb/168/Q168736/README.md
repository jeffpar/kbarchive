---
layout: page
title: "Q168736: XFOR: Invalid PO During Migration From PC Mail"
permalink: kb/168/Q168736/
---

## Q168736: XFOR: Invalid PO During Migration From PC Mail

	Article: Q168736
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When administrators use the Microsoft Exchange Migration Wizard and specify the
	location of the MS Mail postoffice, they may receive the following error
	message:
	
	  Invalid Postoffice
	
	Administrators can log on to the target postoffice and users can send and
	retrieve messages without problems.
	
	CAUSE
	=====
	
	File corruption within the MS Mail postoffice core files (Access.glb,
	Access2.glb, and Access3.glb) are out of synch.
	
	RESOLUTION
	==========
	
	Restore valid Access.glb, Access2.glb, and Access3.glb files from backup. To
	determine if the files are corrupt, use the following formula:
	
	Divide the size of the file by the number specified next to the chart. All files
	should produce the same resulting number.
	
	       File                   Divide By
	       ====                   =========
	     Access.glb                  586
	     Access2.glb                  69
	     Access3.glb                 512
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
