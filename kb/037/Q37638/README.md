---
layout: page
title: "Q37638: Unassigning Assigned Disk Drives in MS-DOS"
permalink: kb/037/Q37638/
---

## Q37638: Unassigning Assigned Disk Drives in MS-DOS

	Article: Q37638
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ASSIGN command in MS-DOS is similar to the SET command. You can think of the
	ASSIGN command as actually being SET ASSIGN=, except the ASSIGN parameters are
	not stored in the environment. Whenever the ASSIGN command is issued, the
	parameters given as arguments define the state of the system. For example, the
	statement "ASSIGN a=d b=d" tells MS-DOS that whenever a reference is made to
	Drive A or Drive B, Drive D is to be used. If a subsequent "ASSIGN a=c" is
	issued, any reference to Drive A will be changed to Drive C by MS-DOS. However,
	a reference to Drive B will NOT be changed to Drive D. The second ASSIGN
	statement redefines the entire system, not just Drive A.
	
	One consequence of this is that the current drive ASSIGNments cannot be obtained
	from the system by typing "ASSIGN" (without the quotation marks). A command of
	"ASSIGN" results in the restoration of all original drive assignments.
	
	MS-DOS version 5.0 will display a list of the current assignments, by using the
	following syntax:
	
	  assign /status
	
	NOTE: MS-DOS 6.0 does not have an ASSIGN command.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x
	
	=============================================================================
	
