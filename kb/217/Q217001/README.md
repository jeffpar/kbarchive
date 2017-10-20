---
layout: page
title: "Q217001: GetHostByName API Returns Unbindable Addresses"
permalink: /kb/217/Q217001/
---

## Q217001: GetHostByName API Returns Unbindable Addresses

{% raw %}

	Article: Q217001
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 4, Windows Sockets applications
	using the "bind()" function with IP address information retrieved using
	"GetHostByName()" to return localhost IP addresses may fail and return the
	following error message:
	
	  10049 (WSAEADDRNOTAVAIL)
	
	CAUSE
	=====
	
	A change was introduced in Service Pack 4 that causes NDISWAN Services to return
	IP addresses in the order in which they are bound. This change resulted in IP
	addresses not currently bound to the TCP/IP stack to be returned when making a
	call to the Winsock API function GetHostbyName(). Sockets applications using the
	"bind()" function for individual addresses returned from "GetHostByName()" on
	systems running the RAS (Remote Access Server) Service may experience this
	problem.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This hotfix has been posted to the following Internet location as Rnr-fixi.exe
	(x86) and Rnr-fixa.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/Rnr-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 4.
	This problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00 sp4
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
