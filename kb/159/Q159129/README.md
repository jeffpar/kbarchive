---
layout: page
title: "Q159129: OpenGL Access Violation with Invalid OpenGL Context"
permalink: /kb/159/Q159129/
---

## Q159129: OpenGL Access Violation with Invalid OpenGL Context

	Article: Q159129
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbProgramming
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The API gluGetString causes an access violation and affects OpenGL operations.
	
	CAUSE
	=====
	
	The gluGetString API was called without an existing OpenGL context; therefore,
	GlGetString has an access violation trying to obtain the GL_EXTENSIONS from an
	OpenGL context.
	
	
	RESOLUTION
	==========
	
	To correct this problem, install Windows NT 4.0 Service Pack 2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbenv kbProgramming 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
