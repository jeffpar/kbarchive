---
layout: page
title: "Q134776: QAPlus for Windows Does Not Detect Network Properly"
permalink: /kb/134/Q134776/
---

## Q134776: QAPlus for Windows Does Not Detect Network Properly

	Article: Q134776
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Diagsoft's QAPlus for Windows, a diagnostic program, reports that the NETX shell
	is not detected when it performs a network test on a computer running the
	Microsoft Client for NetWare Networks. The follow message is displayed:
	
	  No network shell found (NETx)
	
	CAUSE
	=====
	
	QAPlus for Windows checks for the presence of Novell's NETX shell. It is not
	able to detect the Microsoft Client for NetWare Networks and displays the error
	message stated above.
	
	RESOLUTION
	==========
	
	QAPlus can detect only real-mode NetWare components in Windows 95. For
	additional information, please contact Diagsoft Technical Support.
	
	STATUS
	======
	
	This situation is caused by design changes in Windows 95. Microsoft has
	confirmed that it is not caused by a problem in Windows 95.
	
	
	Additional query words: qaplusw.exe lan button
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
