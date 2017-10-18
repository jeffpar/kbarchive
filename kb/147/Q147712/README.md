---
layout: page
title: "Q147712: Application Exception When AppleTalk Clients Try Connecting"
permalink: kb/147/Q147712/
---

## Q147712: Application Exception When AppleTalk Clients Try Connecting

	Article: Q147712
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server stops responding (hangs) and Appletalk client computers are
	unable to attain session connections. In the Event Viewer, the following
	application events appear:
	
	  Event ID: 624
	  Source: SNADUMP.LOG
	  Description: A process SNABASE.EXE ended abnormally due to a protection
	  violation, or similar condition.
	
	  Event ID: 4097
	  Source: Dr. Watson Log
	  This application, SNABASE.DBG generated an applicaiton error. The error
	  occurred on <date>. The exception generated was C0000005 at address
	  <address>.
	
	A portion of the DRWTSN32.LOG file states the following:
	
	  App: snabase.DBG (pid=160)
	       When: <date> @ <time>
	       Exception number: c0000005 (access violation)
	
	NOTE: Your DRWTSN32.LOG file will appear somewhat different than this example.
	
	
	CAUSE
	=====
	
	The SNAAT.DLL send routine is not checking to see if the L-Table is already in a
	closing state. Therefore, it tries to access its pending queue, which has been
	released. This causes the application exception in SNABASE.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 and 2.11
	Service Pack 1. This problem was corrected in the latest Microsoft SNA Server
	2.11 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
