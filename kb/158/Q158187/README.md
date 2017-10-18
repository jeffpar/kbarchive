---
layout: page
title: "Q158187: OFFICIAL MICROSOFT INTERNET EXPLORER BOOK Corrections and Comm"
permalink: kb/158/Q158187/
---

## Q158187: OFFICIAL MICROSOFT INTERNET EXPLORER BOOK Corrections and Comm

	Article: Q158187
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Official Microsoft Internet Explorer Book ISBN 1-57231-309-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	relating to the Microsoft Press book "Official Microsoft Internet Explorer
	Book."
	
	The following topics are covered:
	
	- CD-ROM: Setup incorrectly creates Welcome icon for the Macintosh
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the "Correction" section is worded for correcting the book and does not
	necessarily address the problem introduced by the book error. The "Comments"
	section contains specific information for working around the problem.
	
	CD-ROM: Setup incorrectly creates Welcome icon for the Macintosh
	----------------------------------------------------------------
	
	Microsoft Internet Explorer 2.1 for the Macintosh installs properly. However, the
	Internet Starter Kit Welcome icon does not run properly, returning the following
	two errors:
	
	  'file:///IE Starter Kit/mac/english/demobin/globe.htm' could not be found.
	  The attempt to load 'file:///IE Starter
	  Kit/mac/english/demobin/globe.htm' failed.
	
	  'file:///IE Starter Kit/mac/english/demobin/welcome.htm' could not be found.
	  The attempt to load 'file:///IE Starter Kit/mac/english/demobin/ welcome.htm'
	  failed.
	
	CAUSE
	=====
	
	The Installation program, the Welcome page icon, and other included Web pages
	look for the CD-ROM name "IE Starter Kit." However, the CD-ROM name is actually
	"Internet Explorer 3.0 " (including the space at the end of 3.0). Therefore, any
	references to the disc name "IE Starter Kit" fail.
	
	WORKAROUND
	==========
	
	The following correction label has been added to the CD-ROM insert for the first
	printing of this book:
	
	***** BEGIN CORRECTION LABEL *****
	
	ATTENTION MACINTOSH USERS:
	
	After running the Installer program for Microsoft Internet Explorer, please use
	the following steps to open the Welcome page instead of double-clicking the
	CD-ROM's Welcome icon:
	
	1. Insert the CD-ROM.
	
	2. Double-click the CD-ROM icon.
	
	3. Double-click the Mac folder.
	
	4. Double-click the English folder.
	
	5. Double-click the Demobin folder.
	
	6. Double-click the Welcome.htm icon.
	
	***** END CORRECTION LABEL *****
	
	Correction:
	Although the above workaround allows the use of all parts of the original CD-ROM,
	Microsoft Press has developed a corrected replacement CD-ROM that addresses this
	problem. The correction simply changes the CD-ROM name for Macintosh computers.
	To order a replacement CD-ROM, please call the Microsoft Order Desk at (800)
	360-7561. This corrected CD-ROM will be included with the second and all
	subsequent printings of this book.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug Mac volume label CD-ROM name IE 2.01 2.10
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
