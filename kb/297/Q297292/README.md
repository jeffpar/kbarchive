---
layout: page
title: "Q297292: HOWTO: Use RegObji.exe to Copy a Registry Key Programmatically"
permalink: kb/297/Q297292/
---

## Q297292: HOWTO: Use RegObji.exe to Copy a Registry Key Programmatically

	Article: Q297292
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbDLL kbRegistry kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 21-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article serves two purposes:
	
	1. Demonstrate how to use RegObji.exe to copy a registry key to another location
	  in the registry.
	
	2. Demonstrate how to use a registry key that contains binary data (specified as
	  type REG_BINARY) because the examples that come with RegObji.exe do not
	  demonstrate how to handle a binary registry value.
	
	The code sample in this article does not store the REG_BINARY value. If you need
	to preserve a value by assigning it to a variable, you can store the binary data
	in a variable of the VARIANT datatype.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload RegObji.exe now
	  (http://download.microsoft.com/download/vb60pro/Update/6.0/W9X2K/EN-US/RegObji.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, add a new standard Module, Module1, to the project.
	
	3. On the Project menu, click References, select "Registration Manipulation
	  Classes" (RegObji.exe), and then click OK.
	
	4. Add the following code to Module1:
	
	  Option Explicit
	
	  Dim readReg As Registry
	  Dim writeReg As Registry
	  Dim keyExists As Boolean
	  Dim I As Integer
	  Dim wKeys As RegKey
	  Dim rKeys As RegKey
	  Dim hiveR As RegKey
	  Dim hiveW As RegKey
	  Dim KeyToAdd As String
	  Dim KeyToFind As String
	
	  Public Sub main()
	
	  KeyToAdd = "Testing"
	  ' The following key should be present on all systems.
	  KeyToFind = "Microsoft\Direct3D\Drivers\Direct3D HAL"
	  Set writeReg = New Registry
	  Set readReg = New Registry
	
	  Set readReg = New RegObj.Registry
	  Set writeReg = New RegObj.Registry
	
	  Set hiveR = readReg.RegKeyFromString("\HKEY_LOCAL_MACHINE\SOFTWARE\")
	  Set rKeys = hiveR.SubKeys(KeyToFind)
	  Set hiveW = writeReg.RegKeyFromString("\HKEY_LOCAL_MACHINE\SOFTWARE\")
	
	  For I = 1 To hiveR.SubKeys.Count
	      If hiveR.SubKeys(I).Name = KeyToAdd Then
	          keyExists = True
	          Exit For
	      End If
	  Next
	
	  ' If the key already exists, do not modify it.
	  ' This may be changed as needed.
	  If Not keyExists Then
	      hiveW.SubKeys.Add (KeyToAdd)
	      hiveW.SubKeys.Reset
	
	      Set wKeys = hiveW.SubKeys(KeyToAdd)
	
	      For I = 1 To rKeys.Values.Count
	          wKeys.Values.Add rKeys.Values(I).Name, rKeys.Values(I).Value, _
	             rKeys.Values(I).Type
	      Next
	  End If
	  End Sub
	
	5. On the Project menu, click "Project1 Properties", and change the StartUp
	  object to Sub Main.
	
	6. Run the project.
	
	7. To verify that a key named Testing is created under
	  HKEY_LOCAL_MACHINE\SOFTWARE, run Regedit.exe. You may want to remove the
	  Testing key when you are finished.
	
	Additional query words: RegObj.dll
	
	======================================================================
	Keywords          : kbfile kbDLL kbRegistry kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
