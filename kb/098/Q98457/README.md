---
layout: page
title: "Q98457: Using VSAFE and Vsafe Manager (MWAVTSR.EXE) with Windows"
permalink: /kb/098/Q98457/
---

## Q98457: Using VSAFE and Vsafe Manager (MWAVTSR.EXE) with Windows

{% raw %}

	Article: Q98457
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run VSAFE with Microsoft Windows, you receive repeated messages about
	.EXE files being changed if you install or upgrade any Windows-based
	applications.
	
	CAUSE
	=====
	
	This occurs because some applications create a zero (0) byte .EXE file and then
	add to the file during the installation process. When this happens, VSAFE
	repeatedly reports that the .EXE has changed.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Run Vsafe Manager (MWAVTSR.EXE) and choose Options.
	
	2. Clear the Protect Executable Files check box and choose OK.
	
	NOTE: When you run VSAFE with Microsoft Windows, you should also run Vsafe
	Manager (MWAVTSR.EXE). This program enables VSAFE messages to be displayed in
	Microsoft Windows. You should not start VSAFE after you have started Windows,
	nor should you change any VSAFE settings.
	
	Additional query words: 6.22 6.00 Win31 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
