---
layout: page
title: "Q112263: PC Gen: Slow Performance with Version 3.22 of Novell NETX"
permalink: /kb/112/Q112263/
---

## Q112263: PC Gen: Slow Performance with Version 3.22 of Novell NETX

{% raw %}

	Article: Q112263
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.22 of Novell NETX handles MS-DOS file commit application programming
	interface (API) calls differently than previous versions of NETX. Previous
	versions ignored the MS-DOS API interrupt 21h, function 68h call to flush disk
	buffers from RAM to disk. NETX treated the call as if it were already performed.
	Version 3.22 of NETX tells the workstation to stop processing until an
	acknowledgment of the cache flush is received. This delay can affect the
	performance of workstations.
	
	To have NetWare ignore this API call, use the NetWare file server command, SET
	NCP FILE COMMIT = OFF. This command controls the behavior of file commit
	requests by a workstation. If the value is ON, a file commit request causes all
	pending writes to be written immediately. Setting the value to OFF causes the
	cache manager to flush pending writes to the disk later. (The default value for
	NetWare servers is ON.) Changing the parameter to OFF should show performance
	similar to previous versions of NETX. However, there is a slight risk of data
	corruption if the server fails before the disk writes are completed.
	
	NETX is manufactured by Novell, Inc., a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
