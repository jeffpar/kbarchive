---
layout: page
title: "Q175349: Inside the Registry for Windows 95 Comments and Corrections"
permalink: kb/175/Q175349/
---

## Q175349: Inside the Registry for Windows 95 Comments and Corrections

	Article: Q175349
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside the Registry for Microsoft Windows 95 ISBN 1-57231-424-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe. Also, please read the section titled "Backing Up and Recovering
	Your Registry" in "Inside the Registry for Microsoft Windows 95," beginning on
	page 35.
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Inside the Registry for Microsoft Windows
	95," ISBN 1-57231-424-9.
	
	Updated information and files for "Inside the Registry for Microsoft Windows 95"
	can be found at the following Web site:
	
	  http://mspress.microsoft.com/mspress/products/1039/
	
	Contents:
	
	- Page xii: Web Site Change
	
	- Page 5: Typographical Error
	
	- Page 12: INI File Value Does Not Always Override Registry
	
	- Page 23: "Save mode" Should Be "Safe Mode"
	
	- Page 34: System.dat And User.dat Attributes Must Be Changed
	
	- Page 37: Additional Info On Startup Disk
	
	- Page 188: [DefaultInstall] Can't Have Two CopyFiles Lines
	
	- Page 220: Path Value Must Match Default Value Of Key
	
	- Page 307: INF Files Will Not Remove PNF Files
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Page xii: Web Site Change
	-------------------------
	
	Page xii, Web address:
	Change: http://www.microsoft.com/mspress/products/1039/
	To: "http://mspress.microsoft.com/mspress/products/1039/" (without the quotation
	marks)
	
	If you are using a newer browser, such as Microsoft Internet Explorer 3.0 or
	later, you should automatically be pulled from the old address to the new Web
	site within a few seconds. If you are using an older browser, you may wish to
	consider an upgrade to the latest Microsoft Internet Explorer. For more
	information, please check the following Web site:
	
	  http://www.microsoft.com/ie/
	
	
	Page 5: Typographical Error
	---------------------------
	
	Page 5, section HKEY_CURRENT_USER, sentence 1:
	Close up space in third line: "HKEY_USERS\name, w here..."
	
	
	Page 12: INI File Value Does Not Always Override Registry
	---------------------------------------------------------
	
	Page 12, paragraph 2, sentence 3:
	Change: "...the value from the INI file is copied over the Registry value."
	To: "...the value from the INI file is sometimes copied over the Registry value."
	(without the quotation marks)
	
	
	Page 23: Save Mode Should Be Safe Mode
	--------------------------------------
	
	Page 23, paragraph 1, sentence 1:
	Change: "...you can restart the computer in Save mode."
	To: "...you can restart the computer in Safe mode." (without the quotation
	marks)
	
	Note that the .DA0 files will only be used to restore the Registry if the
	Registry is corrupted. You can take the following steps to restore a key if you
	have accidentally deleted or changed a Registry key and don't have a backup of
	the old Registry:
	
	1. Immediately exit Windows 95.
	
	2. Reboot the computer (with a floppy disk) in DOS mode.
	
	3. Copy the .DAO files over the Registry .DAT files, using the procedure given
	  on page 35.
	
	
	Page 34: System.dat and User.dat Attributes Must Be Changed
	-----------------------------------------------------------
	
	Page 34, after paragraph 2:
	Add the following after "REGEDIT /L:C:\Windows\ ..."
	
	  " "System.dat and User.dat are system-protected files. To use Regedit from
	  the command line, you must first use the attrib command to change the
	  attributes on these files:
	
	  attrib -s -h system.dat
	  attrib -s -h user.dat"
	
	  " (without the quotation marks)
	
	
	Page 37: Additional Info On Startup Disk
	----------------------------------------
	
	Page 37, paragraph 1, sentence 3:
	Change: "This disk contains a mini-DOS operating system (including ATTRIB.EXE) as
	well as copies of the system files (AUTOEXEC.BAT, CONFIG.SYS, SYSTEM.DAT, and
	USER.DAT). You will also find a copy of REGEDIT.EXE on this startup disk."
	To: "This disk contains a mini-DOS operating system (including ATTRIB.EXE). You
	will also find a copy of REGEDIT.EXE on this startup disk. If there is enough
	room on the floppy disk, you can also manually copy the system files
	(AUTOEXEC.BAT, CONFIG.SYS, SYSTEM.DAT, and USER.DAT) to the disk." (without the
	quotation marks)
	
	
	Page 188: [DefaultInstall] Can't Have Two CopyFiles Lines
	---------------------------------------------------------
	
	Page 188, code listing, line 22:
	Change:
	
	  [DefaultInstall]
	  CopyFiles = Explore.CopyFiles.Inf
	  CopyFiles = Explore.CopyFiles.Bat
	  ...
	
	To:
	
	  " [DefaultInstall]
	  CopyFiles = Explore.CopyFiles.Inf, Explore.CopyFiles.Bat" (without the
	  quotation marks)
	
	
	Page 220: Path Value Must Match Default Value Of Key
	----------------------------------------------------
	
	The text states that an application can define the "Path" value for DLL files
	used. However, on some installations of Microsoft Windows 95, the Path value can
	be set only to the value defined in the "Default" value of this key.
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Page 307: INF Files Will Not Remove PNF Files
	---------------------------------------------
	
	Windows NT 4.0 creates temporary files called .PNF files during the execution of
	an .INF file. The .INF file beginning on page 307 does not remove the .PNF files
	when it finishes executing.
	
	The author has prepared a sample .INF file that resolves this problem. To
	download this file, please visit the following World Wide Web site:
	
	  http://mspress.microsoft.com/mspress/products/1039/
	
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of the book, it may already
	contain the above corrections.
	
	Additional query words: press ms_press
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
