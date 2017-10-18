---
layout: page
title: "Q137997: XCLN: Message Finder Does Not Save View"
permalink: kb/137/Q137997/
---

## Q137997: XCLN: Message Finder Does Not Save View

	Article: Q137997
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Column changes in the Message Finder dialog box are not saved when you switch
	folders.
	
	CAUSE
	=====
	
	The Microsoft Exchange Windows client does not keep track of changes to the view
	descriptors between instances of switching folders in the Message Finder. When
	you switch folders in the Message Finder, Exchange reloads the view descriptor
	for the folder and uses that as the starting view.
	
	This is by product design.
	
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
