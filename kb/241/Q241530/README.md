---
layout: page
title: "Q241530: HOWTO: Call an API That Uses Structures from eVB/VBCE6"
permalink: /kb/241/Q241530/
---

## Q241530: HOWTO: Call an API That Uses Structures from eVB/VBCE6

	Article: Q241530
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbAPI kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB kbUserDT
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	"Currently there is no explicit support for user-defined data types (UDTs) in
	either eMbedded Visual Basic 3.0 (eVB) or the Microsoft Windows CE Toolkit for
	Visual Basic 6.0 (VBCE).
	
	This article illustrates one approach to calling Windows CE APIs from eVB/VBCE
	applications that require the use of UDT structures. This method requires use of
	advanced manipulation techniques for storing this data in memory.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	WARNING: This article assumes advanced knowledge of user-defined data types and
	their use with Win32 API calls in Microsoft Visual Basic. This method is not
	supported by Microsoft.
	
	A UDT is a data structure that can store multiple related variables of different
	types. UDTs are very useful when you want to pass several related pieces of
	information in one parameter of a function call. Unfortunately, because UDTs are
	not directly supported in either eVB or VBCE, this limits you to which API calls
	you can use from your eVB/VBCE programs.
	
	As a workaround to this limitation, there is a way you can manipulate the data
	and coax the contents of your would-be UDTs into a String variable that can be
	passed into an API call in the same format as a UDT would pass them. This
	example shows how to convert Long Integer data types into a string format
	compatible with how data is stored in memory.
	
	NOTE: Be careful with the Declaration statement in eVB/VBCE. The UDT should
	always be specified as a String passed ByVal. This is in contrast to what you
	find in the "API Text Viewer" viewing the Winceapi.txt file.
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. On the Project menu, select Add Module to add a module. Module1 is created by
	  default.
	
	3. Paste the the following code into Module1:
	
	  Option Explicit
	  '
	  ' Note: lpRect is passed as ByVal.
	  Declare Function GetWindowRect Lib "Coredll" ( _
	      ByVal hwnd As Long, ByVal lpRect As String) As Long
	
	  Public Function MemStringToLong(StringIn As String) As Long
	      On Error Resume Next
	      Dim hWorkVal As String
	      '
	      ' Convert the String back to Long Integer.
	      ' Converting back to Big Endian format.
	      hWorkVal = Hex(AscB(MidB(StringIn, 2, 1)))
	      If Not Err Then
	          hWorkVal = hWorkVal & Hex(AscB(MidB(StringIn, 1, 1)))
	      End If
	      '
	      ' Return Long Integer value.
	      MemStringToLong = CLng("&H" & hWorkVal)
	  End Function
	
	  Public Sub getRECT(ByVal sRect As String, _
	                     ByRef rLeft As Long, ByRef rTop As Long, _
	                     ByRef rRight As Long, ByRef rBottom As Long)
	      '
	      ' Convert memory-formatted String back to Long Integer.
	      rLeft = MemStringToLong(MidB(sRect, 1, 4))
	      rTop = MemStringToLong(MidB(sRect, 5, 4))
	      rRight = MemStringToLong(MidB(sRect, 9, 4))
	      rBottom = MemStringToLong(MidB(sRect, 13, 4))
	  End Sub
	
	  Public Function LongToMemoryString(ByVal lInputValue As Long) As String
	
	      Dim hWorkVal As String
	      '
	      ' Convert to HEX value.
	      hWorkVal = Hex(lInputValue)
	      '
	      ' Check to see if it is not zero.
	      If hWorkVal <> "0" Then
	          '
	          ' Convert to memory storage format (Little Endian).
	          ' For example, 0000A411 would convert to 11A40000.
	          ' Use ChrB to rebuild Bytes.
	          LongToMemoryString = ChrB(CInt("&H" & Mid(hWorkVal, 3, 2)))
	          LongToMemoryString = LongToMemoryString & _
	                               ChrB(CInt("&H" & Mid(hWorkVal, 1, 2)))
	          LongToMemoryString = LongToMemoryString & ChrB(CInt("&H00"))
	          LongToMemoryString = LongToMemoryString & ChrB(CInt("&H00"))
	      Else
	          ' Just return zeros.
	          ' Use ChrB to build Bytes.
	          LongToMemoryString = ChrB(CInt("&H00"))
	          LongToMemoryString = LongToMemoryString & ChrB(CInt("&H00"))
	          LongToMemoryString = LongToMemoryString & ChrB(CInt("&H00"))
	          LongToMemoryString = LongToMemoryString & ChrB(CInt("&H00"))
	      End If
	  End Function
	
	  Public Function RECT(rLeft As Long, rTop As Long, _
	                       rRight As Long, rBottom As Long) As String
	      '
	      ' Convert inbound Long Integers to a memory storage String format.
	      RECT = LongToMemoryString(rLeft) & _
	             LongToMemoryString(rTop) & _
	             LongToMemoryString(rRight) & _
	             LongToMemoryString(rBottom)
	  End Function
	
	4. Add a Command button to Form1.
	
	5. Paste the following code into Form1:
	
	  Option Explicit
	  Private Sub Form_Load()
	      Command1.Move 120, 120, 2000, 600
	      Command1.Caption = "Get Form1 RECT Info."
	  End Sub
	
	  Private Sub Command1_Click()
	      Dim lRet As Long
	      Dim sMessage  As String
	      Dim sRect As String
	      Dim rLeft As Long
	      Dim rTop As Long
	      Dim rRight  As Long
	      Dim rBottom  As Long
	      '
	      ' Initialize RECT memory string.
	      ' Convert initial Rect values to String to pass into GetWindowRect API.
	      sRect = RECT(rLeft, rTop, rRight, rBottom)
	      '
	      ' Call GetWindowRect.
	      lRet = GetWindowRect(Me.hwnd, sRect)
	      '
	      ' Test return value.
	      If lRet > 0 Then
	          '
	          ' Convert String back to Long Integer.
	          getRECT sRect, rLeft, rTop, rRight, rBottom
	          '
	          ' Display results.
	          sMessage = "RECT is defined as follows:" & vbCrLf
	          sMessage = sMessage & "Left: " & rLeft & vbCrLf
	          sMessage = sMessage & "Top: " & rTop & vbCrLf
	          sMessage = sMessage & "Right: " & rRight & vbCrLf
	          sMessage = sMessage & "Bottom: " & rBottom
	          
	          MsgBox sMessage, vbOKOnly + vbInformation, "Form Settings"
	      Else
	          MsgBox "Call to GetWindowRect Failed.", _
	              vbOKOnly + vbCritical, "Failure"
	      End If
	  End Sub
	
	6. Run the application.
	
	7. Click on the Command button and note the results.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q102025 Explanation of Big Endian and Little Endian Architecture
	
	For more information, please see the MSDN:
	
	  Creating User-Defined Types for DLL Functions
	
	  Creating Your Own Data Types
	
	Additional query words: vbce6 vcce6 wce eVB
	
	======================================================================
	Keywords          : kbAPI kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB kbUserDT 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600 kbVBeMb300
	Version           : :1.0,3.0
	Hardware          : WinCE
	Issue type        : kbhowto
	
	=============================================================================
	
