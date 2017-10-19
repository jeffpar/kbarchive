---
layout: page
title: "Q89566: PRB: Common Dialog Box Hook Function Cannot Access Variables"
permalink: /kb/089/Q89566/
---

## Q89566: PRB: Common Dialog Box Hook Function Cannot Access Variables

	Article: Q89566
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCmnDlg kbSDKPlatform kbGrpDSUser
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
	
	In an application developed for the Microsoft Windows environment using a common
	dialog box and a dialog box hook function, the hook function is unable to access
	global or local variables even though it receives messages.
	
	CAUSE
	=====
	
	Because the hook function is not exported in the application's module definition
	(.DEF) file, the hook function's data segment is not set correctly when
	functions in the common dialog box library (COMMDLG.DLL) call the hook function.
	
	RESOLUTION
	==========
	
	Modify the .DEF file to list the hook function in the EXPORTS section.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbCmnDlg kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
