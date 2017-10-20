---
layout: page
title: "Q98762: Use the Load= Line to Load VSafe Manager (MWAVTSR.EXE)"
permalink: /kb/098/Q98762/
---

## Q98762: Use the Load= Line to Load VSafe Manager (MWAVTSR.EXE)

{% raw %}

	Article: Q98762
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 74 of the "User's Guide" incorrectly instructs you to place the VSafe
	Manager icon in the Windows 3.1 Startup group. For best results, VSafe Manager
	should be loaded from the Load= statement in the [windows] section of the
	WIN.INI file as follows:
	
	  load=mwavtsr.exe
	
	NOTE: Do not add a second load= line; add MWAVTSR.EXE to the existing load= line,
	along with any other programs also being loaded. It is preferable to have
	MWAVTSR.EXE listed first on this line.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
