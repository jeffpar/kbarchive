---
layout: page
title: "Q159408: PRB: &quot;Error in Loading DLL&quot; if Calling Multimedia API Functions"
permalink: /kb/159/Q159408/
---

## Q159408: PRB: &quot;Error in Loading DLL&quot; if Calling Multimedia API Functions

	Article: Q159408
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbmm kbAPI kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call multimedia API functions from 32-bit Visual Basic for Windows
	using the Declare statements retrieved from the 32-bit API Text Viewer, the
	following error message appears:
	
	  "Error in loading DLL"
	
	CAUSE
	=====
	
	The error occurs because the 32-bit API Text Viewer incorrectly uses the Declare
	statements for Mmsystem.dll, which is a 16-bit DLL.
	
	MORE INFORMATION
	================
	
	A 32-bit program cannot directly execute functions in a 16-bit DLL. A thunking
	layer is required. The thunking layer allows you to load a 16-bit DLL and place
	the processor in 16-bit mode so you can execute the appropriate code. However,
	Visual Basic for Windows cannot implement a thunking layer and its use is not
	supported. There are two ways around this behavior:
	
	1. See the following article in the Microsoft Knowledge Base that describes how
	  to call the 16-bit Mmsystem.dll functions:
	
	  Q141939 : How to Create an OLE Server to Implement Thunking
	
	2. Call the functions from Winmm.dll, the Windows 95, Windows 98, Windows NT,
	  and Windows 2000 library for multimedia. Winmm.dll is a 32-bit library that
	  supports multimedia services. This method requires the proper Declare
	  statements for Winmm.dll.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141756 How to Play MIDI Files Using API Calls from Visual Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbmm kbAPI kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
