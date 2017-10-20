---
layout: page
title: "Q173981: PRB: Behavior Differences of Print Dialog on Different Platforms"
permalink: /kb/173/Q173981/
---

## Q173981: PRB: Behavior Differences of Print Dialog on Different Platforms

{% raw %}

	Article: Q173981
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbAPI kbCmnDlg kbCmnDlgPage kbCmnDlgPrint kbSDKWin32 kbVBp kbVBp400 kbVBp500 kb
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows XP 
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows XP 
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows XP 
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0, used with:
	   - the operating system: Microsoft Windows XP 
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows XP, Windows 2000, or Windows NT 4.0, when you call the ShowPrinter
	method of the CommonDialog control, some of the properties of the Printer
	object, such as the Copies and the Orientation properties, are not affected by
	changes that the user selects in the Print dialog box.
	
	This problem does not occur with the same properties of the Printer object on
	Microsoft Windows Millennium Edition (Me), Microsoft Windows 98, or Microsoft
	Windows 95.
	
	CAUSE
	=====
	
	This problem occurs because the Printer object and the CommonDialog control do
	not share information. The object and the control have their own device context.
	For more information, see the "References" section.
	
	RESOLUTION
	==========
	
	You can work around this problem for the properties that the CommonDialog
	control exposes. To demonstrate this, replace the code for Form1 of the sample
	project in the "More Information" section with the following code, which assigns
	the property values from the CommonDialog control to the Printer object:
	
	      With CommonDialog1
	          .ShowPrinter
	          Printer.Copies = .Copies
	          Printer.Orientation = .Orientation
	          Debug.Print "Copies = " & CStr(Printer.Copies) & vbCrLf & _
	                      "Orientation = " & CStr(Printer.Orientation)
	        End With
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The CommonDialog control only exposes the following properties:
	
	- Copies
	- FromPage
	- ToPage
	- Orientation
	- PrinterDefault
	
	If you need any other information from this dialog box, you must use the Print
	dialog box application programming interface (API) functions (either the
	PrintDlg or the PageSetupDlg function) that access and change the printer
	properties. Because of packing alignment issues for structures in Visual Basic
	6.0, calling Print dialog box functions directly is unnecessarily complex.
	Therefore, Microsoft recommends that you call these functions from a C
	dynamic-link library (DLL).
	
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add a CommandButton control and a CommonDialog control to Form1. The controls
	  are named Command1 and CommonDialog1 by default.
	
	3. Add the following code to Form1:
	
	  Private Sub Command1_Click()
	      With CommonDialog1
	          .ShowPrinter
	          Debug.Print "Copies = " & CStr(Printer.Copies) & vbCrLf & _
	                      "Orientation = " & CStr(Printer.Orientation)
	        End With
	
	4. Press F5 to run the application.
	
	5. Click Command1.
	
	6. In the Print dialog box, change the number of copies and the orientation, and
	  then click OK. Notice that Copies and Orientation appear as 1 in the Debug
	  (Immediate) window, regardless of the settings that you selected in the Print
	  dialog box.
	
	
	REFERENCES
	==========
	
	For additional information about the CommonDialog control, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q198712 PRB: CommonDialog Changes System Wide Printer Properties
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbAPI kbCmnDlg kbCmnDlgPage kbCmnDlgPrint kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
