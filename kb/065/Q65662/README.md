---
layout: page
title: "Q65662: WINDIR Environment Variable Set When Running Windows"
permalink: /kb/065/Q65662/
---

## Q65662: WINDIR Environment Variable Set When Running Windows

{% raw %}

	Article: Q65662
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	Microsoft Windows version 3.0 sets the WINDIR environment variable whenever
	any program, including a MS-DOS program, is run under it. WINDIR is set to
	the directory where WIN.COM is found. This is usually C:\WINDOWS. The
	WINDIR variable is removed from the MS-DOS environment when you exit
	Windows.
	
	As a result, MS-DOS applications can detect whether they are running under
	Windows. If WINDIR is set to a valid name, the application is running under
	Windows.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
