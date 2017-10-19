---
layout: page
title: "Q161870: Maximum Files on SFM Volume Limited by Paged Pool Memory"
permalink: /kb/161/Q161870/
---

## Q161870: Maximum Files on SFM Volume Limited by Paged Pool Memory

	Article: Q161870
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Services for Macintosh (SFM) component of Windows NT has an upper limit to
	the number of files and directories that can be located on SFM volumes on a
	given Windows NT Server. This limit is determined by the amount of paged pool
	memory available to the Windows NT kernel.
	
	The information in this article is provided to assist in determining reasonable
	limits for the number of files to be housed on SFM servers.
	
	NOTE: The algorithm used by SFM to allocate memory was changed in a Post- SP3
	hotfix. This hotfix is included with Windows NT 4.0 Service Pack 4. The
	information in this article applies to all versions of SFM prior to Windows NT
	4.0 Service Pack 4. For more information on this change, please see the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q166571
	  TITLE : Creating an SFM Volume on Large Partition Causes a Stop 0x24
	
	MORE INFORMATION
	================
	
	Services for Macintosh uses a small amount of paged pool memory for each file
	and directory that resides on a SFM volume to cache information needed for
	efficient operation of the service. For small to medium sized volumes, this
	memory requirement is usually negligible. However, if the volume size is very
	large, or a large amount of paged pool memory is needed for other services,
	errors may be encountered when attempting to create new files on a SFM volume,
	or when performing other operations that require the use of paged pool memory.
	
	The number of bytes of paged pool memory SFM allocates to keep track of a file or
	directory depends on the length of the file's long file name (LFN). The length
	of the 8.3 file name (if any) is unimportant. The following table shows the
	number of bytes of paged pool memory needed by SFM as a function of the length
	of a file or directory's long file name.
	
	Length
	of LFN    File   Dir
	-------   ----   ---
	1 -  8    128   168
	9 - 12    136   176
	13 - 20    152   192
	21 - 32    176   216
	
	Therefore, a directory tree consisting of 200 subdirectories and 10,000 files,
	all with names between 13 and 20 characters in length, would require (200 * 192)
	+ (10,000 * 152), or 1,558,400 bytes (1.48 MB) of paged pool memory.
	
	"Paged pool memory" refers to a specific region of the Windows NT virtual memory
	map accessible to kernel mode operating system components.
	
	The maximum amount of paged pool memory available to Windows NT is determined at
	system boot time and, by default, depends on the amount of physical RAM
	installed on the system. The maximum amount of paged pool memory that can be
	allocated, even with unlimited physical RAM, is 192 MB.
	
	The default paged pool size can be overridden by means of a change to the Windows
	NT registry. However, extreme caution should be used when altering the default
	settings for kernel memory allocation. If an appropriate balance of paged pool,
	nonpaged pool, and other memory resources is not maintained, Windows NT may
	become unstable because of a shortage of resources, even when there is plenty of
	available physical RAM.
	
	Other system components besides SFM also use paged pool memory. Therefore, the
	actual number of files SFM will be able to handle on a given system will depend
	on that system's overall configuration. To see how much paged pool memory is in
	use at a given time, examine the Pool Paged Bytes counter of the Memory object
	within the Windows NT Performance Monitor.
	
	If you use all the available paged pool memory on your system, you may see some
	of the following symptoms. Other symptoms may also be present, and you may not
	encounter all of the following:
	
	- Windows NT clients may receive the message, "Cannot complete your request,
	  not enough paged pool resources available" while trying to access files on
	  the server.
	
	- Windows 95 clients may receive the message: "Not enough system resources to
	  process your request."
	
	- Macintosh clients may lose their connections to the server, even if they do
	  not receive explicit error messages.
	
	- The event log on the server may show instances of Event ID 2020: "The server
	  was unable to allocate from the system paged pool because the pool was
	  empty." or Event ID 12046: "Unable to allocate paged memory resource."
	
	- You may see the following application pop-up window: "System Process - Lost
	  Delayed-Write Data: The system was attempting to transfer file data from
	  buffers to Device\HarddiskN\PartitionN\path\to\file. The write operation
	  failed, and only some of the data may have been written to the file."
	
	For more information about virtual memory, including paged pool memory and the
	registry parameters that are available to modify default memory allocation,
	query on "pagedpoolsize" in the Microsoft Knowledge Base.
	
	Additional background information about virtual memory is available in "Inside
	Windows NT" by Helen Custer, and from other sources, including the Microsoft
	Knowledge Base.
	
	Additional query words: 3.10 prodnt insufficient tune file system Mac
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
