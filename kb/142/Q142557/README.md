---
layout: page
title: "Q142557: Internet Information Server Performance Logging to Disk vs. ODBC"
permalink: kb/142/Q142557/
---

## Q142557: Internet Information Server Performance Logging to Disk vs. ODBC

	Article: Q142557
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 06-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The impact of logging Internet Information Server (IIS) activity to disk is
	minimal compared to logging it to a SQL Server database. The performance impact
	of logging to SQL Server is greater and depends on the SQL Server implementation
	and the hardware you use. See your SQL Server documentation for more information
	on increasing performance.
	
	MORE INFORMATION
	================
	
	If disk logging is used, data is cached in 64K chunks. When the server has 64K
	of log data cached, it writes the data to disk.
	
	NOTE: Stopping the WWW, FTP, or Gopher service forces the cached data to be
	written to the log file. If SQL Server logging is used, the log is always up to
	date because SQL Server entries are written immediately.
	
	You may experience problems implementing live reports when using these files as
	the data source for two reasons:
	
	- The current log file is held open until it reaches the maximum size or time
	  interval specified in the Internet Server Manager. The log file closes when
	  the next log entry is written after midnight of the day the log file time
	  limit expires.
	
	- The log file is updated in 64K chunks. On servers that do not have a high
	  usage rate, the statistics will not be up-to-date because of the delayed
	  write.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0
	
	=============================================================================
	
