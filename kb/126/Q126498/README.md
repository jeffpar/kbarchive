---
layout: page
title: "Q126498: PATCH: Vfp3sbs.exe VFP 3.0 Step By Step Corrections"
permalink: /kb/126/Q126498/
---

## Q126498: PATCH: Vfp3sbs.exe VFP 3.0 Step By Step Corrections

	Article: Q126498
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerrkbfixlist
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Visual FoxPro 3 for Windows Step by Step ISBN 1-55615-846-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vfp3sbs.exe is a patch that contains corrections to lessons and text in
	"Microsoft Visual FoxPro 3 for Windows Step by Step."
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Vfp3sbs.exe
	  (http://download.microsoft.com/download/fox30std/MSPRESS/2.0/W9X2KMe/EN-US/Vfp3sbs.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Contents Of Readme.txt Included with Vfp3sbs.exe
	------------------------------------------------
	
	*************************************************
	"Microsoft Visual FoxPro 3 Step by Step"
	Readme.txt for correction patch.
	Updated February 7, 1996
	*************************************************
	
	Extracting Vfp3sbs.exe creates the following files:
	
	  Readme.txt    - Patch installation instructions (this file)
	  Vfp3sfix.exe  - Self-extracting executable containing:
	     PROJ_03       - Corrected files for Lesson 3
	     PROJ_09       - Corrected files for Lesson 9
	     Correx.txt    - List of corrections to the book text.
	  Unzip.bat     - Default command to install correction files
	
	Instructions
	------------
	
	1. Download Vfp3sbs.exe to your local hard drive or a floppy disk.
	
	2. Execute (by double-clicking) the file Vfp3sbs.exe to extract Vfp3sfix.exe and
	  Unzip.bat.
	
	  3a. If you installed the Visual FoxPro Step by Step practice files in the
	  default directory C:\LITWARE, then Execute (by double-clicking) the file
	  Unzip.bat. This automatically runs the following command:
	
	  Vfp3sfix.exe -d -o c:\litware\
	
	  3b. If you did not install the practice files in the default directory, run
	  the following command where <Drive:\Path> is your practice file path:
	
	  Vfp3sfix.exe -d -o <Drive:\Path>\
	
	3. Open and print the C:\LITWARE\Correx.txt file that was installed by Step
	  three. Correx.txt contains corrections to the book text. Make some brief
	  notes in your text where corrections are indicated by the Correx.txt file.
	  Close the correction file after printing and/or reviewing the contents.
	
	4. (Optional) Delete (or move to a floppy disk) the following files from your
	  download directory:
	
	  Readme.txt
	  Vfp3sfix.exe
	  Vfp3sbs.exe
	  Unzip.bat
	
	You are ready to continue using "Microsoft Visual FoxPro 3 Step by Step" once you
	have completed step four (above).
	
	Additional query words: VFoxWin 3.00 3.0 bookbug EUBook EUSBS
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbfixlist
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
