---
layout: page
title: "Q192137: PRB: Failed Registration of VBCE Components, Error 0000007e"
permalink: /kb/192/Q192137/
---

## Q192137: PRB: Failed Registration of VBCE Components, Error 0000007e

	Article: Q192137
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When downloading the Windows CE Toolkit for Visual Basic (VBCE) run-time files
	to a Palm-size PC 1.0 device, the following error is displayed on the device:
	
	  Failed: Registration of \windows\pvbrt.dll Error = 0000007e
	
	The failure message will occur for each of the VBCE run-time components.
	
	CAUSE
	=====
	
	The Palm-size PC version 1.0 does not support the running of VBCE applications.
	The implementation of the Windows CE 2.0 operating system on the Palm-size PC
	1.0 devices does not currently include sufficient COM support for VBCE
	applications.
	
	RESOLUTION
	==========
	
	VBCE6 is currently for use in targeting Handheld PC devices running Windows CE
	version 2.0 or 2.11and Palm-size PC devices running Windows CE 2.11.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q191478 INFO: Palm-size PC Does Not Support VBCE Applications
	
	  Q214803 INFO: System Requirements for Windows CE Toolkit for VB 6.0
	
	Additional query words: vbce WinCE vbce6
	
	======================================================================
	Keywords          : kberrmsg kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
