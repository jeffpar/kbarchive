---
layout: page
title: "Q108710: PRB: Extra Repaint of VB CDK Graphical Custom Control"
permalink: kb/108/Q108710/
---

## Q108710: PRB: Extra Repaint of VB CDK Graphical Custom Control

	Article: Q108710
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-APR-2000
	
	3.00
	WINDOWS
	kbtool kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use the Visual Basic Control Development Kit (CDK) to design a graphical
	custom control to perform visual effects. However, when another control such as
	a Visual Basic button becomes visible on the same form as your custom control,
	the graphical control repaints even though its client area has not been
	invalidated.
	
	CAUSE
	=====
	
	The repaint logic in Visual Basic causes this behavior. Graphical controls get a
	VBM_PAINT message every time their container gets a WM_PAINT message, regardless
	of whether the graphical control is in the invalidated area.
	
	The VBM_PAINT message is the paint notification for graphical controls. The value
	of the VBM_PAINT constant is defined in the VBAPI.H file in Visual Basic's CDK
	directory. WM_PAINT is a message for windowed controls. For examples of
	VBM_PAINT and WM_PAINT, see the PIX.C file in Visual Basic's CDK directory.
	
	WORKAROUND
	==========
	
	You can work around this behavior in the VBM_PAINT handler with the following C
	code:
	
	     if (!RectVisible((HDC)wParam,(LPRECT)lParam)) {
	        // Control is not in the paint region
	        // Don't bother to repaint
	        break;
	        }
	
	Additional query words: 3.00 flash flicker
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
