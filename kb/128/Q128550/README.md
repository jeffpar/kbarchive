---
layout: page
title: "Q128550: Memory Leak: MS-DOS-Based Apps Starting Non-MS-DOS-Based Apps"
permalink: /kb/128/Q128550/
---

## Q128550: Memory Leak: MS-DOS-Based Apps Starting Non-MS-DOS-Based Apps

{% raw %}

	Article: Q128550
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-FEB-2002
	
	WINDOWS
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS-based applications that start Windows-based, POSIX, or OS/2-based
	applications under Windows NT may experience memory leaks.
	
	CAUSE
	=====
	
	Two different memory leaks can occur. One memory leak occurs when the MS-
	DOS-based application does not close a Process Object handle properly.
	
	To observe the memory leak:
	
	1. Run Performance Monitor.
	
	2. From the Edit menu, choose Add to Chart.
	
	3. From the Object list box, select Objects.
	
	4. From the Counter list box, select Processes.
	
	5. Choose Add and then choose Done.
	
	A leakage of this resource will result in the gradual depletion of non- paged
	pool (a vital Windows NT resource).
	
	
	The other memory leak occurs when an MS-DOS-based application continuously starts
	non-MS-DOS-based applications, creating a looping situation. This results in the
	loss of Private Bytes associated with NTVDM.EXE running the MS-DOS-based
	application.
	
	To observe the memory leak:
	
	1. Run Performance Monitor.
	
	2. From the Edit menu, choose Add to Chart.
	
	3. From the Object list box, select Process.
	
	4. From the Instances list box, select NTVDM.
	
	5. From the Counter list box, select Private Bytes.
	
	6. Choose Add and then choose Done.
	
	It may be difficult to log if there are multiple instances of NTVDM running, as
	Performance Monitor will not let you distinguish between these instances if they
	share the same executable name. (The Windows NT Resource Kit describes methods
	to overcome this situation.) A leakage of this resource results in the gradual
	consumption of Private Bytes for the NTVDM.EXE process. Private bytes
	consumption is general backed by paging file so a leak of Private Bytes will
	slowly consume the pagefile (a vital Windows NT resource).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.50 handles batchfile page file
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
