---
layout: page
title: "Q298133: HOWTO: List Fixed Pitch Fonts with GetTextMetrics"
permalink: /kb/298/Q298133/
---

## Q298133: HOWTO: List Fixed Pitch Fonts with GetTextMetrics

{% raw %}

	Article: Q298133
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbFont kbGDI kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 20-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the GetTextMetrics function within an iteration through the Printer
	object's Font collection to determine if a font is non-proportional by analyzing
	the TEXTMETRIC structure that is returned for each font in the collection.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton control (Command1) and a ListBox control (List1) to
	  Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Declare Function GetTextMetrics Lib "gdi32" _
	     Alias "GetTextMetricsA" _
	     (ByVal hdc As Long, _
	     lpMetrics As TEXTMETRIC) _
	     As Long
	
	  Private Type TEXTMETRIC
	     tmHeight As Long
	     tmAscent As Long
	     tmDescent As Long
	     tmInternalLeading As Long
	     tmExternalLeading As Long
	     tmAveCharWidth As Long
	     tmMaxCharWidth As Long
	     tmWeight As Long
	     tmOverhang As Long
	     tmDigitizedAspectX As Long
	     tmDigitizedAspectY As Long
	     tmFirstChar As Byte
	     tmLastChar As Byte
	     tmDefaultChar As Byte
	     tmBreakChar As Byte
	     tmItalic As Byte
	     tmUnderlined As Byte
	     tmStruckOut As Byte
	     tmPitchAndFamily As Byte
	     tmCharSet As Byte
	  End Type
	
	  Const FIXED_PITCH_BIT As Byte = 1
	
	  Private Sub Command1_Click()
	   Dim index As Long
	   Dim tm As TEXTMETRIC
	   Dim ret As Long
	   Dim FontFound As Boolean
	   
	   FontFound = False   ' Just in case none are found!
	   List1.Clear
	   For index = 0 To Printer.FontCount - 1      ' Determine number of fonts.
	      Printer.FontName = Printer.Fonts(index)  ' Select the font.
	      ret = GetTextMetrics(Printer.hdc, tm)    ' Retrieve information.
	      ' Test the fixed pitch bit.
	      ' Fonts with this bit off are fixed pitch.
	      If (tm.tmPitchAndFamily And FIXED_PITCH_BIT) = 0 Then
	          List1.AddItem Printer.Fonts(index)
	          FontFound = True   ' Found at least one!
	      End If
	   Next index
	   If Not FontFound Then List1.AddItem "No fixed pitched fonts found!"
	  End Sub
	
	4. Run the project, and click Command1. The ListBox is populated with the names
	  of all fixed-pitched fonts that are available to the current printer.
	
	REFERENCES
	==========
	
	For additional information on fonts and the GetTextMetrics function, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q152136 HOWTO: Know if Large/Small Font Is in Use Under Win95/98/Me/NT
	
	Additional query words: non-proportional Font Fixed Pitch
	
	======================================================================
	Keywords          : kbAPI kbFont kbGDI kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
