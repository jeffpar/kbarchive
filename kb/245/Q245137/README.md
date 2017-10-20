---
layout: page
title: "Q245137: 'STOP: 0xC0000142 User32.dll' Error After Windows NT 4.0 Upgrade"
permalink: /kb/245/Q245137/
---

## Q245137: 'STOP: 0xC0000142 User32.dll' Error After Windows NT 4.0 Upgrade

{% raw %}

	Article: Q245137
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade to Microsoft Windows NT Server 4.0 Service Pack 3 and then
	restart your computer, you may receive the following error message:
	
	  STOP: 0xC0000142 User32.dll
	
	CAUSE
	=====
	
	This behavior can occur if the User32.dll and Gdi32.dll files are damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the damaged files:
	
	1. Install a parallel installation of Microsoft Windows NT Server 4.0.
	
	2. Start the computer to the parallel installation.
	
	3. Copy the User32.dll and Gdi32.dll files from the Winnt\System32 folder of the
	  parallel installation to the Winnt\System32 folder of the original
	  installation.
	
	4. Restart the computer to the original installation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
