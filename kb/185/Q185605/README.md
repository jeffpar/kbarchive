---
layout: page
title: "Q185605: Stop Error Caused by Invalid Use of Private Video Driver Handle"
permalink: /kb/185/Q185605/
---

## Q185605: Stop Error Caused by Invalid Use of Private Video Driver Handle

{% raw %}

	Article: Q185605
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	The video corruption is caused by the use of an invalid paintbrush handle. After
	the video corruption occurs and usage continues, the application will trap with
	a 0x0000021a error. The video corruption will show itself as a failure to scroll
	the entire image. The system becomes unstable at this point and other graphical
	problems arise such as the mouse pointer turning black or using some system icon
	for is image.
	
	
	SYMPTOMS
	========
	
	You may notice a display scrolling problem with Intergraph's Microstation
	running on Windows NT 4.0 with multiple processors. The monitor will show only
	part of the display during scrolling and will be corrupted by other bitmaps such
	as other system bitmaps. When this occurs and you continue to use the
	application, you will receive the following stop error:
	
	  STOP: 0x0000021a
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: This fix only addresses the stop error message you receive. For information
	about how to resolve the problem with video corruption, please contact the
	program's manufacturer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
