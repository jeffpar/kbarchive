---
layout: page
title: "Q95972: PC Ext: Dispatch Cannot Spawn External with Break Options"
permalink: kb/095/Q95972/
---

## Q95972: PC Ext: Dispatch Cannot Spawn External with Break Options

	Article: Q95972
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dispatch tries to spawn External as an idle process and then Dispatch aborts the
	idle process and reports:
	
	  external -btxx:xx:xx terminated with exit code -1
	
	If specified, -bt will be replaced with -bdxx-xx-xx.
	
	CAUSE
	=====
	
	The command line for External contains break time options -bt or -bd. Dispatch
	appends a break relative time to the idle process command line automatically;
	thus, it cannot resolve the proper break time if -bt or -bd is already
	specified.
	
	RESOLUTION
	==========
	
	To correct this problem, do not run External with a defined break time.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
