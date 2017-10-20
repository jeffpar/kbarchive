---
layout: page
title: "Q192190: MS-DOS Window Does Not Allow Full-Screen Option"
permalink: /kb/192/Q192190/
---

## Q192190: MS-DOS Window Does Not Allow Full-Screen Option

{% raw %}

	Article: Q192190
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows Terminal Server client, if you open an MS-DOS window, go to
	Properties and click to select Full Screen, nothing happens and properties are
	reset to window.
	
	CAUSE
	=====
	
	Full screen mode requires the loading of font sets. This was deemed too
	intensive an activity to allow in the client because performance would suffer
	greatly.
	
	STATUS
	======
	
	This feature is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
