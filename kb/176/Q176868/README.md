---
layout: page
title: "Q176868: WD97: How to Programmatically Insert an Excel Chart into Word"
permalink: /kb/176/Q176868/
---

## Q176868: WD97: How to Programmatically Insert an Excel Chart into Word

{% raw %}

	Article: Q176868
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article includes a sample Microsoft Visual Basic for Applications macro to
	insert an existing Excel chart into a new Word document.
	
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
	
	The preferred method for accessing Microsoft Excel for Windows Object properties
	is to add the Microsoft Excel 8.0 Object Library as an available reference. To
	add the Microsoft Excel 8.0 Object Library reference in Word, follow these
	steps:
	
	1. In the Visual Basic Editor, click References on the Tools menu.
	
	2. Under Available References, select the "Microsoft Excel 8.0 Object Library"
	  check box.
	
	3. Click OK.
	
	After creating the reference, create and run the following Visual Basic macro:
	
	       Sub InsertXLChart()
	        Dim xlapp As Excel.Workbook
	        Documents.Add
	        ' Replace "XLfilename" with a complete path and file name
	        ' for an Excel worksheet that includes a chart.
	        Set xlapp = GetObject("XLfilename")
	        ' Activate the first chart in workbook.
	        xlapp.ActiveSheet.ChartObjects(1).Activate
	        ' Select the chart.
	        xlapp.ActiveChart.ChartArea.Select
	        ' Copy the chart.
	        xlapp.ActiveChart.ChartArea.Copy
	        With Selection
	           ' The wdPasteOLEObject constant will insert the chart as an
	           ' embedded object, and the wdInLine constant will insert the
	           ' chart on the Text layer and not the Drawing layer.
	           .PasteSpecial Link:=False, DataType:=wdPasteOLEObject, _
	              Placement:=wdInLine
	        End With
	        ' Close the instance of Excel.
	        Set xlapp = Nothing
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbcode kbProgramming kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
