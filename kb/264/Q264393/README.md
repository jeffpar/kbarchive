---
layout: page
title: "Q264393: PRB: Type Mismatch and Floating Point Error with CoolBar Control"
permalink: /kb/264/Q264393/
---

## Q264393: PRB: Type Mismatch and Floating Point Error with CoolBar Control

	Article: Q264393
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrl kbVBp kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a program is compiled with the correct Visual Basic 6.0 version of
	Comct332.ocx (CoolBar Control) version 6.00.xxxx (replace the xxxx with the
	version from your latest service pack), and installed on a computer with version
	6.6.0.8341 on it, you receive the following error message and the application
	shuts down:
	
	  Run time error 13 Type mismatch
	
	If you are working in the integrated development environment (IDE), you also
	receive a "Floating Point Inexact Result" error message. This behavior also
	occurs when the program is compiled with the 6.6 version and you move it to a
	computer with the 6.00 version.
	
	CAUSE
	=====
	
	The cause is a beta Comct332.ocx file that was not approved for distribution due
	to binary compatibility problems. This control is distributed by an early
	version of InstallShield Professional 2000 (InstallShield for Windows).
	
	RESOLUTION
	==========
	
	Unregister and delete the 6.6.0.8341 version, replace it with the 6.0x.xxxx
	version from your service pack, and then recompile and rebuild any applications
	that use the CoolBar control.
	
	MORE INFORMATION
	================
	
	When developing a package with this version of InstallShield, the correct
	version of Comct332.ocx is distributed.
	
	REFERENCES
	==========
	
	For more information on dll/ocx versions, please see the following Microsoft Web
	site:
	
	  http://support.microsoft.com/servicedesks/fileversion/dllinfo.asp
	
	Additional query words: Comct332 13
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrl kbVBp kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
