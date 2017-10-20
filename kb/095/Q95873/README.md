---
layout: page
title: "Q95873: GP Fault in PROGMAN.EXE with More Than 40 Program Groups"
permalink: /kb/095/Q95873/
---

## Q95873: GP Fault in PROGMAN.EXE with More Than 40 Program Groups

{% raw %}

	Article: Q95873
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you upgrade to Windows version 3.1 on a system with Windows 3.0 that has more
	than 40 program groups, the following error message occurs when Setup attempts
	to create the program groups:
	
	  Progman.exe caused a General Protection Fault in Progman.exe.
	
	Choosing Ignore allows Setup to continue, but the same error message occurs each
	time Windows 3.1 is started.
	
	CAUSE
	=====
	
	Windows 3.0 has no limit on the number of program groups that can be created in
	Program Manager; however, Windows 3.1 is limited to 40 groups.
	
	RESOLUTION
	==========
	
	To solve this problem, edit the PROGMAN.INI file and reduce the number of groups
	that are loading to fewer than 40 groups.
	
	This can be accomplished as follows:
	
	1. Open PROGMAN.INI in Notepad to edit the PROGMAN.INI file.
	
	2. Locate the [Groups] section.
	
	3. After the [Groups] section, you will see lines beginning with the word
	  "GroupX," where X is the group number. For example:
	
	       Group1=c:\Windows\main.grp
	
	4. Remove the extra GroupX= lines by placing a semicolon (;) at the beginning of
	  the extra lines until you have no more than 40 groups. For example, let's say
	  you have groups called Example and Example2, and you don't use these groups
	  very often. Remove them from you list of active groups by adding a semicolon
	  as follows:
	
	        ;Group40=c:\Windows\example.grp
	        ;Group41=c:\Windows\example2.grp
	
	5. Save the file and start Windows as usual.
	
	For more information about Program Manager's restrictions on the number of
	program groups or items, query on the following words in the Microsoft Knowledge
	Base:
	
	  program and manager and group and item and limit and maximum
	
	Additional query words: gpf 3.10 3.11 mouse820 mouse90 0003:0870
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
