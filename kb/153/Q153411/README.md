---
layout: page
title: "Q153411: Default APPC Are Not Resolved Correctly for OS/2 Clients"
permalink: /kb/153/Q153411/
---

## Q153411: Default APPC Are Not Resolved Correctly for OS/2 Clients

{% raw %}

	Article: Q153411
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	APPC applications using the Microsoft SNA OS/2 client that make a call to a
	default local LU or remote LU may fail.
	
	CAUSE
	=====
	
	The TP_STARTED verb is passing a local LU alias of all zeroes. Therefore the
	APPC library goes into default LU processing, which is to query the user record
	from the SNA server. For OS/2, this is done by calling the sepdcrec()function.
	The wrong information is being returned on this call, which is causing the APPC
	library to believe that the LU alias for this user is a one byte value of 0x01.
	When the APPC library tries to use this as the local LU alias, the SNA Server
	rejects it.
	
	The OS/2 APPC library's support for extracting a local LU for a particular user
	was broken when the OS/2 DMODs sepdcrec() processing was changed to use RPC
	calls to query the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.1 and 2.11. This problem was corrected in the latest Microsoft SNA Server 2.11
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: OS/2 APPC TPs
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
