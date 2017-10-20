---
layout: page
title: "Q193209: Gethostbyname Not Working Correctly with Only DUN Installed"
permalink: /kb/193/Q193209/
---

## Q193209: Gethostbyname Not Working Correctly with Only DUN Installed

{% raw %}

	Article: Q193209
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your system has only Dial Up Networking (DUN) installed and you are not
	connected to anything, name resolution to your local host may fail.
	
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
	
	MORE INFORMATION
	================
	
	To test name resolution to your local host, perform the following steps:
	
	1. Click Start, click Programs, and click Command Prompt.
	
	2. At the command prompt type the following:
	
	  c:\ping localhost
	
	Name resolution is successful if you get a response back that looks like the
	following:
	
	  Pinging <your machine name> [127.0.0.1] with 32 bytes of data:
	  Reply from 127.0.0.1: bytes=32 time<10ms TTL=128
	  Reply from 127.0.0.1: bytes=32 time<10ms TTL=128
	  Reply from 127.0.0.1: bytes=32 time<10ms TTL=128
	  Reply from 127.0.0.1: bytes=32 time<10ms TTL=128
	
	Name resolution is not working if the response is:
	
	  bad ip address
	
	Additional query words: RAS DUN Name Resolution
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
