---
layout: page
title: "Q179569: Error in SQL Setup: Can't Find SQLBOOKS.IDX"
permalink: /kb/179/Q179569/
---

## Q179569: Error in SQL Setup: Can't Find SQLBOOKS.IDX

	Article: Q179569
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Training 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft SQL Server 6.5 Evaluation Setup, at approximately the
	60 percent mark of files copied, you may receive the following error:
	
	  Critical Error
	  Cannot open the file name \SQLSetup\SQLBKS65\SQLBOOKS.IDX
	
	CAUSE
	=====
	
	The Microsoft SQL Server 6.5 Books Online was not included with the SQL Server
	evaluation edition.
	
	WORKAROUND
	==========
	
	Start the SQL Server Setup.exe. During setup, you will be presented with the
	following dialog box:
	
	Select a SQL Server Books Online installation option:
	
	- Install on Hard Disk
	
	- Install to Run from CD
	
	- Do Not Install
	
	Select Do Not Install to successfully install SQL Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server Training.
	
	
	Additional query words: press ms_press bookbug 1-57231-614-4
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
