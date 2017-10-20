---
layout: page
title: "Q161257: HOWTO: Add a Toolbar to a Visual Basic Project"
permalink: /kb/161/Q161257/
---

## Q161257: HOWTO: Add a Toolbar to a Visual Basic Project

{% raw %}

	Article: Q161257
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbControl
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A feature of the Windows user interface is the toolbar. A toolbar is a
	collection of buttons that activates some of the most commonly- used features of
	a program. Visual Basic allows you to add a toolbar to your program through the
	Toolbar custom control. This article contains a sample program that explains and
	uses the Toolbar custom control.
	
	MORE INFORMATION
	================
	
	The Toolbar control acts as a container for button objects. Buttons can be added
	to the toolbar using the Add method, as demonstrated in the sample application
	below, or by setting the [Custom] property of the Toolbar control. In addition
	to performing a function when clicked, buttons can also contain descriptions and
	ToolTip text. A ToolTip is a short description of the button's function and is
	displayed when the cursor is passed over the button.
	
	The Toolbar control is provided by the file COMCTL32.OCX. When you distribute
	your application, COMCTL32.OCX must be installed in your user's Microsoft
	Windows \SYSTEM directory. Using the Setup Wizard will ensure that this and all
	necessary files are installed in the appropriate directories.
	
	Sample Program with a Toolbar
	-----------------------------
	
	The sample program is a simple word processor that uses a toolbar to perform some
	functions, such as opening a file, saving a file, and formatting the document.
	The program contains the Rich TextBox control where the user types in a
	document, a toolbar control containing buttons to perform a function, an Image
	List control to store the bitmaps appearing on the buttons, and a Common Dialog
	control to perform the file open and save functions.
	
	In this example, the buttons are added programmatically in the Load event of the
	Form. The properties of the buttons are also set during the Load event. The
	button's function are set in the ButtonClick event of the Toolbar control.
	
	The toolbar has the added feature of wrapping the buttons when the form is
	resized and customizing the positions of all the buttons. Wrapping the buttons
	is enabled by setting the Wrappable property of the Toolbar to True.
	
	A button is used to customize the position of the different buttons. Clicking
	this button displays a dialog box that allows you to add a separator bar, remove
	buttons, and rearrange the button position. Before the dialog box displays, the
	current button positions are stored in the registry. When you click the Restore
	Toolbar button, the information stored in the registry is used to reset the
	positions of the buttons.
	
	Steps to Create the Sample Program
	----------------------------------
	
	1. Start Visual Basic and select Standard EXE. If Visual Basic is already
	  running, click New Project on the File menu and select Standard EXE. Form1 is
	  created by default.
	
	2. Choose Components from the Project menu. In Microsoft Visual Basic 5.0, add
	  COMCTL32.OCX and RICHTX32.OCX. In Microsoft Visual Basic 6.0, add
	  MSCOMCTL.OCX and RICHTX32.OCX.
	
	3. Add a Toolbar, a Rich TextBox, an ImageList, and a Common Dialog control to
	  Form1.
	
	4. Copy the following code to the Form1 code window:
	
	        Option Explicit
	
	            ' SaveToolbar method constants.
	                Const SaveToolbarKey = 1
	                Const SaveToolbarSubKey = "MyToolbar"
	                Const SaveToolbarVal = "True"
	
	        Private Sub Form_Load()
	
	            ' Create object variable for the ImageList.
	                 Dim imgX As ListImage
	
	            ' The following assumes that you checked the check box for "Graphics"
	            ' when you installed VB.  You can add the graphics by running
	            ' VB setup again & checking the Graphics check box.
	
	            ' Path to location of Windows95 toolbar bitmaps -VB5
	
	            ' Dim TlbrPath As String
	
	            'TlbrPath = "C:\Program Files\DevStudio\VB\Graphics" & _
	                        "\Bitmaps\Tlbr_w95\"
	
	            '  VB6 path
	
	            ' If needed, change the drive and install directory for VB as
	            ' needed.
	
	                 Dim TlbrPath As String
	
	                 TlbrPath = "Drive:\install directory\Graphics\Bitmaps" & _
	                            "\Tlbr_w95\"
	
	                 Me.Caption = "Toolbar Demonstration"
	
	            'Load pictures for the Toolbar buttons into the ImageList
	            'control.
	                 Set imgX = ImageList1.ListImages. _
	                    Add(, "open", LoadPicture(TlbrPath & "open.bmp"))
	
	                 Set imgX = ImageList1.ListImages. _
	                    Add(, "save", LoadPicture(TlbrPath & "save.bmp"))
	
	                 Set imgX = ImageList1.ListImages. _
	                    Add(, "left", LoadPicture(TlbrPath & "lft.bmp"))
	
	                 Set imgX = ImageList1.ListImages. _
	                    Add(, "right", LoadPicture(TlbrPath & "rt.bmp"))
	
	                 Set imgX = ImageList1.ListImages. _
	                    Add(, "center", LoadPicture(TlbrPath & "cnt.bmp"))
	
	                 Set imgX = ImageList1.ListImages. _
	                    Add(, "justify", LoadPicture(TlbrPath & "jst.bmp"))
	
	                 Set imgX = ImageList1.ListImages. _
	                    Add(, "bold", LoadPicture(TlbrPath & "bld.bmp"))
	
	                 Set imgX = ImageList1.ListImages. _
	                    Add(, "italic", LoadPicture(TlbrPath & "Itl.bmp"))
	
	                 Set imgX = ImageList1.ListImages. _
	                    Add(, "customize", LoadPicture(TlbrPath & "prop.bmp"))
	
	                 Set imgX = ImageList1.ListImages. _
	                    Add(, "restore", LoadPicture(TlbrPath & "redo.bmp"))
	
	                 Toolbar1.ImageList = ImageList1
	
	            ' Create object variable for the Toolbar.
	                 Dim btnX As Button
	
	            ' Add button objects to Buttons collection using the Add method.
	            ' After creating the button, set the Description and ToolTipText
	            ' properties.
	
	            ' Create Open Button
	                 Set btnX = Toolbar1.Buttons.Add(, "open", , tbrDefault, _
	                            "open")
	                    btnX.ToolTipText = "Open File"
	                    btnX.Description = btnX.ToolTipText
	
	            ' Create Save Button
	                 Set btnX = Toolbar1.Buttons.Add(, "save", , tbrDefault, _
	                            "save")
	                    btnX.ToolTipText = "Save File"
	                    btnX.Description = btnX.ToolTipText
	
	            ' Add a Separator
	                 Set btnX = Toolbar1.Buttons.Add(, , , tbrSeparator)
	
	            ' Create Paragraph Align Left button
	                 Set btnX = Toolbar1.Buttons.Add(, "left", , _
	                            tbrButtonGroup, "left")
	                    btnX.ToolTipText = "Align Left"
	                    btnX.Description = btnX.ToolTipText
	
	            ' Create Paragraph Align Center button
	                 Set btnX = Toolbar1.Buttons.Add(, "center", , _
	                                                 tbrButtonGroup, "center")
	                    btnX.ToolTipText = "Center"
	                    btnX.Description = btnX.ToolTipText
	
	            ' Create Paragraph Align Right button
	                 Set btnX = Toolbar1.Buttons.Add(, "right", , _
	                            tbrButtonGroup, "right")
	                    btnX.ToolTipText = "Align Right"
	                    btnX.Description = btnX.ToolTipText
	
	            ' Add a Separator
	                 Set btnX = Toolbar1.Buttons.Add(, , , tbrSeparator)
	
	            ' Create a Bold Button
	                 Set btnX = Toolbar1.Buttons.Add(, "bold", , tbrCheck, _
	                            "bold")
	                    btnX.ToolTipText = "Bold"
	                    btnX.Description = btnX.ToolTipText
	
	            ' Italic Button
	                 Set btnX = Toolbar1.Buttons.Add(, "italic", , tbrCheck, _
	                                                   "italic")
	                    btnX.ToolTipText = "Italic"
	                    btnX.Description = btnX.ToolTipText
	
	            ' Add a Separator
	                 Set btnX = Toolbar1.Buttons.Add(, , , tbrSeparator)
	
	            ' Create a Customize Toolbar button
	                 Set btnX = Toolbar1.Buttons.Add(, "customize", , tbrCheck, _
	                                                 "customize")
	                    btnX.ToolTipText = "Customize Toolbar"
	                    btnX.Description = btnX.ToolTipText
	
	            ' Create a Restore Toolbar button
	                 Set btnX = Toolbar1.Buttons.Add(, "restore", , tbrCheck, _
	                                                 "restore")
	                    btnX.ToolTipText = "Restore Toolbar"
	                    btnX.Description = btnX.ToolTipText
	
	                 With Toolbar1
	                    .Wrappable = True ' Buttons can wrap.
	
	            ' Prevent customization except by clicking Customize button.
	                    .AllowCustomize = False
	                 End With
	
	            ' Configure commondialog1 for opening and saving files.
	                 With CommonDialog1
	                    .DefaultExt = ".rtf"
	                    .Filter = "RTF file (*.RTF)|*.RTF"
	                 End With
	
	            ' Set margin of the RichTextBox to the width of the control.
	                 RichTextBox1.RightMargin = RichTextBox1.Width
	
	        End Sub
	
	        Private Sub richtextbox1_SelChange()
	            ' When the insertion point changes, set the Toolbar buttons to
	            ' reflect the attributes of the text where the cursor is located.
	            ' Use the Select Case statement. The SelAlignment property
	            ' returns either 0, 1, 2, or Null.
	
	                 Select Case RichTextBox1.SelAlignment
	                    Case Is = rtfLeft ' 0
	                       Toolbar1.Buttons("left").Value = tbrPressed
	
	                    Case Is = rtfRight '1
	                       Toolbar1.Buttons("right").Value = tbrPressed
	
	                    Case Is = rtfCenter '2
	                       Toolbar1.Buttons("center").Value = tbrPressed
	
	                    Case Else ' Null -- No buttons are shown in the up
	                              'position.
	                       Toolbar1.Buttons("left").Value = tbrUnpressed
	                       Toolbar1.Buttons("right").Value = tbrUnpressed
	                       Toolbar1.Buttons("center").Value = tbrUnpressed
	
	                 End Select
	
	            ' SelBold returns 0, -1, or Null. If it's Null, then set the
	            ' MixedState property to True.
	                 Select Case RichTextBox1.SelBold
	                    Case 0 ' Not bold.
	                       Toolbar1.Buttons("bold").Value = tbrUnpressed
	
	                    Case -1 ' Bold.
	                       Toolbar1.Buttons("bold").Value = tbrPressed
	
	                    Case Else ' Mixed state.
	                       Toolbar1.Buttons("bold").MixedState = True
	
	                 End Select
	
	            ' SelItalic returns 0, -1, or Null. If it's Null, then set the
	            ' MixedState property to True.
	                 Select Case RichTextBox1.SelItalic
	                    Case 0 ' Not italic.
	                       Toolbar1.Buttons("italic").Value = tbrUnpressed
	
	                    Case -1 ' Italic.
	                       Toolbar1.Buttons("italic").Value = tbrPressed
	
	                    Case Else ' Mixed State.
	                       Toolbar1.Buttons("italic").MixedState = True
	
	                 End Select
	
	        End Sub
	
	        Private Sub toolbar1_ButtonClick(ByVal Button As Button)
	            ' Use the Key property with the SelectCase statement to specify
	            ' an action.
	                 Select Case Button.Key
	                    Case Is = "open"           ' Open file.
	                       Dim strOpen As String   ' String variable for file
	                                               ' name.
	                       CommonDialog1.ShowOpen  ' Show Open File dialog box.
	                       strOpen = CommonDialog1.filename ' Set variable to
	                                                        ' filename.
	                       RichTextBox1.LoadFile strOpen, 0 ' Use LoadFile
	                                                        ' method.
	
	                    Case Is = "save"              ' Save file.
	                       Dim strNewFile As String   ' String variable for new
	                                                  ' file name.
	                       CommonDialog1.ShowSave     ' Show Save dialog box.
	                       strNewFile = CommonDialog1.filename ' Set variable to
	                                                           'file name.
	                       RichTextBox1.SaveFile strNewFile, 0 ' Use SaveFile
	                                                           ' method.
	
	                    Case Is = "left"
	                       RichTextBox1.SelAlignment = rtfLeft
	
	                    Case Is = "center"
	                       RichTextBox1.SelAlignment = rtfCenter
	
	                    Case Is = "right"
	                       RichTextBox1.SelAlignment = rtfRight
	
	                    Case Is = "bold"
	            ' Test to see if the MixedState property is True. If so,
	            ' then set it to False before doing anything else.
	                       If Button.MixedState = True Then
	                          Button.MixedState = False
	                       End If
	
	            ' Toggle the SelBold property.
	                       RichTextBox1.SelBold = Abs(RichTextBox1.SelBold) - 1
	
	                    Case Is = "italic"
	            ' Test to see if the MixedState property is True. If so,
	            ' then set it to False before doing anything else.
	                       If Button.MixedState = True Then
	                          Button.MixedState = False
	                       End If
	
	            ' Toggle the SelItalic property.
	                       RichTextBox1.SelItalic = Abs(RichTextBox1.SelItalic) _
	                                                - 1
	
	                    Case Is = "customize"
	            ' Save the state of Toolbar1 in the registry before
	            ' allowing further customization.
	                       With Toolbar1
	                          .SaveToolbar SaveToolbarKey, SaveToolbarSubKey, _
	                                       SaveToolbarVal
	                          .AllowCustomize = True 'AllowCustomize must be True
	                                                 'to change toolbar.
	                          .Customize     'Customize method invokes Customize
	                                         'Dialog box.
	                          .AllowCustomize = False 'After customization, set
	                                                  'this to False.
	                       End With
	
	                    Case Is = "restore"
	            ' Restore state of Toolbar1 using the information stored in
	            ' the registry.
	                       Toolbar1.RestoreToolbar SaveToolbarKey, _
	                                               SaveToolbarSubKey, _
	                                               SaveToolbarVal
	
	                 End Select
	
	        End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
