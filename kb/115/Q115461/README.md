---
layout: page
title: "Q115461: FAX: Kortex Software Has No Control of Board-Level Queue"
permalink: /kb/115/Q115461/
---

## Q115461: FAX: Kortex Software Has No Control of Board-Level Queue

	Article: Q115461
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Kortex FAX board software has no control of the board-level queue: it cannot
	clear a current process or clear the queue of pending outgoing faxes. This is a
	design limitation.
	
	If the Kortex board-level FAX queue is out of synch with the RRS.FAX file, you
	have to reinstall the Kortex software.
	
	
	Additional query words: 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300a
	Version           : :3.0a
	
	=============================================================================
	
