---
layout: page
title: "Q248652: Dial-Up Networking Cannot Connect to 56-Bit Windows 2000 Server"
permalink: /kb/248/Q248652/
---

## Q248652: Dial-Up Networking Cannot Connect to 56-Bit Windows 2000 Server

{% raw %}

	Article: Q248652
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Microsoft Internet Explorer or Windows NT 4.0, you may not be able to
	connect to a Server Gated Cryptography (SGC) Server for strong encryption using
	an IP Address or Alias.
	
	Scenario:
	
	You disable compression on your Windows NT 4.0-based computer, and then call to
	negotiate 40-bit encryption with a server running Microsoft Windows 2000 Server
	and accepts calls only with 40-bit and 56-bit encryption. After you dial the
	server, you are disconnected.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  01/11/2000 5:35 PM            17.7K    RASCCP.dll     Alpha
	 
	  01/11/2000 5:29 PM            10.2K    RASCCP.dll     i386
	
	
	
	To work around this issue, enable Windows NT 4.0 compression.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	Cryptography defined:
	
	The processes, art, and science of keeping messages and data secure. Cryptography
	is used to enable and ensure confidentiality, data integrity, authentication
	(entity and data origin), and nonrepudiation.
	
	Server Gated Cryptography (SGC) technology, allows you to conduct 128-bit
	transactions with banks and financial institutions that support SGC.
	
	This problem was originally found in servers with Routing and Remote Access
	Service (RRAS) Server and Virtual Private Network (VPN), but may exist on other
	computers, as well.
	
	
	Additional query words: negotiating encryption , compression with 128 bit
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400PreSP7Fix 
	Component         : PPP
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
