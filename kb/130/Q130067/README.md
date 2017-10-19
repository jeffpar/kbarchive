---
layout: page
title: "Q130067: PC Ext: Err Msg: Unable to Access :XTN&#92;xxxxxxxx.XTN..."
permalink: /kb/130/Q130067/
---

## Q130067: PC Ext: Err Msg: Unable to Access :XTN&#92;xxxxxxxx.XTN...

	Article: Q130067
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	EXTERNAL.EXE reports the following when it tries to deliver a mail message:
	
	  Unable to access <drive>:XTN\xxxxxxxx.XTN. Check the access rights.
	
	With the verbose (-v) parameter enabled, this line is added after the error:
	
	  Statistics update failed.
	
	in the SESSION.LOG and on the screen. However, Mail is still delivered to the
	destination postoffice.
	
	CAUSE
	=====
	
	This error can occur if the xxxxxxxx.XTN file has a read-only attribute
	assigned, or if the network does not allow write access. After delivering mail,
	External attempts to update the month-to-date (MTD) and year-to-date (YTD)
	totals in the .XTN file on the postoffice. If this fails due to network rights,
	the above errors occur.
	
	RESOLUTION
	==========
	
	Remove the read-only attribute and make it RW. If it is network related, give
	the xxxxxxxx.XTN file RW access.
	
	You may also get the error if this XTN file is locked open by another process. If
	the postoffice is on a Windows NT Server, in File Manager, select the .XTN file
	in question. Press ALT+ENTER, and select Open By and close the file. If the
	postoffice in on Novell NetWare, then use Monitor or Rconsole to release the
	lock.
	
	Additional query words: 3.2x MTA
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
