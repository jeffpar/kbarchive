---
layout: page
title: "Q218173: COMTI &#91;MC_&#93;ALLOCATE Hangs After Host Rejects SNA Server BIND Req"
permalink: /kb/218/Q218173/
---

## Q218173: COMTI &#91;MC_&#93;ALLOCATE Hangs After Host Rejects SNA Server BIND Req

{% raw %}

	Article: Q218173
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A COM Transaction Integrator (COMTI) request may stop responding (hang) and fail
	to complete if the host rejects SNA Server's BIND request. Although this problem
	has been observed when using COMTI, this problem can occur with any APPC or CPIC
	application that attempts to allocate a conversation by setting rtn_ctl =
	AP_WHEN_CONWINNER_ALLOCATED (to request an LU6.2 conversation over a contention
	winner session).
	
	NOTE: The COMTI feature included in SNA Server 4.0, 4.0 SP1, and 4.0 SP2 only
	requests contention winner sessions.
	
	CAUSE
	=====
	
	The SNA Server was failing to de-queue a client allocation request for a
	contention winner session when the remote system rejects the request. This
	occurs only when the host has also initiated LU6.2 sessions to SNA Server where
	SNA Server is the contention loser.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	WORKAROUND
	==========
	
	The problem can be avoided by correcting the host system configuration to
	prevent the SNA Server BIND request from being rejected. When this problem
	occurs, the host successfully establishes LU6.2 sessions where SNA Server is the
	contention loser, but rejects SNA Server requests to establish an LU6.2
	contention winner session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 4.0.
	This problem was first corrected in SNA Server version 3.0 Service Pack 4 and
	SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
