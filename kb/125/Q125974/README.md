---
layout: page
title: "Q125974: MS DOS 6.2 STEP BY STEP: Corrections and Comments"
permalink: /kb/125/Q125974/
---

## Q125974: MS DOS 6.2 STEP BY STEP: Corrections and Comments

{% raw %}

	Article: Q125974
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS MS-DOS Step by Step 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "MS-DOS Step by Step." This book covers
	MS-DOS versions 6.0 and 6.22.
	
	The following topics are covered:
	
	- Installation error: "CDR 101: Error reading drive..."
	
	- Page xxi: Install does not request a disk as per page xxi
	
	- Page xxi: 5th printing missing SBS_DISK utility
	
	- page 45: TREE /P implied to be a valid command
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Installation error:  "CDR 101:  Error reading drive..."
	-------------------------------------------------------
	
	The installation program produces the following error when installing on some
	computers that are configured with a CD-ROM drive:
	
	  "CDR101: Error reading drive DOGRAM. Abort, Retry, or Fail?"
	
	Correction:
	
	A new installation program is under development, and will address this issue.
	
	Comments:
	
	This error is produced when the installation program encounters some types of
	CD-ROM drive device drivers. It is the CD-ROM driver that produces the error.
	
	To work around the problem, simply press F to fail the CD-ROM operation. The
	install will continue as normal with no further problems. Because the install
	program cannot write to a CD-ROM, this option will have no adverse effects on
	the installation.
	
	Reference words: CDR101 CDR-101 CDR 101
	
	Page xxi:  Install does not request a disk as per page xxi
	----------------------------------------------------------
	
	Page xxi mentions that the installation will ask for a blank disk. This never
	occurs because the install program has been changed. See correction and
	workaround for details.
	
	Correction:
	
	The following three MS-DOS commands will create a copy practice disk.
	
	XCOPY C:\SBS1STEP A:\SBS1STEP /S /E
	XCOPY C:\SBSLESSN A:\SBSLESSN /S /E
	XCOPY C:\SBSREV&P A:\SBSREV&P /S /E
	
	Note: This correction was included in printings 2 and 3.
	
	
	Printings 4 and later contain an executable named SBS_DISK that automates this
	process and adds error checking.
	
	Comments:
	
	This problem is corrected in printings 2 and later. Please refer to the
	correction card found in the disk envelope if you have printing 2 or 3.
	
	Page xxi:  5th printing missing SBS_DISK utility
	------------------------------------------------
	
	In the fifth printing of MS-DOS 6.22 Step by Step, the instructions on page xxi
	instruct the reader to type SBS_DISK to create a copy practice disk. However,
	when this command is entered at the MS-DOS Prompt, the following error occurs:
	
	  Bad command or file name.
	
	Correction:
	
	The Practice Files disk has been corrected for future printings of this book.
	
	Comments:
	
	In most of the 5th printing books, a label was placed on the disk envelope in the
	back of this book. This label provides the following workaround:
	
	Step 4 on page xxi should read:
	
	1. When the installation is completed, copy the practice files to a new
	
	floppy disk. Insert a blank, formatted disk in the drive. If you[ASCII 146]re not
	certain that the disk is formatted, follow steps 3 through 7 on page 21 before
	continuing. Then type the following commands, pressing the ENTER key after each
	command. (If your floppy disk is in drive B, substitute b: for the a: in these
	commands.)
	
	XCOPY C:\SBS1STEP A:\SBS1STEP /S /E
	XCOPY C:\SBSLESSN A:\SBSLESSN /S /E
	XCOPY C:\SBSREV&P A:\SBSREV&P /S /E
	
	After you enter each command, MS-DOS asks you whether you have specified a
	filename or directory name. Press D for directory.
	
	page  45: TREE /P implied to be a valid command
	-----------------------------------------------
	
	TREE /P is not a valid MS-DOS command. Under the title "One Step Further" there
	is a description of using the TREE command. This paragraph implies that TREE can
	use the /p switch. However this is not true.
	
	Comments:
	
	The command TREE does not take /P as a valid parameter. This paragraph is
	referring to the dir command which is described in this part of the book. Type
	TREE /? at an MS-DOS prompt for a list of valid TREE parameters and their
	descriptions.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press bookbug 1-55615-635-9
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
