---
layout: page
title: "Q321550: HOWTO: Optimize VFP Apps While Using Norton AntiVirus 2002"
permalink: /kb/321/Q321550/
---

## Q321550: HOWTO: Optimize VFP Apps While Using Norton AntiVirus 2002

	Article: Q321550
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro applications typically open and close many table files, index
	files, and memo files. Because of this, you may see performance degradation when
	you run Visual FoxPro applications on a computer that is using antivirus
	software with real-time monitoring enabled. You may notice a slowdown when your
	application opens tables, especially when you open several tables in succession
	as the application starts. This article describes how to improve performance
	when you use applications that open tables on computers that use Norton
	AntiVirus 2002.
	
	MORE INFORMATION
	================
	
	To optimize performance on a computer that uses Norton AntiVirus 2002, use any
	of the following methods.
	
	NOTE: These methods are listed in order of decreasing impact. Even if antivirus
	software runs only on the client computer or computers, the antivirus software
	can adversely affect performance on client computers that open tables that are
	located on file servers.
	
	Method 1: Disable SmartScan in the Auto Protect Options
	-------------------------------------------------------
	
	SmartScan adversely affects performance the most, but this performance
	degradation is typically seen when you use tables on a network share and you are
	the second user or any user thereafter to open the tables. When you enable
	SmartScan, the first user may not see a slowdown, but the second user or every
	user thereafter may experience a delay of one second or more for each table to
	open. By default, SmartScan is disabled in Norton AntiVirus 2002.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q304482 PRB: VFP Executable File Is Slow to Access Tables On Server
	
	To disable SmartScan, follow these steps:
	
	1. Start Norton AntiVirus 2002.
	
	2. On the Options menu, click Norton AntiVirus, expand System, and then click
	  Auto-Protect.
	
	3. Under Which file types to scan for viruses, click to select the Comprehensive
	  file scanning (recommended) check box, and then click to clear the Scan files
	  using SmartScan check box.
	
	NOTE: Exclusions (see the "Methood 2" section of this article) do not seem to
	have any impact when you use SmartScan. For example, you do not improve
	performance when you exclude the Visual FoxPro data files or the directories
	that contain data files.
	
	Method 2: Exclude the Visual FoxPro Data Files
	----------------------------------------------
	
	You can improve performance by configuring Norton AntiVirus so that it does not
	scan Visual FoxPro data files. You want the exclusions to be as narrow as
	possible to maintain antivirus protection, but still gain performance by not
	scanning certain file extensions. To do this, specify the drive, the folder, and
	the file-name extensions of the drive and the folder that contain the data
	files, instead of excluding all files of a specified extension or all files in a
	specified folder.
	
	For table files, you exclude "<K>:\<Data>\*.dbf" (without the
	quotation marks) instead of "*.dbf" (without the quotation marks) or
	"<K>:\<Data>\*.*" (without the quotation marks), where <K> is
	the mapped drive, and where <Data> is the folder that contains your table
	files. This excludes only those data files that your application uses. When you
	add each exclusion, you can include wildcard characters to include or exclude
	subfolders. It is best to hard-code the path and the file-name extensions to
	your data files only (and not include subfolders) to maintain the best balance
	of protection and performance.
	
	To exclude Visual FoxPro data files, follow these steps:
	
	1. Start Norton AntiVirus 2002.
	
	2. On the Options menu, click Norton AntiVirus, expand System, and then click
	  Exclusions.
	
	3. Click New. The Item dialog box appears.
	
	4. In the text box, type the full path and the wildcard character for table
	  files. For example, type <K:\Data\*.dbf>, where <K> is the mapped
	  drive, and where <Data> is the folder that contains your table files.
	
	5. Click to clear the Include subfolders check box.
	
	6. To save the item, click OK.
	
	7. Repeat steps 3 through 6 for the other extensions for Visual FoxPro data
	  files. In step 4, type "K:\Data\*.cdx" (without the quotation marks) and
	  "K:\Data\*.fpt" (without the quotation marks). If your application uses a
	  database container, exclude the following:
	
	   - K:\Data\*.dbc
	   - K:\Data\*.dct
	   - K:\Data\*.dcx
	
	Method 3: Make the Executable File and the Run-Time DLLs Read-only
	------------------------------------------------------------------
	
	When you use this method, you may notice a small improvement in performance.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: anti-virus
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :5.0,5.0a,6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
