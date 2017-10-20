---
layout: page
title: "Q240739: IBM ServeRAID Cluster Solutions Causes Cluster Handle Leak"
permalink: /kb/240/Q240739/
---

## Q240739: IBM ServeRAID Cluster Solutions Causes Cluster Handle Leak

{% raw %}

	Article: Q240739
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Microsoft Cluster Server and IBM ServeRAID may stop
	responding (hang) every day or two.
	
	If you use Performace Monitor to track the handles of the Cluster Service
	(resrcmon), it displays a dramatic increase. Even if make no modifications to
	the servers, and no resources stop working, the handle count continues to
	increase.
	
	CAUSE
	=====
	
	The handle leak is caused by an old version of Ipsha.dll from IBM ServeRAID
	Cluster Solutions.
	
	RESOLUTION
	==========
	
	To resolve this problem, update the software and the firmware to the latest
	versions available from IBM.
	
	Below is a sample list of ServeRAID versions that do not cause this problem:
	
	- PC ServerRAID BIOS 3.50.12
	
	- PC ServerRAID Firmware 2.88.10
	
	- IBM ServeRAID Administration and Monitoring 3.50.17
	
	- IBM ServeRAID Device Driver 3.50
	
	- IBM ServeRAID DOS configuration 3.50
	
	- IBM ServeRAID Cluster Solutions for Windows NT 3.50
	
	STATUS
	======
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	If you use OH to get a list of the handles, it shows a lot of handles with no
	names, these are device handles.
	
	
	Additional query words: memory nonpaged pool leak
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
