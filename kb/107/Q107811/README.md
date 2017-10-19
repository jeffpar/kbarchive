---
layout: page
title: "Q107811: Several WFW&lt;nn&gt; Files in Your Windows Directory"
permalink: /kb/107/Q107811/
---

## Q107811: Several WFW&lt;nn&gt; Files in Your Windows Directory

	Article: Q107811
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	WFW<nn> files (where <nn> is a sequential number) may appear in your
	Windows directory. These files are copies of your system files (CONFIG.SYS,
	AUTOEXEC.BAT, SYSTEM.INI, and WIN.INI). Setup creates these files so that
	it can make modifications to your system. When Setup is finished, it
	removes these files.
	
	If Setup stops responding (hangs) or you stop Setup before it has completed
	installation, Windows does not remove these files from your system. You
	should manually remove them after Setup completes successfully.
	
	Additional query words: 3.11 network setup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
