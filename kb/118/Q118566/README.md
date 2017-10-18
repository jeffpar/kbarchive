---
layout: page
title: "Q118566: X400: General Information on Checkpoint Size"
permalink: kb/118/Q118566/
---

## Q118566: X400: General Information on Checkpoint Size

	Article: Q118566
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to X.400 records negotiated checkpoint sizes greater
	than 0 in the log file (m:\log\x400mmdd.log). If the negotiated size is 0,
	nothing is recorded in the log file.
	
	The X.400 gateway always proposes a size of 0, but sometimes other MTAs respond
	with a different value. The X.400 gateway transmits messages with any value for
	the checkpoint size, but a checkpoint size > 0 indicates that session
	recovery is implemented and the X.400 gateway does not implement session
	recovery.
	
	
	Additional query words: 3.00 x400 checkpoint size
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
