---
layout: page
title: "Q140822: Winlogon Traps Running Performance Monitor Against SNA Server"
permalink: /kb/140/Q140822/
---

## Q140822: Winlogon Traps Running Performance Monitor Against SNA Server

{% raw %}

	Article: Q140822
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Performance Monitor against an SNA Server, Winlogon traps after
	several hours of operation. The SNA Server services continue to run. However,
	the following symptoms occur:
	
	- Users are not able to logon locally to the SNA Server.
	
	- RPC services such as the following do not function:
	
	   - When Performance Monitor gathers details.
	
	   - When you try to view events in the system, security, or application logs.
	
	This symptom occurs sporadically.
	
	CAUSE
	=====
	
	There is a problem in the way the SNA performance DLL is passing information to
	Performance Monitor.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file <snaroot>\SYSTEM\SNAPERF.DLL to correct
	this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51 performance monitor winlogon trap
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
