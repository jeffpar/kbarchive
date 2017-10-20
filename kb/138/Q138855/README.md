---
layout: page
title: "Q138855: SNA Server Incorrectly Flips Sense Code Sent by RUI App."
permalink: /kb/138/Q138855/
---

## Q138855: SNA Server Incorrectly Flips Sense Code Sent by RUI App.

{% raw %}

	Article: Q138855
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Sense codes from a BIND negative response sent by an RUI application are sent
	incorrectly by SNA Server. For example, if an RUI application rejects a BIND
	request with a sense code of 0821000E, a SNA trace shows SNA Server sending a
	sense code of 2108000E instead.
	
	For LUA applications, the primary sense code is flipped and the secondary sense
	code stays in the correct format.
	
	For 3270 Emulator Interface Specification (3270EIS) applications, the primary
	sense code stays in the correct format and the secondary sense code is flipped.
	
	CAUSE
	=====
	
	When an RUI application closes a session with a BIND negative response, or an
	UNBIND request and attaches sense codes, the primary sense code is flipped when
	it is sent out by SNA Server.
	
	
	RESOLUTION
	==========
	
	Microsoft has modified the files, SNASERVR.EXE and WINRUI32.DLL, with the
	updated versions that correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
