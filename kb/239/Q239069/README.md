---
layout: page
title: "Q239069: PRB: Cannot Open or Find File Error Installing VB Applicati"
permalink: kb/239/Q239069/
---

## Q239069: PRB: Cannot Open or Find File Error Installing VB Applicati

	Article: Q239069
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbDeployment kbFileIO kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While attempting to install a Visual Basic application, one of the following
	errors occurs:
	
	  (VB4) Could not open the file named: <DRIVE LETTER>:\<FILENAME>
	
	  (VB5) Cannot find the source file '<DRIVE LETTER>:\\<FILENAME>'
	  to install.
	
	  (VB6) Cannot find file '<DRIVE LETTER>:\<FILENAME>. Please insert
	  disk'.
	
	Once one of these errors occurs, the installation does not complete successfully.
	
	CAUSE
	=====
	
	This error occurs because the drive from which installation is running does not
	support long filenames and the specific file referenced in the error message
	contains a long filename. This problem is most common with CD-ROM drives whose
	driver is out of date and does not offer support for long filenames. However,
	this problem can also occur on any other drives (network, floppies, and so
	forth) that also lack support for this feature.
	
	RESOLUTION
	==========
	
	Several solutions exist for this problem:
	
	1. Obtain and install an updated driver that adds support for long filenames on
	  the device in question.
	
	2. Modify the project such that no long filenames are used by any of the
	  project's files, and then re-deploy.
	
	3. Copy the entire contents of the setup from the CD (or network drive) to a
	  folder on the local hard drive. Rename all files in this directory that
	  currently have short filenames but originally contained long filenames. The
	  correct long filenames can be determined by viewing the [FILES] and/or
	  [BOOTSTRAP] sections of the SETUP.LST file. Finally, run SETUP.EXE from this
	  local folder.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbDeployment kbFileIO kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
