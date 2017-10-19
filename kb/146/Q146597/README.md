---
layout: page
title: "Q146597: XCLN: Open Copy of Message Doesn't Close When Source Deleted"
permalink: /kb/146/Q146597/
---

## Q146597: XCLN: Open Copy of Message Doesn't Close When Source Deleted

	Article: Q146597
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the source of an open message is deleted from the Microsoft Exchange
	Viewer, the open message does not automatically close.
	
	CAUSE
	=====
	
	This is by design.
	
	Microsoft Exchange no longer closes open notes when they are moved or deleted
	from other sources. Microsoft Exchange is a multi-document interface (MDI), and
	each opened message opens into its own separate autonomous form called a Read
	Note.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
