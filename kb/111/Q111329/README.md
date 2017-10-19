---
layout: page
title: "Q111329: How to Create Setup Floppy Disks for Viewer Title"
permalink: /kb/111/Q111329/
---

## Q111329: How to Create Setup Floppy Disks for Viewer Title

	Article: Q111329
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Chapter 13, "Completing the Package," of the Microsoft Multimedia Viewer
	"Authoring Guide" has a section on "Creating the Setup Program." The method
	described in the manual assumes that you will put the Viewer run times and your
	title on a CD. The book also assumes that your customers won't copy the title
	onto their hard drive, but instead will run the title off of the CD. This
	article explains how to modify TITLE.INF to allow your customers to install your
	Viewer title from floppy disks onto their hard drives. This article also
	contains information on how to modify the TITLE.MST file so that the Windows
	Program Manager icon(s) for your title are associated with the right drive(s)
	and the right path(s).
	
	NOTE: If any one file is larger than the size of one floppy disk [1.4 megabytes
	(MB) for a double-sided high-density 3.5-inch disk], you cannot use this method
	for creating the setup disks. You can use a tool such as the Microsoft Setup
	Toolkit to automatically split up your large files across floppy disks and make
	your setup disks for you.
	
	MORE INFORMATION
	================
	
	How To Make Setup Floppy Disks
	------------------------------
	
	1. Read pages 13-8 through the end of Chapter 13 in the Multimedia Viewer
	  "Authoring Guide." You will need to do everything described in the book and
	  you will also need to make some additional modifications.
	
	2. As noted on page 13-9 of the "Authoring Guide," copy the contents of
	  \MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\USA to the home directory of your title. Do
	  not copy the folder \BLDCUI.
	
	3. Decide which files will go on which floppy disks. The files that you just
	  copied from the \SETUP\USA directory must go on the first setup disk. The
	  rest of the files can be divided in any order among the remaining floppy
	  disks.
	
	4. Edit your copy of the TITLE.INF file. You don't need to modify the [Default
	  File Settings] and the [System Files], or you can modify them as described in
	  the "Authoring Guide."
	
	  a. Modify the [Source Media Descriptions] section of TITLE.INF. See pages
	     13-12 to 13-13 of the "Authoring Guide" for more detailed information.
	
	     You will need to write one line for each setup disk that you need. Each
	     parameter in a line needs to be in quotation marks. The first parameter is
	     the disk number. The second parameter is the title for that disk. The
	     third parameter needs to contain the exact filename of one file that will
	     go on that setup disk. When your user is prompted to insert a specific
	     disk, then the setup program verifies that the correct disk has been
	     inserted by looking for the file that is specified in the third parameter.
	     The fourth parameter should be a period because your setup files should
	     all be in one folder on your hard drive before you create the setup
	     disks.
	
	     [Source Media Descriptions]
	     "#", "<Name of Disk>", "<name of one of the files on this disk>", "."
	     "1", "Employee Handbook Setup Disk 1", "setup.exe", "."
	     "2", "Employee Handbook Setup Disk 2", "w_2form.bmp", "."
	     "3", "Employee Handbook Setup Disk 3", "happyemp.bmp","."
	
	  b. Modify the [Installed Title Files] section of TITLE.INF. In this section,
	     you need to list every file that will go on the setup disks. The only
	     parameters that are required are the disk_number, filename, file_date, and
	     file_size. The file_version parameter is optional. Pages 13-13 to 13-15 of
	     the "Authoring Guide" have more detailed information on this section.
	
	     [Installed Title Files]
	     <disk #>,<filename>,,,,<date>,,,,,,,,,,<file size>,,,,<file_version>,
	     2, gallery.mvb,,,,1993-10-07,,,,,,,,,,1295392,,,,2.10,
	     2, ibm_logo.dib,,,,1993-10-07,,,,,,,,,,1248,,,,,
	     3, bigvideo.avi,,,,1992-02-15,,,,,,,,,,1093433,,,,4.00,
	     3, catsdogs.wav,,,,1993-03-28,,,,,,,,,,39482,,,,,
	
	How to Enable Your Title to Run from the Hard Drive
	
	Instead of from a Floppy Disk or CD
	-----------------------------------
	
	1. Modify the TITLE.MST file. In the first section of the .MST file, there is a
	  list of GLOBAL variables. Add the following line to the bottom of that list:
	
	  GLOBAL szTitleDir$
	
	2. Locate the following line in the .MST file (located near the end).
	
	             CreateProgmanItem ProgmanGroup$, ProgmanItem$, "mviewer2.exe " +
	        MakePath(GetSymbolValue("STF_SRCDIR"), MVBFileName$ + ".MVB"), "",
	        cmoOverwrite
	
	  Change the CreateProgmanItem() call above to the following:
	
	             CreateProgmanItem ProgmanGroup$, ProgmanItem$, "mviewer2.exe " +
	        MakePath(szTitleDir$, MVBFileName$ + ".MVB"), "", cmoOverwrite
	
	Additional query words: 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
