---
layout: page
title: "Q149013: XCLN: Schedule+ 1.0a for the Macintosh May Not Display Details"
permalink: kb/149/Q149013/
---

## Q149013: XCLN: Schedule+ 1.0a for the Macintosh May Not Display Details

	Article: Q149013
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:1.0,3.1c; winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop exc4
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Schedule+, version 1.0, on platform(s):
	   - the operating system: Mac OS (all) 
	- Microsoft Mail for AppleTalk Networks, version 3.1c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you design an Electronic Form for version 1.0a of Microsoft Schedule+ for
	the Apple Macintosh, the details will not be correctly displayed if the
	addressee is a Microsoft Exchange Server recipient who has automatically been
	added to the Personal Address Book in version 3.1c of Microsoft Mail for
	AppleTalk Networks.
	
	CAUSE
	=====
	
	This is not a problem with the Microsoft Exchange Server or with the Microsoft
	Exchange Connection Gateway. The problem developed because of a change made
	between versions 3.1c and 3.1d of Mail for AppleTalk Networks.
	
	RESOLUTION
	==========
	
	Add the Microsoft Exchange Server recipient addresses to the Personal Address
	Book manually, or upgrade to version 3.1d of Microsoft Mail for AppleTalk
	Networks.
	
	MORE INFORMATION
	================
	
	Version 3.1d of Mail for AppleTalk Networks Macintosh client will show these
	details correctly. The details can also be viewed successfully in either version
	3.1c or 3.1d if a custom recipient has been manually created.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop exc4 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbScheduleSearch
	Version           : WINDOWS:1.0,3.1c; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
