---
layout: page
title: "Q217174: FIX: APPEND FROM TYPE XL8 Makes VFP 6 Disappear"
permalink: kb/217/Q217174/
---

## Q217174: FIX: APPEND FROM TYPE XL8 Makes VFP 6 Disappear

	Article: Q217174
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600bug kbXBase KbDBFDBC kbVS600sp4fix kbVS600sp5fix
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the APPEND FROM <xlfile.xls> TYPE XL8 command makes Visual FoxPro
	either disappear or produce an error. In Visual FoxPro 6.0 running under Windows
	NT 4.0, the following error message may appear before the application closes:
	
	  Fatal error: Exception code=C0000005
	
	After selecting OK, Visual FoxPro disappears.
	
	In Visual FoxPro 6.0 Service Pack 3 running under Windows NT 4.0, FoxPro simply
	disappears after executing the APPEND FROM command. No error mesage appears.
	
	In Visual FoxPro 6.0 Service Pack 3 running under Windows 98, the following error
	appears:
	
	  Microsoft Excel file format is invalid.
	
	CAUSE
	=====
	
	This is known to happen if over approximately 350 cells in the Excel spreadsheet
	have been copied and then the Paste Special, Values option is used. The actual
	number of cells varies.
	
	RESOLUTION
	==========
	
	Here are a few possible resolutions to this problem:
	
	- Save the Excel file as an Excel 5.0/95 workbook, or earlier, and use the
	  APPEND FROM command to transfer the data.
	
	- Save the Excel file as a tab or comma delimited (.csv) text file and use the
	  APPEND FROM command to transfer the data.
	
	- Use the Import command in Visual FoxPro. Import is on the File menu or you
	  can code:
	
	     IMPORT FROM append.xls XL8
	
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
	
	This mainly happens with files in an Excel 97 format, which for purposes of
	Visual FoxPro's APPEND command, is version 8.0. The TYPE XL8 clause for Excel 97
	files was added in Visual FoxPro 6.0. Visual FoxPro 5.x and earlier did not have
	this option.
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: The following steps cause Visual FoxPro to crash. Please make sure that
	you save all important data or code before following the steps. It is also a
	good idea to save all information in any other running applications before you
	use these steps:
	
	1. In Excel 97, create a new file.
	
	2. Place the following data in the corresponding cells:
	
	A1: 1
	A2: 2
	A3: 3
	B1: =CONCATENATE("Hello",A1)
	
	3. Press the F5 key to open the GoTo dialog box, then type the following and
	  then click OK:
	
	A1:A4000
	
	4. From the Edit menu, point to Fill, then choose Series. In the Series dialog
	  box, select OK. This fills the column with numbers from 1 to 4,000.
	
	5. Press the F5 key again, then type the following and then click OK:
	
	B1:B4000
	
	6. From the Edit menu, point to Fill, then choose Down. This fills the columns
	  with the formula.
	
	7. While B1:B4000 is selected, from the Edit menu, select Copy, then select
	  Edit, Paste Special. In the Paste Special dialog box, select Values, then
	  choose OK. Before doing anything else, press the ESCAPE key to get rid of the
	  copy marquee. Pressing the ESCAPE key after pasting is important because if
	  you press the ENTER key, the formulas will be pasted back in the cells.
	
	8. Save the Excel file. By default, it should save as a Microsoft Excel
	  Workbook. For these steps, call the file Append.xls and place it in your
	  Visual FoxPro default directory to avoid pathing problems.
	
	9. Close Excel.
	
	10. In Visual FoxPro 6.0, issue these commands in the Command window to create a
	  new table and append in the Excel file. Remember that Visual FoxPro should
	  disappear after the APPEND FROM command so make sure everything is saved:
	
	     CREATE TABLE appendtest (num I, char C(40))
	     APPEND FROM append.xls TYPE XL8
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbvfp600bug kbXBase KbDBFDBC kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
