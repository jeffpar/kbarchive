---
layout: page
title: "Q96726: PRB: MAKEFILE for HOOKS Sample Implemented Incorrectly"
permalink: kb/096/Q96726/
---

## Q96726: PRB: MAKEFILE for HOOKS Sample Implemented Incorrectly

	Article: Q96726
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbHook kbSDKPlatform kbGrpDSUser
	Last Modified: 12-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	All messages are reported as unknown, and LoadString() failures are reported
	under the debug kernel of Windows. The makefile for the HOOKS sample in the
	Microsoft C/C++ version 7.0 Software Development Kit (SDK) contains two errors
	that prevent the proper reporting of hook messages.
	
	CAUSE
	=====
	
	The parameters to the resource compiler are incorrect in the makefile, and the
	.RES file is missing from one set of dependencies.
	
	RESOLUTION
	==========
	
	Line 68 of MAKEFILE reads as follows:
	
	     $(DLLNAME).dll: $(DLLSRCS:.c=.obj) $(DLLNAME).def
	
	Change it to read as follows:
	
	     $(DLLNAME).dll: $(DLLSRCS:.c=.obj) $(DLLNAME).def $(DLLNAME).res
	
	Line 95 of MAKEFILE reads as follows:
	
	     $(RC) -T $(DLLNAME).dll $(DLLNAME).res
	
	Change it to read as follows:
	
	     $(RC) -T $(DLLNAME).res $(DLLNAME).dll
	
	STATUS
	======
	
	This problem has been corrected in Visual C++.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbHook kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
