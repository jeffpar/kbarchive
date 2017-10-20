---
layout: page
title: "Q143274: HOWTO: Retrieve Printer Name from Windows95/98/Me Registry in VB"
permalink: /kb/143/Q143274/
---

## Q143274: HOWTO: Retrieve Printer Name from Windows95/98/Me Registry in VB

{% raw %}

	Article: Q143274
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbprint kbAPI kbPrinting kbRegistry kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Registry is used by Windows 95, Windows 98, and Windows Me to determine what
	application programs and hardware items are installed in the computer system.
	This article explains how to retrieve the name of the default printer from the
	Registry from within a Visual Basic application program.
	
	MORE INFORMATION
	================
	
	Manipulating the Registry in Visual Basic
	-----------------------------------------
	
	The Windows 95/98/Me Registry is a database of information containing
	configuration details about the hardware and software installed in your computer
	system. Under Windows 3.1, this information is maintained through initialization
	(INI) files.
	
	The Registry is comprised of keys. Each key may contain a specific value or other
	subkeys that in turn may contain values or other subkeys. You can examine or
	modify the contents of the registration database by using the Win32 Registry API
	functions in a Visual Basic program or by using the Registry Editor (REGEDIT).
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The demonstration program below shows how to use the Win32 Registry API functions
	to retrieve the default printer's name from the Registry.
	
	1. The first step to retrieve the printer name is to call the RegOpenKeyEx
	  function. This function opens the specified key in the registration database.
	  In our case, we want to open the key that is associated with the printer.
	  This key is stored in the Registry as:
	
	  System
	     Current Control Set
	        Control
	           Print
	              Printers
	                 Default
	
	  All of the above items are keys and subkeys. We are interested in the Printers
	  subkey.
	
	  We also need to tell the RegOpenKeyEx function that we want to work with the
	  Default subkey. After calling this function, a value is returned that is set
	  to zero if the function was successful.
	
	2. The next step is to retrieve the actual value stored for the key we are
	  interrogating. Because we want to retrieve the name that is assigned to the
	  default printer, we want to call the RegQueryValueEx function. We must tell
	  this function that we want to retrieve the value that was given to the
	  Default subkey.
	
	3. The last step is mandatory. You must call the RegCloseKey function to release
	  the handle of the key you have been accessing in the Registration database.
	  This terminates access to the registration database and frees the handle for
	  future use by the computer system.
	
	How to Create the Demonstration Program
	---------------------------------------
	
	The demonstration program below shows how to retrieve the name of the default
	printer from the Windows 95, Windows 98, or Windows Me Registry.
	
	1. Create a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following constant and Declare statements to the General Declarations
	  section of Form1:
	
	        Private Declare Function RegOpenKeyEx Lib "advapi32" Alias _
	        "RegOpenKeyExA" (ByVal hKey As Long, ByVal lpSubKey As String, _
	        ByVal dwReserved As Long, ByVal samDesired As Long, phkResult _
	        As Long) As Long
	
	        Private Declare Function RegQueryValueEx Lib "advapi32" Alias _
	        "RegQueryValueExA" (ByVal hKey As Long, ByVal lpValueName$, ByVal _
	        lpdwReserved As Long, lpdwType As Long, lpData As Any, lpcbData As _
	        Long) As Long
	
	        Private Declare Function RegCloseKey Lib "advapi32" (ByVal hKey As _
	        Long) As Long
	
	        Const HKEY_CURRENT_CONFIG As Long = &H80000005
	
	3. Add a Text Box control to Form1.
	
	4. Add a Command Button control to Form1.
	
	5. Add the following code to the Click event for Command1:
	
	        Private Sub Command1_Click()
	            Dim PName As String
	            PName = GetCurrPrinter()
	            Text1.Text = PName
	        End Sub
	
	6. Create a new procedure called GetCurrPrinter. Add the following code to this
	  procedure:
	
	        Function GetCurrPrinter() As String
	            GetCurrPrinter = RegGetString$(HKEY_CURRENT_CONFIG, _
	        "System\CurrentControlSet\Control\Print\Printers", "Default")
	        End Function
	
	7. Create a new procedure called RegGetString. Add the following code to this
	  procedure:
	
	      Function RegGetString$(hInKey As Long, ByVal subkey$, ByVal valname$)
	          Dim RetVal$, hSubKey As Long, dwType As Long, SZ As Long
	          Dim R As Long
	
	          RetVal$ = ""
	          Const KEY_ALL_ACCESS As Long = &H9F003F
	          Const ERROR_SUCCESS As Long = 0
	          Const REG_SZ As Long = 1
	
	          R = RegOpenKeyEx(hInKey, subkey$, 0, KEY_ALL_ACCESS, hSubKey)
	          If R <> ERROR_SUCCESS Then GoTo Quit_Now
	
	          SZ = 256: v$ = String$(SZ, 0)
	          R = RegQueryValueEx(hSubKey, valname$, 0, dwType, ByVal v$, SZ)
	          If R = ERROR_SUCCESS And dwType = REG_SZ Then
	              RetVal$ = Left$(v$, SZ)
	          Else
	              RetVal$ = "--Not String--"
	          End If
	          If hInKey = 0 Then R = RegCloseKey(hSubKey)
	      Quit_Now:
	          RegGetString$ = RetVal$
	      End Function
	
	Execute the demonstration program by pressing the F5 function key. When you click
	the Command Button control, the name of your default printer is displayed in the
	Text Box control.
	
	REFERENCES
	==========
	
	Technical Articles, Windows Articles, User Interface Articles. How to Use the
	Windows NT Registry in Your Application.
	
	Product Documentation, SDKs, Win32 SDK, Win32, Reference, Functions. RegOpenKeyEx
	QuickInfo Group Overview.
	
	Product Documentation, SDKs, Win32 SDK, Win32, Reference, Functions.
	RegQueryValueEx QuickInfo Group Overview.
	
	Product Documentation, SDKs, Win32 SDK, Win32, Overviews, System Services,
	Registry. Retrieving Data from the Registry.
	
	Product Documentation, SDKs, Win32 SDK, Win32, Reference, Functions. RegCloseKey
	QuickInfo Group Overview.
	
	Additional query words: KBPRINTING KBWIN32SDI
	
	======================================================================
	Keywords          : kbprint kbAPI kbPrinting kbRegistry kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
