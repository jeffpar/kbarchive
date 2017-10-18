---
layout: page
title: "Q143185: Internet Information Server Performance Monitor Counters"
permalink: kb/143/Q143185/
---

## Q143185: Internet Information Server Performance Monitor Counters

	Article: Q143185
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the FTP Server from the Internet Information Server, four new
	objects are added to the existing list of objects in Windows NT Performance
	Monitor. This article describes an object called Internet Information Server
	which contains 10 counters.
	
	Performance Monitor is a graphical tool for measuring the performance of your own
	computer or other computers on a network. On each computer, you can view the
	behavior of objects such as processors, memory, cache, threads, and processes.
	Each of these objects has an associated set of counters that provide information
	on such things as device usage, queue lengths, and delays, as well as
	information used for throughput and internal congestion measurements. It
	provides charting, alerting, and reporting capabilities that reflect current
	activity along with ongoing logging. You can also open log files at a later time
	for browsing and charting as if they were reflecting current activity.
	
	MORE INFORMATION
	================
	
	The definitions of the counters under the Performance Monitor object Internet
	Information Server are given below:
	
	Cache Flushes
	-------------
	
	Cache Flushes is the number of times a portion of the memory cache has been
	expired due to file or directory changes in an Internet Information Services
	directory tree.
	
	Cache Hits
	----------
	
	Cache Hits is the total number of times a file open, directory listing, or
	service specific objects request is found in the cache.
	
	Cache Hits %
	------------
	
	Cache Hits % is the ratio of cache hits to all cache requests.
	
	Cache Misses
	------------
	
	Cache Misses is the total number of times a file open, directory listing or
	service specific objects request was not found in the cache.
	
	Cache Size
	----------
	
	Cache Size is the configured maximum size of the shared HTTP, FTP, and Gopher
	memory cache.
	
	Cache Used
	----------
	
	Cache Used is the total number of bytes currently containing cached data in the
	shared memory cache. This includes directory listings, file handle tracking and
	service specific objects.
	
	Cached File Handles
	-------------------
	
	Cached File Handles is the number of open file handles cached by all of the
	Internet Information Services.
	
	Current Async I/O Requests
	--------------------------
	
	Current Async I/O Requests is the number of current async I/O requests blocked by
	bandwidth throttler.
	
	Directory Listings
	------------------
	
	Directory Listings is the number of cached directory listings cached by all of
	the Internet Information Services.
	
	Measured Async I/O Bandwidth Usage
	----------------------------------
	
	Measured Bandwidth of Async I/O is the number of measured bandwidth of async I/O
	averaged over a minute.
	
	Objects
	-------
	
	Objects is the number of cached objects cached by all of the Internet Information
	Services. The objects include file handle tracking objects, directory listing
	objects and service specific objects.
	
	Total Allowed Async I/O Requests
	--------------------------------
	
	Total Allowed Async I/O Requests is the number of Total Async I/O Requests
	allowed by Bandwidth Throttler.
	
	Total Blocked Async I/O Requests
	--------------------------------
	
	Total Blocked Async I/O Requests is the number of total async I/O requests
	blocked by Bandwidth Throttler.
	
	Total Rejected  Async I/O Requests
	----------------------------------
	
	Total Rejected Async I/O Requests is the number of total async I/O requests
	rejected by Bandwidth Throttler.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
