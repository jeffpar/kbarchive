---
layout: page
title: "Q69892: DOCERR: DEF File Exports Statement Documentation Error"
permalink: /kb/069/Q69892/
---

## Q69892: DOCERR: DEF File Exports Statement Documentation Error

	Article: Q69892
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The documentation for the EXPORTS statement in the module-definition file on
	pages 10-4 and 10-5 of the "Microsoft Windows Software Development Kit Reference
	Volume 2" for versions 3.0 and 3.1 is incomplete.
	
	RESOLUTION
	==========
	
	The name of any function that is called using the C calling convention must be
	preceded with an underscore (_) when it is listed in the EXPORTS section.
	
	For example, listed below is the declaration for the MyVarArgs function:
	
	    int FAR CDECL MyVarArgs(LPSTR lpArgList, ...)
	
	In the DEF file, the MyVarArgs function would be exported with the following
	statement:
	
	    EXPORTS
	      _MyVarArgs
	
	Additional query words: 3.00 3.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
