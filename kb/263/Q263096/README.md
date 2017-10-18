---
layout: page
title: "Q263096: ACTIVATE_SESSION Event Not Signaled When the Session Ends"
permalink: kb/263/Q263096/
---

## Q263096: ACTIVATE_SESSION Event Not Signaled When the Session Ends

	Article: Q263096
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an APPC application calls the ACTIVATE_SESSION function to start a
	dependent LU6.2 session, the deactivation_event handle may not be signaled when
	the session ends. Specifically, if the APPC application starts two dependent
	LU6.2 sessions using the ACTIVATE_SESSION function, the wrong deactivation_event
	handle may be signaled when an UNBIND is received on one of the sessions. This
	problem does not occur with independent LU6.2.
	
	NOTE: The ACTIVATE_SESSION API feature was added in Microsoft SNA Server 4.0
	Service Pack 2. For additional information, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q195010 Activate_session/Deactivate_session Unavailable in SNA Server
	
	CAUSE
	=====
	
	This problem is caused by a bug in the ACTIVATE_SESSION function in the
	Winmgt32.dll file. When the client Winmgt32.dll receives the UNBIND notification
	from SNA Server, it searches its control blocks for a match on the session ID to
	determine which event to signal. Unfortunately, with dependent LUs the session
	ID is always zero (the same for both sessions). Therefore, the wrong event
	handle (associated with a different session) can be signaled.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 4.0 SP2 and
	SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
