---
layout: page
title: "Q236122: SNA Server Doesn't Support AV/PV for APPC Conversation Security"
permalink: /kb/236/Q236122/
---

## Q236122: SNA Server Doesn't Support AV/PV for APPC Conversation Security

	Article: Q236122
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An APPC Transaction Program configured to run on SNA Server may receive a BIND
	from the Host indicating support for the Already Verified (AV) and Persistent
	Verification (PV) in the BIND Security Support Indicators.
	
	During subsequent conversation processing, if the Transaction Program changes
	conversation security from AP_NONE to AP_SAME in subsequent ALLOCATES, the APPC
	session may fail with a Primary Return Code : 0003 (AP_ALLOCATION_ERROR),
	Secondary Return Code : 080F6051 (AP_SECURITY_NOT_VALID), and the following
	event may be logged in the Windows NT Application Log:
	
	  Event ID: 63
	  Source: SNA Server
	  Description: Incorrect password received from client for logged on user.
	  EXPLANATION
	  An invalid password was specified for a signed-on PV user (user ID: user).
	  This password will be forwarded to the host to verify. If the password has
	  changed, then the host will accept the new password, and the conversation
	  will continue without persistent verification.
	  ACTION
	  If host rejects password, then check password, and try again.
	
	CAUSE
	=====
	
	SNA Server fails to correctly implement user credential manipulation when the
	APPC conversation security is changed between ALLOCATE verbs.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2. This problem was first
	corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The problem is that when both AV and PV are specified, SNA Server treats the
	message as a hybrid of both.
	
	In the APPC library, the password is stripped out because it is AV. In the SNA
	Server, as a result of the issue discussed in the following Microsoft Knowledge
	Base article:
	
	  Q222121 Enhanced Security When Using Persistent Verification
	
	the Attach is rejected because SNA Server thinks it is PV, but there is no
	password. SNA Server rejects the Attach by stripping out the security indicator
	and letting the Host deal with it. The correct behavior when the Host accepts AV
	and PV, and the application specifies security=AP_SAME, is specified in the
	following Microsoft Knowledge Base article:
	
	  Q180866 Persistent Verification Support for APPC Sessions
	
	Namely, if SNA Server doesn't recognize that the user is signed on to the Host,
	it sends an Attach with the AV bit set and the PV bits set to "sign-on
	requested." The Attach does not include a password. If SNA Server recognizes the
	user as signed on, SNA Server sends an Attach with the AV bit set and the PV
	bits set to "already signed on." Again, the Attach doesn't include a password.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
