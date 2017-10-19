---
layout: page
title: "Q249017: Print Job May Stop Responding and Event ID 2004 May Be Displayed"
permalink: /kb/249/Q249017/
---

## Q249017: Print Job May Stop Responding and Event ID 2004 May Be Displayed

	Article: Q249017
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Base Terminal Server 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print jobs may stop responding (hang) in the print queue for an extended period
	of time. In addition, Event ID 2004 may be displayed in the application log.
	
	CAUSE
	=====
	
	Line printer remote (LPR) printing in Terminal Server Edition (Service Pack 3
	and Service Pack 4) defaults to TCP ports 512-1023. Unless the target line
	printer daemon (LPD) server supports using this non-RFC 1179 specified port
	range, print jobs do not spool to the LPD server unless the randomly selected
	port does not work within the supported LPD port range (typically, 721-731 for
	RFC 1179).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	This behavior is fixed in Windows NT Server 4.0, Terminal Server Edition,
	Service Pack 5.
	
	MORE INFORMATION
	================
	
	LPR printing in Windows NT 4.0 Service Pack 2 (SP2) and earlier used TCP ports
	512-1023 by default. Windows NT 4.0 Service Pack 3 (SP3) and later uses TCP
	ports 721-731 for TCP/IP printing by default. This allows the TCP/IP printing
	service to use the same port range specified in the "3.1 Message Formats"
	section of RFC 1179.
	
	In addition, there are two registry entries you can use to configure LPR in SP3,
	to enable the use of TCP port 1024 and greater. For additional information about
	setting LPR printers so they are RFC compliant, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q141708 Printing to LPD Printer Is Slow or Fails with Windows NT
	
	For additional information about updated TCP/IP printing options, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q179156 Updated TCP/IP Printing Options for Windows NT 4.0 SP3 and Later
	
	
	Additional query words: fail fails
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch kbAudDeveloper kbWBTSearch
	Version           : :4.0,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
