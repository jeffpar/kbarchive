---
layout: page
title: "Q170011: XFOR: cc:Mail Files Accessed by cc:Mail Connector"
permalink: /kb/170/Q170011/
---

## Q170011: XFOR: cc:Mail Files Accessed by cc:Mail Connector

	Article: Q170011
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you set up or use the Microsoft Exchange Connector for Lotus cc:Mail
	(CCMC), the connector accesses some files on the cc:Mail postoffice. This
	article explains which files are accessed and when. This information can help
	you in troubleshooting problems with the connector.
	
	MORE INFORMATION
	================
	
	During the setup of the CCMC, you will be required to enter the path to the
	cc:Mail postoffice. Once the path statement has been entered and you leave the
	Path box (either by pressing Tab or using your mouse), Exchange Server performs
	certain steps to confirm that the entered path points to a valid cc:Mail
	postoffice. The following are some steps encountered and the files accessed:
	
	1. Path is changed and focus is removed from the Path box.
	
	2. If the path is UNC, Exchange Server creates an IPC$ connection to the
	  \\server\share.
	
	3. If the UNC is not valid, an error is displayed.
	
	4. If the path contains directory information, Exchange Server moves focus to
	  the correct directory.
	
	5. If directory information is not valid, an error is displayed
	
	6. Exchange Server queries for a file that matches the criteria CCPOMBOX.*
	
	7. If the query is successful, the path is considered valid.
	
	8. If the query is unsuccessful, an error message is displayed.
	
	When the CCMC service is started, a number of files are accessed; most are simply
	queried to check for existence, some are read and written to. The following is a
	general list of files accessed in the order in which they are accessed:
	
	1. Ccver.tb
	
	2. Nftcheck
	
	3. Ccpodd.nn (where nn is a number, for example, Ccpodd.00)
	
	4. Ccintl.tb
	
	5. Ccver.tb
	
	When the CCMC service is stopped, only one file is touched, Ccpoms. During mail
	delivery and Directory Synchronization, the CCMC doesn't directly touch cc:Mail
	postoffice files. The programs Import.exe and Export.exe are responsible for
	accessing the postoffice files.
	
	Additional query words: ccMail
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
