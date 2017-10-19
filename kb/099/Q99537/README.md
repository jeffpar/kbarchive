---
layout: page
title: "Q99537: PRB: Cannot Change Properties of FOXPROW.EXE File"
permalink: /kb/099/Q99537/
---

## Q99537: PRB: Cannot Change Properties of FOXPROW.EXE File

	Article: Q99537
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbsetup
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup program may generate one of the following error messages:
	
	- 
	
	  Cannot change properties of FoxProw.exe
	
	  -or-
	
	- 
	
	  Cannot change properties of VFP.EXE
	
	  -or-
	
	- 
	
	  Cannot change properties of VFPSETUP.INI
	
	CAUSE
	=====
	
	Virus-protection software is loaded.
	
	RESOLUTION
	==========
	
	Some networks automatically load virus-protection software at boot up. Disable
	any virus-protection software that may be loaded on the workstation or server
	and repeat the installation process.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin FoxWin 2.50 errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	
