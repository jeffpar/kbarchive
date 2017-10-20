---
layout: page
title: "Q190636: BUG: Invalid TMP Directory Causes GPF in DataEnvironment"
permalink: /kb/190/Q190636/
---

## Q190636: BUG: Invalid TMP Directory Causes GPF in DataEnvironment

{% raw %}

	Article: Q190636
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Basic terminates abruptly with an application error when working with the
	Custom Properties window of an ADO Data Control or the Data Environment if the
	temporary directory is invalid or does not exist. This occurs on NT Workstation
	and NT Server.
	
	Note: Windows 2000 creates a TEMP directory for each profile. If this TEMP
	directory for the profile is deleted or renamed, the same symptoms may occur.
	
	CAUSE
	=====
	
	The ODBC OLE DB provider needs to find a valid directory in which to store
	temporary information. This directory is specified in the TMP environment
	variable. If the TMP environment variable specifies a directory that does not
	exist or cannot be written to (due to a lack of disk space or other disk
	problem), the ODBC OLE DB provider cannot find a valid temporary directory and
	an application error occurs.
	
	A variation of this error may occur with other OLE DB providers.
	
	The TMP environment variable should not be confused with the TEMP environment
	variable, which also stores a directory name.
	
	RESOLUTION
	==========
	
	Ensure that the directories listed in the TEMP and TMP environment variables
	exist. It is always important to have valid temporary directories, stored on a
	drive having adequate free space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a NT 4.0 machine or Windows 2000 , start the control panel. If using
	  Windows 2000, double click Administrative Tools.
	
	2. Use the ODBC Administrator to create an Access DSN with the name of NWindTest
	  to the NWIND.MDB sample database located in your Visual Basic directory.
	
	3. After the DSN has been created, select and start System (in the Control
	  Panel).
	
	4. Select Environment from the System Properties window.
	
	5. Highlight TMP from the User Variables List Box.
	
	6. Change the Value text box to an invalid or nonexistent directory. For
	  example, change C:\TEMP to C:\XXXX.
	
	7. Click on Set. Click OK.
	
	8. Open Visual Basic. Create a New Data Project.
	
	9. Double-click DataEnvironment1 in the Project Explorer window.
	
	10. Right-click on Connection1, and select Properties.
	
	11. Select Microsoft OLE DB Provider for ODBC Drivers, and click Next.
	
	12. Select NWindTest from the 'Use Data Source Name' drop-down combo box.
	
	13. Click on the 'Enter Initial Catalog' drop-down combo box. Note the error
	  that occurs.
	
	Alternate Method to Reproduce Behavior
	--------------------------------------
	
	1. Execute steps 1 - 8 from Steps to Reproduce Behavior above.
	
	2. Open frmDataEnv in the design view.
	
	3. Select (Custom) from the Properties window, and click on the ellipse (...).
	
	4. Click on "Build" next to "Use Connection String."
	
	5. Follow steps 11-14 above.
	
	  NOTE: Remember to restore the TMP variable back to a valid directory after you
	  have finished testing.
	
	Additional query words: kbDSupport kbdse kbvbp600bug kbVBp kbNoKeyWord
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
