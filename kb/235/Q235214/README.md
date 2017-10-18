---
layout: page
title: "Q235214: Microsoft SQL Server 7.0 System Administration Training Kit Comm"
permalink: kb/235/Q235214/
---

## Q235214: Microsoft SQL Server 7.0 System Administration Training Kit Comm

	Article: Q235214
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 06-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft SQL Server 7.0 System Administration Training Kit ISBN 1-57231-827-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft SQL Server 7.0 System
	Administration Training Kit, ISBN 1-57231-827-9.
	
	The following topics are covered:
	
	- CD-ROM: Correction To Runbcpa.cmd File (Chapter 6)
	
	- Page xxx: Corrections For Installing StudyNwind Database
	
	- Page 118: Change Drop to Remove
	
	- Page 126: Connection Between RAID Level And Fault Tolerance Incorrect
	
	- Page 162: Step 42 Incorrectly Duplicates Step 38
	
	- Page 302: Sp_addrolemember Example Incorrect
	
	- Page 354, Exercise 4: Steps 2 Through 5 Are Incorrect
	
	- Page 474: Incorrect statement for step 8
	
	MORE INFORMATION
	================
	
	CD-ROM: Correction To Runbcpa.cmd File (Chapter 6)
	--------------------------------------------------
	
	Page 143 walks you through the steps to import data using the bcp utility. If you
	choose to use the completed batch file for this exercise, instead of creating
	your own, a typo in the Runcpa.cmd file (C:\Sqladmin\Exercise\Ch06\Runcpa.cmd)
	needs to be corrected. The space between "/e" and "C:\Sqladmin..." was omitted.
	
	Change:
	
	bcp StudyNwind..Products in c:\sqladmin\exercise\ch06\newprods.txt /c /t"," /r\n /ec:\sqladmin\exercise\ch06\newprods.err /b250 /m50 /SSQLSERVER /Usa
	
	To:
	
	bcp StudyNwind..Products in c:\sqladmin\exercise\ch06\newprods.txt /c /t"," /r\n /e c:\sqladmin\exercise\ch06\newprods.err /b250 /m50 /SSQLSERVER /Usa
	
	Please remember that this command should contain no hard returns and that
	"/SSQLSERVER" should be replaced with your server name if your server name is
	not SSQLSERVER.
	
	
	Page xxx: Corrections For Installing StudyNwind Database
	--------------------------------------------------------
	
	On page xxx, the instructions for using the StudyNwind Database do not mention
	that you must have SQL already installed on your computer to run the batch file.
	In fact, the previous page, xix, indicates that you will not install SQL Server
	until Chapter 2.
	
	Note: You must install SQL Server before running the batch file as outlined in
	the instructions in the section titled "Using the StudyNwind Database".
	
	
	Page 118: Change Drop to Remove
	-------------------------------
	
	On page 118, under "Using Automatic File Growth" section, in lines 4 and 6 of the
	altering database syntax example, change DROP to REMOVE.
	
	Change:
	"| DROP FILE logical_file"
	
	"| DROP FILEGROUP filegroup"
	
	To:
	"| REMOVE FILE logical_file"
	
	"| REMOVE FILEGROUP filegroup"
	
	
	Page 126: Connection Between RAID Level And Fault Tolerance Incorrect
	---------------------------------------------------------------------
	
	On page 126, in the "Leveraging Windows NT Server Fault Tolerance" section, the
	information about the RAID level and its corresponding fault tolerance is
	incorrect.
	
	Change:
	"The levels are ranked numerically according to their ability to provide fault
	tolerance. RAID 0 provides no fault tolerance, whereas RAID 5 provides the best
	fault tolerance."
	
	To:
	"RAID 0 provides no fault tolerance, whereas RAID 1 provides the best fault
	tolerance"
	
	
	Page 162: Step 42 Incorrectly Duplicates Step 38
	------------------------------------------------
	
	On page 162, in the exercise titled "Creating a Package with DTS Designer," steps
	38 and 42 are identical.
	
	Step 42 should read:
	"In the Source Step column, select Create ProductsCopy. In the Precedence column,
	select Success. Note that you cannot change the Destination Step, because you
	are editing the precedence constraints for Copy data from Access to SQL Server,
	which is the destination step. Click OK to close the Workflow Properties dialog
	box and save the precedence constraints for Copy data from Access to SQL
	Server."
	
	
	Page 302: Sp_addrolemember Example Incorrect
	--------------------------------------------
	
	Page 302, fifth line down:
	Change:
	"sp_addrolemember 'Carl', 'db_datareader' "
	
	To:
	"sp_addrolemember 'db_datareader', 'Carl' "
	
	
	Page 354, Exercise 4: Steps 2 Through 5 Are Incorrect
	-----------------------------------------------------
	
	On page 354, Exercise 4, replace steps 2 through 5 with the following steps:
	
	2. In the console tree, right-click the server, click Properties. click the
	Server Settings tab, then click Change.
	3. In the Profile Name drop-down list, select SQLServerAgent Profile.
	4. Click Test.
	
	  A message appears, indicating that the test was successful. Click OK to close
	  the message.
	
	5. Click OK to close the SQL Server Properties dialog box.
	
	  A message appears asking you if you want to restart SQL Server Agent so that
	  the changes you have made will take effect. Click Yes. Click OK when the
	  service has restarted.
	
	
	Page 474: Incorrect statement for step 8
	----------------------------------------
	
	On page 474, change the statement in step 8 to select from the ReplProducts
	table.
	
	Statement should read:
	
	  	USE PullSubs
	  	SELECT * FROM ReplProducts WHERE ProductID = 1
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-827-9 tkbook sql70
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
