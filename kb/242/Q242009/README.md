---
layout: page
title: "Q242009: Stop 0x0000000A Error in Tcpip.sys Caused by Damaged Packets"
permalink: /kb/242/Q242009/
---

## Q242009: Stop 0x0000000A Error in Tcpip.sys Caused by Damaged Packets

{% raw %}

	Article: Q242009
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbWinNT4sp6fixkbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the CopyRcvToBuffer() function on a Multiprocessor File Transfer
	Protocol (FTP) server, you may receive a Stop 0x0000000A error message in the
	Tcpip.sys file on a blue screen.
	
	CAUSE
	=====
	
	This problem can occur if the CopyRcvToBuffer() function encountered an invalid
	or damaged packet.
	
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
	
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	If you continue to experience this problem after you apply service pack 6, you
	may need to apply the fix described in the article listed below:
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q242060 Stop 0x0000000A in TCPIP.SYS Caused By Ipr_Buffer Size
	
	Additional query words: 0xA mp crash hang dump multi processor
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbWinNT4sp6fix kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
