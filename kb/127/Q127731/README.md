---
layout: page
title: "Q127731: MHS: Err Msg: General Outpost Failure"
permalink: kb/127/Q127731/
---

## Q127731: MHS: Err Msg: General Outpost Failure

	Article: Q127731
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail may not move from the MHS OUT directory. The MHSGATE.LOG file records the
	line:
	
	  GENERAL OUTPOST FAILURE
	
	CAUSE
	=====
	
	The postoffice is missing the INQUEUE3.MBG and INQUEUE3.KEY files. Therefore,
	when OUTPOST.EXE runs, it cannot move the mail into the postoffice.
	
	RESOLUTION
	==========
	
	Restore the specified files from a backup of the postoffice data files. If a
	backup is not available, contact Microsoft Product Support Services.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
