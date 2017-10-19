---
layout: page
title: "Q187696: Changes to Calculator in Service Pack 4"
permalink: /kb/187/Q187696/
---

## Q187696: Changes to Calculator in Service Pack 4

	Article: Q187696
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fix kbWinNT400sp4fea
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	- Microsoft BackOffice Server 4.0 SP4 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes changes made to the Calculator application in Windows NT
	4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Switching Between Standard and Scientific
	-----------------------------------------
	
	In Service Pack 4 and later, Calculator now clears the display when switching
	between the Standard and Scientific views. To transfer numbers between Standard
	and Scientific view, follow these steps:
	
	1. Click MS to store the displayed number.
	
	2. On the View menu, click the desired view.
	
	3. Click MR to recall the stored number.
	
	NOTE: A number typed in hexadecimal, octal, or binary format will be converted to
	decimal format when transferring from Scientific to Standard view.
	
	Understanding Extended Precision
	--------------------------------
	
	Extended Precision, a new feature of Calculator, means that all operations are
	accurate to at least 32 digits. Calculator also stores rational numbers as
	fractions to retain accuracy. For example, 1/3 is stored as 1/3, rather than
	.333. However, errors accumulate during repeated operations on irrational
	numbers. For example, Calculator will truncate pi to 32 digits, so repeated
	operations on pi will lose accuracy as the number of operations increases.
	
	New Additional Information
	--------------------------
	
	The following applies to all versions of the Calculator even though it is not
	documented in Service Pack 3 and earlier.
	
	Performing Calculations with Large Numbers
	------------------------------------------
	
	In the hexadecimal, octal, and binary number systems, Calculator displays only
	the lower digits of an answer when the result has more digits than your display
	size allows. This behavior mimics the way calculations work in computers.
	
	DWORD results can contain up to eight digits; Word results can contain up to four
	digits; and Byte results can contain up to two digits.
	
	For example, using the hexadecimal number system displayed as Word, the largest
	result you can generate is FFFF (equal to 65535 in decimal). If you double that
	number (FFFFx2), the answer is 1FFFE. This contains five digits, so Calculator
	will display only the lower four digits of the answer: FFFE.
	
	Additional query words: calc.exe
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fix kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbBackOfficeSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
