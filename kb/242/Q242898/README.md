---
layout: page
title: "Q242898: IIS Log File Naming Syntax"
permalink: /kb/242/Q242898/
---

## Q242898: IIS Log File Naming Syntax

	Article: Q242898
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Server (IIS) version 4.0 and Internet Information Services
	version 5.0 support the following three log file formats:
	
	- Microsoft IIS Log Format
	
	- National Center for Supercomputing Applications (NCSA) Common Log File Format
	
	- World Wide Web Consortium (W3C) Extended Log File Format
	
	This article describes the naming syntax used when Internet Information Services
	creates log files.
	
	MORE INFORMATION
	================
	
	The following tables list the log file intervals and file names for each
	available for each log file format using the following syntax:
	
	- nn = Sequential Digits
	
	- yy = Year
	
	- mm = Month
	
	- ww = Week
	
	- dd = Day
	
	- hh = Hour (24-hour format)
	
	Microsoft IIS Log Format:
	
	  
	  +---------------------------------+
	  | Log Interval | Filename Pattern | 
	  +---------------------------------+
	  | File Size    | inetsvnn.log     | 
	  +---------------------------------+
	  | Hourly       | inyymmddhh.log   | 
	  +---------------------------------+
	  | Daily        | inyymmdd.log     | 
	  +---------------------------------+
	  | Weekly       | inyymmww.log     | 
	  +---------------------------------+
	  | Monthly      | inyymm.log       | 
	  +---------------------------------+
	
	NCSA Common Log File Format:
	
	  
	  +----------------------------+
	  | File Size | ncsann.log     | 
	  +----------------------------+
	  | Hourly    | ncyymmddhh.log | 
	  +----------------------------+
	  | Daily     | ncyymmdd.log   | 
	  +----------------------------+
	  | Weekly    | ncyymmww.log   | 
	  +----------------------------+
	  | Monthly   | ncyymm.log     | 
	  +----------------------------+
	
	W3C Extended Log File Format:
	
	  
	  +----------------------------+
	  | File Size | extendnn.log   | 
	  +----------------------------+
	  | Hourly    | exyymmddhh.log | 
	  +----------------------------+
	  | Daily     | exyymmdd.log   | 
	  +----------------------------+
	  | Weekly    | exyymmww.log   | 
	  +----------------------------+
	  | Monthly   | exyymm.log     | 
	  +----------------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
