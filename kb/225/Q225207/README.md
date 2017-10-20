---
layout: page
title: "Q225207: APPC/CPIC App Unable to Allocate Conversation over Dependent LU"
permalink: /kb/225/Q225207/
---

## Q225207: APPC/CPIC App Unable to Allocate Conversation over Dependent LU

{% raw %}

	Article: Q225207
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0SP3,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0SP3, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An APPC or CPI-C application may fail to get an active conversation with a
	remote APPC LU if a previous conversation with a different remote APPC LU using
	the same dependent local APPC LU has ended. For example, if there was a
	conversation over a dependent local LU, "LOCAL," and a remote LU, "REMOTE1," an
	APPC or CPI-C application may fail to get an active conversation over dependent
	local LU "LOCAL" and remote LU "REMOTE2" even if the previous conversation has
	ended.
	
	When this occurs, the APPC or CPI-C application call to [MC_]ALLOCATE or CMALLC
	never completes. If the application does not use a timeout, the ALLOCATE will
	appear to hang since the call does not complete. If the application does have a
	timeout, the timeout will cancel the outstanding ALLOCATE, and return an error.
	
	For additional information about a related problem in earlier versions of SNA
	Server, please see the following article in the Microsoft Knowledge Base:
	
	  Q180416 APPC or CPI-C TPs May Fail When Using Dependent LU 6.2 Sessions
	
	NOTE: This problem can only occur when using Dependent LU 6.2 sessions and does
	not occur when using Independent LU 6.2 sessions.
	
	CAUSE
	=====
	
	A similar problem was corrected in earlier versions of SNA Server as described
	in article Q180416. SNA Server was modified to send an UNBIND Cleanup to the
	host to end the previous session that is no longer being used. In this case, the
	UNBIND Cleanup is treated as an error by the CICS Region on the host, so CICS
	attempts to re-establish the session over the local APPC LU/remote APPC LU that
	was previously being used. CICS sends a BIND to the SNA Server to re-establish
	this session. SNA Server responds with a BIND +RSP, which causes the ALLOCATE
	for the new session over the same local APPC LU and a different remote APPC LU
	to hang because the local APPC LU is already in use.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0 SP3, 4.0 SP1, and 4.0 SP2. This problem was first corrected in SNA Server
	version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	After applying the update, SNA Server will issue an UNBIND Normal to end the
	previously used session instead of an UNBIND Cleanup. This is not treated as an
	error by CICS on the mainframe, so it will not attempt to re-establish the
	previous session.
	
	This problem only occurs with dependent LU 6.2 LUs because they can only support
	one concurrent session at a time. Independent LU 6.2 LUs can support multiple
	parallel sessions concurrently, so a new session request to a different remote
	LU can be fulfilled without ending the previous session.
	
	The following is a sequence of events that can lead to this problem assuming the
	following APPC LUs are defined in the SNA Server configuration:
	
	Local APPC LU: LOCAL (defined as a dependent LU 6.2 LU)
	Remote APPC LU: REMOTE1
	Remote APPC LU: REMOTE2
	APPC Mode: APPCMODE
	
	1. An APPC or CPI-C application successfully establishes a session over the
	  following APPC triplet: LOCAL/REMOTE1/APPCMODE.
	
	2. The application executes a transaction over the previously established
	  session and ends the conversation.
	
	3. An APPC or CPI-C application requests a session over the following APPC
	  triplet: LOCAL/REMOTE2/APPCMODE.
	
	4. SNA Server issues an UNBIND Cleanup to end the original session established
	  in Step 1.
	
	5. SNA Server sends an INITSELF command to the host to solicit a BIND for the
	  new session over LOCAL/REMOTE2/APPCMODE.
	
	6. The host responds with an INITSELF +RSP for this new session request.
	
	7. The host then sends a BIND to re-establish the original session over
	  LOCAL/REMOTE1/APPCMODE.
	
	8. At this point, the requested session over LOCAL/REMOTE2/APPCMODE cannot start
	  until the original session is ended. This causes the ALLOCATE to be queued
	  such that it appears to hang or timeout depending on the APPC/CPI-C
	  application.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0SP3,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
