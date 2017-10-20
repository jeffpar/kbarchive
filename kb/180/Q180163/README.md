---
layout: page
title: "Q180163: INI/CFG Files Corruption w/ Windows NT 4.0, Terminal Server"
permalink: /kb/180/Q180163/
---

## Q180163: INI/CFG Files Corruption w/ Windows NT 4.0, Terminal Server

{% raw %}

	Article: Q180163
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user application is installed using the Add/Remove Programs tool in
	Control Panel, the application-specific INI and CFG files are copied to the
	Windows folder.
	
	If the application is installed using the "All users begin with common
	application settings" option the application-specific INI and/or CFG files are
	propagated to each user's personal Windows folder
	(%SystemRoot%\Profiles\<user name>\Windows).
	
	If any of the INI or CFG files have a line containing more than 512 characters,
	the files may not be copied correctly, resulting in the destination files
	containing corrupted data. When this happens, the application works as normal in
	Install mode (change user /install) but may not work correctly in Execute
	(default) mode.
	
	CAUSE
	=====
	
	Terminal Server does not properly handle a line having more than 512 characters
	in INI and CFG files. The designed limit for line length is 1,024 characters.
	
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
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
