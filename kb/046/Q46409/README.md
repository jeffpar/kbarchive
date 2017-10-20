---
layout: page
title: "Q46409: Err Msg: &quot;Cannot Read From Drive A&quot;"
permalink: /kb/046/Q46409/
---

## Q46409: Err Msg: &quot;Cannot Read From Drive A&quot;

{% raw %}

	Article: Q46409
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to swap applications or access different files in Microsoft Windows,
	you receive the following error message:
	
	  Cannot read from Drive A:
	
	CAUSE
	=====
	
	All applications try to read from the default drive during their execution. When
	Drive A is the active or default drive, and the disk is removed without changing
	directories, the executed application accesses the drive and returns the "Cannot
	read from Drive A" error message.
	
	RESOLUTION
	==========
	
	If you receive this message after activating Drive A from File Manager and then
	executing another application, check to see if there is a disk in Drive A. If
	there isn't, insert a disk into Drive A and retry.
	
	Additional query words: 3.00 3.0 3.0a 3.00a WIN30 WIN31 3.10 2.x MS-DOS Executive errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
