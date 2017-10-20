---
layout: page
title: "Q241338: Windows NT Lan Manager 3 Logon Prevents Other Logon Activity"
permalink: /kb/241/Q241338/
---

## Q241338: Windows NT Lan Manager 3 Logon Prevents Other Logon Activity

{% raw %}

	Article: Q241338
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client uses Windows NT LAN Manager version 2 authentication (also known
	as NTLMv2) that is configured with the LmCompatibilityLevel setting to 3 or
	higher to make a connection to a server running Windows NT 4.0 before a console
	user has logged on interactively or some other client has performed network
	logon using LAN Manager or NTLMv1 authentication, one of the following symptoms
	may occur on the server:
	
	- The server may generate an "access violation" error message, possibly
	  relating to the LSASS service. This may occur on both the server and the
	  client during startup, especially during periods of heavy network logon
	  traffic.
	
	- The domain name field may not appear on the logon screen of the server even
	  though the user name and password fields do. You may not be able to log on to
	  the domain because this indicates that the domain controller cannot be found.
	
	- Your logon attempt may not work, and you may receive the following error
	  message:
	
	  The system cannot log you on (C0000037). Please try again or consult your
	  system administrator.
	
	CAUSE
	=====
	
	This behavior occurs because the Windows NT LAN Manager version 2 (level 3+)
	logon is received and processed by the server before the NlSamInitialize
	function is called, causing an "Access violation" error message. Also, at this
	time Lsass.exe generates a "STATUS_PORT_DISCONNECTED" error message, which
	prevents subsequent logon attempts from succeeding.
	
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
	
	Windows NT 4.0 supports Windows NT challenge/response (or Windows NT LAN Manager
	challenge/response) as a method of authentication, along with Basic
	Authentication and Anonymous Access. Microsoft has developed an enhancement to
	NTLM called Windows NT LAN Manager version 2 which uses a 128-bit
	password-derived key and significantly improves session security mechanisms.
	
	For more information about Windows NT LAN Manager version 2, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q147706 How to Disable LM Authentication on Windows NT
	
	This behavior may not occur when the following situations circumvent the issues
	involved:
	
	- When a server service that runs using a user account starts before the first
	  non-anonymous logon.
	
	- When a user interactively logs on to the server console before the first
	  non-anonymous logon occurred.
	
	- When a client computer is not configured to send Windows NT LAN Manager
	  version 2 only (level 3) as the first non-anonymous logon
	
	
	Additional query words: ntlmv2 ntlm invalid handle invalid_handle 6
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
