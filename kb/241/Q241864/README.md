---
layout: page
title: "Q241864: GP Fault Using Internet Explorer with TLS 1.0 and HTTPS"
permalink: kb/241/Q241864/
---

## Q241864: GP Fault Using Internet Explorer with TLS 1.0 and HTTPS

	Article: Q241864
	Product(s): Microsoft Windows NT
	Version(s): 4.0,5
	Operating System(s): 
	Keyword(s): kbenv kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Internet Explorer version 5 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive "general protection fault" (GP fault) error messages when you
	visit a secure Web site using transport layer security (TLS) 1.0 security. Note
	that Internet Explorer does not enable TLS 1.0 security by default.
	
	CAUSE
	=====
	
	The TLS protocol causes the server to send a list of trusted client Certificate
	Authorities (CAs) to the client. In this case, the size of the list is larger
	than the software can handle.
	
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
	
	To determine if TLS 1.0 is enabled, click Internet Options on the Tools menu in
	Internet Explorer, and then click the Advanced tab.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbIEsearch kbZNotKeyword2 kbIENT400Search kbIE500Search kbZNotKeyword3 kbIE500WinNT400
	Version           : :4.0,5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
