---
layout: page
title: "Q130123: PRB: Can't Find Transporter (TRANSPORT.PRG) in Visual FoxPro"
permalink: kb/130/Q130123/
---

## Q130123: PRB: Can't Find Transporter (TRANSPORT.PRG) in Visual FoxPro

	Article: Q130123
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TRANSPORT.PRG no longer exists in FoxPro's home directory and the _TRANSPORT
	system memory variable now contains an empty string.
	
	RESOLUTION
	==========
	
	The transporter (TRANSPORT.PRG) is now included in the CONVERT.APP application
	and a new system variable (_CONVERTER) has been added to Visual FoxPro to point
	to CONVERT.APP.
	
	In other words, the transporter code is now built into the converter. When a
	transported object's version is prior to version 3.0, CONVERT.APP calls the
	TRANSPORT module in CONVERT.APP. This module converts the object first to a
	FoxPro version 2.6 for Windows object, and then converts it to a Visual FoxPro
	version 3.0 object.
	
	CONVERT.APP is located in the Visual FoxPro home directory. The CONVERT.APP
	source code and TRANSPORT.PRG can be found in the \TOOLS\CONVERT subdirectory of
	the home directory of the Professional version of Visual FoxPro.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
