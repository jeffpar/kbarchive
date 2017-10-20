---
layout: page
title: "Q136598: PC Ext: Cannot Initiate Connection to External Asynchronous PO"
permalink: /kb/136/Q136598/
---

## Q136598: PC Ext: Cannot Initiate Connection to External Asynchronous PO

{% raw %}

	Article: Q136598
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0a,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0a, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure and run the EXTERNAL.EXE program to connect postoffices via
	asynchronous communication, the session can only successfully be initialized by
	either the sending or receiving end, not both.
	
	CAUSE
	=====
	
	The postoffice (PO) on the receiving end of the connection has a corrupt or zero
	(0) byte FLAG.GLB.
	
	FLAG.GLB is a static file that should be 2 bytes in size.
	
	RESOLUTION
	==========
	
	Copy the FLAG.GLB from a postoffice that is working. If another postoffice is
	not available, install a "dummy" postoffice to a local drive, and copy the file
	to the \MAILDATA\GLB directory on the problem postoffice.
	
	MORE INFORMATION
	================
	
	FLAG.GLB is used to lock other External Mail programs from connecting to the
	postoffice.
	
	This problem will also occur when you use version 3.2 of Microsoft Mail
	Multitasking MTA.
	
	Additional query words: 3.00a 3.20 3.20a Windows NT OS/2 mta
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300a
	Version           : WINDOWS:3.0a,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
