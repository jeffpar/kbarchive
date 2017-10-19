---
layout: page
title: "Q142249: HOWTO: Implement &quot;What's This?&quot; Help in Visual Basic"
permalink: /kb/142/Q142249/
---

## Q142249: HOWTO: Implement &quot;What's This?&quot; Help in Visual Basic

	Article: Q142249
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Starting with Windows 95 and Windows NT 3.51, it is possible to right- click on
	items and get the "What's This?" window to appear. To set this up in Visual
	Basic, you need to use a pop-up menu.
	
	MORE INFORMATION
	================
	
	This sample uses the help file "Msdev.hlp." You will probably want to create
	your own help file. This sample also uses a full path listing to where the help
	file is located. As you cannot know where the user will install the program, you
	might want to use some dynamic means for determining the path, such as using
	App.Path.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new project in Visual Basic. Form1 is created by default.
	
	2. Set the WhatsThisHelp and WhatsThisButton properties for Form1 to True.
	
	3. Add the following code to reference the Hotspot Editor help file to the
	  Form_Load procedure:
	
	        Private Sub Form_Load()
	        '  your machine
	        '  Change this path to where ever Msdev.hlp is located on
	           App.HelpFile = "C:\Program
	           Files\DevStudio\Common\MSDev98\Help\Msdev.hlp"
	
	4. Add two menu items to Form1 using the following as a guide:
	
	     Menu                   Property            Value
	     ----------------------------------------------------
	     WhatsThis              Caption            WhatsThis
	     WhatsThis              Name               mnuWhatsThis
	     WhatsThis              Visible            False
	
	     What's This?           Caption            What's This?
	     What's This?           Name           mnuWhatsThisHelp
	
	5. Indent "What's This?" to make it a sub-menu of WhatsThis by pressing the
	  right-arrow button on the Menu Editor.
	
	6. Add the following code to the General Declarations section of Form1:
	
	        Public ThisControl as control
	
	7. Add the following code to the mnuWhatsThisHelp_Click procedure:
	
	        Private Sub mnuWhatsThisHelp_Click()
	           ThisControl.ShowWhatsThis
	        End Sub
	
	8. Add a Command Button control to the form and set the following Properties:
	
	  WhatsThisHelpID = 1
	  HelpContextID = 5
	
	9. Add following code to the Command1_MouseUp event:
	
	        Private Sub Command1_MouseUp(Button As Integer, Shift As Integer, _
	                                     X As Single, Y As Single)
	           If Button = vbRightButton Then
	              Set ThisControl = Command1
	              PopupMenu mnuWhatsThis
	           End If
	           Set ThisControl = Nothing
	        End Sub
	
	10. Run the application. Right-click on the Command button and then left- click
	  on the "What's This?" popup to bring up the Help file.
	
	REFERENCES
	==========
	
	See WhatThisHelp, WhatsThisHelpID, HelpFile, HelpContextID
	
	Additional query words: pop up pop-up
	
	======================================================================
	Keywords          : KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
