---
layout: page
title: "Q247529: HOWTO: Associate a Custom Icon with a File Extension"
permalink: /kb/247/Q247529/
---

## Q247529: HOWTO: Associate a Custom Icon with a File Extension

{% raw %}

	Article: Q247529
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbIcon kbRegistry kbSDKWin32 kbShellGrp kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupp
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Generally, a file type associated with an executable is given the icon of the
	executable. For example, a Microsoft Excel file displays the Microsoft Excel
	icon, and a Microsoft Word file displays the Microsoft Word icon. However, if
	you associate a file extension with an .exe file, it uses the default Windows
	icon. This article explains how to associate an icon with a file extension.
	
	When the custom icon is associated with a particular file type in the registry,
	the new default icon may not be recognized by Windows until the computer is
	restarted. This can be prevented by making an API call to notify Windows that
	the icon has changed.
	
	MORE INFORMATION
	================
	
	This article uses the techniques described in Microsoft Knowledge Base article
	Q185453 to associate a file extension with a Microsoft Visual Basic .exe file.
	You can also associate icons by including another key in the registry for the
	default icon. The user must have permission to write to the registry.
	
	Step-by-Step Example:
	
	1. Copy an icon into the application directory and name it myIcon.ico.
	
	2. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	3. On the Project menu, select Project1 properties. Set the Project Name field
	  to MyApp.
	
	4. On the Project menu, choose Components. In the Components dialog box, select
	  "Microsoft RichTextBox Control" and click OK.
	
	5. Cite an instance of the RichTextBox control on Form1.
	
	6. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Declare Function RegCreateKey Lib "advapi32.dll" _
	   Alias "RegCreateKeyA" (ByVal hKey As Long, _
	                          ByVal lpSubKey As String, _
	                          phkResult As Long) As Long
	                   
	  Private Declare Function RegSetValue Lib "advapi32.dll" _
	   Alias "RegSetValueA" (ByVal hKey As Long, _
	                         ByVal lpSubKey As String, _
	                         ByVal dwType As Long, _
	                         ByVal lpData As String, _
	                         ByVal cbData As Long) As Long
	
	  ' Return codes from Registration functions.
	  Const ERROR_SUCCESS = 0&
	  Const ERROR_BADDB = 1&
	  Const ERROR_BADKEY = 2&
	  Const ERROR_CANTOPEN = 3&
	  Const ERROR_CANTREAD = 4&
	  Const ERROR_CANTWRITE = 5&
	  Const ERROR_OUTOFMEMORY = 6&
	  Const ERROR_INVALID_PARAMETER = 7&
	  Const ERROR_ACCESS_DENIED = 8&
	
	  Private Const HKEY_CLASSES_ROOT = &H80000000
	  Private Const MAX_PATH = 260&
	  Private Const REG_SZ = 1
	
	  Private Declare Sub SHChangeNotify Lib "shell32.dll" _
	             (ByVal wEventId As Long, _
	              ByVal uFlags As Long, _
	              dwItem1 As Any, _
	              dwItem2 As Any)
	
	  Const SHCNE_ASSOCCHANGED = &H8000000
	  Const SHCNF_IDLIST = &H0&
	
	  Private Sub Form_Click()
	     Dim sKeyName As String   ' Holds Key Name in registry.
	     Dim sKeyValue As String  ' Holds Key Value in registry.
	     Dim ret&           ' Holds error status if any from API calls.
	     Dim lphKey&        ' Holds  key handle from RegCreateKey.
	     Dim path As String
	
	     path = App.path
	     If Right(path, 1) <> "\" Then
	        path = path & "\"
	     End If
	
	  ' This creates a Root entry called "MyApp".
	     sKeyName = "MyApp"
	     sKeyValue = "My Application"
	     ret& = RegCreateKey&(HKEY_CLASSES_ROOT, sKeyName, lphKey&)
	     ret& = RegSetValue&(lphKey&, "", REG_SZ, sKeyValue, 0&)
	
	  ' This creates a Root entry called .BAR associated with "MyApp".
	     sKeyName = ".BAR"
	     sKeyValue = "MyApp"
	     ret& = RegCreateKey&(HKEY_CLASSES_ROOT, sKeyName, lphKey&)
	     ret& = RegSetValue&(lphKey&, "", REG_SZ, sKeyValue, 0&)
	
	  ' This sets the command line for "MyApp".
	     sKeyName = "MyApp"
	     sKeyValue = path & "MyApp.exe %1"
	     ret& = RegCreateKey&(HKEY_CLASSES_ROOT, sKeyName, lphKey&)
	     ret& = RegSetValue&(lphKey&, "shell\open\command", REG_SZ, _
	                         sKeyValue, MAX_PATH)
	
	  ' This sets the icon for the file extension
	     sKeyName = "MyApp"
	     sKeyValue = path & "myIcon.ico"
	     ret& = RegCreateKey&(HKEY_CLASSES_ROOT, sKeyName, lphKey&)
	     ret& = RegSetValue&(lphKey&, "DefaultIcon", REG_SZ, _
	                         sKeyValue, MAX_PATH)
	   
	  ' This notifies the shell that the icon has changed
	     SHChangeNotify SHCNE_ASSOCCHANGED, SHCNF_IDLIST, 0, 0
	
	  End Sub
	
	  Private Sub Form_Load()
	   ' When the file is double clicked the name is stored in Command()
	
	     RichTextBox1.LoadFile Command()
	  End Sub
	
	7. From the File menu, choose Make Project1.exe and compile the project as
	  MyApp.exe.
	
	8. In the application directory, create a text file named myFile.bar and enter
	  some text into it. The file displays the default Windows icon.
	
	9. Now run MyApp.exe and click on the form. This creates the following structure
	  in the Registry:
	
	.bar = MyApp
	     MyApp = My Application
	       | 
	        -- DefaultIcon= myIcon.ico
	       |
	        -- Shell
	             |
	              ----open
	                   |
	                    ------command = MyApp.exe %1
	
	10. The icon of myFile.bar is changed to myIcon.ico.
	
	11. Double-clicking myFile.bar starts MyApp.exe and the text is seen in the
	  RichTextBox control.
	
	REFERENCES
	==========
	
	  Q185453 HOWTO: Associate a File Extension with Your Application
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbIcon kbRegistry kbSDKWin32 kbShellGrp kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
