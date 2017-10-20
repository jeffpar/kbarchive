---
layout: page
title: "Q174087: HOWTO: Display Additional Buttons in Customize Toolbar Dialog"
permalink: /kb/174/Q174087/
---

## Q174087: HOWTO: Display Additional Buttons in Customize Toolbar Dialog

{% raw %}

	Article: Q174087
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl
	Last Modified: 11-JAN-2001
	
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
	
	The Toolbar control that is provided with the Microsoft Windows Common Controls
	(COMCTL32.OCX) can be customized by users. The Customize Toolbar method is
	displayed if either:
	
	- the AllowCustomize property is set to True and the user double- clicks the
	  Toolbar
	
	  -or-
	
	- the Customize method of the Toolbar is invoked.
	
	By default, this dialog lists all of the buttons on the Toolbar in the "Toolbar
	Buttons" lists but lists only a Separator in the "Available Buttons" list. This
	article describes how you can display additional toolbar buttons in the
	"Available Buttons" list.
	
	MORE INFORMATION
	================
	
	All of the buttons in the Buttons collection of a Toolbar control appear in the
	Customize Toolbar dialog. Buttons that are currently showing on the Toolbar
	appear in the "Toolbar Buttons" list and Buttons that have been removed from the
	Toolbar through customization appear in the "Available Buttons" list. To add
	additional buttons to the "Available Buttons" list, create your default toolbar,
	use the SaveToolbar method to save this setting, add the additional buttons at
	run-time, and then use RestoreToolbar to restore the "default" toolbar
	settings.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project.
	
	2. Reference the Microsoft Windows Common Controls (COMCTL32.OCX).
	
	3. Add a Toolbar and an ImageList to Form1.
	
	4. Add six images to ImageList1 with the following properties:
	
	  Index          Key          Picture
	  -----          ---          -------
	
	  1              Bold        ..\VB\Graphics\Bitmaps\Tlbr_w95\Bld.bmp
	  2              Italic      ..\VB\Graphics\Bitmaps\Tlbr_w95\Itl.bmp
	  3              Underline   ..\VB\Graphics\Bitmaps\Tlbr_w95\Undrln.bmp
	  4              Copy        ..\VB\Graphics\Bitmaps\Tlbr_w95\Copy.bmp
	  5              Paste       ..\VB\Graphics\Bitmaps\Tlbr_w95\Paste.bmp
	  6              Cut         ..\VB\Graphics\Bitmaps\Tlbr_w95\Cut.bmp
	
	5. Set the ImageList property of Toolbar1 to "ImageList1."
	
	6. Add three buttons to Toolbar1 with the following properties:
	
	  Index        Key            Image
	  -----        ---            -----
	
	  1            Bold           Bold
	  2            Italic         Italic
	  3            Underline      Underline
	
	NOTE: The Toolbar contains only these three buttons because this is the layout of
	the "default" toolbar. The Copy, Paste, and Cut buttons will be added at
	run-time so that they will appear in the "Additional Buttons" list.
	
	7. Add the following code to Form1:
	
	        Private Declare Function RegOpenKey Lib "advapi32.dll" Alias _
	          "RegOpenKeyA" (ByVal hKey As Long, ByVal lpSubKey As String, _
	          phkResult As Long) As Long
	
	        Const HKEY_CURRENT_USER = &H80000001
	
	        Private Sub Form_Load()
	
	           Me.Show
	
	           'Check to see if the registry keys for the toolbar exists
	           'If not, then save the initial toolbar settings
	           Success = RegOpenKey(HKEY_CURRENT_USER, "MyApp", hKey)
	           If Success <> 0 Then Toolbar1.SaveToolbar "Test", "MyApp", _
	              "Toolbar1"
	
	           'Add the toolbars you wish to see in the "Available Buttons" list
	           Toolbar1.Buttons.Add , "Copy", , , "Copy"
	           Toolbar1.Buttons.Add , "Paste", , , "Paste"
	           Toolbar1.Buttons.Add , "Cut", , , "Cut"
	
	           'Restore the toolbar settings
	           DoEvents
	           Toolbar1.RestoreToolbar "Test", "MyApp", "Toolbar1"
	           DoEvents
	
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	
	           'When the form unloads, save the toolbar settings
	           'to HKEY_CURRENT_USER\MyApp
	           Toolbar1.SaveToolbar "Test", "MyApp", "Toolbar1"
	
	        End Sub
	
	NOTE: If you are using Visual Basic version 6.0, change the following line in the
	Form_GotFocus event:
	
	     Success = RegOpenKey(HKEY_CURRENT_USER, "MyApp", hKey)
	
	to:
	
	     Success = RegOpenKey(HKEY_CURRENT_USER, "Test\MyApp", hKey)
	
	8. Press the F5 key to run the application. Double-click Toolbar1 to display the
	  Customize Toolbar dialog. Notice that the Cut, Copy, and Paste toolbars
	  appear in the Additional Buttons list.
	
	NOTE: The SaveToolbar and RestoreToolbar methods used in this example write and
	read the registry entry HKEY_CURRENT_USER\MyApp\Toolbar1.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q182943 : BUG: "Key" Argument of SaveToolBar & RestoreToolBar Doesn't
	  Work
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
