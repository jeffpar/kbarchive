---
layout: page
title: "Q234578: Windows NT 4.0 Backported Kernel With Dynamic Pool Tag Table"
permalink: kb/234/Q234578/
---

## Q234578: Windows NT 4.0 Backported Kernel With Dynamic Pool Tag Table

	Article: Q234578
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	SYMPTOMS
	========
	
	Pool tracking utilities (for example, Poolmon.exe, the !poolused kernel
	extension, or the Poolperf.dll extensible Perfmon counter) incorrectly indicate
	that large (greater than 4 KB) allocations are tracked as BIG tag allocations.
	
	CAUSE
	=====
	
	This problem occurs because for Windows NT 4.0 and earlier, the pool tag table
	for large allocations is fixed at 2,048 entries. When this table is filled, any
	subsequent large allocation is charged against the BIG tag. Hence, the
	allocation information is lost after 2,048 large allocations and all subsequent
	large allocations after that are associated with the BIG pool tag.
	
	RESOLUTION
	==========
	
	To resolve this problem, the Windows NT 2000 kernel was improved so as to have a
	dynamic table length for large allocations and, hence, no longer uses the BIG
	tag.
	
	These changes were not incorporated into the Windows NT 4.0 kernel - but a
	Windows NT 4.0 kernel that has the dynamic large allocation pool tag table has
	been built for test purposes only. The test kernel is accompanied by a new
	kernel debugger extension and a new Poolmon.exe utlility.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
