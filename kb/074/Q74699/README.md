---
layout: page
title: "Q74699: PRB: &quot;Export Not Defined&quot; Linker Message"
permalink: kb/074/Q74699/
---

## Q74699: PRB: &quot;Export Not Defined&quot; Linker Message

	Article: Q74699
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The linker reports an "export not defined" error even though all the functions
	listed in the EXPORTS section of the definitions (DEF) file are defined.
	
	CAUSE
	=====
	
	One of the exported functions uses the C calling convention (cdecl).
	
	RESOLUTION
	==========
	
	In the C calling convention, the case of function names is preserved, and the
	name of each function is preceded by an underscore. This convention must also be
	used in the DEF file. For example, the function declaration
	
	     int FAR Function()
	
	is exported as:
	
	     _Function
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
