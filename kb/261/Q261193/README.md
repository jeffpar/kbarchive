---
layout: page
title: "Q261193: FIX: &quot;Report Width Is Larger Than ..&quot; w/Data Report in Landscape"
permalink: /kb/261/Q261193/
---

## Q261193: FIX: &quot;Report Width Is Larger Than ..&quot; w/Data Report in Landscape

	Article: Q261193
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Show method of Data Report to preview the report, the page
	orientation defaults to the default printer settings on the local computer.
	Therefore, if the orientation of the default printer settings is set to Portrait
	of standard Letter paper and your report width is more than 8.5 inches wide, the
	following error occurs:
	
	  Report Width is Larger than the Paper Width
	
	CAUSE
	=====
	
	This error occurs because the width of your report exceeds the maximum width
	specified by the default printer settings. The width of the report is determined
	by taking the sum of the RightMargin, LeftMargin, and ReportWidth properties.
	
	When a report prints or displays, the default printer settings in the Printers
	Folders are used to determine the layout of the report. Because the Printer
	object in Visual Basic cannot modify the default printer settings, if your
	default printer orientation is set to Portrait of standard Letter paper and you
	design a report that extends beyond 8.5 inches wide, the preceding error
	occurs.
	
	NOTE: The LeftMargin, RightMargin, and ReportWidth properties are denoted in
	twips, and 1440 twips equal 1 inch.
	
	RESOLUTION
	==========
	
	Microsoft Visual Studio 6.0 Service Pack 4 and later service packs include a new
	property called Orientation for Data Report. The value for this property is:
	
	- rptOrientDefault = 0
	- rptOrientPortrait = 1
	- rptOrientLandscape = 2
	
	With this property, you are able to tell the Data Report not to use the
	orientation setting of the default printer in the Printers Folders. Following is
	the syntax for implementing the Orientation property:
	
	DataReport1.Orientation = rptOrientLandscape
	DataReport1.Show
	
	When you use this new Orientation property in Visual Studio 6.0 Service Pack 4,
	you may encounter the error below:
	
	  Compiler Error
	  Method or Data member not found.
	
	To fix this error, delete the values for DataMember and DataSource properties of
	the Data Report and reassign these two properties with the original values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Locate the default printer settings in Printers Folders on Windows. Make sure
	  that the page orientation is set to Portrait of standard Letter paper.
	
	2. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	3. Add a Command button to Form1.
	
	4. Paste the following code into Form1's code window:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	    DataReport1.Show
	  End Sub
	
	5. From the Project menu, select Add Data Environment. DataEnvironment1 is added
	  by default.
	
	6. In DataEnvironment1, right-click on Connection1 and choose Properties. Set
	  the properties of Connection1 to be the following:
	
	   - On the Provider tab, set Provider to Microsoft Jet 4.0 OLE DB Provider.
	
	   - Click Next.
	
	   - On the Connection tab, set the database name to NWIND.MDB, which should be
	     in the folder where Visual Basic 6.0 is installed.
	
	   - Click on Test Connection to make sure you are connected to the database,
	     and then click OK.
	
	7. Right-click on Connection1 and choose Add Command. Command1 is added by
	  default.
	
	8. Right-click on Command1 and select Properties. Set the properties of Command1
	  to be the following:
	
	   - On the General tab, change the Database object to Table.
	
	   - On the Object Name combo box, select Employees, and then click OK.
	
	9. From the Project menu, select Add Data Report. DataReport1 is added by
	  default.
	
	10. Set the properties of DataReport1 to be the following:
	
	   - Set the DataSource property to DataEnvironment1.
	
	   - Set the DataMember property to Command1.
	
	   - Set the ReportWidth property to 11520 (8 inches).
	
	   - Set the LeftMargin property to 1440 (1 inch).
	
	   - Set the RightMargin property to 1440 (1 inch).
	
	11. If you add ReportWidth, LeftMargin and RightMargin, you can see that the
	  total report width is 10 inches, which is wider than 8.5 inches. So the Data
	  Report should be placed on Landscape orientation of a standard Letter paper.
	
	12. Press the F5 key to run the program.
	
	13. Click on Command1, and note that the error message in the "Symptoms" section
	  of this article occurs.
	
	Steps to Fix the Problem in Visual Studio 6.0 Service Pack 4
	------------------------------------------------------------
	
	1. Open the preceding project in Visual Studio 6.0 Service Pack 4.
	
	2. Replace the code in Form1's code window with the following:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	    DataReport1.Orientation = rptOrientLandscape
	    DataReport1.Show
	  End Sub
	
	3. Delete the values for the DataMember and DataSource properties of
	  DataReport1.
	
	4. Reassign the DataMember and DataSource properties of DataReport1 to be the
	  following:
	
	   - Set the DataSource property to DataEnvironment1.
	
	   - Set the DataMember property to Command1.
	
	5. Press F5 to run the program.
	
	6. Click the Command1 button and note that DataReport1 is shown in Landscape
	  orientation.
	
	REFERENCES
	==========
	
	This article fixes the problem addressed in the following article:
	
	  Q197915 PRB: Report Width is Larger than the Paper Width
	
	Additional query words: DataReport
	
	======================================================================
	Keywords          : kbDatabase kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
