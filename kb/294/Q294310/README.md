---
layout: page
title: "Q294310: Programming Collaborative Web Applications With Exchange 2000 Se"
permalink: /kb/294/Q294310/
---

## Q294310: Programming Collaborative Web Applications With Exchange 2000 Se

	Article: Q294310
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 06-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Programming Collaborative Web Applications with Microsoft Exchange 2000 Server ISBN 0-7356-0772-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Programming Collaborative Web Applications
	With Microsoft Exchange 2000 Server, ISBN 0-7356-0772-9.
	
	The following topics are covered:
	
	- Back Cover: Incorrect Information About CD-ROM
	
	- Page 407: Missing Forward Slash In Listing 8.20
	
	MORE INFORMATION
	================
	
	Back Cover: Incorrect Information About CD-ROM
	----------------------------------------------
	
	On the back cover, in the "Included on CD-ROM" section, it states that the
	companion CD includes the Exchange 2000 Server SDK. The companion CD does not
	include the Exchange 2000 Server SDK.
	
	Change:
	"The Exchange 2000 Server SDK"
	
	To:
	"The Exchange 2000 Server SDK documentation"
	
	
	Page 407: Missing Forward Slash In Listing 8.20
	-----------------------------------------------
	
	There is an error in Listing 8.20 on page 407. In the first section of code there
	is a missing forwardslash.
	
	Change:
	
	  " 'file://.backofficestorage/<domainname>/"<BR/>
	
	To:
	
	  " 'file://./backofficestorage/<domainname>/"<BR/>
	
	Note that this occurs in the comment section of the program listing. This error
	will have no effect on the resulting application. The actual code sample under
	"If Len(strName) <> Then" is correct.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK 0-7356-0772-9 MARTIN XCHNG
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
