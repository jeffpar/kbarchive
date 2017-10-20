---
layout: page
title: "Q215358: GetWindowsDirectory May Return Incorrect Data"
permalink: /kb/215/Q215358/
---

## Q215358: GetWindowsDirectory May Return Incorrect Data

{% raw %}

	Article: Q215358
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Out of process COM server applications that attempt to discover the location of
	the Windows folder by calling the GetWindowsDirectory() API may fail when run on
	Windows NT Server version 4.0, Terminal Server Edition.
	
	For example, when the Orgchart application supplied with Microsoft Office is
	started as an embedded object, Orgchart fails with the following error message
	when it tries to write to the Windows folder:
	
	  Unable to load MS Organization Chart. Press F1 for Help.
	
	This message is followed by:
	
	  The server application, source file, or item can't be found. You should
	  reinstall the server application.
	
	CAUSE
	=====
	
	On Windows NT Server, Terminal Server Edition, the GetWindowsDirectory() API
	should return the user's home folder, not the real Windows folder. The real
	Windows folder is write-protected for "ordinary" users. When the server
	application (Orgchart.exe in the above example) subsequently attemps to write to
	the folder, the write request fails.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 wts tse DCOM COM COM+
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
