---
layout: page
title: "Q266370: PRB: Controls Using FoxFont Unreadable on Arabic or Hebrew"
permalink: kb/266/Q266370/
---

## Q266370: PRB: Controls Using FoxFont Unreadable on Arabic or Hebrew

	Article: Q266370
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 01-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If any of the FoxFont files are installed in the Windows\Fonts folder, some
	controls that use the font are unreadable in Visual FoxPro 6.0 forms that are
	being run under the Arabic or Hebrew versions of Windows.
	
	RESOLUTION
	==========
	
	When you are using Visual FoxPro or developing Visual FoxPro applications for
	use on Arabic or Hebrew versions of Windows, set the FontName property of
	Combobox, Editbox, Listbox, Spinner, and Textbox controls to a value other than
	"FoxFont."
	
	MORE INFORMATION
	================
	
	When the FoxFont is installed in the Windows\Fonts directory, and the FontName
	property of certain controls is set to "FoxFont," the controls do not display
	readable data. Spinners, edit, list, and text boxes that are used on Visual
	FoxPro forms with a FontName property of "FoxFont" display data as a gray bar.
	Comboboxes on Visual FoxPro forms with a FontName property of "FoxFont" do not
	display as a gray bar; however, the display values and ListItem values are not
	visible.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using either an Arabic or Hebrew version of Windows, install the FoxFont in
	  the Windows\Fonts folder.
	
	2. Create a program (.prg) file named FoxFont.prg using the following code:
	
	  PUBLIC ox
	  ox = CREATEOBJECT("demo")
	  ox.Show()
	
	  DEFINE CLASS demo AS form
	     Name = "demo"
	
	     ADD OBJECT textbox1 AS textbox WITH ;
	        Height = 25, ;
	        Top = INT((ThisForm.Height - 12.5) / 2), ;
	        Width = 96, ;
	        Left = INT((ThisForm.Width - 48) / 2), ;
	        FontName = "FoxFont", ;
	        Value = "Demo", ;
	        Visible = .T.
	
	     ADD OBJECT textbox2 AS textbox WITH ;
	        Height = 25, ;
	        Top = INT((ThisForm.Height - 12.5) / 2) + 30, ;
	        Width = 96, ;
	        Left = INT((ThisForm.Width - 48) / 2), ;
	        FontName = "Arial", ;
	        Value = "Demo", ;
	        Visible = .T.
	
	     ADD OBJECT commandbutton1 AS commandbutton WITH ;
	        Caption = "\<Close", ;
	        Height = 25, ;
	        Width = 50, ;
	        Top = ThisForm.Height - 28, ;
	        Left = ThisForm.Width - 60, ;
	        Visible = .T.
	
	     PROCEDURE commandbutton1.Click
	        ThisForm.Release
	     ENDPROC
	
	  ENDDEFINE
	
	3. Save and run the program file. Note that TextBox1 appears as a gray bar.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
