---
layout: page
title: "Q90199: Setup May Hang with FASTOPEN.EXE Installed"
permalink: /kb/090/Q90199/
---

## Q90199: Setup May Hang with FASTOPEN.EXE Installed

	Article: Q90199
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows for Workgroups Setup program may stop responding (hang) when
	FASTOPEN.EXE is running.
	
	CAUSE
	=====
	
	FASTOPEN.EXE is not compatible with the Setup program.
	
	FASTOPEN.EXE is an MS-DOS-based terminate-and-stay-resident (TSR) program that
	speeds up disk access. It is most effective when used in conjunction with such
	applications as compilers and data bases. If you are not running such
	applications, you may want to run SMARTDRV.EXE instead.
	
	If you use FASTOPEN.EXE, you should remove it before running Windows for
	Workgroups Setup.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
