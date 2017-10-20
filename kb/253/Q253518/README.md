---
layout: page
title: "Q253518: Time Stamp on Files on Windows NT 3.51 Server Is Changed"
permalink: /kb/253/Q253518/
---

## Q253518: Time Stamp on Files on Windows NT 3.51 Server Is Changed

{% raw %}

	Article: Q253518
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, files that are accessed on a Windows NT 3.51-based
	server from a Microsoft Windows 2000-based client may have their file date
	changed to the year 1619, 1601, or another value.
	
	CAUSE
	=====
	
	The problem is caused by OLE, which sets the file's time stamp to 0xffffffff
	(-1) for all file time properties. This special -1 file time is supported by
	Windows 2000 and Microsoft Windows NT 4.0, but not by Windows NT 3.51.
	
	RESOLUTION
	==========
	
	A post-Service Pack 5 (SP5) hotfix is available for Windows NT 3.51.
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Size            File name      Platform
	  -------------------------------------------------
	  2/3/00    327,312 bytes   Ntfs.sys       Intel
	  1/17/00   810,576 bytes   Ntoskrnl.exe   Intel
	
	
	
	Additional query words: date
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
