---
layout: page
title: "Q160225: FP97: Memory Leak in FP Extensions on MS Personal Web Server"
permalink: /kb/160/Q160225/
---

## Q160225: FP97: Memory Leak in FP Extensions on MS Personal Web Server

{% raw %}

	Article: Q160225
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FrontPage 97 and the Microsoft Personal Web Server may cause memory to become
	fragmented when you do the actions listed in the following table.
	
	+-----------------------------------------------------------------------------------------------------------------------------------------------------------+
	| When you do this                                                                                                    | This Amount of Memory Is Fragmented | 
	+-----------------------------------------------------------------------------------------------------------------------------------------------------------+
	| In FrontPage Explorer click Refresh on the View menu                                                                | 30K per transaction                 | 
	+-----------------------------------------------------------------------------------------------------------------------------------------------------------+
	| In FrontPage Editor click Save on the File menu (and you then save
	the file to a Microsoft Personal Web Server Web) | 5K-8K per transaction               | 
	+-----------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	NOTE: The information in this table was gathered from tests that used repetitive
	operations with identical data. Actual usage will probably cause less memory
	leakage, because the changing data will rescue some of the stranded data from
	the fragmented memory heap. Note also that these operations do not fragment
	memory in Windows NT, nor do they fragment memory with the FrontPage Personal
	Web Server or O'Reilly & Associate's WebSite, or Netscape Corporation's
	FastTrack 2.0 on Windows 95.
	
	RESOLUTION
	==========
	
	To avoid performance degradation with the FrontPage Server Extensions on the
	Microsoft Personal Web Server, restart it occasionally whenever your system
	seems to be slow or low on memory.
	
	The Microsoft Personal Web Server is designed as a Personal Web Server only, and
	is not intended for high traffic Web sites. If you have a high traffic Web site,
	you should upgrade to Windows NT Server and the Microsoft Internet Information
	Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	A heavily used Microsoft Personal Web Server on Windows 95 may eventually
	develop performance problems. A computer with limited hard disk drive space will
	be more susceptible to these problems, because it will run out of swap space
	sooner. If you are using disk-based Webs and your system becomes slow or memory
	becomes low, restart FrontPage Explorer (FrontPage Explorer using a disk-based
	Web is subject to the same fragmentation as the Microsoft Personal Web Server).
	
	NOTE: When the memory heap gets highly fragmented, the server process tends to
	slow down (due to increased paging activity, and heap operations take longer
	because the heap data structures are larger).
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 97 mspws
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
