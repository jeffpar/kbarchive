---
layout: page
title: "Q266269: XFOR Error Message: Lsdxa.exe Has Generated Errors..."
permalink: kb/266/Q266269/
---

## Q266269: XFOR Error Message: Lsdxa.exe Has Generated Errors...

	Article: Q266269
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a full reload from Lotus Notes to Exchange Server 5.5, you may
	receive the following error message:
	
	  Lsdxa.exe has generated errors and will be closed by Windows.
	  You will need to restart the program
	  An error log is being created.
	  OK
	
	In addition, the following events are reported in the browser log:
	
	  2000/06/20 15:06:07-
	  LME-NOTES-DXA(006d) 1 00511:Error {Invalid configuration}: The application
	  failed while processing.
	  >> stdmain(893)
	
	  2000/06/20 15:06:07-
	  LME-NOTES-DXA(006d) 3 00505:LME-NOTES-DXA is ending, last return code was
	  {Invalid configuration}
	  >> stdmain(958)
	
	Even though these error occur, the Lsdxa.exe tool continues to run.
	
	CAUSE
	=====
	
	This issue can occur if there are more than 30 entries in the Amap.tbl file that
	is located in the Exchsrvr\Connect\Exchconn\Dxamex folder.
	
	WORKAROUND
	==========
	
	To work around this issue, verify that there are less than 30 entries in the
	Amap.tbl file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
