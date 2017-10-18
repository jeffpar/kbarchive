---
layout: page
title: "Q155934: INFO: OLE Automation Manager &amp; RacMan"
permalink: kb/155/Q155934/
---

## Q155934: INFO: OLE Automation Manager &amp; RacMan

	Article: Q155934
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbvfp500 kbvfp600
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides general information about the OLE Automation Manager and
	its use within Microsoft Visual FoxPro.
	
	MORE INFORMATION
	================
	
	The Automation Manager and Remote Automation Connection Manager components were
	developed for Visual Basic 4.0. Visual FoxPro adopted these components in an
	effort to avoid duplicate efforts as new technologies affecting remote
	automation become available. There is nothing specific that these components
	support in Visual Basic 4.0 that they do not support in Visual FoxPro 5.0 or
	6.0.
	
	The Automation Manager component was developed for Visual Basic, but it is
	actually written in C and handles all the remote procedure calls (RPCs) and
	marshalling for remote automation. The Automation Manager program (Autmgr32.exe)
	must be installed and running on the server machine in order for the client to
	see the remote server. If an OLE callback is made from an object reference
	passed by the client to the remote server, you must also install the Automation
	Manager on the client machine.
	
	NOTE: If the Automation Manager is not running, it is automatically launched.
	
	The Remote Automation Connection Manager (RacMan) is written in Visual Basic 4.0
	(Racmgr32.exe), which requires the distribution of the Visual Basic run-time
	libraries. In addition, it uses some ActiveX controls. RacMan's sole purpose is
	to handle registry settings that control remote connectivity on the client side
	and client access on the server side. In terms of registering servers remotely,
	RacMan requires that the server be registered locally. The Setup Wizard uses a
	tool called Clireg32.dll that allows you to register a server remotely without
	first actually having to install it or register it locally.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	
