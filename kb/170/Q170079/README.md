---
layout: page
title: "Q170079: XWEB: Frame or Memory Errors Using OWA On WFW  3.11/ Windows 3.x"
permalink: /kb/170/Q170079/
---

## Q170079: XWEB: Frame or Memory Errors Using OWA On WFW  3.11/ Windows 3.x

	Article: Q170079
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Outlook Web Access (OWA) client on a computer running
	Windows 3.x or Windows for Workgroups 3.11, you may receive errors stating that
	frames did not load or that there was a memory problem.
	
	When you run Microsoft Internet Explorer or Netscape Navigator and use the
	Microsoft TCP/IP stack for Windows for Workgroups, you may receive an error when
	connecting to a Microsoft Exchange Server computer using the OWA client. The
	error for Internet Explorer may state a problem loading frames and the Error for
	Netscape Navigator will state that there may be a memory problem.
	
	RESOLUTION
	==========
	
	In the Tcputils.ini file, which is usually located in the Lanman.dos directory,
	change NUMSOCKETS to a value of at least 10.
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
