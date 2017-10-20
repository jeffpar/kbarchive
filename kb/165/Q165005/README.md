---
layout: page
title: "Q165005: Windows NT Slows Down Because of Land Attack"
permalink: /kb/165/Q165005/
---

## Q165005: Windows NT Slows Down Because of Land Attack

{% raw %}

	Article: Q165005
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After receiving spoofed connection request (SYN) packets, Windows NT may begin
	to operate slowly. After about one minute, Windows NT returns to normal
	operation.
	
	NOTE: This problem may occur with TCP/IP on other operating systems as well.
	
	CAUSE
	=====
	
	This behavior occurs because of "Land Attack." Land Attack sends SYN packets
	with the same source and destination IP addresses and the same source and
	destination ports to a host computer. This makes it appear as if the host
	computer sent the packet to itself. Windows NT operates more slowly while the
	host computer tries to respond to itself.
	
	RESOLUTION
	==========
	
	Microsoft has updated Tcpip.sys to correct the problem. Instructions for
	installing it are available from Microsoft support channels, or directly from
	the Internet locations below.
	
	NOTE: This hotfix was originally posted on November 26, 1997. A subsequent fix
	was completed on January 9, 1998 to address another nearly identical attack and
	this hotfix has replaced the original one. The original hotfix is included in
	Windows NT 4.0 Service Pack 3. The most recent hotfix is not; however, it is
	available from the following Internet locations:
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40
	  /hotfixes-postSP3/teardrop2-fix/
	
	NOTE: The above link is one path; it has been wrapped for readability.
	
	NOTE: This fix supercedes the Land-fix, the ICMP-fix and the OOB-fix hotfixes.
	
	Windows NT 3.51
	---------------
	
	To resolve this problem in Windows NT 3.51, obtain the following fix or wait for
	the next Windows NT service pack.
	
	This fix should have the following time stamp:
	
	  01/14/98  12:04p               123,824 Tcpip.sys   (Intel)
	  01/14/98  12:00p               216,848 Tcpip.sys   (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 4.0. This problem was first corrected in
	Windows NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server
	Edition Service Pack 4.
	
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 3.51. A fully supported fix is now
	available, but it has not been fully regression tested and should only be
	applied to systems determined to be at risk of attack. Please evaluate your
	system's physical accessibility, network and Internet connectivity, and other
	factors to determine the degree of risk to your system. If your system is
	sufficiently at risk, Microsoft recommends you apply this fix. Otherwise, wait
	for the next Windows NT service pack, which will contain this fix. Please
	contact Microsoft Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	For information on the hotfix for Windows 95, please see the following article
	in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q177539
	  TITLE : Windows 95 Stops Responding Because of Land Attack
	
	Additional query words: port 139
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
