---
layout: page
title: "Q241400: IAS Hangs When Configured as RADIUS Client for Windows 2000"
permalink: /kb/241/Q241400/
---

## Q241400: IAS Hangs When Configured as RADIUS Client for Windows 2000

{% raw %}

	Article: Q241400
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): kbinterop kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure your computer that runs Microsoft Internet Authentification
	Service (IAS) 1.0 with the RADIUS/Proxy Server service as a client for a Windows
	2000 based Remote Authentication Dial-In User Service (RADIUS) server,
	authentication requests may be denied and the RADIUS/Proxy Server service on the
	Windows NT 4.0 IAS server may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior occurs because the Proxy Server service is not decrypting and
	encrypting MS-CHAP-MPPE keys correctly.
	
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
	
	The user requesting authentication should be in the same domain as the Windows
	2000 based RADIUS Server for the RADIUS/Proxy Server service to be configured
	correctly.
	
	IAS 1.0 is available either as part of the Microsoft Internet Connection Services
	for RAS in the Microsoft Windows NT 4.0 Option Pack, or as part of the Microsoft
	Commerical Internet System (MCIS) 2.0 in the Microsoft servers suites.
	
	For additional information about Internet Authentification Service and Commerical
	Internet System software, please visit the following Microsoft Web sites:
	
	  http://www.microsoft.com/NTServer/commserv/deployment/moreinfo/ICS_FAQ.asp#4
	
	  http://www.microsoft.com/mcis/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTS400sp5 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
