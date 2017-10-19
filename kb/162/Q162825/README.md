---
layout: page
title: "Q162825: ACC97: Customizing Command Bar Does Not Prompt for Check-Out"
permalink: /kb/162/Q162825/
---

## Q162825: ACC97: Customizing Command Bar Does Not Prompt for Check-Out

	Article: Q162825
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multi-user skills.
	
	This article assumes that you are using Microsoft Visual SourceSafe to control
	the source code for your Microsoft Access 97 database, and that you are familiar
	with the client-side features of Microsoft Visual SourceSafe.
	
	For more information about Microsoft Visual SourceSafe, please refer to the
	"Visual SourceSafe User's Guide."
	
	If you make a quick customization to a command bar by using the keyboard
	shortcuts and you do not check out the "Data and Misc Objects" file from the
	SourceSafe database, you will not be prompted to check out the file, and your
	changes will be discarded the next time that you check out the file.
	
	CAUSE
	=====
	
	Microsoft Access does not inform Visual SourceSafe of all status changes in
	cases where the user interface is bypassed with keyboard shortcuts or custom
	methods.
	
	RESOLUTION
	==========
	
	Make sure to check out the "Data and Misc Objects" file from SourceSafe whenever
	you are customizing command bars.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new database called TestCmdBar.
	
	2. Using the right mouse button, click the active command bar and click
	  Customize.
	
	3. Click the New button and accept the default name of "Custom 1" for the new
	  command bar.
	
	4. Close the Command Bar Customize dialog box.
	
	5. On the Tools menu, point to SourceSafe, and then click "Add Database to
	  SourceSafe."
	
	6. Create a project folder and add the database to SourceSafe.
	
	7. On the Tools menu, point to SourceSafe, and then click Check Out.
	
	8. Check out the "Data and Misc Objects" file.
	
	9. Hold down CTRL+ALT on the keyboard and drag a command bar button from the
	  active command bar to the "Custom 1" command bar.
	
	10. On the Tools menu, point to SourceSafe, and then click Check In.
	
	11. Check in the "Data and Misc Objects" file.
	
	12. Hold down CTRL+ALT on the keyboard and drag a command bar button from the
	  active command bar to the "Custom 1" command bar.
	
	  NOTE: You are not prompted at this point to check out the "Data and Misc
	  Objects" file, even though you are clearly making a modification to this
	  file.
	
	13. On the Tools menu, point to SourceSafe, and then click Check Out.
	
	14. Check out the "Data and Misc Objects" file. Note that your last change to
	  the "Custom 1" command bar was discarded by the check out from Source Code
	  Control.
	
	Additional query words: ODE SCC
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
