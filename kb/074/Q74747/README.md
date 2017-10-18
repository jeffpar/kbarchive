---
layout: page
title: "Q74747: INFO: Why Microsoft Development Tools Use TMP Instead of TEMP"
permalink: kb/074/Q74747/
---

## Q74747: INFO: Why Microsoft Development Tools Use TMP Instead of TEMP

	Article: Q74747
	Product(s): Microsoft C Compiler
	Version(s): ; MS-DOS:; WINDOWS:1.0,1.5; winnt:1.0,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbenv kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft development systems and the utilities included with them use the drive
	and directory specified by the TMP environment variable for temporary file
	storage. This operating-system environment variable is typically set in the
	startup batch file, AUTOEXEC.BAT for MS-DOS or STARTUP.CMD for OS/2. In Windows
	NT, TMP may be set through the System Applet in the Control Panel. The value of
	this environment variable must be the path of an existing drive and directory.
	
	While Microsoft development tools use the TMP system variable, Microsoft
	applications, such as Microsoft Word and Microsoft Windows, use a system
	variable, TEMP. The TEMP variable is also set to a drive and directory that can
	be used by applications for temporary file storage.
	
	Compilers and other development tools generally need more temporary file storage
	space than do applications. By having these various products read different
	environment variables to determine their temporary file storage location,
	Microsoft provides the user with a certain amount of flexibility. You may set
	both the TMP and TEMP environment variables to the same drive and directory such
	that all temporary files will reside in the same location. If free disk space is
	a concern and your system has multiple drives or is connected to a network, you
	may wish or need to set the TMP variable to another drive. Alternatively, under
	MS-DOS, you could set TEMP to the path of a small RAM drive and not worry that
	your development tools would run out of temporary file storage space.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :; MS-DOS:; WINDOWS:1.0,1.5; winnt:1.0,2.0,2.1,4.0,5.0,6.0
	
	=============================================================================
	
