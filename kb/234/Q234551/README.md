---
layout: page
title: "Q234551: WWW and FTP Services Stop Intermittently and/or Inetinfo Stops"
permalink: /kb/234/Q234551/
---

## Q234551: WWW and FTP Services Stop Intermittently and/or Inetinfo Stops

{% raw %}

	Article: Q234551
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Internet Information Server (IIS) 4.0, some or all of the following
	symptoms may occur:
	
	- The WWW or FTP service stops intermittently.
	
	- Inetinfo.exe stops, which generates a Dr. Watson error similar to the
	  following (the instruction and memory location listed may vary):
	
	  "The instruction at 0x77f7D514 referenced memory at 0x34323835". The memory
	  could not be "written".
	  Click OK to terminate application.
	
	  A Dr. Watson log similar to the following may be generated:
	
	  Application exception occurred:
	  App: (pid=123)
	  When: 6/29/1998 @ 12:19:7.234
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	A DLL (typically an ISAPI DLL) that works with Inetinfo.exe has caused heap
	corruption.
	
	NOTE: This issue may be caused by third-party DLLs. If you are using a
	third-party product that works with Inetinfo.exe, please check with that
	product's manufacturer to see if there are known problems and resolutions for
	that product.
	
	RESOLUTION
	==========
	
	Remove or update the DLL that is causing the heap corruption. To determine which
	DLL is causing the problem, use the IIS Exception Monitor. For additional
	information, please see the following article(s) in the Microsoft Knowledge
	Base:
	
	  Q160360 INFO: Troubleshooting Exceptions in Internet Server Products
	
	Note: When you use the Log File Analyzer, which comes with the IIS Exception
	Monitor, it is easier to view third-party DLLs if you select the Hide Microsoft
	Files check box.
	
	
	WORKAROUND
	==========
	
	Third-party applications may be implemented as ISAPI filters. In those cases,
	you can perform the following steps to determine if they are the cause of the
	heap corruption, and isolate them so they do not stop the Inetinfo process.
	
	1. In the Internet Service Manager (ISM) or MMC, view the ISAPI Filters tab for
	  the Web site to determine which files are associated with the third-party
	  application.
	
	2. Go to the appropriate Web site (or virtual directory) for those files.
	
	3. On the Home (or Virtual Directory) tab, under the Application Settings
	  section, create an application, and select the "Run in separate memory space
	  (isolated process)" check box.
	
	MORE INFORMATION
	================
	
	Heap Corruption
	---------------
	
	Heap corruption occurs when DLL "A" allocates an amount of memory for its use,
	but then writes more memory than was allocated, thus overwriting some memory
	actually allocated to DLL "B." Then, when DLL "B" attempts to use the memory
	that DLL "A" overwrote (and corrupted for DLL "B"), DLL "B" fails.
	
	Because the error is reported in DLL "B," rather than DLL "A," which caused the
	problem, the problem is difficult to pinpoint.
	
	Additional query words: Webtrends Crystal Reports Web Trends ColdFusion Cold Fusion revdns.dll access violation isapi extension c0000005 rtl destroy heap allocation failure RtlAllocateHeap 3rd-party iis akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
