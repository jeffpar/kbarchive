---
layout: page
title: "Q163209: SNA Server Fails to Send STSN Error from SLI Application"
permalink: /kb/163/Q163209/
---

## Q163209: SNA Server Fails to Send STSN Error from SLI Application

{% raw %}

	Article: Q163209
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an SLI application registers an SLI_STSN_ROUTINE to handle the Set and Test
	Sequence Numbers (STSN) command from the host PLU, the SLI application may
	accept or reject the host sequence number.
	
	If the SLI application rejects this command, it sets the lua_primary_rc to
	LUA_NEGATIVE_RSP and overwrites the STSN RU with the appropriate sense code
	error. However, SNA Server only sends a TERMSELF to the host, and fails to send
	the error indicated by the SLI application.
	
	CAUSE
	=====
	
	The SNA Server SLI interface issues an RUI_TERM immediately after the RUI_WRITE
	that contained the sense data indicated by the SLI application. The SNA Server
	incorrectly drops the RUI_WRITE sense data, and only sends the TERMSELF
	resulting from the RUI_TERM.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 Service Pack 1 is available to correct this
	problem. The updated module is Snaservr.exe.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11 and 2.11 Service Pack 1 (SP1); this problem is fixed in SNA Server 3.0.
	
	
	A supported fix is now for 2.11 SP1, but has not been fully regression- tested
	and should be applied only to systems experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft recommends that
	you wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
