---
layout: page
title: "Q267270: Convlog Stops Processing Log Files"
permalink: kb/267/Q267270/
---

## Q267270: Convlog Stops Processing Log Files

	Article: Q267270
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Convlog utility stops processing a log file when it reaches an incorrectly
	formatted line. The next lines are not processed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version        Size     File name     Platform
	  -------------------------------------------------------------
	  07/05/2000  09:31p  5.0.2195.2098  67,856   Convlog.exe   i386
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0.
	This problem was first corrected in Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	This fix adds the -c switch so that you can continue processing a file even if
	Convlog reaches an incorrectly formatted line.
	
	Example:
	
	  convlog  -ii in000203.log
	
	  Opening file in000203.log for processing
	          Writing file .\in000203.log.ncsa.
	  Line #37 not in MS Internet Standard format.
	  in000203.log completed, 37 lines processed.
	  36 Web lines written
	
	  Totals:
	  =======
	  Total Lines Processed:          37
	  Total Web Lines Written:        36
	
	  convlog  -c -ii in000203.log
	
	  Opening file in000203.log for processing
	          Writing file .\in000203.log.ncsa.
	  Line #37 not in MS Internet Standard format.
	  in000203.log completed, 51 lines processed.
	  50 Web lines written
	
	  Totals:
	  =======
	  Total Lines Processed:          51
	  Total Web Lines Written:        50
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
