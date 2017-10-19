---
layout: page
title: "Q149216: PRB: Not All Build Options Are Available in Project Manager"
permalink: /kb/149/Q149216/
---

## Q149216: PRB: Not All Build Options Are Available in Project Manager

	Article: Q149216
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Build button in Project Manager, one or both of the following
	options is not available:
	
	- Build PowerMac Executable
	
	- Build 68K Executable
	
	CAUSE
	=====
	
	There is no corresponding Visual FoxPro Support Library in the Visual FoxPro
	folder.
	
	RESOLUTION
	==========
	
	Make sure that the following files are located in the Visual FoxPro folder:
	
	- VFP Support Library PPC
	
	- VFP Support Library 68K
	
	STATUS
	======
	
	This behavior is by design. The support libraries are used by Visual FoxPro to
	build executable files.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Locate the following files in the Visual FoxPro folder. Move one or both to
	  the desktop.
	
	  VFP Support Library PPC
	  VFP Support Library 68K
	
	2. Start Visual FoxPro, and open a project. Make sure it has a file marked as
	  Main.
	
	3. Choose Build. Note that the Build option corresponding to the moved Support
	  Library is not available.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
