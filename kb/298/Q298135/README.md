---
layout: page
title: "Q298135: PRB: Print Method Does Not Appear in Object Browser or ALM"
permalink: /kb/298/Q298135/
---

## Q298135: PRB: Print Method Does Not Appear in Object Browser or ALM

	Article: Q298135
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbCOMt kbide kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbIDEProject kbGrpDSVB
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Print method of the Printer, Form, or UserControl object does not appear in
	the Object Browser window or in the Auto List Members (ALM) feature.
	
	CAUSE
	=====
	
	The Object Browser window only displays objects and their associated methods.
	Methods such as Print are not associated with Printer, Form, or UserControl
	objects. Instead, they are general methods that Visual Basic attaches to these
	objects. Because they are not intrinsic methods, they are not displayed in the
	browser or by IntelliSense.
	
	MORE INFORMATION
	================
	
	To verify this, check the Visual Basic object library with the OLE Viewer that
	ships with Microsoft Visual Studio as follows:
	
	Steps to Use the OLE Viewer
	---------------------------
	
	1. From the Windows Start menu, point to Programs, point to Microsoft Visual
	  Studio 6.0, point to Microsoft Visual Studio 6.0 Tools, and then click OLE
	  View.
	
	2. In the OLE Viewer, click the TypeLib Viewer button that has three red
	  triangles on it, or click View TypeLib on the File menu. An Open dialog box
	  appears.
	
	3. Browse to the VB6.olb file, and then click Open. (The default path for
	  VB6.olb is C:\Program Files\Microsoft Visual Studio\VB98\Vb6.olb.)
	
	4. From the View menu, ensure that the "Group by type kind" check box is
	  selected. A list of folders appears in the left pane.
	
	5. Click to expand the CoClasses, coclass Printer, _Printer, and Methods
	  folders. Notice that the Print method does not appear in this list.
	
	6. Repeat the previous step for the coclass Form and coclass UserControl
	  folders.
	
	NOTE: The ALM feature was included in Visual Basic 5.0 and is not available in
	earlier versions.
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE The following steps are specific to Visual Basic 6.0 and differ slightly in
	earlier versions, especially Visual Basic 4.0.
	
	1. Create a new Standard EXE project in Visual Basic 6.0. Form1 is created by
	  default.
	
	2. From the Tools menu, click Options. On the Editor tab, make sure that the
	  "Auto List Members" check box is selected, and then click OK.
	
	3. Double click on the form to go into the Form_Load event in the code window.
	
	4. Type the following line exactly (including the PERIOD):
	
	  "Printer." (without the quotation marks)
	
	  When you type the period, the ALM feature displays the available properties
	  and methods alphabetically. Note that the Print method is not listed. If you
	  finish typing the line as "Printer.Print" (without the quotation marks) and
	  press the ENTER key, Print turns blue (by default) to indicate that the
	  method is known.
	
	5. From the View menu, click Object Browser, or press the F2 key.
	
	6. In the Object Browser window, the combo box in the upper left should default
	  to <All Libraries>. You can leave this or select VB.
	
	7. Scroll down the left pane, and then click Printer. Scroll the list of members
	  in the right pane. Notice that Print is not listed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbCOMt kbide kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
