---
layout: page
title: "Q236584: 128-Bit RAS Client Is Authenticated but Cannot Use Resources"
permalink: /kb/236/Q236584/
---

## Q236584: 128-Bit RAS Client Is Authenticated but Cannot Use Resources

{% raw %}

	Article: Q236584
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5 
	- Microsoft Windows NT Workstation version 4.0 SP5 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT 4.0 Service Pack 5 (SP5), Windows NT 4.0-based
	128-bit Remote Access Services (RAS) clients can successfully dial in to a RAS
	server, but cannot access the server's network adapter or any other device on
	the network. The issue occurs when you are using the Require Data Encryption
	option with the Require Microsoft Encrypted Authentication setting. The client
	is unable to ping any TCP/IP interface on the remote network, including the
	Microsoft Virtual Private Networking Adapter (NDISWAN) IP address that the
	server assigned to the client. This behavior does not occur with 40-bit RAS
	clients or Microsoft Windows 95/Microsoft Windows 98 clients.
	
	Routing and Remote Access Services (RRAS) Dial-on-Demand (DOD) connections that
	use direct dial (Point-to-Point Protocol, or PPP), not Point-to-Point Tunneling
	Protocol (PPTP), are also affected when you are using 128-bit updates with the
	Require Data Encryption option with the Require Microsoft Encrypted
	Authentication setting
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q172215 How to Force 128-bit Data Encryption for RAS
	
	Additional query words: encryption
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
