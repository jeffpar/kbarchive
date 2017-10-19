---
layout: page
title: "Q279236: Windows 2000 Performance Tuning Technical Reference Comments and"
permalink: /kb/279/Q279236/
---

## Q279236: Windows 2000 Performance Tuning Technical Reference Comments and

	Article: Q279236
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Performance Tuning Technical Reference ISBN 0-7356-0633-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Windows 2000 Performance Tuning
	Technical Reference, ISBN 0-7356-0633-1.
	
	The following topics are covered:
	
	- Page 55: Incorrect Explanations For Figure 3-4
	
	MORE INFORMATION
	================
	
	Page 55: Incorrect Explanations For Figure 3-4
	----------------------------------------------
	
	On page 55, the last paragraph contains incorrect explanations for Figure 3-4.
	
	Change:
	"There are actually three parts to each specific instance entry in Figure 3-4.
	The first part is always the process name, cidaemon in this case. The second
	part is the number of the thread for that process. As you can see, cidaemon has
	at least three threads running (0, 1, and 2). The number following the pound
	sign (#) is the number of the processor. This is a dual processor machine. If
	you don' see a processor number, the instance refers to the first processor in
	the machine. In other words, there's an instance for each thread and for each
	processor that the thread can run on."
	
	To:
	"There are actually three parts to each specific instance entry in Figure 3-4.
	The first part is always the instance name, cidaemon in this case. The second
	part is the object instance for that thread. As you can see, cidaemon has at
	least three threads running (0, 1, and 2). The number following the pound sign
	(#) is the instance index. The instance index allows you to track child
	instances. The operating system configures System Monitor properties to display
	duplicate instances by default. Instance index 0 is hidden; numbering of
	additional instances starts with 1."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBook WIN2000 Mueller Chaudhry
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
