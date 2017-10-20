---
layout: page
title: "Q152081: Use of Raw Data Transfer Mode Influenced by Application"
permalink: /kb/152/Q152081/
---

## Q152081: Use of Raw Data Transfer Mode Influenced by Application

{% raw %}

	Article: Q152081
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several requirements that must be met for the Windows NT redirector to
	use raw data transfer mode, which is considered to be a more efficient data
	transfer mode than core mode. Applications can influence one or more of these
	requirements in such a way that it is not immediately apparent why data transfer
	is occurring in core mode and not raw mode.
	
	MORE INFORMATION
	================
	
	The Windows NT redirector has the following requirements for performing raw mode
	I/O, all of which must be satisfied for raw mode I/O to occur.
	
	- The Server Message Block (SMB) protocol negotiated between the client and
	  server must support raw mode.
	
	- The server must be configured to support raw mode.
	
	- The client redirector must be configured to allow raw mode.
	
	- No other SMB requests are pending on the same Virtual Circuit (VC).
	
	- The I/O is not on a blocking named pipe.
	
	- For a READ request: the requested data size is equal to or greater than 2
	  times the currently configured request buffer size, and the read offset is
	  not past the redirector's currently configured end-of-file.
	
	- For a WRITE request: the requested data size is equal to or greater than 1.5
	  times the currently configured request buffer size, and the write offset is
	  not more than approximately 1 MB past the current end-of-file.
	
	- The I/O is to take no longer than 5 seconds to complete.
	
	The above requirements are commonly satisfied, and it might be apparent that at a
	given time raw I/O should be the data transfer mode of choice for the Windows NT
	redirector. An application or process, however, might be causing the failure of
	one or more of these requirements (and hence causing the redirector to use core
	mode) in a subtle way that does not necessarily involve data passing on the VC.
	
	An example of this is an application (such as File Manager) that posts a change
	notification (for example, the FindFirstChangeNotification and
	WaitForSingleObject or WaitForMultipleObjects APIs) which causes a long- term
	pending SMB request(s) on the VC--even though no data is being actively passed
	on the VC--and, hence, the failure of the requirement listed fourth above.
	
	For more information on File Manager and change notification, please see the
	following article in the Microsoft Knowledge Base:
	
	Q123819File Manager I/O Optimizations Slow Other File Transfers
	
	An application or process can also influence the redirector to use core mode
	instead of raw mode by the size of its reads and writes (that is, reads smaller
	than 2 times the currently configured request buffer size, or writes smaller
	than 1.5 times the currently configured request buffer size) and the type of its
	I/O (for example, on a blocking named pipe).
	
	See your application vendor for more information if you suspect network
	throughput performance problems are the direct result of an application
	significantly influencing the data transfer mode as mentioned above.
	
	
	Additional query words: throughput performance
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51
	
	=============================================================================
	

{% endraw %}
