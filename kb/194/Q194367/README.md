---
layout: page
title: "Q194367: Assigning LUA LUs to a 3270 Display Pool Results in a Drwatson"
permalink: /kb/194/Q194367/
---

## Q194367: Assigning LUA LUs to a 3270 Display Pool Results in a Drwatson

	Article: Q194367
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In SNA Server Manager, assigning logical units (Lus) of different types may
	cause an application exception to occur and a Drwtsn32.log to be created. For
	example, if you have both 3270 display LUs and logical unit application (LUA)
	LUs, and try to assign them to a pool, an exception may occur.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 Service
	Pack 1. This problem was corrected in the latest SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1
	Version           : WINDOWS:4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
