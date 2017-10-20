---
layout: page
title: "Q109495: Windows Err Msg:  Setup Error #3, Setup is unable to copy..."
permalink: /kb/109/Q109495/
---

## Q109495: Windows Err Msg:  Setup Error #3, Setup is unable to copy...

{% raw %}

	Article: Q109495
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade to a later version of Windows or Windows or Windows
	for Workgroups, you may receive the following error during Setup:
	
	  Setup Error #3
	  Setup is unable to copy the file
	  ...
	  For assistance, write down the number of this message, and then call product
	  support.
	
	This message is often followed by:
	
	  Memory allocation error
	
	and then
	
	  Cannot load COMMAND, system halted
	
	CAUSE
	=====
	
	The error is generated if the WIN.INI file is larger than approximately 50
	kilobytes in size.
	
	After you run Windows or Windows for Workgroups for a period of time, the WIN.INI
	file can become quite large, especially if you have installed a third-party font
	package.
	
	RESOLUTION
	==========
	
	To properly install Windows for Workgroups, reduce the size of the WIN.INI file.
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
