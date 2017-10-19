---
layout: page
title: "Q98871: PRB: Using HSZ in AFXEXT.H and DDEML.H"
permalink: /kb/098/Q98871/
---

## Q98871: PRB: Using HSZ in AFXEXT.H and DDEML.H

	Article: Q98871
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
	
	When using both the AFXEXT.H and DDEML.H include files in the same source file,
	the following message is received:
	
	  error C2371: 'HSZ' : redefinition; different basic types
	
	CAUSE
	=====
	
	The problem is a naming conflict between Dynamic Date Exchange Management
	Library (DDEML) and Visual Basic eXtension (VBX) files controls, in which both
	use the type HSZ [handle to a string that is zero (NULL) terminated] but with
	with different meanings.
	
	AFXEXT.h includes the definition of HSZ in order to support the Control
	Development Kit (CDK), and DDEML.H uses HSZ as a string type.
	
	RESOLUTION
	==========
	
	Workarounds for this problem include:
	
	- Separate the DDEML and VBX code into different files, thus preventing
	  AFXEXT.H and DDEML.H from being included in the same source file.
	
	-or-
	
	- Use #define NO_VBX_SUPPORT in the file that implements DDE. This will cause
	  DDEML's definition of HSZ to be used.
	
	Additional query words: 3.10 c2371
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
