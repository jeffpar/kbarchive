---
layout: page
title: "Q66047: How to Remove QBasic and EDIT from MS-DOS 5.0 and Later"
permalink: /kb/066/Q66047/
---

## Q66047: How to Remove QBasic and EDIT from MS-DOS 5.0 and Later

	Article: Q66047
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you do not plan to use either QBasic or EDIT, which are provided with MS-DOS
	versions 5.0 and later, you can delete the following files:
	
	  QBASIC.EXE
	  QBASIC.HLP
	  EDIT.COM
	  EDIT.HLP
	  All files with a .BAS extension
	
	If you plan to use EDIT but not QBasic, delete all the files with a .BAS
	extension and QBASIC.HLP. Do not delete QBASIC.EXE; EDIT.COM actually invokes
	QBASIC.EXE and cannot run without it.
	
	For more information on this subject, query on the following words:
	
	  "qbasic" (without the quotation marks) and "edit.com" (without the quotation
	  marks)
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
