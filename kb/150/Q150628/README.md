---
layout: page
title: "Q150628: Event 3 May Indicate Excessive APPC LU Partnerships"
permalink: /kb/150/Q150628/
---

## Q150628: Event 3 May Indicate Excessive APPC LU Partnerships

	Article: Q150628
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you define too many LU-LU partnerships, SNA Server will run out of Internal
	Mode Control Blocks. You may get the following Dr. Watson error message in SNA
	Server:
	
	  80000003 (hardcoded breakpoint).
	
	In addition, the following Event 3 will be logged in the Application Event log:
	
	  
	
	  Event ID: 3 (1102) Node Configuration Error
	  EXPLANATION:
	  The SNA server (node) detected a configuration file problem caused by a
	  logic error in the configuration program. These subcodes should not
	  occur during normal operation.
	
	
	CAUSE
	=====
	
	Each LU-LU partnership requires one Internal Mode Control Block (IMCB), and an
	additional IMCB is reserved if the LU is defined for parallel sessions. The
	limit is 4096 Internal Mode Control Blocks per SNA Server.
	
	For example, a configuration with 240 connections (each with 1 LU defined) and a
	node with 10 local LUs (each partnered with every remote LU) will result in the
	use of 2400 Mode control blocks. In addition, if the LUs support parallel
	sessions, each is implicitly partnered with the SNASVCMG mode for CNOS, taking
	up another 2400 control blocks, for a total of 4800 control blocks. Therefore,
	the node reports the error and terminates.
	
	WORKAROUND
	==========
	
	Reduce the number of LOCAL LUs configured. Each local LU that is removed saves
	2*partner LU Mode control blocks.
	
	Additional query words: 2.00 2.11 2.11.sp1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbprb
	
	=============================================================================
	
