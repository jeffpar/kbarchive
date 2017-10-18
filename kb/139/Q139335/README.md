---
layout: page
title: "Q139335: PRB: Import Wizard Shows the First 50 Records Only"
permalink: kb/139/Q139335/
---

## Q139335: PRB: Import Wizard Shows the First 50 Records Only

	Article: Q139335
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running the Import Wizard, you can only see the first 50 records in any of
	the wizard windows. If you click the Options button in the second Import Wizard
	window and select the Scan All Records check box in the Import Wizard Options
	window, you can still see only the first 50 records. If you click the Options
	button in the second Import Wizard window, you'll see that the Scan All Records
	check box is cleared, as if you never selected it.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The wizard only displays the first 50 records from the data source regardless of
	whether if you select the Scan All Records check box or not. The wizard does not
	retain the Scan All Records check box state (selected or cleared).
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the Customer table which ships with Visual FoxPro.
	
	2. Type the following command in the Command window:
	
	     COPY TO test.txt TYPE DELIMITED
	
	3. On the Tools menu, click Wizards.
	
	4. On the Wizards list, click Import.
	
	5. Select your text file (Test.txt) as the source file, and click Next. Scroll
	  to the bottom of the list of records, and note that only the first 50 are
	  displayed.
	
	6. Click Options, and then select the Scan All Records check box. Click OK.
	  Scroll to the bottom of the list of records, and note only the first 50
	  records are displayed.
	
	7. Click Options, and note that the Scan All Records check box is clear. Select
	  the Scan All Records check box again, and click OK.
	
	8. Finish the wizard, and note the total number of imported records matches the
	  number of records in the Customer table.
	
	Additional query words: VFoxWin vfp
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
