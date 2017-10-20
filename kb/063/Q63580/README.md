---
layout: page
title: "Q63580: File Manager Search Command Hangs Windows 3.0"
permalink: /kb/063/Q63580/
---

## Q63580: File Manager Search Command Hangs Windows 3.0

{% raw %}

	Article: Q63580
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Windows File Manager Search command causes Windows to stop
	responding (hang).
	
	CAUSE
	=====
	
	An invalid search string used in the Search dialog box causes this problem.
	
	For example, the following process hangs the system:
	
	1. Run File Manager.
	
	2. From the File menu, choose Search.
	
	3. Change *.* to .COM (note: NO leading asterisk).
	
	The system is now unstable. ALT+TAB opens the Program Manager, at which point you
	must exit and restart Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.0. This
	problem was corrected and does not occur in later versions of Windows.
	
	Additional query words: 3.0 3.00 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
