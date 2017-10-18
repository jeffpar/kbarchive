---
layout: page
title: "Q275366: Restarting APPC Print Sessions Results in a Pending Status"
permalink: kb/275/Q275366/
---

## Q275366: Restarting APPC Print Sessions Results in a Pending Status

	Article: Q275366
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you stop and restart active APPC (5250) print sessions in SNA Server Manager,
	the APPC print sessions may remain in a "Pending" state when you view their
	status. The APPC print sessions are unavailable for use when this problem
	occurs.
	
	CAUSE
	=====
	
	The Advanced Program-to-Program Communications (APPC) printing subsystem was
	redesigned in SNA Server 4.0 SP3 to use IO Completion Ports (IOCP) for increased
	scalability. This change in the APPC printing threading model causes incorrect
	handling of APPC print session cleanup when a session is stopped through SNA
	Server Manager. The print server fails to send a TP_ENDED (Hard) to the AS/400
	(or S/36) when the session is stopped, which causes the AS/400 Writer for print
	device to stay active. The APPC print session cannot activate successfully while
	its Writer is active, which causes the print session to stay in a Pending state.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	WORKAROUND
	==========
	
	To activate an APPC print session once it is in the Pending state, do one of the
	following:
	
	- Stop and restart the SNA Print (Snaprint.exe) service. If there are active
	  APPC (and/or 3270) print sessions, stopping this service will cause all print
	  sessions to end, and therefore this process may need to be scheduled so that
	  active print sessions are not affected.
	
	- Stop the Writer for the affected print session or sessions on the AS/400. The
	  following is one example of how this can be done:
	
	  a. Stop the affected APPC print session in SNA Server Manager.
	
	  b. Open a 5250 session to the AS/400 by using an AS/400 user account that has
	     sufficient privilege to perform administrative functions.
	
	  c. Type the following command at the AS/400 command prompt:
	
	  "ENDWTR PRT1" (without the quotation marks)
	
	     NOTE: PRT1 should be replaced with the AS/400 Device Name that is used by
	     the affected print session.
	
	  d. Type the following command to view the AS/400 device description for the
	     print session:
	
	  "WRKDEVD PRT1" (without the quotation marks)
	
	  e. Enter 8 (Work with Status) on the Option (Opt) column, and then press
	     ENTER.
	
	  f. Enter 2 (Vary Off) in the Option column for the print device (PRT1 in this
	     example), and then press ENTER.
	
	  g. Enter 1 (Vary On) in the Option column for the print device, and then
	     press ENTER.
	
	  h. Start the APPC print session in SNA Server Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : :4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
