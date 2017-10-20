---
layout: page
title: "Q153253: SNA Server 3270 Sessions Not Recovered with Eicon WAN Server"
permalink: /kb/153/Q153253/
---

## Q153253: SNA Server 3270 Sessions Not Recovered with Eicon WAN Server

{% raw %}

	Article: Q153253
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you simulate a link failure using an EICON SDLC card with the following
	test, the sessions go into an unrecoverable state:
	
	1. Configure the Eicon card to detect a link failure after 30 seconds.
	
	2. Set up the LU sessions over the Eicon Link to the host (LU-LU sessions).
	
	3. Disconnect the cable and then reconnect in 5 to 10 seconds.
	
	At this point, the sessions that were active do not recover. However, the LUs
	that were not in session are able to connect.
	
	If you wait more than 30 seconds to reconnect the cable, the EICON card will
	detect the link failure, and SNA Server will recover properly.
	
	
	CAUSE
	=====
	
	SNA Server fails to inform the emulator correctly of the PU reactivation and the
	emulator does not know that its PLU-SLU session has disappeared. This fix makes
	the SNA Server treat ACTPU(ERP) requests from the host as if they were
	ACTPU(COLD) and resets all the underlying LU-SSCP and PLU-SLU sessions.
	
	If you want to continue with the existing implementation, a new registry entry
	has been added. It is called ACTPUERP, under
	\\HKLM\System\CurrentControlSet\Services\SnaServr\Parameters. It is a REG_SZ
	value, and when it is set to any value, it will re-enable ERP support. If it is
	not present, all ACTPUs will be treated as COLD.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 2.0, 2.1,
	2.11, and 2.11.sp1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
