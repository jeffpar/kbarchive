---
layout: page
title: "Q150771: LEARN VISUAL BASIC NOW Corrections and Comments"
permalink: /kb/150/Q150771/
---

## Q150771: LEARN VISUAL BASIC NOW Corrections and Comments

{% raw %}

	Article: Q150771
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Learn Visual Basic Now ISBN 1-55615-905-6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	relating to the Microsoft Press book "Learn Visual Basic Now."
	
	The following topics are covered:
	
	- CD-ROM: Setup.exe File Not Found
	
	- VB WORKING MODEL: Unable to load 2 form projects
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the "Correction" section is worded for correcting the book and does not
	necessarily address the problem introduced by the book error. The "Comments"
	section contains specific information for working around the problem.
	
	CD-ROM:  Setup.exe File Not Found
	---------------------------------
	
	Symptom:
	
	On computers running Microsoft Windows NT 3.51 and some configurations of
	Microsoft Windows 95, running the CD-ROM Setup program returns the following
	error:
	
	  File not found.
	
	Furthermore, changing to different directories on this CD-ROM produces unexpected
	results, including the apparent disappearance of the directory. The only file
	that opens properly is the README.TXT file.
	
	CAUSE
	=====
	
	The CD-ROM for the Microsoft Press book titled "Learn Visual Basic Now" was
	duplicated using long filenames and filenames containing spaces and lowercase
	letters.
	
	The ISO 9660 specification, which is a long-standing CD-ROM file system (CDFS)
	specification, does not allow spaces or lowercase letters in filenames.
	Microsoft Windows NT 3.51 and MS-DOS (with or without Windows 3.1) cannot read
	CD-ROM filenames that contain spaces or lowercase letters. However, Microsoft
	Windows 95 extends the CDFS to allow spaces, lowercase letters, and long
	filenames by using CD-ROM drivers designed for this capability.
	
	Because Windows 95 permits extended CD-ROM filenames, it does not have problems
	reading the CD-ROM for this book. However, Windows 95 configurations that use
	MS-DOS (or real mode) CD-ROM drivers will not be able to access the extended
	CD-ROM filenames on this CD-ROM.
	
	WORKAROUND
	==========
	
	For Windows 95, the best method of correcting this problem is to obtain a
	Windows 95 CD-ROM driver. Please contact your CD-ROM manufacturer for the latest
	drivers for your model CD-ROM.
	
	Microsoft Press has also created a replacement pack containing both a CD-ROM and
	a 3.5-inch disk for "Learn Visual Basic Now." This replacement pack will work
	properly with all configurations of Windows 95 and Windows NT 3.51.
	
	To obtain a free copy of this replacement pack, please call Microsoft Press at
	(800) MS-PRESS and request a replacement CD-ROM (part number 097-0001533) for
	the Microsoft Press book titled, "Learn Visual Basic Now". Outside the United
	States, please send e-mail to MSPINPUT@MICROSOFT.COM for further information.
	
	VB WORKING MODEL: Unable to load projects with 2 forms
	------------------------------------------------------
	
	"Learn Visual Basic Now," page 212, provides steps for saving a project that
	contains two forms. However, the following error occurs when you attempt to load
	this or any other two-form project using the Visual Basic Working Model:
	
	  You may only load or create projects with two
	  modules (Forms, MDI Forms, Modules, Classes)
	  in the Visual Basic Working Model.
	
	  Projects may contain an unlimited (system
	  dependent) number of modules in other
	  versions of Visual Basic 4.0.
	
	Comments:
	
	The Microsoft Visual Basic 4.0 Working Model that is included with "Learn Visual
	Basic Now" is unable to load projects with two forms.
	
	To circumvent this limitation:
	
	1. Create a new project.
	
	2. Click the File menu, and then select Remove File.
	
	3. Click the File menu, then select Add File. Change to the proper directory,
	  and double-click the first form you want in the project.
	
	4. Repeat step 3 for the second form you want in the project.
	
	After performing these steps, you will have a two-form project loaded and ready
	to be worked with. This project can be tested, modified, or compiled into an
	executable as normal.
	
	Microsoft Press is researching this issue and will place any new information in
	this article.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press bookbug 1-55615-905-6
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	
	=============================================================================
	

{% endraw %}
