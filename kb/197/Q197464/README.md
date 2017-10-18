---
layout: page
title: "Q197464: How to Detect the ::&#36;DATA Attack in IIS Log Files"
permalink: kb/197/Q197464/
---

## Q197464: How to Detect the ::&#36;DATA Attack in IIS Log Files

	Article: Q197464
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As a result of a problem with Internet Information Server (IIS) and NTFS
	Alternate Data Streams, administrators may want to determine if their server was
	"attacked" by Internet users attempting to gain access to source text.
	
	MORE INFORMATION
	================
	
	IIS is configured by default to log access to the server. When logging is
	enabled and a request is made from a browser to IIS using Alternate Data Streams
	(for example http://myserver/file.asp::$DATA), IIS writes this information to
	the log file. By analyzing the log files kept by the server, any attempted
	access to source code can be determined.
	
	The following examples show what a request to the "/default.asp" page of a server
	would look like if an attempt was made to view the file's source code:
	
	  W3C Extended Log File Format:
	
	     11:25:12 10.0.0.5 GET /default.asp::$DATA 200
	     11:26:07 10.0.0.5 GET /default.asp::$DATA 304
	     11:54:04 10.0.0.5 GET /default.asp::$DATA 200
	
	  NCSA Common Log File Format:
	
	     10.0.0.5 - - [02/Jul/1998:11:25:12 -0600] "GET /default.asp::$DATA
	     HTTP/1.1" 200 13388
	     10.0.0.5 - - [02/Jul/1998:11:26:07 -0600] "GET /default.asp::$DATA
	     HTTP/1.1" 304 123
	     10.0.0.5 - - [02/Jul/1998:11:54:04 -0600] "GET /default.asp::$DATA
	     HTTP/1.1" 200 12219
	
	  Microsoft IIS Log File Format:
	
	     10.0.0.5,-
	     ,02/Jul/1998,11:25:12,W3SVC,SERVER1,10.0.0.2,163,13388,200,0,GET,/de
	     fault.asp::$DATA
	     10.0.0.5,-
	     ,02/Jul/1998,11:26:07,W3SVC,SERVER1,10.0.0.2,163,123,304,0,GET,/defa
	     ult.asp::$DATA
	     10.0.0.5,-
	     ,02/Jul/1998,11:54:04,W3SVC,SERVER1,10.0.0.2,163,12219,200,0,GET,/de
	     fault.asp::$DATA
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
