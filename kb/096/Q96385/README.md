---
layout: page
title: "Q96385: CTRL+BREAK Hangs System If Running CHKDSK with BREAK=ON Line"
permalink: /kb/096/Q96385/
---

## Q96385: CTRL+BREAK Hangs System If Running CHKDSK with BREAK=ON Line

	Article: Q96385
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If DoubleSpace installed and you press the CTRL+BREAK key combination when
	CHKDSK is calling DBLSPACE /CHKDSK, your system may stop responding (hang). This
	problem occurs only if you have the BREAK=ON command in your CONFIG.SYS file.
	
	WORKAROUND
	==========
	
	To work around this problem, either let CHKDSK run DBLSPACE /CHKDSK or remove
	the BREAK=ON command from your CONFIG.SYS file.
	
	Additional query words: double space 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
