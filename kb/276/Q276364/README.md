---
layout: page
title: "Q276364: LU-LU Test Fails with Active AS/400 Connection"
permalink: /kb/276/Q276364/
---

## Q276364: LU-LU Test Fails with Active AS/400 Connection

{% raw %}

	Article: Q276364
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft SNA Server operator has an active connection to an AS/400 and
	then attempts to verify LU 6.2 session availability for a given Advanced
	Program-to-Program Communications (APPC) triplet (for example local LU, remote
	LU, and mode name) by using the APPC Session Viewer utility, and the test fails,
	look for the following event in the Microsoft Windows NT Application Event log:
	
	  event id 18
	
	  APPC session activation failure: BIND negative response or UNBIND request
	  received
	
	  Sense data = 80040000 (NOTE: 0032xxxx indicates UNBIND received)
	  Connection = connection
	  LU alias = lu alias
	  PLU alias = plu alias
	  Mode name = mode name
	
	CAUSE
	=====
	
	SNA Server sent a BIND request to start an LU version 6.2 session with the
	remote system, but the remote system rejected the request for the reason
	indicated in the sense data error. This error is usually caused by a mismatch
	between the SNA Server configuration and the configuration of the remote system
	(for example, the Local APPC LU name, Remote APPC LU name or mode name specified
	in the SNA BIND request may not be configured on the host).
	
	RESOLUTION
	==========
	
	Make certain that the "Remote APPC LU" name that is created on the SNA server
	matches the "Local Control Point Name" on the AS/400.
	
	For additional information and configuration examples that show how SNA Server
	can be configured to communicate with an AS/400, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q112158 Configuring SNA Server to Talk to AS/400 Over 802.2
	
	  Q112159 Configuring SNA Server to Talk to AS/400 Over SDLC
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
