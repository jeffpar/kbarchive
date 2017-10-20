---
layout: page
title: "Q185453: HOWTO: Associate a File Extension with Your Application (Win32)"
permalink: /kb/185/Q185453/
---

## Q185453: HOWTO: Associate a File Extension with Your Application (Win32)

{% raw %}

	Article: Q185453
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-SEP-2001
	
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
	
	If your application makes use of data files and processes command-line
	arguments, you may want to associate the extension of your application's data
	file with your executable program name by modifying the Registry.
	
	MORE INFORMATION
	================
	
	You can make modifications to the Reg.dat file by calling the RegCreateKey&
	and RegSetValue& application programming interface (API) functions.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic for Windows. If Visual Basic is already running, from the
	  File menu (ALT+F, N) choose New Project and create a Standard EXE project.
	  Form1 is created by default.
	
	2. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Declare Function RegCreateKey Lib "advapi32.dll" Alias _
	        "RegCreateKeyA" (ByVal hKey As Long, _
	                          ByVal lpSubKey As String, _
	                          phkResult As Long) As Long
	        Private Declare Function RegSetValue Lib "advapi32.dll" Alias _
	        "RegSetValueA" (ByVal hKey As Long, _
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
	
	        Private Sub Form_Click()
	
	            Dim sKeyName As String   'Holds Key Name in registry.
	            Dim sKeyValue As String  'Holds Key Value in registry.
	            Dim ret&           'Holds error status if any from API calls.
	            Dim lphKey&        'Holds created key handle from RegCreateKey.
	
	        'This creates a Root entry called "MyApp".
	            sKeyName = "MyApp"
	            sKeyValue = "My Application"
	            ret& = RegCreateKey&(HKEY_CLASSES_ROOT, sKeyName, lphKey&)
	            ret& = RegSetValue&(lphKey&, "", REG_SZ, sKeyValue, 0&)
	
	        'This creates a Root entry called .BAR associated with "MyApp".
	            sKeyName = ".BAR"
	            sKeyValue = "MyApp"
	            ret& = RegCreateKey&(HKEY_CLASSES_ROOT, sKeyName, lphKey&)
	            ret& = RegSetValue&(lphKey&, "", REG_SZ, sKeyValue, 0&)
	
	        'This sets the command line for "MyApp".
	            sKeyName = "MyApp"
	            sKeyValue = "c:\mydir\my.exe %1"
	            ret& = RegCreateKey&(HKEY_CLASSES_ROOT, sKeyName, lphKey&)
	            ret& = RegSetValue&(lphKey&, "shell\open\command", REG_SZ, _
	                                sKeyValue, MAX_PATH)
	        End Sub
	
	3. Press ALT+F, V to save the project. Then press F5 to run the program. Click
	  once on the form and exit the application.
	
	4. Run REGEDIT from the Start menu Run option. You will find the .bar and MyApp
	  entries under the HKEY_CLASSES_ROOT key on your local machine.
	
	     .bar = MyApp
	     MyApp = My Application
	       |
	        -- Shell
	             |
	              -- open
	                   |
	                    -- command = c:\mydir\my.exe %1
	
	  You can delete these entries using the RegEdit Edit/Delete menu option.
	
	REFERENCES
	==========
	
	For information about associating a file extension with your application using
	Visual Basic 4.0, 16-bit, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q147805 : HOWTO: Associate a File Extension with Your Application
	
	Additional query words: SaveSetting GetSetting kbVBp kbVBp500 kbVBp600 kbWin32s kbAPI kbRegistry
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
