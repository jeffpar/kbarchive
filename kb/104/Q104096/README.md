---
layout: page
title: "Q104096: IniHeadr.exe Reads Section Headers from .INI Files"
permalink: kb/104/Q104096/
---

## Q104096: IniHeadr.exe Reads Section Headers from .INI Files

	Article: Q104096
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbsample kbOSWin311 kbOSWin300 kbGrpDSUser kbfile kb16bitonly kbSysSettings kbOSWin310
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Iniheadr.exe sample defines a function called GetPrivateProfileSections(),
	which parses a given .INI file and returns a buffer containing the section
	headers separated by NULLs and terminated by a double NULL. SECTION.C contains
	the function and a necessary helper function. The sample allows the user to
	choose an .INI file using the Open common dialog box. The section headings are
	then placed in a list box.
	
	The Windows SDK does not define a function to read all of the section headers
	from a profile (.INI) file. An application must read the entire .INI file and
	parse it to obtain the section headers.
	
	NOTE: Microsoft recommends using Windows's application programming interfaces
	(APIs) to read .INI files. The method described below is not guaranteed to work
	on future releases, especially for system .INI files such as WINFILE.INI,
	WIN.INI, SYSTEM.INI, CONTROL.INI, and so forth.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Iniheadr.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	A profile file (WIN.INI) or a private profile (such as CLOCK.INI) must have the
	following form:
	
	  [section heading]
	  entry=value
	
	     .
	     .
	     .
	
	For example, given a profile containing the following section headings
	
	  [windows]
	     .
	     .
	     .
	
	  [Desktop]
	
	     .
	     .
	     .
	  [Extensions]
	
	GetPrivateProfileSections() parses the profile file and places the following in a
	buffer:
	
	   windows<NULL>Desktop<NULL>Extensions<NULL><NULL>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsample kbOSWin311 kbOSWin300 kbGrpDSUser kbfile kb16bitonly kbSysSettings kbOSWin310 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : WINDOWS:
	
	=============================================================================
	
