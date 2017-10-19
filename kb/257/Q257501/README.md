---
layout: page
title: "Q257501: FIX: Error Message When Exporting Data Report to HTML File"
permalink: /kb/257/Q257501/
---

## Q257501: FIX: Error Message When Exporting Data Report to HTML File

	Article: Q257501
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to export a data report to an HTML file, the following error
	message is encountered:
	
	  Report width is larger than paper width
	
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
	
	The export feature of the data report is specifically coded to use only a paper
	size of 8.5 x 11 inches. When the paper's orientation is portrait, the maximum
	width of the report cannot exceed 8.5 inches. When the orientation is landscape,
	the maximum width should be 11 inches, but the value actually used is still 8.5.
	Therefore, when the orientation is in landscape, if the data report's total
	width exceeds 8.5 inches, you receive the error message even if that width is
	less than 11 inches.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Change the default printer's page orientation to landscape.
	
	2. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	3. Add a Command button to Form1.
	
	4. Paste the following code into Form1's code window:
	
	  Private Sub Command1_Click()
	     DataReport1.Show
	  End Sub
	
	5. From the Project menu, select Add Data Environment.
	
	6. Set the properties of the connection to use the sample database, NWIND.MDB.
	
	7. Add a Command button to Connection1.
	
	8. Set the properties of Command1 to use the "Employees" table.
	
	9. From the Project menu, select Add Data Repost.
	
	10. Set the DataSource property of the data report to DataEnvironment1 and the
	  DataMember property to Command1.
	
	11. Set the ReportWidth property to 11520 (8 inches) and both the LeftMargin and
	  RightMargin properties to 1440 (one inch). This gives a total report width
	  of 10 inches, which is smaller than the current setting of 11 inches from
	  the landscape printer setting.
	
	12. Run the sample.
	
	13. Click the Command button to see the data report. As you view the report, you
	  can see that the print preview is displaying the page in landscape mode.
	
	14. Click the Export button, give the file a name, and click the Save button.
	  Note that you receive the error message referenced in the "Symptoms" section
	  of this article.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbReportWriter kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
