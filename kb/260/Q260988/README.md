---
layout: page
title: "Q260988: Capture RE Fails When You Use TCP/IP MS LINK Component"
permalink: /kb/260/Q260988/
---

## Q260988: Capture RE Fails When You Use TCP/IP MS LINK Component

	Article: Q260988
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Diagnostic Capture Remote Environment to make a recording file of
	a COM Transaction Integrator (COMTI) TCP/IP MS LINK component, an event 110 is
	logged with the following description:
	
	  
	
	  (110) COM Transaction Integrator reported the following exception to the client:
	
	Component: TCP_MSLINK.CedarBank.1
	Method: cedrbank
	
	Exception description:
	  (1223) COM Transaction Integrator was unable to perform a distributed
	  program link to the Remote Environment (hr=0x8004ff04).  If a more specific
	  exception has been logged by another COM Transaction Integrator component,
	  follow the prescribed actions.  Otherwise, report the sequence of operations 
	  that caused this failure to Microsoft customer support.
	
	EXPLANATION
	  An Automation exception representing a warning-level error was returned 
	  to a COM Transaction Integrator client. The description shown above contains 
	  more information  about the exception that was reported.
	
	ACTION
	  The exception may be caused by application or user errors. See the exception 
	  description for more information or corrective actions.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	Additional query words: comti
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
