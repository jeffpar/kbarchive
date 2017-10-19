---
layout: page
title: "Q138860: SNA Server Events 94 and 592 Fill Up Application Log"
permalink: /kb/138/Q138860/
---

## Q138860: SNA Server Events 94 and 592 Fill Up Application Log

	Article: Q138860
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
	
	When an APPC transaction program (TP) issues a RECEIVE_ALLOCATE which times out
	(due to the APPC TP's Timeout value expiring), the Windows NT application log
	fills up with the following SNA Server events:
	
	  Event 94: APPC remote conversation start failed
	
	  Event 592: Receive Allocate has timed out
	
	CAUSE
	=====
	
	This problem occurs when you run an APPC TP for a long time and the APPC TP is
	designed to periodically re-issue a RECEIVE_ALLOCATE call even though no
	incoming conversation startup request arrives for the TP.
	
	SNA Server always logs these events, regardless of what default audit log level
	you configure in the Logs dialog box that appears in SNA Server Admin when you
	choose Logs from the Options menu.
	
	RESOLUTION
	==========
	
	To resolve this problem you may obtain an update from Microsoft or work around
	the problem as described below.
	
	
	Update
	------
	
	Obtain the update to SNA Server 2.11 which reduces the audit log level of event
	94 and event 582. To prevent these events from logging, you must set the default
	audit log level to Significant System Events in the Logs dialog box by choosing
	Logs from the Options menu in SNA Admin.
	
	NOTE: When SNA Server is installed, the default audit log level is already set
	for Significant System Events.These events are still logged if the SNA Server
	logging level is set for General Information Messages or Detailed Problem
	Analysis.
	
	Workaround
	----------
	
	To work around this problem and prevent the events from being logged, increase
	the Timeout parameter of the TP within the registry. The Timeout parameter
	determines the time that a RECEIVE_ALLOCATE waits for an incoming attach message
	before returning an error. For manually started invokable TPs, the Timeout
	parameter is configured in the registry under the HKEY_LOCAL_MACHINE subtree. If
	the TP is written as an application, the Timeout value is found under:
	
	  SYSTEM\CurrentControlSet\Services\SnaBase\Parameters
	     \TPs\<tpname>\Parameters
	
	where <tpname> is the name of the transaction program. If the TP is written
	as a Windows NT service, the Timeout value can be found under:
	
	  SYSTEM\CurrentControlSet\Services\<tpname>\Parameters
	
	where <tpname> is the name of the transaction program.
	
	  Value Name: Timeout
	  Data Type:  REG_DWORD
	  Value:      <time in milliseconds>
	
	If there is no entry configured, the timeout defaults to infinite, so the
	RECEIVE_ALLOCATE never times out and Event 94 and 592 do not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
