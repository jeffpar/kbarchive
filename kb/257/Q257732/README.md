---
layout: page
title: "Q257732: FIX: GDI Resource Leak When MaskPicture Is Set to an Icon"
permalink: kb/257/Q257732/
---

## Q257732: FIX: GDI Resource Leak When MaskPicture Is Set to an Icon

	Article: Q257732
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrlCreate kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbVS6
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the UserControl's MaskPicture to an icon, you may experience a GDI
	resource leak.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the latest service pack for Visual Studio 6.0.
	For additional information about Visual Studio service packs, click the
	following article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbActiveX kbCtrlCreate kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
