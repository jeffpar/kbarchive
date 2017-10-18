---
layout: page
title: "Q134988: Access Violation in glsbCreateAndDuplicateSection API on PowerPC"
permalink: kb/134/Q134988/
---

## Q134988: Access Violation in glsbCreateAndDuplicateSection API on PowerPC

	Article: Q134988
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOM
	-------
	
	When you install a OpenGL client video driver on your PowerPC computer
	running Windows NT and you run an OPENGL program, for example, the Windows
	NT Pipes screen saver, an access violation occurs in the
	glsbCreateAndDuplicateSection application programming interface (API).
	
	CAUSE
	=====
	
	The assembly dispatch stubs for the GL API do not properly save and restore the
	TOC register when they make their call.
	
	If these stubs are only called from a different module then this code works
	properly because the other module has code to save and restore the TOC. However,
	Windows NT makes several GL calls in OPENGL32 itself, such as glFlush and a
	variety of calls in the wgl font routines, and these calls do not save and
	restore the TOC because everything is in the same DLL.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
