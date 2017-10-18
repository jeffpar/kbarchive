---
layout: page
title: "Q136070: DOC: Incorrect Examples on Pages 69-75 of Developer's Guide"
permalink: kb/136/Q136070/
---

## Q136070: DOC: Incorrect Examples on Pages 69-75 of Developer's Guide

	Article: Q136070
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbdocfix kbvfp
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The example that create a VCR control in the Visual FoxPro "Developer's Guide"
	on pages 69-75 creates a subclass of the VCR control. When an instance of VCR2
	is created on a form, the container is not sized correctly; it is much wider
	than the form.
	
	The following conditions lead to this problem:
	
	- The ScaleMode of the form is in foxels.
	
	- The width of the VCR2 container, expressed in foxels, is decimal.
	
	- The width of the VCR2 container is used as a variable in the body of the
	  class definition (in the DEFINE part). In this example, the specific lines
	  are:
	
	  Left=This.Width+.2
	  Width=This.Width+This.CmdQuit.Width+.2
	
	If all these conditions are true, then when an instance of the class is created,
	Visual FoxPro sees that the width of the container is in foxels. It converts the
	number to pixels, using the font of the form as the basis for conversion. That
	number is in turn used to size the container on the form, but it is not
	converted back to foxels. In this example, the Width of the container is
	converted from 6.2 foxels to 61 pixels. When the container is placed on the
	form, the same measure is used. However, the unit is no longer pixels, it is
	foxels. So the width of the container is 61 foxels.
	
	Fix Status
	----------
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	To work around this problem, ensure that one of the conditions listed in the
	"Cause" section of this article is not met. In particular:
	
	- You can use the pixel unit instead of foxels to dimension the form and the
	  object it contains. This way, pixel is the default scale unit, so no
	  conversion occurs.
	
	  -or-
	
	- If the value of a property depends on another member variable, do not define
	  this property in the body of the class. You can use Init event handler for
	  this purpose.
	
	Using the second alternative, the following definition of the VCR2 class ensures
	that the width of the VCR2 container is correct:
	
	     DEFINE CLASS vcr2 as vcr
	     ADD OBJECT cmdQuit AS COMMANDBUTTON WITH ;
	        Caption="Quit", ;
	        Height=2, ;
	        Width=6.8
	
	     PROCEDURE INIT
	     This.CmdQuit.Left=This.Width+.2
	     This.Width=This.Width+This.CmdQuit.Width+.2
	     ENDPROC
	
	     PROCEDURE cmdQuit.CLICK
	       Release Thisform
	     ENDPROC
	
	     ENDDEFINE
	
	In addition to the problem listed above, the example contains another inaccuracy
	that should not affect your form. Pages 69 and 71 define the Scalemode property
	as a property of a CommandButton and a Container. However, the Scalemode
	property applies to forms and toolbars only. It does not apply to control or
	container objects.
	
	REFERENCES
	==========
	
	For more information about foxels and pixels, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q106161 How to Convert Screen Object Positions Between Platforms
	
	  Q129208 Pixel Replaces Foxel as Default Scale Value in Design Mode
	
	
	Additional query words: docerr navigation buttons
	
	======================================================================
	Keywords          : kbdocfix kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
