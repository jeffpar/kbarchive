---
layout: page
title: "Q44608: UNLINK Does Not Work If the File Is Not Closed"
permalink: /kb/044/Q44608/
---

## Q44608: UNLINK Does Not Work If the File Is Not Closed

	Article: Q44608
	Product(s): See article
	Version(s): 4.00 5.00 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_QuickC | mspl13_c
	Last Modified: 1-JUN-1989
	
	Question:
	
	I am using the function UNLINK to delete a file. UNLINK seems to
	delete the file, but I do not get the disk space back. Why?
	
	Response:
	
	The C run-time function UNLINK does not work properly if the file you
	are trying to delete is not closed. If the file is not closed, the
	File Allocation Table is not be updated properly and CHKDSK reports
	lost clusters. These lost clusters are the unclosed files which tried
	to delete.
	
	You can recover the lost disk space by running CHKDSK /F. This
	information also applies to the C run-time function REMOVE.
