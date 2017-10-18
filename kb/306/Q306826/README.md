---
layout: page
title: "Q306826: HOWTO: Get and Set the Memory Settings with eVB"
permalink: kb/306/Q306826/
---

## Q306826: HOWTO: Get and Set the Memory Settings with eVB

	Article: Q306826
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbVBM300
	Last Modified: 10-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use an eMbedded Visual Basic (eVB) application
	to adjust the system memory division.
	
	MORE INFORMATION
	================
	
	On Microsoft Windows CE devices, you can adjust the memory settings to allocate
	memory between object store (storage) and program memory. This adjustment is
	typically made in the system's Control Panel. The sample code to follow
	illustrates how you can use the SetSystemMemoryDivision function to
	programmatically set this boundary line.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new PocketPC project in eVB. Form1 is created by default.
	
	2. Add six labels, two text boxes, two command buttons, one horizontal scroll
	  bar, and one shape control to Form1. Do not be concerned with the placement
	  of these controls.
	
	3. Paste the following code into Form1:
	
	  Option Explicit
	  Const SYSMEM_CHANGED = 0
	  Const SYSMEM_FAILED = 3
	
	  Declare Function GetLastError Lib "coredll" () As Long
	
	  Declare Function GetSystemMemoryDivision Lib "coredll" _
	      (lpdwStorePages As Long, _
	       lpdwRamPages As Long, _
	       lpdwPageSize As Long) As Long
	
	  Declare Function SetSystemMemoryDivision Lib "coredll" _
	      (ByVal dwStorePages As Long) As Long
	
	  Dim lStorePages As Long
	  Dim lPageSize As Long
	  Dim lRamPages As Long
	      
	  Private Sub GetMemoryInfo()
	      Dim lRet As Long
	      lRet = GetSystemMemoryDivision(lStorePages, lRamPages, lPageSize)
	      If lRet > 0 Then
	          SetUI
	      Else
	          MsgBox "Call failed"
	      End If
	  End Sub
	
	  Private Sub Command1_Click()
	      GetMemoryInfo
	  End Sub
	
	  Private Sub Command2_Click()
	      Dim lRet As Long
	      lRet = SetSystemMemoryDivision(lStorePages)
	      
	      If lRet = SYSMEM_FAILED Then
	          MsgBox "Failure....GetLastError returned: " & GetLastError
	      End If
	      
	      GetMemoryInfo
	  End Sub
	
	  Private Sub Form_OKClick()
	      App.End
	  End Sub
	
	  Sub SetUI()
	      HScroll1.Max = lStorePages + lRamPages
	      HScroll1.Value = lStorePages
	      Label4.Caption = "Total main memory: " & _
	          FormatNumber(TurntoMB(lStorePages + lRamPages)) & " MB"
	      Text1.Text = FormatNumber(TurntoMB(lStorePages), 2) & " MB"
	      Text2.Text = FormatNumber(TurntoMB(lRamPages), 2) & " MB"
	      Label5.Caption = Text1.Text
	      Label6.Caption = Text2.Text
	  End Sub
	
	  Public Function TurntoMB(lsize As Long) As Long
	      TurntoMB = (lsize * lPageSize) / 1024 ^ 2
	  End Function
	
	  Public Function TurnToMem(lsize As Long) As Long
	      TurnToMem = (lsize / lPageSize) * 1024 ^ 2
	  End Function
	
	  Private Sub HScroll1_Change()
	      Text1.Text = FormatNumber(TurntoMB(HScroll1.Value), 2) & " MB"
	      Text2.Text = FormatNumber(TurntoMB(HScroll1.Max - _
	          HScroll1.Value), 2) & " MB"
	      lStorePages = HScroll1.Value
	  End Sub
	
	  Private Sub Form_Load()
	      Label1.Caption = "Storage"
	      Label2.Caption = "Program"
	      Label3.Caption = "Allocated"
	      Label4.Caption = ""
	      Label5.Caption = ""
	      Label6.Caption = ""
	      Text1.Text = ""
	      Text2.Text = ""
	      Form1.Caption = "Memory Division"
	      Command1.Caption = "Get Memory Info"
	      Command2.Caption = "Set Memory Info"
	      HScroll1.Min = 0
	      HScroll1.Max = 8000
	      HScroll1.LargeChange = 100
	      HScroll1.SmallChange = 10
	      Label1.Move 120, 480, 735, 255
	      Label2.Move 2400, 480, 735, 255
	      Label3.Move 1320, 1680, 855, 255
	      Label4.Move 120, 120, 2895, 255
	      Label5.Move 240, 1680, 975, 255
	      Label6.Move 2280, 1680, 975, 255
	      Text1.Move 120, 840, 975, 255
	      Text2.Move 2400, 840, 975, 255
	      Command1.Move 120, 2520, 2055, 375
	      Command2.Move 120, 3000, 2055, 375
	      HScroll1.Move 120, 1200, 3255, 255
	      Shape1.Move 120, 1560, 3255, 495
	
	      GetMemoryInfo
	  End Sub
	
	4. Ensure that the remote device is being targeted, and run the application.
	
	5. Scroll the horizontal scroll bar, and click Set Memory Info to change the
	  memory settings.
	
	IMPORTANT: A PocketPC runs a memory division check at least once every 5 seconds
	and whenever the Task Manager starts an application. As a part of this check,
	the memory division is set to equal parts if it is determined that free memory
	in one division is 5 times larger than the free memory in the other.
	
	REFERENCES
	==========
	
	For more information about Windows CE memory architecture, see the following
	MSDN Web site:
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/wcekern/htm/prog_mem.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBM300 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
