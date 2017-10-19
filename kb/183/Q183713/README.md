---
layout: page
title: "Q183713: XADM: How To Use Filever.exe To Verify File Versions"
permalink: /kb/183/Q183713/
---

## Q183713: XADM: How To Use Filever.exe To Verify File Versions

	Article: Q183713
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details the process for running the Filever.exe utility after
	upgrading the current version of Exchange Server. Filever.exe enables you to
	verify your current file version numbers for various system or application
	files. This utility is available on the Exchange Server 5.5 compact disc.
	
	MORE INFORMATION
	================
	
	The information in this article should only be used as one of the
	troubleshooting steps when you experience problems with Exchange Server after it
	has been upgraded. Perform the following steps after upgrading from Exchange
	Server version 4.0 to 5.0, from Exchange Server 4.0 to 5.5, or from Exchange
	Server 5.0 to 5.5. Additionally, the following steps should be used for
	verification after a service pack or a hotfix has been applied.
	
	The computer running Exchange Server will not function adequately or may not
	function at all if there are "old" file versions in the Exchsrvr\bin directory.
	
	Contact Microsoft's Product Support Services to obtain this utility.
	
	1. Copy the utility to your local drive. It can be placed in any folder on the
	  drive.
	
	2. From the command prompt, change to the folder that contains Filever.exe.
	
	3. Type the following:
	  "filever <drive letter>:\exchsrvr\bin" (without the quotation marks)
	  For example, filever c:\exchsrvr\bin. This checks all file versions in that
	  directory.
	
	4. You can be more specific by including the type of file you want to check. For
	  example, filever c:\exchsrvr\bin\*.exe.
	
	5. It is often useful to send the output of this command to a text file that can
	  be more easily reviewed. To send the output of the command to a text file
	  called binfiles.txt, type the following:
	  "filever <drive letter>:\exchsrvr\bin > binfiles.txt" (without the
	  quotation marks)
	
	To verify that you have the correct version of a file, you must compare the
	version or build number with the version from the appropriate Exchange Server
	compact disc.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
