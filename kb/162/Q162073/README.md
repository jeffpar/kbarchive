---
layout: page
title: "Q162073: FIX: Import Wizard Does Not Import Spreadsheet Cells as Null"
permalink: kb/162/Q162073/
---

## Q162073: FIX: Import Wizard Does Not Import Spreadsheet Cells as Null

	Article: Q162073
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300bBUGkbbuglist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When importing an Excel 5.0 for Macintosh spreadsheet or an Excel 7.0 for
	Windows 95 spreadsheet containing blank cells with the Import Wizard, the
	resulting fields in the new table contain zeros. This behavior occurs regardless
	of the value of the SET NULL command.
	
	RESOLUTION
	==========
	
	Issue a SET NULL ON command and use the IMPORT command. You can also use the
	APPEND FROM ... Type XL5 command after creating a table that supports null
	numeric values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a spreadsheet that contains some blank cells. Make sure the cells are
	  numeric.
	
	2. Save the spreadsheet into the Visual FoxPro folder and close Excel.
	
	3. Type the following command in the Command window:
	
	  " SET NULL ON " (without the quotation marks)
	
	4. Start the Import Wizard, change the file type to Excel 5.0, and continue with
	  the import process. In step three, notice the blank cells now appear as
	  fields containing zeros.
	
	5. Click Finish.
	
	6. After the Import Wizard closes, open the new table and browse it. The fields
	  that should be blank contain zeros.
	
	7. Close the table and delete the file.
	
	8. Type the following command in the Command window:
	
	  " SET NULL ON " (without the quotation marks)
	
	9. Select Import from the File menu. Import the file as type Excel 5.0.
	
	10. Type the following command in the Command window:
	
	  " BROWSE " (without the quotation marks)
	
	  Notice the fields in the table contain null values where appropriate.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300bBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
