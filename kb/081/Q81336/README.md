---
layout: page
title: "Q81336: ExeView.exe Extracts and Displays Application Resources"
permalink: /kb/081/Q81336/
---

## Q81336: ExeView.exe Extracts and Displays Application Resources

{% raw %}

	Article: Q81336
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbResource kbGrpDSUser kbOSWin310
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are situations in which an application extracts information from another
	application's executable image file without loading the other application. The
	Microsoft Windows Program Manager does this when it extracts an icon from an
	.exe file to represent the application.
	
	.exe (and DLL) files contain many resources and tables that may be useful in
	various circumstances. ExeView.exe is a sample application that demonstrates how
	to extract and decode these resources from application and library executable
	image files.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	ExeView.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Because EXEVIEW uses code from the common dialog boxes dynamic-link library
	(COMMDLG.DLL), version 3.1 of the Microsoft Windows SDK is required to build the
	sample. However, EXEVIEW will run under either Windows version 3.0 or 3.1
	provided that the COMMDLG.DLL file is installed.
	
	EXEVIEW uses the information in both the Old Executable Header and the New
	Executable Header, each of which are documented in "The MS-DOS Encyclopedia"
	(Microsoft Press). EXEVIEW loads both headers and all the tables to which they
	refer. These tables include: the entry table, the segment table, the resource
	table, the resident and nonresident name tables, and the imported name table.
	EXEVIEW loads the resources listed in the resource table and displays them.
	Windows resources (icons, cursors, bitmaps, menus, and so forth) are displayed
	graphically. String tables and resource directories (of icons, cursors, fonts,
	and so forth) are listed in text format.
	
	For more information on the file formats and resource formats, see the Windows
	SDK "Programmer's Reference, Volume 4: Resources," "The MS-DOS Encyclopedia,"
	the September, 1991, issue of the "Microsoft Systems Journal," or the Microsoft
	Open Tools documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbResource kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
