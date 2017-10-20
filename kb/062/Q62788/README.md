---
layout: page
title: "Q62788: Setup Does Not Give You a Directory Choice"
permalink: /kb/062/Q62788/
---

## Q62788: Setup Does Not Give You a Directory Choice

{% raw %}

	Article: Q62788
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows Setup program goes directly to the system configuration screen
	without letting you specify a directory when the WINVER.EXE file is in the
	directory from which you are running Setup.
	
	This is usually only a problem if you are doing a SETUP /N from a network
	directory that has the WINVER.EXE file on it.
	
	CAUSE
	=====
	
	Setup doesn't give you a directory choice because it assumes that Windows is
	already installed if WINVER.EXE exists.
	
	WORKAROUND
	==========
	
	To correct this problem, delete the WINVER.EXE file before you run Setup. The
	file is re-created in the proper directory after Setup is run.
	
	Additional query words: win30 win31 kbsetup 3.10 3.00 3.00a novell netware 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
