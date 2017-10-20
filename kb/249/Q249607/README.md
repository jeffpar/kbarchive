---
layout: page
title: "Q249607: FIX: UserControl in Excel Does Not Print or Print Preview"
permalink: /kb/249/Q249607/
---

## Q249607: FIX: UserControl in Excel Does Not Print or Print Preview

{% raw %}

	Article: Q249607
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2000,6.0,97
	Operating System(s): 
	Keyword(s): kbCtrl kbExcel kbVBp600bug kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Excel 2000 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to Print or Print Preview an Microsoft Excel 97 or Microsoft
	Excel 2000 workbook containing a UserControl that was created in Visual Basic
	6.0, the UserControl does not print or display in the Print Preview window.
	
	The problem does not occur when using the UserControl in other Microsoft Office
	applications. The problem does not occur with a UserControl created in Visual
	Basic version 5.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
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
	
	1. In Visual Basic, create a new ActiveX Control project. Project1 is created by
	  default. UserControl1 is added by default.
	
	2. Change Project1's Name property to prjTestExcel. Change UserControl1's Name
	  property to ctlTestExcel.
	
	3. Add a Label control to UserControl1. Label1 is created by default. You do not
	  need to modify Label1's default properties any further.
	
	4. Save the UserControl as ctlTestExcel.ctl. Save the Project as
	  prjTestExcel.vbp.
	
	5. Compile the Project to prjTestExcel.ocx. Exit from Visual Basic.
	
	6. Start Microsoft Excel version 97 or 2000. Book1 is opened by default.
	
	7. From the View menu in Excel, click to select Toolbars. From the list of
	  available Toolbars, click to select Control Toolbox.
	
	8. At the bottom of the Control Toolbox, click the More Controls icon. From the
	  list of More Controls, select prjTestExcel.ctlTestExcel. Drag in Book1 to
	  draw an instance of the UserControl in the workbook.
	
	  NOTE: If the UserControl is not in the list of More Controls, do the
	  following:
	
	  a. Select Register Custom Control from the list of More Controls.
	
	  b. Navigate to the OCX file in the Register Customer Control dialog box.
	
	9. Once the UserControl has been placed and sized on the form, select to either
	  Print or Print Preview the workbook. Note that the UserControl does not
	  appear on a printout and the UserControl does not appear in the Print Preview
	  window.
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by John Hamrick, Microsoft Corporation
	
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCtrl kbExcel kbVBp600bug kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbZNotKeyword6 kbExcel2000 kbZNotKeyword2 kbVB600Search kbVB600 kbExcel2000Search kbExcel97Search kbZNotKeyword3 kbExcelWinSearch
	Version           : WINDOWS:2000,6.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
