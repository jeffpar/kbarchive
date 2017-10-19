---
layout: page
title: "Q159249: INSIDE VISUAL C++ VER 4 (3RD ED) Corrections and Comments"
permalink: /kb/159/Q159249/
---

## Q159249: INSIDE VISUAL C++ VER 4 (3RD ED) Corrections and Comments

	Article: Q159249
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Visual C++ Version 4 ISBN 1-55615-891-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	relating to the Microsoft Press book "Inside Visual C++ Version 4."
	
	The following topics are covered:
	
	- CD-ROM: Setup can't copy some files in directory EXE07B
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the "Correction" section is worded for correcting the book and does not
	necessarily address the problem introduced by the book error. The "Comments"
	section contains specific information for working around the problem.
	
	CD-ROM:  Setup can't copy some files in directory EXE07B
	--------------------------------------------------------
	
	SYMPTOMS
	--------
	
	On some configurations of Microsoft Windows 95, running the CD-ROM Setup program
	returns the following error:
	
	  System is unable to find the specified files.
	
	Attempting to copy these files using Copy, XCOPY, Windows 95 Explorer, or File
	Manager will return the error, "File not found." Furthermore, changing to
	different directories on this CD-ROM produces unexpected results, including the
	apparent disappearance of the directory.
	
	CAUSE
	=====
	
	Comments:
	This CD-ROM was duplicated using long filenames.
	
	The ISO 9660 specification, which is a long-standing CD-ROM file system (CDFS)
	specification, does not allow filenames longer than 8 characters, spaces, or
	lowercase letters in filenames. Microsoft Windows NT 3.51 and MS-DOS (with or
	without Windows 3.1) cannot read CD-ROM filenames that contain spaces or
	lowercase letters. However, Microsoft Windows 95 extends the CDFS to allow
	spaces, lowercase letters, and long filenames by using CD-ROM drivers designed
	for this capability.
	
	Because Windows 95 permits extended CD-ROM filenames, it does not have problems
	reading the CD-ROM for this book. However, Windows 95 configurations that use
	MS-DOS (or real mode) CD-ROM drivers will not be able to access the extended
	CD-ROM filenames on this CD-ROM.
	
	
	WORKAROUND
	==========
	
	For Windows 95, the best method of correcting this problem is to obtain a
	Windows 95 CD-ROM driver. Please contact your CD-ROM manufacturer for the latest
	Windows 95 drivers for your model CD-ROM drive. Many CD-ROM drive manufacturers
	also offer free driver updates via the Internet. These drivers can be located by
	searching for the manufacturer's company name on the World Wide Web using any
	major Web search site.
	
	If new drivers are not available, upgrading to a newer CD-ROM drive (and
	installing the appropriate CD-ROM driver for Windows 95) will also resolve this
	problem.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
