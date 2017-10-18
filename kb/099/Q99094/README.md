---
layout: page
title: "Q99094: How to Set a Custom Paper Size for Dot-Matrix Printers"
permalink: kb/099/Q99094/
---

## Q99094: How to Set a Custom Paper Size for Dot-Matrix Printers

	Article: Q99094
	Product(s): Microsoft FoxPro
	Version(s): 2.50 3.00
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many Windows-based applications allow you to create custom paper sizes. You
	cannot do this in FoxPro version 2.5 for Windows, but you can create a custom
	paper size in the Windows Control Panel if the printer is a dot- matrix printer.
	There is no way to set a custom paper size with a laser printer in FoxPro for
	Windows.
	
	To create a custom paper size for a dot-matrix printer, follow the steps below.
	
	MORE INFORMATION
	================
	
	1. Minimize FoxPro for Windows.
	
	2. Open Control Panel and double-click the Printers icon.
	
	3. Select a dot-matrix printer as the default.
	
	4. Click Setup. This box may have different options depending on the selected
	  printer.
	
	5. From the Paper size box, select User Defined Size. This will open a secondary
	  dialog box, labeled "User Defined Size."
	
	6. From this dialog box, select the appropriate paper size.
	
	  NOTE: The paper size is given in increments of .01 inches, and any size
	  outside the available range will cause an error.
	
	7. Click OK twice, and then click Close.
	
	8. Open FoxPro. Open the report that needs to use the user-defined paper size.
	  From the Report menu, choose Page Layout. Click Print Setup, and make sure
	  "User Defined Size" is in the Paper Size popup.
	
	  NOTE: Because this paper size is set with the Windows Control Panel, it may
	  affect printing from other Windows-based applications.
	
	REFERENCES
	==========
	
	Microsoft Windows "User's Guide," version 3.1, Chapter 6, "Print Manager"
	
	Additional query words: vFoxWin FoxWin 2.50 custom dot matrix
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbVFP300
	Version           : 2.50 3.00
	
	=============================================================================
	
