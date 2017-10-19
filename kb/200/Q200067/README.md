---
layout: page
title: "Q200067: Server-Side Session Variables Do Not Work in Internet Explorer"
permalink: /kb/200/Q200067/
---

## Q200067: Server-Side Session Variables Do Not Work in Internet Explorer

	Article: Q200067
	Product(s): Internet Information Server
	Version(s): WINDOWS:4.0,4.01; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows 95 
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you configure Microsoft Internet Explorer 4.0 or 4.01 to "Browse in a new
	process," any windows that you open are actually opened in a different process
	from the main window, resulting in a loss of server-side session variables.
	
	MORE INFORMATION
	================
	
	To disable "Browse in a new process," follow these steps:
	
	1. Close all instances of Internet Explorer.
	
	2. Open Control Panel and choose Internet.
	
	3. Go to the Advanced tab.
	
	4. Under Browsing, clear the check box for "Browse in a new process."
	
	5. Click OK to save the change.
	
	Additional query words: IIS 4.0 NTOP
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbIEsearch kbiis400 kbZNotKeyword2 kbIENT400Search kbIE95Search kbZNotKeyword3 kbIE400Win95 kbIE401Win95 kbIE400WinNT400 kbIE401WinNT400
	Version           : WINDOWS:4.0,4.01; winnt:4.0
	
	=============================================================================
	
