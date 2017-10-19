---
layout: page
title: "Q148645: XADM: Err Msg: Operation Terminated with Error -1032"
permalink: /kb/148/Q148645/
---

## Q148645: XADM: Err Msg: Operation Terminated with Error -1032

	Article: Q148645
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtool exc4 exc5 exc55
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Eseutil.exe (Exchange Server 5.0 and 5.5) or the Edbutil.exe
	(Exchange Server 4.0) utility that ships with Microsoft Exchange Server to
	compact the database or to make storage contiguous, the following error may
	appear:
	
	  Operation terminated with error -1032
	
	CAUSE
	=====
	
	The appropriate Windows NT service must be stopped before Eseutil/Edbutil is
	run.
	
	RESOLUTION
	==========
	
	Which service needs to be stopped depends on whether you are running Eseutil/
	Edbutil against the directory or the information store. For the directory, stop
	the Microsoft Exchange Directory service. For the information stores, stop the
	Microsoft Exchange Information Store service.
	
	If the services appear to be stopped, but error -1032 still occurs, change all
	affected services to manual and restart the computer. This will ensure the
	service is stopped. However, after Eseutil.exe/Edbutil.exe runs, you must change
	the services back to automatic.
	
	The following error message may also indicate a file permission or attribute
	problem:
	
	  Running error.exe -1032
	  Error -1032 (0xfffffbf8) = JET_errFileAccessDenied
	
	Stated: Permission issues can also cause this error message:
	
	  Error -1032 (0xfffffbf8) = JET_errFileAccessDenied
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
