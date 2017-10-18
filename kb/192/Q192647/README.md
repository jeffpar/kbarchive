---
layout: page
title: "Q192647: INFO: Visual Basic Reserves OCX Resource IDs Starting at 30000"
permalink: kb/192/Q192647/
---

## Q192647: INFO: Visual Basic Reserves OCX Resource IDs Starting at 30000

	Article: Q192647
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In accordance with the specifications for building and exposing ActiveX
	controls, Visual Basic uses a resource file to store the toolbox bitmaps for
	each UserControl in a compiled OCX. Design-time clients can then load and
	display these bitmap images in a "control toolbox" without having to load or
	create running instances of these controls.
	
	By default, Visual Basic stores these images with a base resource identifier
	starting at 30000. Consequently, when adding your own resource file to a Visual
	Basic ActiveX control project, you should avoid using resource IDs that might
	conflict with these values.
	
	MORE INFORMATION
	================
	
	The toolbox image resource ID for a UserControl is registered on the system in
	the ToolboxBitmap32 registry key under the CLSID for the control.
	
	REFERENCES
	==========
	
	"Working with Resource Files" in the Visual Basic 6.0 Online Help
	
	"More About Programming: Working with Resource Files" in the Visual Basic 5.0
	Books Online
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbCtrlCreate kbActiveX
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
