---
layout: page
title: "Q165664: RPC Encoding API &quot;MesInqProcEncodingId&quot; May Not Work"
permalink: /kb/165/Q165664/
---

## Q165664: RPC Encoding API &quot;MesInqProcEncodingId&quot; May Not Work

{% raw %}

	Article: Q165664
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbAPI kbRPC kbSDKPlatform kbGrpDSNet
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "MesInqProcEncodingId" application programming interface (API), that is
	supposed to return the interface ID and the procedural number used in procedural
	encoding of a remote procedure call (RPC) interface method to a user specified
	buffer, always seems to return an interface ID of 00000000- 0000-
	0000-0000-000000000000} and procedural number of 0 when called with a decoding
	handle before decoding the buffer. This happens for both fixed style and
	procedural encoding/decoding.
	
	CAUSE
	=====
	
	The MesInqProcEncodingId API is not functioning properly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbAPI kbRPC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
