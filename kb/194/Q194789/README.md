---
layout: page
title: "Q194789: HOWTO: Determine Available PaperBins wth DeviceCapabilities API"
permalink: /kb/194/Q194789/
---

## Q194789: HOWTO: Determine Available PaperBins wth DeviceCapabilities API

{% raw %}

	Article: Q194789
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbAPI kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-SEP-2001
	
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
	
	If setting the PaperBin property of the Printer object fails to select the
	desired bin, it might be because the printer driver does not recognize the value
	being assigned. For example, you assign the constant for the upper bin
	(vbPRBNUpper) and it fails. It turns out that the printer driver considers its
	upper bin to be the Cassette bin. In this case, you need to use the Cassette
	constant to select the printer's upper bin.
	
	This article shows how to enumerate a printer's paper bins.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton and TextBox to the form.
	
	3. Set Text1's ScrollBar property to "2 - Vertical" and the MultiLine property
	  to "True."
	
	4. Place the following code into Form1's code window:
	
	  Option Explicit
	
	  Private Declare Function DeviceCapabilities Lib "winspool.drv" _
	     Alias "DeviceCapabilitiesA" (ByVal lpDeviceName As String, _
	     ByVal lpPort As String, ByVal iIndex As Long, lpOutput As Any, _
	     ByVal dev As Long) As Long
	
	  Private Const DC_BINS = 6
	  Private Const DC_BINNAMES = 12
	
	  Private Sub Command1_Click()
	     Dim prn As Printer
	     Dim dwbins As Long
	     Dim ct As Long
	     Dim nameslist As String
	     Dim nextString As String
	     Dim numBin() As Integer
	
	     Text1.Font.Name = "Courier New"
	     Text1.Font.Size = 12
	     Text1.Text = ""
	     For Each prn In Printers
	          dwbins = DeviceCapabilities(prn.DeviceName, prn.Port, _
	            DC_BINS, ByVal vbNullString, 0)
	          ReDim numBin(1 To dwbins)
	          nameslist = String(24 * dwbins, 0)
	          dwbins = DeviceCapabilities(prn.DeviceName, prn.Port, _
	            DC_BINS, numBin(1), 0)
	          dwbins = DeviceCapabilities(prn.DeviceName, prn.Port, _
	            DC_BINNAMES, ByVal nameslist, 0)
	          If Text1.Text <> "" Then
	             Text1.Text = Text1.Text & vbCrLf & vbCrLf
	          End If
	          Text1.Text = Text1.Text & prn.DeviceName
	          For ct = 1 To dwbins
	             nextString = Mid(nameslist, 24 * (ct - 1) + 1, 24)
	             nextString = Left(nextString, InStr(1, nextString, _
	               Chr(0)) - 1)
	             nextString = String(6 - Len(CStr(numBin(ct))), " ") & _
	             numBin(ct) & "  " & nextString
	             Text1.Text = Text1.Text & vbCrLf & nextString
	          Next ct
	     Next prn
	  End Sub
	
	  Private Sub Form_Load()
	     ' Size and position the Form and controls
	     Me.Height = 7000
	     Me.Width = 7000
	     Text1.Top = 100
	     Text1.Left = 100
	     Text1.Height = 6450
	     Text1.Width = 5000
	     Text1.Text = ""   ' Clear the TextBox
	     Command1.Left = 5300
	     Command1.Top = 1000
	     Command1.Width = 1500
	     Command1.Caption = "List Bins"
	  End Sub
	
	5. Run the project and click on the CommandButton labeled "List Bins." The
	  TextBox is filled with a list of all installed printers and the PaperBin
	  settings each one supports.
	
	  NOTE: This approach lists all PaperBins known to the printer driver, but every
	  bin listed is not guaranteed to be physically installed on the printer. For
	  example, some printers are available with an optional envelope feeder. This
	  selection is reported by the API even if that feature is not currently
	  installed on the printer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbAPI kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
