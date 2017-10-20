---
layout: page
title: "Q188445: PRB: Marisa.dll Causes Movie Clip Errors in Mastering Series"
permalink: /kb/188/Q188445/
---

## Q188445: PRB: Marisa.dll Causes Movie Clip Errors in Mastering Series

{% raw %}

	Article: Q188445
	Product(s): Microsoft Mastering Series
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 19-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Mastering Products, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run movie clips from Mastering Series software, one of the
	following errors occurs:
	
	  Method of object failed, mod function "view_marissa"
	
	  -or-
	
	  Runtime error 6 Overflow
	
	CAUSE
	=====
	
	These errors are caused by an old version of Marissa.dll.
	
	RESOLUTION
	==========
	
	The current version of Marissa.dll file is available as part of an .exe file
	from the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/release.asp?ReleaseID=30288
	
	After you have downloaded and expanded this file, copy Marissa.dll to the
	Windows\System or WinNT\System32 directory on your hard disk.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbMSPressSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
