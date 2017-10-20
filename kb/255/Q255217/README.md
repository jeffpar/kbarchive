---
layout: page
title: "Q255217: Incorrect Output Printing from Client to Windows NT Server 4.0"
permalink: /kb/255/Q255217/
---

## Q255217: Incorrect Output Printing from Client to Windows NT Server 4.0

{% raw %}

	Article: Q255217
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print to a Microsoft Windows NT Server 4.0-based print server
	from a client computer running an earlier operating system, such as Microsoft
	Windows 95 or Microsoft Windows for Workgroups, you may experience random
	incorrect output. For example:
	
	- Bullets may not be printed correctly.
	
	- Bold titles may print as regular text, not bold.
	
	- Underlined text may be printed only as the underline, with no text.
	
	RESOLUTION
	==========
	
	To resolve this behavior, disable Enhanced Metafile (EMF) spooling on the
	server. Follow these steps:
	
	1. In the Printers folder, click the printer whose properties you want to
	  change.
	
	2. On the File menu, click Properties.
	
	3. Click PrintProcessor.
	
	4. Click Always Spool RAW Datatype.
	
	MORE INFORMATION
	================
	
	For additional information about EMF printing in Windows NT 4.0, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q155676 Enhanced Metafile Spooling Architecture in Windows NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
