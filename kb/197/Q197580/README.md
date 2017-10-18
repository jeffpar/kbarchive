---
layout: page
title: "Q197580: INFO: Distribution Issues with Riched32.dll"
permalink: kb/197/Q197580/
---

## Q197580: INFO: Distribution Issues with Riched32.dll

	Article: Q197580
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are three different Riched32.dll files that have the version number
	5.0.1458.47, and one of them is not redistributable. This article describes the
	differences between these files and includes additional distribution
	information.
	
	MORE INFORMATION
	================
	
	Each of the three Riched32.dll files with the version number 5.0.1458.47, and
	has a different size. These versions are:
	
	- A 169KB version (general release).
	
	- A 176KB version that is optimized for loading on Windows 98, but is identical
	  in code to the general release version.
	
	- A 225KB version that was released by the Microsoft Exchange group. It is
	  intended to cover all localized versions and is dependent upon GAPI32.dll.
	
	Of these three versions of Riched32.dll 5.0.1458.47, you can only distribute the
	169KB or 176KB versions. If the target computer is already using the 225KB
	version, do not replace it with another Riched32.dll with the same version
	number or older.
	
	Also, keep the following in mind when distributing Riched32.dll using third-party
	setup programs:
	
	- If the target computer is running NT 4.0, your setup program should not
	  replace Riched32.dll.
	
	- Riched32.dll is a part of the operation system installation of Windows 2000.
	  Setup programs installing to Windows 2000 should not install Riched32.dll.
	
	Which Version Is Distributed by the Setup Wizard and PDW?
	---------------------------------------------------------
	
	If you use the Setup Wizard in Visual Basic 5.0 or the Package and Deployment
	Wizard (PDW) in Visual Basic 6.0, you will not have to concern yourself with the
	issue of which version to distribute. By default, the Setup Wizard and PDW are
	set up to distribute Riched32.dll version 4.00.993.4, if your application
	requires this file. Both wizards create setup programs that only replace files
	on target systems if they are older than the file being distributed.
	
	Visual Basic 5.0 places a copy of Riched32.dll version 4.00.993.4 in the
	following folder:
	
	  Program Files\DevStudio\VB\Setupkit\Kitfil32\Sys32
	
	This is the folder that the Setup Wizard searches first when pulling in the files
	that need to be distributed. If your application uses Riched32.dll, the Setup
	Wizard will pick it up from this location.
	
	Visual Basic 6.0 places a copy of Riched32.dll version 4.00.993.4 in the
	following folder:
	
	  Program Files\Microsoft Visual Studio\VB98\Wizards\PDWizard\Redist
	
	This is the folder that the PDW searches first when pulling in the files that
	need to be distributed. If your application uses Riched32.dll, the PDW will pick
	it up from this location.
	
	Riched32.dll is included in the redistributable file list (Redist.txt) for Visual
	Basic 5.0. While the file is not included in the Redist.txt file for Visual
	Basic 6.0, the PDW may include Riched32.dll in the distribution set. However, it
	will not install the file on a computer running Windows NT 4.0 or Windows 2000.
	
	NOTE: There are several localized versions of Riched32.dll, which should be
	identifiable by their language ID. These versions are specific to the language
	being developed for, but should follow the same rules as described previously.
	
	
	Additional query words: Riched32.dll
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
