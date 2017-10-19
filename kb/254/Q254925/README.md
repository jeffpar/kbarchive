---
layout: page
title: "Q254925: PRB: Printer Object Fails to Track Default Printer"
permalink: /kb/254/Q254925/
---

## Q254925: PRB: Printer Object Fails to Track Default Printer

	Article: Q254925
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbCmnDlgPrint kbPrinting kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the Printer.Orientation property, the Printer object does not
	track the default printer again.
	
	CAUSE
	=====
	
	The Printer.Orientation property call changes the Printer.TrackDefault property
	to False so that the Printer object will not use the default orientation.
	
	RESOLUTION
	==========
	
	To resolve this problem add the following line of code before the line to change
	printer settings:
	
	  Printer.TrackDefault = True
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use the following steps to reproduce this behavior:
	
	1. Install two printers onto your computer and name them Printer 1 and Printer
	  2. Make Printer 1 the default printer.
	
	2. Create a Standard EXE project with Microsoft Visual Basic 6. Form1 is created
	  by default.
	
	3. From the Project menu, select Components. In the Components dialog box,
	  select the "Microsoft Common Dialog Control" check box and then click OK. The
	  Common Dialog control's icon is added to the Toolbox.
	
	4. Add a Common Dialog control to Form1.
	
	5. Add a CommandButton named Command1 to Form1 and then insert the following
	  code into the code window of Form1:
	
	     Private Sub Command1_Click()
	        Printer.Orientation = 2
	        CommonDialog1.ShowPrinter
	        Debug.Print Printer.DeviceName
	     End Sub
	
	6. Press F5 to run the project. Click Command1 and Printer 1 displays in the
	  Printer dialog box as the current default printer. Choose Printer 2 from the
	  drop down list, and then click OK to make Printer 2 the default Printer. You
	  then see Printer 1 displayed in the immediate window instead of Printer 2.
	
	7. Go back to design mode and add the following line of code:
	
	  Printer.TrackDefault = True
	
	Before this line:
	
	  CommonDialog1.ShowPrinter
	
	8. Press F5 to run the project again and now it works as expected.
	
	Additional query words: Orientation TrackDefault
	
	======================================================================
	Keywords          : kbprint kbCmnDlgPrint kbPrinting kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
