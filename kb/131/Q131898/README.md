---
layout: page
title: "Q131898: Fortran PowerStation Graphics Apps on Windows 95"
permalink: /kb/131/Q131898/
---

## Q131898: Fortran PowerStation Graphics Apps on Windows 95

	Article: Q131898
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbfile kbpatch
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft FORTRAN PowerStation for MS-DOS and Windows is designed to work
	optimally with Microsoft Windows version 3.1. Under Windows 95, there are
	problems with graphics programs. A simple workaround is described in this
	article.
	
	MORE INFORMATION
	================
	
	Problem Corrected: Graphics Programs Fail
	-----------------------------------------
	
	Graphics programs compiled with FORTRAN PowerStation fail when run. Instead of
	the usual graphics output, you see a runtime error:
	
	  run-time error F6996
	  - DOS graphics not supported under Windows NT
	
	The cause of this problem is that Windows 95 is running the graphics program as a
	Win32-based application, instead of as a DOS-extended program. Graphics are not
	supported from a console application, so the program fails.
	
	The workaround is to obtain the FPSFIX95.EXE patch. It marks the executable file
	so that Windows 95 treats it as a DOS-extended program, not a Win32- based
	application.
	
	The following file is available for download from the Microsoft Download Center:
	
	  fpsfix95.exe
	  (http://download.microsoft.com/download/fortranps10ados/patch1/1/DOS/EN-US/fpsfix95.exe)
	
	Release Date:
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	
	How to Install the Fix
	----------------------
	
	First, make sure you are using the maintenance release of Microsoft FORTRAN
	PowerStation.
	
	To see if you are using version 1.0a, run LINK.EXE from the bin directory. If the
	linker version is 2.8, you have FORTRAN Powerstation version 1.0. If the linker
	version is 1.0F, you have FORTRAN Powerstation version 1.0a. If you do not have
	version 1.0a, please contact Microsoft Product Support Services for your area at
	the number listed in your documentation. If you live in the United States or
	Canada, this number is (425) 635-7015.
	
	Run the SETUP.BAT included in the patch. It installs FPSFIX so that all programs
	compiled are automatically updated. If you have any graphics programs that are
	already compiled, you can run FPSFIX yourself with the command:
	
	  fpsfix <exename>.exe
	
	Here <exename> is the name of your executable file. Executables built with
	this fix in place can still be used on MS-DOS and Windows version 3.1 systems.
	
	Additional query words: kbfile KBGRAPHICS
	
	======================================================================
	Keywords          : kbfile kbpatch 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbinfo
	
	=============================================================================
	
