---
layout: page
title: "Q97500: Printing Problems Can be Caused by Timeout, Spooler"
permalink: kb/097/Q97500/
---

## Q97500: Printing Problems Can be Caused by Timeout, Spooler

	Article: Q97500
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Sometimes print problems arise if a large file is printing when a small job is
	sent to the spooler. The large job's FormFeeds can become fouled, or the second
	job can print in the middle of the large one. These problems can be caused by
	incorrect spooler file versions or locations, or by CHARTIME timeout (which you
	can fix by adjusting the CHARTIME setting in the [networks] section of
	LANMAN.INI). Both conditions are described below.
	
	MORE INFORMATION
	================
	
	Spooler Files
	-------------
	
	Make sure you do not have multiple copies of the spooler files on the hard drive,
	and that you have the directory containing the correct version of those files in
	your LIBPATH.
	
	For LAN Manager 2.1, you should be using:
	
	  C:\OS2\DLL\PMSPL.DLL    8-17-92
	  C:\OS2\DLL\PMSPOOL.DLL  8-17-92
	  C:\OS2\PMSPOOL.EXE      8-17-92
	
	CHARTIME Timeout
	----------------
	
	By default, the redirector closes a print job after CHARTIME (default 0.25
	seconds in LAN Manager 2.0 and 2.1, 3 seconds in 2.2) logs its preset limit of
	idle time. If the application printing the large job has a lull in its data
	stream longer than this limit, the redirector sends END_OF_JOB to the server,
	and the server prints the data that has already arrived as if it were a complete
	print job. If a small job has arrived and is waiting in the queue, it is printed
	next. When the application printing the large job resumes its data stream, the
	remainder of its job is treated as another print job.
	
	To fix this problem, increase the CHARTIME parameter so that it doesn't timeout
	so quickly. Try 5 seconds. CHARTIME is located in the [networks] section of
	LANMAN.INI.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
