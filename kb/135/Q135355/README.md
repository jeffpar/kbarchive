---
layout: page
title: "Q135355: Event 11 (1178) Causes SNA Server to Fail Abnormally"
permalink: kb/135/Q135355/
---

## Q135355: Event 11 (1178) Causes SNA Server to Fail Abnormally

	Article: Q135355
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Local APPC LU / Remote APPC LU partnership is defined in the SNA Server
	configuration file, SNA Server automatically negotiates the parallel session
	limit with the remote system when the connection that owns the Remote APPC LU is
	started. This negotiation occurs over an SNASVCMG mode session between these
	APPC LUs, using the Change Number of Sessions (CNOS) command as defined by IBM
	SNA architecture.
	
	When a large number of APPC LUs are configured in SNA Server and SNA Server is
	started, SNA Server builds the SNASVCMG mode BIND messages and CNOS commands for
	all these LU/LU/mode partnerships and queues them internally until they can be
	processed. If there are so many partnerships that the internal SNA Server queue
	becomes exhausted, SNA Server logs the following event in the Windows NT
	application event log:
	
	  Event 11 (1178) Initialization Failure
	  1178 = Insufficient resources for automatic session limit negotiation
	
	After this error occurs, the SNA Server service terminates.
	
	
	CAUSE
	=====
	
	SNA Server interprets this condition as a fatal error, causing the SNA Server
	service (SNASERVR.EXE) to generate an SNA Server dump file.
	
	RESOLUTION
	==========
	
	You can correct this problem by installing an SNA Server 2.11 fix that is now
	available. This fix reduces the severity of the error so that SNA Server
	attempts to recover from the condition, rather than failing. Microsoft has
	updated the file SNASERVR.EXE to correct this problem.
	
	To work around the problem without installing the fix:
	
	- Reduce the number of APPC LU partnerships.
	
	  Using the SNA Server Admin program, select each Local APPC LU, choose the
	  Partners button, and delete any LU/LU/mode partnerships that are not being
	  used. When the Enable Automatic Partnering checkbox is selected on an APPC LU
	  or Mode, this can cause extra LU/LU partnerships that are not intended.
	
	- Reduce the number of automatically activated sessions.
	
	  Within the SNA Server APPC mode definition, the Automatic Activation Limit can
	  be configured to automatically bind a specified number of LU6.2 sessions when
	  the connection is started. Automatically starting an LU6.2 session ahead of
	  time makes the session immediately available for an LU6.2 conversation.
	  However, the overhead necessary to start an LU6.2 session is often
	  negligible, so automatic session activation is often unnecessary.
	
	  Reducing the automatic activation limit will reduce the number of BIND
	  messages that SNA Server will queue internally.
	
	- Defer CNOS processing until sessions are needed.
	
	  The SNA Server service can be configured to defer the APPC LU CNOS processing
	  until the LU sessions are actually requested by APPC applications. This
	  feature can be enabled using the following registry entry:
	
	     HKEY_LOCAL_MACHINE
	     \SYSTEM\CurrentControlSet\Services\SnaServr\Parameters
	     NOINITCNOS: REG_SZ: YES
	
	  This setting will cause SNA Server to defer CNOS processing until an APPC
	  application allocates a conversation over an APPC LU pair.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 Event 11 1178 cnos
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
