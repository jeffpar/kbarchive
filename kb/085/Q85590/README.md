---
layout: page
title: "Q85590: SETUP.INF &#91;run&#93; Section Ignores File Named SETUP.XXX"
permalink: /kb/085/Q85590/
---

## Q85590: SETUP.INF &#91;run&#93; Section Ignores File Named SETUP.XXX

{% raw %}

	Article: Q85590
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a line is added to the SETUP.INF file in the [run] section to launch a
	Windows-based application that is named SETUP.XXX, the line is ignored by
	Windows Setup, regardless of where the file is located (where XXX is the file's
	extension).
	
	CAUSE
	=====
	
	The [run] section of the SETUP.INF file is where you put any programs that are
	to be run at the end of the Windows 3.1 Setup program. Even if a file named
	SETUP.XXX is located on a network drive, or another directory on the local PC,
	Windows Setup ignores the line in the SETUP.INF file in the [run] section if the
	file is named SETUP.XXX.
	
	WORKAROUND
	==========
	
	To work around this problem rename the file to something else. For Example,
	adding any additional letter to the beginning of the name will permit Windows
	Setup to launch the other Setup program. (For example, change the name of Setup
	for Microsoft Word from SETUP.EXE to WSETUP.EXE.)
	
	NOTE: The filename of INSTALL.XXX will execute correctly when listed in the [run]
	section of the SETUP.INF file (where XXX is the file's extension).
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
