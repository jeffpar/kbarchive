---
layout: page
title: "Q226507: BUG: Windows Closing an Application at Shutdown Orphans TMP File"
permalink: /kb/226/Q226507/
---

## Q226507: BUG: Windows Closing an Application at Shutdown Orphans TMP File

	Article: Q226507
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic project with an icon associated with it that is closed by
	shutting down Windows (either when Windows actually reboots or when the user
	logs off) leaves a .TMP file in the TEMP directory. The file will be between
	1.5K and 11K bytes in size, and will remain in the TEMP directory until it is
	manually deleted. The file name will typically begin with a '~' (tilde).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Set the Icon property of Form1 to any icon file.
	
	3. On the File menu, click Make EXE to create an executable. Close the Visual
	  Basic Design Environment (IDE).
	
	4. Open Windows Explorer and display the \Windows\Temp directory. Position the
	  pane on the right side so that last file is visible. Note its name.
	
	5. Run the EXE that you just created and examine the contents of the Temp
	  directory. The last file should be a different file with a .TMP extension.
	
	6. Using the control box in the right-hand corner of Form1, close the
	  application.
	
	7. Examine the temp directory in Windows Explorer. The .tmp file no longer
	  exists.
	
	8. Run the application again. Note the name of the new file in your temp
	  directory.
	
	9. Exit Windows by logging off, and then log back on.
	
	10. Open Windows Explorer and examine the Temp directory. The file you noted
	  still exists.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
