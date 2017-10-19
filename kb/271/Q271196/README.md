---
layout: page
title: "Q271196: IIS Log File Entries Have the Incorrect Date and Time Stamp"
permalink: /kb/271/Q271196/
---

## Q271196: IIS Log File Entries Have the Incorrect Date and Time Stamp

	Article: Q271196
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The date and time stamp on entries in the IIS log files are incorrect by several
	hours.
	
	CAUSE
	=====
	
	The selected log file format is the W3C Extended Log File Format. The extended
	log file format is defined in the W3C Working Draft WD- logfile-960323
	specification by Phillip M. Hallam-Baker and Brian Behlendorf. This document
	defines the Date and Time files to always be in GMT. This behavior is by design.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following resolutions:
	
	Resolution 1:
	
	Change the active logging format to the Microsoft IIS Log File Format. This
	format logs in the server's Local Time.
	
	Resolution 2:
	
	Use the Convlog.exe utility, which is located in the Winnt\System32 folder, to
	convert the log to the NCSA Log File Format and server's local time. At a
	command prompt, type the following:
	
	  convlog -ie LogFileName -t ncsa:+/-GMTOffset
	
	where LogFileName is the name of the file to convert and GMTOffset is the number
	of hours to correct.
	
	For example, to convert a file named "Logfile.log," and correct for Eastern
	Standard Time, you would use the following command:
	
	  convlog -ie Logfile.log -t ncsa:-0500
	
	You can find complete instructions on how to use the Convlog utility in the IIS
	online documentation.
	
	NOTE: This solution does not actually change the time stamps for the log entries.
	It enters the GMT offset into each entry, so that anyone reading through the log
	can see that the time stamp is not in local time.
	
	The following is an example of a log entry produced by this utility:
	
	  192.168.1.1 - - [30/Jun/2000:20:16:40 -0500] "GET /default.asp HTTP/1.0" 200
	  -
	
	MORE INFORMATION
	================
	
	For more information on the extended log file format, see the W3C Working Draft
	WD-logfile-960323 specification at the following URL:
	
	  http://www.w3.org/TR/WD-logfile (http://www.w3.org/TR/WD-logfile)
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q194699 Extended Log File Format Always in GMT
	
	  Q193612 Log Files Rolled Over According to GMT, Not Local Time Zone
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
