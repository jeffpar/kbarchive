---
layout: page
title: "Q153309: HOWTO: Retrieve the Registered User Under Windows"
permalink: /kb/153/Q153309/
---

## Q153309: HOWTO: Retrieve the Registered User Under Windows

	Article: Q153309
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kb16bitonly kbAPI kbRegistry kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The strings related to the registered user of a particular copy of Windows are
	stored in a string inside USER.EXE. They are displayed in the Help About box of
	File Manager, or Explorer in Windows 95 and Windows 98. This article provides a
	code sample showing how to extract this information.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a command button on the form.
	
	3. Add the following code to the form1 code window:
	
	     Option Explicit
	
	     Private Declare Function GetModuleHandle Lib "Kernel" _
	        (ByVal Module As String) As Integer
	     Private Declare Function LoadString Lib "user" _
	        (ByVal hInst As Integer, ByVal wID As Integer, _
	        ByVal buf As Any, ByVal size As Integer) As Integer
	
	     Sub Command1_Click()
	      Dim ihInst As Integer
	      Dim sUserName As String * 128
	      Dim sOrganization As String * 128
	      Dim sTitle As String
	      Dim iLength As Integer
	      ihInst = GetModuleHandle("user.exe")
	      iLength = LoadString(ihInst, 514, sUserName, Len(sUserName))
	      sUserName = Left$(sUserName, iLength)
	      iLength = LoadString(ihInst, 515, sOrganization, Len(sOrganization))
	      sOrganization = Left$(sOrganization, iLength)
	      Print sUserName
	      Print sOrganization
	     End Sub
	
	4. Press F5 to run the project. Click the command button. The information should
	  be printed on the form.
	
	REFERENCES
	==========
	
	The API can also be used if you use Visual Basic 4.0 32-bit by changing the
	RegisteredOrganization and RegisteredOwner values in:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion
	
	as explained in the Microsoft Knowledge Base article:
	
	  Q145679 : HOWTO: Use the Registry API to Save and Retrieve Setting
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q88363 : Changing Name and Company After Windows Installation
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbAPI kbRegistry kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
