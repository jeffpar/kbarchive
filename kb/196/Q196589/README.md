---
layout: page
title: "Q196589: Extended Characters are Displayed Incorrectly in Convlog.exe"
permalink: kb/196/Q196589/
---

## Q196589: Extended Characters are Displayed Incorrectly in Convlog.exe

	Article: Q196589
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Convlog.exe command-line utility to convert your Web server's
	log files to NCSA Common Log File format in a directory with extended
	characters, the extended characters are displayed incorrectly in Convlog.exe
	status messages returned to the display. There is also a problem logging to
	extended character directories.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
