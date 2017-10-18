---
layout: page
title: "Q188352: ASP Caching May Cause &quot;Server Too Busy&quot; Errors and Blank Pages"
permalink: kb/188/Q188352/
---

## Q188352: ASP Caching May Cause &quot;Server Too Busy&quot; Errors and Blank Pages

	Article: Q188352
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ASP caching in low memory situations may cause "Server Too Busy" errors and/or
	blank pages returned to client browsers. Memory usage by the Inetinfo process
	will be very high.
	
	CAUSE
	=====
	
	This problem occurs because too much data is being cached and the default number
	of ASP files to cache is set to unlimited in Internet Information Server (IIS)
	4.0. ASP attempts to cache ASP files until the process runs out of virtual
	memory. The IIS computer stops processing pages and returns the "Server Too
	Busy" error or blank pages to client browsers.
	
	Note that there are other causes of the "Server Too Busy" errors.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	ASP has been modified to flush the cache when it receives an "Out of Memory"
	error. This enables it to recover gracefully. Please see the following
	paragraphs for information on how to do additional tuning of the ASP cache, so
	that it does not flush the ASP cache frequently, thus nullifying the benefits of
	caching.
	
	- Tune the AspScriptFileCacheSize (the number of ASP files to cache) settings
	  for IIS. This setting is documented in IIS Help. The settings depend on a
	  number of factors, including the amount of data in the server- side Include
	  files and the number of ASP files that are cached. It is reasonable to start
	  with a number like 250, and then monitor the ASP cache hit ratio using
	  Performance Monitor. If it is below 90 percent, then raise the number. If it
	  is above 90 percent, then any changes to the Web's pages can and will most
	  likely change the tuning parameters.
	
	- To change the ASP process options, do the following:
	
	  1. Open the IIS MMC.
	
	  2. Right-click on the computer name for the IIS computer.
	
	  3. Edit the master properties for the WWW Service.
	
	  4. Click the Home Directory tab.
	
	  5. Click the Configuration button.
	
	  6. Click the Process Options tab.
	
	  7. Modify the settings in the Script File Cache group.
	
	- NTDLL may not efficiently use the virtual address space, which causes the
	  processes to run out of memory sooner. Apply the fix listed in the following
	  article in the Microsoft Knowledge Base:
	
	  Q216383 Memory Allocations May Fail When There Are Large Free Blocks
	
	- Some improvement can be made by increasing the per-process address space from
	  2 GB to 3 GB. For additional information, please see the following article in
	  the Microsoft Knowledge Base:
	
	  Q171793 Information on Application Use of 4GT RAM Tuning
	
	  Note that more physical RAM may be required to reduce possible paging after
	  this change is made.
	
	- Redesign the Web application.
	
	- Disable ASP caching.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
