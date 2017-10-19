---
layout: page
title: "Q137246: Windows 3.x APPC Application Fails with F002 (AP_TP_BUSY) Error"
permalink: /kb/137/Q137246/
---

## Q137246: Windows 3.x APPC Application Fails with F002 (AP_TP_BUSY) Error

	Article: Q137246
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
	
	The Microsoft SNA Server APPC Programmer's Reference documents the following
	reason for a primary return code of F002 (AP_TP_BUSY) error:
	
	  F002 AP_TP_BUSY
	
	  The Local TP has issued a call to APPC while APPC was processing another call
	  for the same TP. This may occur if the local TP has multiple threads, and
	  more than one thread is issuing APPC calls using the same tp_id.
	
	However, this is not the only possible cause of this error when running the
	Windows 3.x client. The SNA Server Windows 3.x APPC interface also returns
	AP_TP_BUSY (primary return code = F002) to an application if it calls into the
	APPC interface from a Windows procedure from SendMessage().
	
	Applications that talk over the CPIC interface may also encounter this problem
	because the CPIC API communicates over the APPC API. If this APPC error is
	returned to the CPIC interface as a result of a CMINIT call, CPIC returns Error
	20 (product specific error) to the application. To see if this error is
	occurring, SNA Server Windows 3.x CPIC and APPC API tracing must be enabled. For
	additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q123256 Enabling SNA Server Windows 3.x Client Traces
	
	Some third party applications require do not run reliably on the SNA Server
	Windows 3.x client software unless the TP_BUSY check is disabled. Wall Data
	Rumba AS/400 Shared Folders requires that the TP_BUSY check is disabled.
	
	CAUSE
	=====
	
	This additional TP_BUSY check is done by the APPC interface to prevent a
	possible deadlock within Windows.
	
	RESOLUTION
	==========
	
	Using the SNA Server 2.11 Windows 3.x client software, the following parameter
	can be set in the [wnap] section of WIN.INI file to disable this SendMessage
	check:
	
	  SendMessageCheck=NO
	
	The SNA Server Windows client process (WNAP) must be stopped and started to
	enable this change.
	
	WARNING: This parameter should be used with caution, since it can lead to
	deadlocks from within Windows, depending on the other Windows applications that
	are running on the computer.
	
	STATUS
	======
	
	Microsoft has implemented this setting within the SNA Server 2.11 Windows client
	software. SNA Server 2.0 and 2.1 customers should upgrade to SNA Server 2.11.
	
	
	Additional query words: prodsna 2.00 2.10 2.11 tp_busy F002
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
