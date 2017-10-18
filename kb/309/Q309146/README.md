---
layout: page
title: "Q309146: Academic Learning Series Microsoft SQL Server 2000 System Admini"
permalink: kb/309/Q309146/
---

## Q309146: Academic Learning Series Microsoft SQL Server 2000 System Admini

	Article: Q309146
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Academic Learning Series Microsoft SQL Server 2000 System Administration ISBN 0-7356-1426-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Academic Learning Series Microsoft SQL
	Server 2000 System Administration, ISBN 0-7356-1426-1.
	
	The following topics are covered:
	
	- CD-ROM: Updated Script Files To Accommodate 25 Users
	
	- CD-ROM: Corrections To Number Of Users In LabSetup.doc
	
	- Lab Manual, Page 1: Correction To Number Of Users
	
	- Page 56: Corrections To Steps 25 And 26
	
	- Page 139: "GET DATE()" Should Be "GETDATE()"
	
	- Page 163: Incorrect System Function
	
	MORE INFORMATION
	================
	
	CD-ROM: Updated Script Files To Accommodate 25 Users
	----------------------------------------------------
	
	On the Instructor CD, the setup script files are designed to accommodate a class
	of 12 students. We have made available updated script files that will
	accommodate a class of 25 students.
	
	These updated script files are available in the self-extracting executable file
	25script.exe. After downloading the file, double-click on 25script.exe, extract
	the files into the /Setup folder on your computer, and allow the extracted files
	to overwrite existing files of the same file names.
	
	The following file is available for download from the Microsoft Download Center:
	
	  25script.exe
	  (http://download.microsoft.com/download/MSPressPub/update/1.0/NT5/EN-US/25script.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	CD-ROM: Corrections To Number Of Users In LabSetup.doc
	------------------------------------------------------
	
	On the Instructor CD, in the file LabSetup.doc,
	
	On page 11,
	
	Change:
	"Important The Add_Users.vbs script should have created the SQLServerUsers
	Organizational Unit (OU). In this OU, 36 user accounts should have been created,
	AccountingUser01 through AccountingUser12, Student01 through Student12, and
	TestUser01 through TestUser12. In this OU, 3 security groups should have been
	created, Accounting, SQL Admins and SQL Users. The SQL Users security group
	should contain all 36 user accounts. The SQL Admins security group should
	contain user accounts Student01 through Student12. The Accounting security group
	should contain user accounts AccountingUser01 through AccountingUser12."
	
	To:
	"Important The Add_Users.vbs script should have created the SQLServerUsers
	Organizational Unit (OU). In this OU, 72 user accounts should have been created,
	AccountingUser01 through AccountingUser25, Student01 through Student25, and
	TestUser01 through TestUser25. In this OU, 3 security groups should have been
	created, Accounting, SQL Admins and SQL Users. The SQL Users security group
	should contain all 72 user accounts. The SQL Admins security group should
	contain user accounts Student01 through Student25. The Accounting security group
	should contain user accounts AccountingUser01 through AccountingUser25."
	
	On page 14, in Step 10,
	
	Change:
	"10. In the Name column, click AccountingUser01, scroll to the end of the list of
	names, and then press the Shift key and click TestUser12. The 36 users in the
	SQLServerUsers OU are selected."
	
	To:
	"10. In the Name column, click AccountingUser01, scroll to the end of the list of
	names, and then press the Shift key and click TestUser25. The 72 users in the
	SQLServerUsers OU are selected."
	
	On page 17, in step 16,
	
	Change:
	"16. Repeats steps 9 - 12 above for each student account (Student01 -
	Student12)."
	
	To:
	16. Repeat steps 9 - 12 above for each student account (Student01 - Student25).
	
	
	Lab Manual, Page 1: Correction To Number Of Users
	-------------------------------------------------
	
	In the Lab Manual, on page 1, under "Before You Begin",
	
	Change:
	"Each student computer is named Serverxx, where xx is a two-digit number between
	01 and 12."
	
	To:
	"Each student computer is named Serverxx, where xx is a two-digit number between
	01 and 25."
	
	
	Page 56: Corrections To Steps 25 And 26
	---------------------------------------
	
	On page 56, change:
	"25. Click Start and then click Run.
	The Open dialog box appears.
	
	26. In the Open drop-down combo box, type..."
	
	To:
	"25. Click Start, point to Accessories, then click Command Prompt.
	The Command Prompt window appears.
	
	26. At the command prompt, type..."
	
	
	Page 139: "GET DATE()" Should Be "GETDATE()"
	--------------------------------------------
	
	On page 139, in Table 5.4, the system function "GETDATE" should be one word, with
	no space in it.
	
	Change:
	"GET DATE()"
	
	To:
	"GETDATE()"
	
	
	Page 163: Incorrect System Function
	-----------------------------------
	
	On page 163, in the first paragraph, change:
	"DATAPROPERTYEX"
	
	To:
	"DATABASEPROPERTYEX"
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ALS 0-7356-1426-1 RABELER
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
