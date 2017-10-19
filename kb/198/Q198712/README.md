---
layout: page
title: "Q198712: PRB: CommonDialog Changes System Wide Printer Properties"
permalink: /kb/198/Q198712/
---

## Q198712: PRB: CommonDialog Changes System Wide Printer Properties

	Article: Q198712
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnDlg kbCmnDlgPrint kbVBp kbVBp400 kbVBp500 kbVBp600
	Last Modified: 14-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Printer CommonDialog from a Visual Basic application under
	Windows 95 or Windows 98, changes made may be shared with other applications. If
	you look at the properties of the printer being used, it may also reflect your
	selections. This can include, but is not limited to, attributes such as Copies,
	PaperSize, Default Source, Duplex and Orientation.
	
	CAUSE
	=====
	
	The Common Dialog itself does not normally effect global default settings.
	However, the implementation in the Visual Basic Common Dialog control does. This
	is how changes made in the dialog are made known to the Printer object, which
	reads the new global default settings.
	
	NOTE: With Windows NT, this is not a problem. Windows NT security features
	prevent the Common Dialog Control from changing the printer's global default
	settings. This also means that the Printer object is not updated with the user's
	selections in the Common Dialog. Please see the article in the REFERENCES
	section for more information.
	
	RESOLUTION
	==========
	
	The workaround for this behavior is to substitute another dialog box for the
	Printer Common Dialog. Here are two basic ways to do this:
	
	1. Use the Win32 API function PrintDlg or PageSetupDlg to open a printer dialog
	  box. Changes made through this dialog are stored in a DEVMODE structure.
	  These settings can then be assigned directly to the Printer object's
	  properties. The article in the REFERENCES section includes an example of
	  using the PrintDlg API for this purpose.
	
	2. The second way, is to create and use your own dialog box rather than the
	  CommonDialog control. The changes made through this dialog can then be
	  assigned directly to the Printer object's properties.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	As you work through the following steps, please note that when the Printer
	Common Dialog is first displayed from a Visual Basic application, it always
	defaults to Copies = 1, regardless of what the printer driver's current default
	setting may be.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Project. Form1 is created by default.
	
	2. From the Project menu, choose Components, and then select the "Microsoft
	  Common Dialog Control". Click OK.
	
	3. Add a command button and a Common Dialog control to Form1.
	
	4. Paste the following code into the form's module:
	
	        Private Sub Command1_Click()
	        Debug.Print "Before: CommonDialog Copies = " & CommonDialog1.Copies _
	           & ", "; "Printer Object Copies = " & Printer.Copies
	        CommonDialog1.ShowPrinter
	        Debug.Print "After:  CommonDialog Copies = " & CommonDialog1.Copies _
	           & ", "; "Printer Object Copies = " & Printer.Copies
	        End Sub
	
	5. Check the Copies property of your default printer driver; set it to 1.
	
	6. Run the Project and click Command1.
	
	7. In the Printer Dialog box, change Copies to 4, and then click OK. The
	  Immediate Window will contain the following:
	
	  Before: CommonDialog Copies = 1; Printer Object Copies = 1
	  After:  CommonDialog Copies = 4; Printer Object Copies = 4
	
	8. Close the Project and check the Copies property of your default printer
	  driver. You will see that the Copies property also contains the value 4.
	
	9. Open a text editor, like Wordpad and select Print. The dialog box that opens
	  also shows Copies = 4. If you change Copies from here, it remembers the
	  change, but does not affect the printer driver.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q173981 PRB: Behavior Differences of Print Dialog Box on Different Platforms
	
	NOTE: This article includes an example of the first workaround.
	
	MSDN Library CD
	
	WIN32 Software Development Kit (SDK) Programmer's Guide, search on: "DEVMODE".
	
	Additional query words: comdlg32
	
	======================================================================
	Keywords          : kbCmnDlg kbCmnDlgPrint kbVBp kbVBp400 kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
