---
layout: page
title: "Q257777: FIX: Printer.Height May Eject the Wrong Amount of Paper"
permalink: /kb/257/Q257777/
---

## Q257777: FIX: Printer.Height May Eject the Wrong Amount of Paper

	Article: Q257777
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbV
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using continuous feed paper (such as pin feed paper), and you
	assign a value to the Printer.Height property, the amount of paper ejected by
	the printer may be up to one tenth of one millimeter off the specified height.
	This small discrepancy may not be visible when printing a single page, but it is
	cumulative with each page.
	
	CAUSE
	=====
	
	Visual Basic incorrectly converts the number assigned to Printer.Height from
	TWIPS (1440 TWIPS to the inch) to tenths of millimeters, which it uses
	internally to represent the height.
	
	Prior to Visual Basic 6.0 Service Pack 4, Visual Basic performed the following
	calculation:
	
	  ' TMM stands for tenths of millimeters
	  Const TWIPS_PER_CM = 567
	  Const TMM_PER_CM = 100
	
	  Temp = ValueInTwips * TMM_PER_CM / TWIPS_PER_CM
	  ValueInTMM = Temp - (Temp - Int(Temp))
	  ' First the wrong conversion factor is used
	  ' and then the result is truncated.
	
	Visual Basic 6.0 Service Pack 4 performs the following calculation:
	
	  Const TWIPS_PER_INCH = 1440
	  Const TMM_PER_INCH = 254
	  ValueInTMM = Int(ValueInTwips * TMM_PER_INCH / TWIPS_PER_INCH)
	
	RESOLUTION
	==========
	
	You can use one of the following techniques to work around the problem:
	
	- Compile the application using Visual Basic 6.0 Service Pack 4 or greater.
	
	- Do not modify the Printer.Height property. Instead, make it a requirement
	  that the end user set the default height manually from the Printers folder.
	  On Microsoft Windows NT, this requires the addition of new "forms" as
	  described in the "More Information" section.
	
	- Set the Printer.Height property to a value that produces the desired result.
	  First, determine the desired value in TWIPS, and then use the following
	  equation to assign that value to Printer.Height:
	
	  Printer.Height = ((((DesiredHeightInTwips * 254) / 1440) + 0.5) * 567) / 100 + 0.5
	
	  NOTE: Use this equation to obtain the correct height with versions of Visual
	  Basic prior to Visual Basic 6.0 Service Pack 4. Remove it if the code is
	  later compiled using Visual Basic 6.0 Service Pack 4 or greater.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	The printer driver must support custom paper sizes in order to use the Printer
	object's Height and Width properties.
	
	- To determine if a printer driver supports custom paper sizes, open the
	  Printers folder and look at the list of paper sizes for that printer
	
	  Under Windows 95, Windows 98, and Windows Me, select Printer Properties. Under
	  Microsoft Windows NT 4.0, select Document Defaults. Under Microsoft Windows
	  2000, select Printing Preferences. Look for an entry named "custom" or
	  something similar. When this option is selected you should be able to enter a
	  custom paper height and width. If the printer driver that is used by the end
	  user of your application has this option, then Printer.Height and
	  Printer.Width can be set. If it does not have this option, then the behavior
	  depends on the printer driver. Most drivers select the nearest available
	  size.
	
	- Very few printer drivers on Windows NT or Windows 2000 support custom paper
	  sizes
	
	  The recommended procedure is to have the end user add a new form of the
	  required size and set it as the default form for that printer. Visual Basic
	  then uses that form.
	
	  On Windows NT, highlight the printer icon in the Printers folder and then
	  select Server Properties from the File menu.
	
	- Height and Width are stored in tenths of millimeters (TMM)
	
	  Windows 95, Windows 98, and Windows Me store paper size information in TMM.
	  Windows NT and Windows 2000 store "Forms" in thousandths of millimeters.
	  However, the Printer.Height and Printer.Width properties do not use forms and
	  store the data in TMM. If you need a height that does not divide evenly into
	  TMM, then either restrict your users to using "forms" on NT, or add one TMM
	  to the paper size as needed so that it averages out, just as the calendar
	  does on leap year. For example, if you need to eject an extra .25 TMM, then
	  every fourth page, change the height to one TMM more than it was, print one
	  page, and then set it back for three more pages.
	
	  NOTE: The paper size cannot be changed in the middle of a document, so the
	  Printer.EndDoc method must be called before the paper size can be changed.
	
	- Troubleshooting suggestion
	
	  Try to obtain the results you want manually by changing the settings in the
	  Printers folder and then printing from Notepad. If you cannot get the results
	  you desire when printing from Notepad, then the issue is with the printer
	  driver rather than with Visual Basic.
	
	- Unit Of Measurement Conversion Function
	
	  Because units of measurement (UOM) are critical to using paper size correctly,
	  the following conversion function may prove useful.
	  Note that this function requires an hDC parameter as provided by the
	  Printer.hDC file. Many laser printers are either 300dpi or 600dpi (dots per
	  inch). On a 600dpi printer, each individual dot, or pixel, is 1/600 of an
	  inch. The hDC parameter is required in order to correctly convert to or from
	  the pixels UOM.
	
	      Public Function ConvertUnits(ByVal hDC As Long, _
	         ByVal OriginalLength As Single, _
	         ByVal OriginalWidth As Single, _
	         ResultLength As Single, _
	         ResultWidth As Single, _
	         FromUnits As ScaleModeConstants, _
	         ToUnits As ScaleModeConstants) As Boolean
	
	          Dim hiHeight As Double   ' tenths of millimeters
	          Dim hiWidth  As Double   ' tenths of millimeters
	          
	          Select Case FromUnits
	          Case vbInches
	              hiHeight = OriginalLength * TenthsOfMillimetersPerInch
	              hiWidth = OriginalWidth * TenthsOfMillimetersPerInch
	          Case vbMillimeters
	              hiHeight = OriginalLength * 10
	              hiWidth = OriginalWidth * 10
	          Case vbTwips
	              hiHeight = (CDbl(OriginalLength) / TwipsPerInch) * _
	                          TenthsOfMillimetersPerInch
	              hiWidth = (CDbl(OriginalWidth) / TwipsPerInch) * _
	                         TenthsOfMillimetersPerInch
	          Case vbPixels
	              On Error Resume Next
	              hiHeight = (CDbl(OriginalLength) / CDbl(GetDeviceCaps(hDC, _
	                          LOGPIXELSY))) * TenthsOfMillimetersPerInch
	              hiWidth = (CDbl(OriginalWidth) / CDbl(GetDeviceCaps(hDC, _
	                         LOGPIXELSX))) * TenthsOfMillimetersPerInch
	              If Err.Number <> 0 Then
	                  ConvertUnits = False
	                  Exit Function
	              End If
	              On Error GoTo 0
	          Case vbCentimeters
	              hiHeight = OriginalLength * 100
	              hiWidth = OriginalWidth * 100
	          Case vbCharacters
	              hiHeight = (CDbl(OriginalLength) / CharactersPerInch) * _
	                          TenthsOfMillimetersPerInch
	              hiWidth = (CDbl(OriginalWidth) / CharactersPerInch) * _
	                         TenthsOfMillimetersPerInch
	          Case vbHimetric
	              hiHeight = OriginalLength
	              hiWidth = OriginalWidth
	          Case vbPoints
	              hiHeight = (CDbl(OriginalLength) / PointsPerInch) * _
	                          TenthsOfMillimetersPerInch
	              hiWidth = (CDbl(OriginalWidth) / PointsPerInch) * _
	                         TenthsOfMillimetersPerInch
	          Case Else
	              ConvertUnits = False
	              Exit Function
	          End Select
	          
	          Select Case ToUnits
	          Case vbInches
	              ResultLength = hiHeight / TenthsOfMillimetersPerInch
	              ResultWidth = hiWidth / TenthsOfMillimetersPerInch
	          Case vbMillimeters
	              ResultLength = hiHeight / 10
	              ResultWidth = hiWidth / 10
	          Case vbTwips
	              ResultLength = (hiHeight / TenthsOfMillimetersPerInch) * _
	                              TwipsPerInch
	              ResultWidth = (hiWidth / TenthsOfMillimetersPerInch) * _
	                             TwipsPerInch
	          Case vbPixels
	              ResultLength = (hiHeight / TenthsOfMillimetersPerInch) * _
	                              GetDeviceCaps(hDC, LOGPIXELSY)
	              ResultWidth = (hiWidth / TenthsOfMillimetersPerInch) * _
	                             GetDeviceCaps(hDC, LOGPIXELSX)
	              If Err.Number <> 0 Then
	                  ConvertUnits = False
	                  Exit Function
	              End If
	          Case vbCentimeters
	              ResultLength = hiHeight / 100
	              ResultWidth = hiWidth / 100
	          Case vbCharacters
	              ResultLength = hiHeight / (TenthsOfMillimetersPerInch) * _
	                             CharactersPerInch
	              ResultWidth = hiWidth / (TenthsOfMillimetersPerInch) * _
	                            CharactersPerInch
	          Case vbHimetric
	              ResultLength = hiHeight
	              ResultWidth = hiWidth
	          Case vbPoints
	              ResultLength = (hiHeight / TenthsOfMillimetersPerInch) * _
	                              PointsPerInch
	              ResultWidth = (hiWidth / TenthsOfMillimetersPerInch) * _
	                             PointsPerInch
	          Case Else
	              ConvertUnits = False
	              Exit Function
	          End Select
	          ConvertUnits = True
	      End Function  ' ConvertUnits
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q157172 How to Create Custom Forms in Windows NT 4.0
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
