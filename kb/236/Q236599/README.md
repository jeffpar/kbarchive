---
layout: page
title: "Q236599: Win32 SLI Application Ends Unexpectedly with No Errors"
permalink: kb/236/Q236599/
---

## Q236599: Win32 SLI Application Ends Unexpectedly with No Errors

	Article: Q236599
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	While running a Win32 SLI application on SNA Server or an SNA Windows NT client,
	the application may end unexpectedly with no errors reported in the Windows NT
	event logs, and no Drwtsn32.log entry created. When this problem occurs, all SNA
	sessions supported by the application end.
	
	CAUSE
	=====
	
	The Winsli32.dll may encounter an access violation in WINSLI32!ipcOutput while
	processing the session end because of the way it queues RUI responses. No
	Drwtsn32.log entry is created because the SLI DLL catches the exception within
	its own exception handler. The key sequence of events is as follows:
	
	- SLI issues RUI_TERM.
	- SLI receives the RUI_TERM completion and queues this up.
	- The application issues a SLI_RECEIVE, which results in SLI issuing an
	  RUI_READ.
	- SLI receives the RUI_READ completion (CANCELED-TERMINATED) and queues it up.
	- SLI dequeues the RUI_TERM and frees its session CB and all associated VCBs,
	  including the RUI_READ VCB that has just been queued.
	- SLI dequeues the RUI_READ completion causing an access violation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in SNA
	Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
