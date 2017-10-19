---
layout: page
title: "Q132878: PC Ext: START Status Message on External"
permalink: /kb/132/Q132878/
---

## Q132878: PC Ext: START Status Message on External

	Article: Q132878
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.2 of the Message Transfer Agent (MTA) or Multitasking MTA (MMTA),
	when you press the F2 key, one of the status messages that may appear is START.
	Normally, either OK for a working connection or NO-REF for an externally defined
	postoffice not participating in that session of External will appear on screen.
	
	CAUSE
	=====
	
	The START status may be caused by one of the following conditions:
	
	1. A lost or poor network connection from the machine running External to the
	  postoffice.
	
	2. The external instance is now unable to access RNETSEM.GLB or MASTER.GLB on
	  the postoffice.
	
	RESOLUTION
	==========
	
	Verify the integrity of the network connection between the MTA and the
	postoffice. Check for appropriate access rights, locked or open files, and disk
	space. If necessary, cold boot the MTA machine.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
