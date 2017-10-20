---
layout: page
title: "Q195006: XADM: Resource Failure Error with More Than 800 MB of RAM"
permalink: /kb/195/Q195006/
---

## Q195006: XADM: Resource Failure Error with More Than 800 MB of RAM

{% raw %}

	Article: Q195006
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a very active Exchange Server computer with more than 800 megabytes (MB) of
	RAM, Exchange Server may start logging the following error message:
	
	  Event ID: 1160
	  Source: MSExchangeIS
	  Type: Error
	  Description: Database resource failure error Out of memory occurred in
	  function "JTAB_BASE::EcCreateIndex" while accessing the database.
	
	NOTE: The items enclosed in double quotes above may differ from case to case.
	
	CAUSE
	=====
	
	Exchange Server is attempting to allocate more virtual memory than is available
	within the process.
	
	The Microsoft Windows NT virtual memory address space is 4 gigabytes (GB) in size
	for each process. This implies that no matter how much physical memory is
	installed, a single process has access to only 4 GB of address space. In
	addition, Windows NT divides virtual memory into that which is used by the
	kernel, and that which is accessible to user-mode (for the application). In
	standard Windows NT Server 4.0, a user-mode application (like Store.exe) has
	access to 2 GB of virtual memory, and the kernel uses the other 2 GB. In Windows
	NT 4.0 Enterprise Edition, a user-mode application has access to 3 GB of virtual
	memory, and the kernel gets 1 GB.
	
	All memory allocations for a process come out of the 2 or 3 GB available in the
	address space. The address space is not empty when a process loads, many
	elements take up space in it immediately. The code itself is loaded into virtual
	memory (Store.exe and all the DLLs); a system heap is allocated from this
	virtual memory; for every thread created, a 1 MB virtual memory allocation
	(typically) is created for the thread stack, and so on.
	
	The net result is that for an individual process, the process will not be able to
	allocate a full 2 or 3 GB of virtual memory because some of it is in use.
	
	The Exchange Server 5.5 Performance Wizard (Perfwiz) makes calculations about how
	much virtual memory will be used by using the amount of physical RAM as an
	indicator. When 2 GB of RAM is physically installed, Perfwiz will assume that it
	can allocate up to 2 GB of virtual memory for a process. This amount of virtual
	memory may not be free in a process's address space, so attempting to allocate
	this much virtual memory may fail.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Administrator Program
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Perfwiz.exe | 5.5.2527.0 | 
	+--------------------------+
	
	After you add the updated Perfwiz.exe file to the Exchange Server computer, you
	need to rerun the Performance Optimizer to readjust your memory settings for the
	information store to resolve the 1160 errors.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	Additional query words: performance optimizer
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
