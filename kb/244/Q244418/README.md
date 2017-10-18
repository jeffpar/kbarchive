---
layout: page
title: "Q244418: Microsoft Windows NT Server Resource Kit Comments and Correction"
permalink: kb/244/Q244418/
---

## Q244418: Microsoft Windows NT Server Resource Kit Comments and Correction

	Article: Q244418
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 29-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Windows NT Server 4.0 Resource
	Kit, ISBN 1-57231-344-7.
	
	The following topics are covered:
	
	- CD-ROM: Windows NT Workstation Resource Guide Error
	
	- Page 354: Errors In Classless Interdomain Routing Table
	
	- Page 395: Browser Code Updates Are Not Available
	
	MORE INFORMATION
	================
	
	CD-ROM: Windows NT Workstation Resource Guide Error
	---------------------------------------------------
	
	When you access the Online Documentation for the Windows NT Workstation Resource
	Guide, you may received the following error message:
	
	"The topic does not exist. Contact your application vendor for an updated help
	file. (129)"
	
	This occurs when trying to view the "Determining Where to Deploy Windows 95 and
	Windows NT" topic. You can work around this problem by following the steps
	below:
	
	1. Go to the Index tab of help
	
	2. Type "Determining Where"
	
	3. Click on the "Determining Where to Deploy Windows 95 and Windows NT" topic in
	  the result window
	
	From there you can use the Back and Forward buttons to navigate the chapter.
	
	
	Page 354: Errors In Classless Interdomain Routing Table
	-------------------------------------------------------
	
	The second paragraph in the section titled "Classless Interdomain Routing"
	contains the following errors regarding Class C network addresses:
	
	Change:
	172.16.16.0, 172.16.32.0, and 172.16.48.0
	
	To:
	192.16.16.0, 192.16.32.0, and 192.16.48.0
	
	The table will also need to be changed as follows:
	
	  NET 192.16.16 (1100 0000 . 0001 0000 . 0001 0000.0000 0000)
	  NET 192.16.32 (1100 0000 . 0001 0000 . 0010.0000.0000 0000)
	  NET 192.16.48 (1100 0000 . 0001 0000 . 0011.0000.0000 0000)
	  MASK 255.255.192.0 (1111 1111 . 1111 1111 . 1100 0000.0000 0000)
	
	
	Page 395: Browser Code Updates Are Not Available
	------------------------------------------------
	
	The second paragraph indicates that updated Browser code files are available from
	ftp.microsoft.com. These files are no longer available.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: RKBOOK RKNT NT40 1-57231-344-7
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
