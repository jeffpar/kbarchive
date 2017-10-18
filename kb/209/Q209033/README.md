---
layout: page
title: "Q209033: INFO: Maximum Window Sizes for Windows CE Devices"
permalink: kb/209/Q209033/
---

## Q209033: INFO: Maximum Window Sizes for Windows CE Devices

	Article: Q209033
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives the maximum window sizes your forms can be on Handheld PC,
	Handheld PC Pro, and Palm-size PC devices. The article also shows how to create
	a simple project that displays the maximum screen size.
	
	MORE INFORMATION
	================
	
	The following are the maximum window sizes you can display in a Windows CE
	device.
	
	Handheld PC Device
	
	+-------------------------+
	|        | Height | Width | 
	+-------------------------+
	| Twips  | 3600   | 9600  | 
	+-------------------------+
	| Pixels | 213    | 472   | 
	+-------------------------+
	
	Handheld PC Pro and Handheld PC 2000 Devices
	
	+-------------------------+
	|        | Height | Width | 
	+-------------------------+
	| Twips  | 7200   | 9600  | 
	+-------------------------+
	| Pixels | 453    | 632   | 
	+-------------------------+
	
	Palm-size PC and Pocket PC Devices
	
	+-------------------------+
	|        | Height | Width | 
	+-------------------------+
	| Twips  | 4800   | 3600  | 
	+-------------------------+
	| Pixels | 293    | 232   | 
	+-------------------------+
	
	Notes::
	
	- There are 1440 Twips per inch.
	- These values are general and may not apply to every device within a
	  category.
	
	  To verify these measurements you can create a project that displays the height
	  and width properties of the screen object. The following section shows you
	  how to create a project to display the maximum window size.
	
	NOTE: HPC devices cannot be targeted from eMbedded Visual Basic. PocketPC and HPC
	2000 devices cannot be targeted from the Windows CE Toolkit for Visual Basic.
	
	Steps to Create the Sample Project
	----------------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Use the emulation mode for the project. Form1 is created by default.
	
	2. Add a CommandButton to Form1.
	
	3. Copy the following code to the Form1 code window:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	     Command1.Caption = "Maximum Window Size"
	  End Sub
	
	  Private Sub Command1_Click()
	     Dim strSize As String
	     strSize = "Maximum Height: " & Screen.Height & " Twips"
	     strSize = strSize & vbCrLf
	     strSize = strSize & "Maximum Width: " & Screen.Width & " Twips"
	     MsgBox strSize
	  End Sub
	
	4. Press F5 to start the project. Click the Maximum Window Size button to
	  display the maximum window size information.
	
	Additional query words: eVB vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	
