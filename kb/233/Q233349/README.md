---
layout: page
title: "Q233349: Cluster Service Issues Event 1015 Every 4 Hours with SP5"
permalink: kb/233/Q233349/
---

## Q233349: Cluster Service Issues Event 1015 Every 4 Hours with SP5

	Article: Q233349
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Windows NT 4.0 Service Pack 5 on a server computer
	configured with Microsoft Cluster Server (MSCS), the cluster service logs the
	following event in the System Event log every four hours:
	
	  Event 1015 No checkpoint record was found in the log file W:\MSCS\chkBC1.tmp,
	  the checkpoint file is invalid or was deleted.
	  The cluster servers are still working normal.
	
	CAUSE
	=====
	
	The error event is unnecessarily logged every four hours. Occurrences of this
	event at four hour intervals may be ignored and do not indicate a problem.
	
	RESOLUTION
	==========
	
	Windows NT Server, Cluster Server, or Workstation 4.0
	-----------------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
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
	
	
	WORKAROUND
	==========
	
	To work around this problem, check the Event Viewer prior to the four-hour
	interval and see if you are receiving this event from a real cluster problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words: Event ID 1015
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
