---
layout: page
title: "Q97047: PC WRmt: Network List Shows Blank Line for Current Postoffice"
permalink: kb/097/Q97047/
---

## Q97047: PC WRmt: Network List Shows Blank Line for Current Postoffice

	Article: Q97047
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Mail Remote version 3.2 for Windows, when you create a custom view
	and select all Network Postoffices and all Users on Postoffices, the Address
	Book shows a blank line after the name of the network on which the user resides.
	
	CAUSE
	=====
	
	In the network list, one network has only one postoffice (the local postoffice).
	The network list has an entry without a postoffice because the postoffice list
	names the postoffice. If Mail listed each local postoffice in the network list,
	the network list would duplicate the local postoffice list.
	
	For example, in the network Microsoft, the WGC postoffice list is as follows:
	
	 Personal Address Book
	 Global Address List
	 Postoffice List ----|   Because these two lists would be the same,
	 Other Networks      |-- Mail does not show PO1 as a postoffice.
	   Network1          |   Consequently, the Network1 network contains
	      PO1 -----------|   no postoffice.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
