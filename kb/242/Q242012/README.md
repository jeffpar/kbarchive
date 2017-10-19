---
layout: page
title: "Q242012: Performance Monitor Does Not Append the .log File Extension"
permalink: /kb/242/Q242012/
---

## Q242012: Performance Monitor Does Not Append the .log File Extension

	Article: Q242012
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a performance monitor log file in Performance Monitor
	after choosing Save As Log, the .log file extension is not automatically
	appended to the name of the file. For example, the file that is created has no
	file extension and appears as an unknown file type, and you cannot open this
	file in Performance Monitor unless it has the .log extension.
	
	RESOLUTION
	==========
	
	To work around this problem, use any of the following methods:
	
	- Manually add the .log extension to the file name before saving or starting
	  the log.
	
	- Add the .log extension to the unknown file after it has been created.
	
	- When using the data from box to view a log, type "*.*" (without the quotation
	  marks) in the File Name box so that all files are displayed. Select the log
	  file that does not have the .log extension.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about creating a performance monitor log, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q150934 How to Create a Performance Monitor Log for NT Troubleshooting
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
