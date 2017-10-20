---
layout: page
title: "Q94699: WinLogin Err Msg: Out of Memory"
permalink: /kb/094/Q94699/
---

## Q94699: WinLogin Err Msg: Out of Memory

{% raw %}

	Article: Q94699
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Configuration Manager of WinLogin, you can add files to the listings of
	Users, Groups, Workstations, and Administrators. When you add files to this
	"file list," a file named WLMERGE.INI is created and/or updated with this
	information. If this file reaches 971 bytes in size, the Configuration Manager
	closes and displays the error message:
	
	  Out of Memory
	
	CAUSE
	=====
	
	When the WLMERGE.INI file exceeds 971 bytes in size, no error message occurs and
	no files are displayed in the file list of the Configuration Manager. No matter
	what the size of the WLMERGE.INI file, WinLogin continues to work normally. This
	limitation of the Configuration Manager does not affect the performance of
	WinLogin.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in WinLogin version 1.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.10 1.00 Confman filelist INI editor max maximum
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	

{% endraw %}
