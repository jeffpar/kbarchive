---
layout: page
title: "Q97652: MHS: How Priority Levels are Mapped to Microsoft Mail"
permalink: /kb/097/Q97652/
---

## Q97652: MHS: How Priority Levels are Mapped to Microsoft Mail

	Article: Q97652
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Novell Message Handling Service (MHS) has three message priority levels, which
	the Microsoft Mail Gateway to MHS maps as logically as possible to its own
	priority levels.
	
	Here are the priorities and what they are mapped to:
	
	MS-DOS Client
	-------------
	
	  1 - Low
	  2 - Medium
	  3 - Medium
	  4 - Medium
	  5 - High
	  R - High
	
	Windows Client
	--------------
	
	  Low - Low
	  Normal - Medium
	  High - High
	
	Messages with return receipts are classified as high priority, even though within
	Microsoft Mail a return receipt does not affect priority.
	
	NOTE: There may be interoperability problems when some other systems map
	priorities to MHS. Messages received with unknown priority are mapped to the
	medium priority.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
