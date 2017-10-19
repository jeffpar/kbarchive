---
layout: page
title: "Q94014: WSS: Internal Error at File XLRDR.C with Proofreader"
permalink: /kb/094/Q94014/
---

## Q94014: WSS: Internal Error at File XLRDR.C with Proofreader

	Article: Q94014
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Microsoft Excel and Windows Sound System Proofreader, the following
	error message may appear:
	
	  Internal error at file XLRDR.C, line 1360
	
	WORKAROUND
	==========
	
	To work around this problem in Excel 4.0, choose Workspace from the Options menu
	in Excel and clear the Ignore Remote Requests check box.
	
	To work around this problem in Excel 5.0:
	
	1. From the Excel Tools menu choose Options.
	
	2. Choose the General tab.
	
	3. Clear the Ignore other applications check box.
	
	MORE INFORMATION
	================
	
	This error message is caused by choosing Workspace from the Options menu in
	Excel and selecting the Ignore Remote Requests check box as follows.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Microsoft Excel, choose Workspace from the Options menu.
	
	2. Select the Ignore Remote Requests check box.
	
	3. Load a remote spreadsheet from a file server. For example
	
	     c:\excel\excel.exe x:\amortize.xls
	
	  where x is the drive letter of the file server.
	
	When you start Excel, the error message appears and the spreadsheet loads, but
	the Sound System Proofreader fails.
	
	Additional query words: 1.00 err msg 4.00 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
