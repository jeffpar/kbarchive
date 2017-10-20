---
layout: page
title: "Q149669: BUG: &quot;Required File Missing: MSJINT32.DL_&quot; Setup Wizard Error"
permalink: /kb/149/Q149669/
---

## Q149669: BUG: &quot;Required File Missing: MSJINT32.DL_&quot; Setup Wizard Error

{% raw %}

	Article: Q149669
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0b
	Operating System(s): 
	Keyword(s): kbMDAC250kbbuglist
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Setup Wizard in Microsoft Visual FoxPro 3.0b, if you select the
	Btrieve Driver alone in the ODBC Drivers dialog box, the error "Required File
	Missing: MSJINT32.DL_" will occur. The error message appears after the Finish
	button is clicked when the Setup Wizard attempts to create the Setup Information
	File.
	
	RESOLUTION
	==========
	
	Select another driver, such as the Text or FoxPro driver in addition to the
	Btrieve driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a project containing a simple program that contains a single command:
	
	     WAIT WINDOW "This is a test"
	
	2. Build the project into an .exe and place the .exe into a directory by itself.
	
	3. Start the Setup Wizard. In Step 1, select the directory containing the .exe
	  as the Distribution Tree Directory.
	
	4. In Step 2, select ODBC Drivers from "Application requires the following." In
	  the ODBC Drivers dialog box, clear all drivers except Btrieve Driver (Win32S
	  only), and click OK. Click the Next button.
	
	5. In Step 3. specify a destination directory for the disk images or netsetup,
	  and select either of the disk sizes or the netsetup from this dialog box.
	
	6. In Step 4, Fill in a Caption and Copyright.
	
	7. Skip Steps 5 and 6 by clicking the Next button twice. Then click Finish. The
	  Progress dialog box appears, and a check appears next to the first three
	  items in the list. A thermometer bar appears with the caption "Creating setup
	  information file." An error dialog box appears with the with the caption
	  "Microsoft Visual FoxPro Wizards" and the message "! Required file missing:
	  MSJINT32.DL_."
	
	Notes
	-----
	
	If an additional driver is selected in the ODBC Drivers dialog box, such as Text
	Driver, Microsoft Excel Driver, or FoxPro 2.x Driver, the error does not occur.
	
	Additional query words: VFoxWin buglist3.00b kbvfp300b
	
	======================================================================
	Keywords          : kbMDAC250 kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300b
	Version           : WINDOWS:2.5,3.0b
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
