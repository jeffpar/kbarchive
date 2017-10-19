---
layout: page
title: "Q189739: HOWTO: Package and Deployment Wizard Installation Macros"
permalink: /kb/189/Q189739/
---

## Q189739: HOWTO: Package and Deployment Wizard Installation Macros

	Article: Q189739
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbFAQ kbDSupport kbVBp600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Installation macros can be used throughout the steps of the Package and
	Deployment Wizard (PDW) to install files to specific locations. This article
	documents the available installation macros and what the macros will equate to
	during the installation process.
	
	MORE INFORMATION
	================
	
	These macros will be used by both Setup.exe and Setup1.exe to install files to
	common system directories. These macros may be modified after the distribution
	set has been created by modifying the Setup.lst file created by the PDW. See the
	REFERENCES section of this article for additional information regarding Setup1
	files and Bootstrap files.
	
	$(WinSysPath)
	This macro installs files to the System subdirectory under the Windows directory.
	The paths below are typical paths to the Windows\System directory. This macro
	can be used for both Setup1 Files and Bootstrap Files.
	
	  \Windows\System (Windows 95 or later)
	  \Winnt\System32 (Windows NT 4.0 and later)
	
	$(WinSysPathSysFile)
	This macro installs files to the System subdirectory as well, but the file is
	installed as a shared component and is not removed when the application is
	removed. The paths below are typical paths to the Windows\System directory. This
	macro can be used for both Setup1 Files and Bootstrap Files.
	
	  \Windows\System (Windows 95 or later)
	  \Winnt\System32 (Windows NT 4.0 and later)
	
	$(WinPath)
	This macro installs files to the directory where Windows is installed. The
	examples below are typical paths to the Windows directory. This macro can be
	used for both Setup1 Files and BootStrap Files.
	
	  \Windows (Windows 95 or later)
	  \Winnt (Windows NT)
	
	$(AppPath)
	The application directory specified by the user, or the DefaultDir value
	specified in the Setup section. Valid only for Setup1 Files.
	
	\path
	A hard coded path, for example, "c:\mydir". This is only available by modifying
	the Setup.lst file. Valid only for Setup1 Files. $(CommonFiles)
	This macro installs files to the Program Files\Common Files folder. Valid only
	for Setup1 Files.
	
	  \Program Files\Common Files\ 
	
	$(CommonFilesSys)
	Installs files to the \System folder under Program Files\Common Files. Valid only
	for Setup1 Files.
	
	  \Program Files\Common Files\System
	
	$(ProgramFiles)
	Installs files to the \Program Files directory. Valid only for Setup1 Files.
	
	  \Program Files
	
	$(MSDAOPath)
	Installs files to the location stored in the Registry for Data Access
	(DAO)Components.
	
	$(Font)
	Installs to the \Font subdirectory under the Windows directory.
	
	  \Windows\Fonts
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q189743 INFO: Description of Setup.lst Sections
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbFAQ kbDSupport kbVBp600FAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
