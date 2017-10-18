---
layout: page
title: "Q113156: MS-DOS 6.2 Step By Step p.xxi: Install Does Not Make Backup."
permalink: kb/113/Q113156/
---

## Q113156: MS-DOS 6.2 Step By Step p.xxi: Install Does Not Make Backup.

	Article: Q113156
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft MS-DOS Step By Step (covers versions 6.0 and 6.2), Printing 1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "MS-DOS 6.2 Step By Step" (first printing) companion disk installation
	program does not ask for a blank disk. This contradicts page xxi under step #3,
	where the book says:
	
	  When asked to place a new blank disk in the drive, be sure to use a disk with
	  the highest capacity that your drive can handle.(For more details, refer to
	  "Identifying Types of Floppy Disks," in Lesson2.)
	
	When the installation program runs, it never asks for a blank disk.
	
	CAUSE
	=====
	
	The installation program does not make use of a blank disk. The paragraph below
	step 3 on page xxi is an error in the first printing of this book, and should be
	substituted with the information below.
	
	RESOLUTION
	==========
	
	Ignore the paragraph directly below step 3 on page xxi. This paragraph is an
	error in the first printing of this book. The installation program does not make
	a backup as these instructions indicate.
	
	A copy practice disk must be created. This disk will be referenced throughout the
	lessons in the book.
	
	To create a copy practice disk, complete the following step. (Current printings
	have this step included as step 4.)
	
	  3.5 When the installation is completed, copy the practice files to a new
	  floppy disk. Insert a blank, formatted disk in the drive. If you're not
	  certain that the disk is formatted, follow steps 3 through 7 on page 21
	  before continuing. Then type the following commands, pressing the ENTER key
	  after each command. (If your floppy disk is in drive B, substitute B: for the
	  A: in these commands.)
	
	     XCOPY C:\SBS1STEP A:\SBS1STEP /S /E
	     XCOPY C:\SBSLESSN A:\SBSLESSN /S /E
	     XCOPY C:\SBSREV&P A:\SBSREV&P /S /E
	
	  After you enter each command, MS-DOS asks you whether you have specified a
	  file name or directory name. Press D for directory.
	
	IMPORTANT: MS-DOS 6.2 Step By Step references the practice disk several times in
	this book, so it is very important to complete the step outlined above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in "Microsoft Press MS-DOS 6.2 Step
	By Step" printing 1. This problem was corrected in "Microsoft Press MS-DOS Step
	By Step 6.2" printing 2.
	
	MORE INFORMATION
	================
	
	An errata sheet is available from Microsoft Press Technical Support. The
	information in the errata sheet is the same as the information provided in this
	article.
	
	Additional query words: "missing practice disk" SBS fail bad incomplete setup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
