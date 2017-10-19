---
layout: page
title: "Q238023: Microsoft BackOffice SBS 4.5 ResKit Comments and Corrections"
permalink: /kb/238/Q238023/
---

## Q238023: Microsoft BackOffice SBS 4.5 ResKit Comments and Corrections

	Article: Q238023
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft BackOffice Small Business Server 4.5 Resource Kit ISBN 0-7356-0577-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft BackOffice Small Business Server
	4.5 Resource Kit, ISBN 0-7356-0577-7.
	
	The following topics are covered:
	
	- CD-ROM Volume Name is Undescriptive
	
	- CD-ROM Icon on the CD-ROM Drive is Incorrect
	
	- CD-ROM Readme.doc Correction
	
	- Page 512: Error In Instructions
	
	- Page 766: Screen Does Not Match the CD Main Menu
	
	MORE INFORMATION
	================
	
	CD-ROM Volume Name is Undescriptive
	-----------------------------------
	
	The volume name (the name associated with the drive letter, that you see when the
	CD is placed in the drive)on the CD is Disc1.
	Because of this lack in description, one may think that there should be a second
	CD. However, there is only the one CD.
	Recommended fix: Use a more descriptive name, ie. SBSRK4.5
	
	
	CD-ROM Icon on the CD-ROM Drive is Incorrect
	--------------------------------------------
	
	Icon on the CD-ROM drive, (the icon associated with the drive letter, that the
	you see when the CD is placed in the CD-ROM drive), is the standard Microsoft
	Windows logo.
	Because of this, one may mistake the CD for another Microsoft product.
	Recommended fix: Change the icon to reflect the specific product.
	
	
	CD-ROM Readme.doc Correction
	----------------------------
	
	When reading the readme.doc from the root of the CD, it describes under section
	"1.2 Setting up the Resource Kit Tools (Client)" that the installation does the
	following:
	
	Setup creates a Small Business Server Resource Kit, program group on the Start
	Menu which contains four start menu items:
	Release Notes
	Resource Kit Tools Overview
	Resource Kit Online Books
	Tools Management Console
	
	However, Setup does not install the Resource Kit Online Books.
	
	SOLUTION:
	Correct text in the readme.doc, to change the paragraph to:
	
	"Setup creates a Small Business Server Resource Kit program group on the Start
	Menu which contains three start menu items:
	Release Notes
	Resource Kit Tools Overview
	Tools Management Console"
	
	
	Page 512: Error In Instructions
	-------------------------------
	
	The last bullet on page 512 incorrectly instructs the user to rename Clioc.o to
	Clioc.ini. The file should be renamed to Clioc.inf.
	
	Change:
	
	Locate the Clioc.o file in the following path:
	SBSServer\SmallBusiness\Template\Clioc.o
	Rename this file to Clioc.ini
	
	To:
	
	Locate the Clioc.o file in the following path:
	SBSServer\SmallBusiness\Template\Clioc.o
	Rename this file to Clioc.inf
	
	
	Page 766: Screen Does Not Match the CD Main Menu
	------------------------------------------------
	
	The main menu screen shot on page 766 does not match the main menu on the
	CD-ROM.
	
	Chapter 51, page 766 displays the following menu options:
	
	  SBS Server Components - NT
	  Install Server and Client Tools
	  SBS Client Components - NT/Win9x
	  Install Client Tools
	  Release Notes
	  Explore the CD
	  Crystal Reports 6.0
	  Internet Explorer 5.0
	  Imagination Engineer LE
	  Windows Scripting Host
	  Internet Explorer 5
	  Windows NT 4.0 Service Pack 5
	  RAS Manager
	  Windows 95 Service Pack 1
	  Web Server Capacity Analysis Tool
	  Microsoft Management Console
	  Windows Mgmt. Instrumentation
	  Crystal Reports 6.0
	  Windows Scripting Host
	  Imagination Engineer LE
	
	SOLUTION:
	Update the book to match the main menu on the CD-ROM.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-0577-7 RKBOOK BORK
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
