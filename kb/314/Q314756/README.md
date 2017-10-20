---
layout: page
title: "Q314756: Microsoft Visual C++ .NET Step by Step Comments and Corrections"
permalink: /kb/314/Q314756/
---

## Q314756: Microsoft Visual C++ .NET Step by Step Comments and Corrections

{% raw %}

	Article: Q314756
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 15-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Visual C++.NET Step By Step ISBN 0-7356-1567-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Visual C++ .NET Step by Step,
	ISBN 0-7356-1567-5.
	
	The following topics are covered:
	
	- CD-ROM: Files Missing For Chapter 18 Lessons
	
	- Page 24: Error In Code Sample
	
	- Page 28: Incorrect Output In Screenshot
	
	- Page 35: Y Should Be Lowercase
	
	- Page 326: Error In Step 4
	
	- Page 327: Floppy.Bmp Missing From CD-ROM
	
	MORE INFORMATION
	================
	
	CD-ROM: Files Missing For Chapter 18 Lessons
	--------------------------------------------
	
	The code samples for Chapter 18 are missing from the companion CD-ROM.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Picture of Download IconDownload Chap18.exe now
	  (http://download.microsoft.com/download/MSPressPub/Refresh/1.0/NT5XP/EN-US/Chap18.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	Page 24: Error In Code Sample
	-----------------------------
	
	There is an error in the code sample on page 24, step 12. Change:
	
	  void SetName(String *Name)
	    { strName->Copy(Name);};
	  String* GetName() { return strName; };
	
	To:
	
	  void SetName(String *Name)
	    { strName = strName->Copy(Name);};
	  String* GetName() { return strName; };
	
	
	Page 28: Incorrect Output In Screenshot
	---------------------------------------
	
	The screenshot on page 28 is missing information. If the build is successful, the
	results will not be what is shown:
	
	  Animal 1
	  Name:
	  Legs: 4
	
	  Animal 2
	  Name:
	  Legs: 4
	
	But rather:
	
	  Animal 1
	  Name: Cat
	  Legs: 4
	
	  Animal 2
	  Name: Dog
	  Legs: 4
	
	
	Page 35: Y Should Be Lowercase
	------------------------------
	
	On page 35, in the section titled References, the letter Y in the third line of
	code should be lower case.
	
	Change:
	
	  Y = 4;		//  Changes the value of x to 4.
	
	To:
	
	  y = 4;		//  Changes the value of x to 4.
	
	
	Page 326: Error In Step 4
	-------------------------
	
	There is an error in the second paragraph of text in step 4.
	
	Change:
	"the point size (25 points),"
	
	To:
	"the point size (16 points),"
	
	
	Page 327: Floppy.Bmp Missing From CD-ROM
	----------------------------------------
	
	The file file "Floppy.bmp" used in the code sample on page 327 is not included on
	the CD-ROM. For the purposes of this exercise, you may use the Save.bmp file
	found on the CD-ROM.
	
	Note that the project will not match the screenshots in the book.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-1567-5 Templeman Olsen EUBOOK EUSBS VSTUDIO VC
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
