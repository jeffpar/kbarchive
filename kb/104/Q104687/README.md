---
layout: page
title: "Q104687: PC Adm: IMPORT: Error [12] Displays Wrong Line Number"
permalink: kb/104/Q104687/
---

## Q104687: PC Adm: IMPORT: Error [12] Displays Wrong Line Number

	Article: Q104687
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Import mail administration utility (IMPORT.EXE) included with versions 2.1,
	3.0, and 3.2 of Microsoft Mail for PC Networks reports the wrong line number
	when a transaction has an Invalid character in column 1.
	
	As a result, IMPORT generates the following expected error
	
	  xxxx IMPORT: Error [12] Invalid character in column 1
	
	where xxxx represents what Import assumes to be the actual line number of the
	invalid transaction.
	
	CAUSE
	=====
	
	According to the DIRSYNC.TXT file on Server Disk 1, the error syntax above means
	that the Import source file contains an invalid character. The transaction
	listed before the invalid transaction does not get processed and modifications
	to the postoffice address list do not take place even though that previous
	transaction is actually valid.
	
	
	Additional query words: 2.10 3.00 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
