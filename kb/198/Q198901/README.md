---
layout: page
title: "Q198901: SAMPLE: PageSet.exe Programmatically Changes Default Printer"
permalink: kb/198/Q198901/
---

## Q198901: SAMPLE: PageSet.exe Programmatically Changes Default Printer

	Article: Q198901
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbReportWriter kbVBp600 kbDataEnv kbGrpDSVBDB
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PageSet.exe is a self-extracting executable file that contains a DLL file that
	allows you to programmatically change the printer orientation.
	
	This DLL is particularly useful when dealing with the Data Report, which reads
	the default printer orientation prior to displaying or printing a report.
	PageSet.exe allows you to programmatically change and reset your printer
	orientation.
	
	NOTE: Microsoft Visual Studio 6.0 Service Pack 4 introduces a new property called
	Orientation for Data Report.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q261193 FIX: Error Message 'Report Width is Larger Than the Paper Width' When
	  Showing Data Report in Landscape
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Pageset.exe
	  (http://download.microsoft.com/download/vb60pro/Utility/1/WIN98/EN-US/Pageset.exe)
	
	Release Date: Apr-13-1999
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	+---------------------------+
	| FileName           | Size | 
	+---------------------------+
	| PageSet.dll        | 1KB  | 
	+---------------------------+
	| PageSet.vbp        | 1KB  | 
	+---------------------------+
	| frmSit.frm         | 1KB  | 
	+---------------------------+
	| Orient.bas         | 8KB  | 
	+---------------------------+
	| PrinterControl.cls | 1KB  | 
	+---------------------------+
	| Readme.txt         | 1KB  | 
	+---------------------------+
	On Windows NT and Windows 2000 systems, PageSet.dll requires administrative
	access to your printer settings. To set this up, you will have to save the
	driver settings to your local computer, which can be accomplished with the
	following steps:
	
	1. Using the Add Printer wizard in Control Panel, select My Computer instead of
	  Network Printer Server, and then choose Next.
	
	2. Click the Add Port button.
	
	3. Select Local Port in the drop-down list box then click New Port.
	
	4. Type the location of the printer on the network. For example:
	
	  "\\printserver\printer" (without the quotation marks) (this is the exact path
	  of your printer)
	
	5. Select OK and continue with the rest of the setup.
	
	Now you can incorporate the DLL into your application.
	
	1. Use the Regsvr32.exe file to register the Pageset.dll as follows:
	
	  regsvr32.exe <full path to dll>\pageset.dll
	
	2. Reference the Pageset.dll in your application project.
	
	The following code sets your paper orientation to landscape prior to printing or
	showing the report. Paste the following code in the General Declaration section
	of your form:
	
	     Dim obj As PageSet.PrinterControl
	
	     Private Sub Command1_Click()
	        On Error GoTo errorhandler:
	        Set obj = New PrinterControl
	        obj.ChngOrientationLandscape
	        DataReport1.Show
	        DataReport1.PrintReport False, rptRangeFromTo, 1, 1
	
	        Exit Sub
	
	     errorhandler:
	         MsgBox Err.Description
	         obj.ReSetOrientation
	   
	     End Sub
	
	     Private Sub Form_Unload(Cancel As Integer)
	
	        obj.ReSetOrientation 'This resets the printer to portrait.
	
	     End Sub
	
	NOTE: In the preceding application you are resetting the printer in the
	Form_Unload event. The printer must be reset back to the default orientation. If
	not, any print job sent to the network printer will be printed using the
	orientation set by your program.
	
	Disclaimer
	----------
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IS AT YOUR OWN RISK. Microsoft
	provides this code "as is" without warranty of any kind, either express or
	implied, including but not limited to the implied warranties of merchantability
	and/or fitness for a particular purpose.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbReportWriter kbVBp600 kbDataEnv kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
