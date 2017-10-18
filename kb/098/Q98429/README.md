---
layout: page
title: "Q98429: Logshow Reports &quot;Failed to Generate Interrupt&quot; Error"
permalink: kb/098/Q98429/
---

## Q98429: Logshow Reports &quot;Failed to Generate Interrupt&quot; Error

	Article: Q98429
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	A logshow report includes the error
	
	  DISK01 FFAA date time - Ctrl/drive failed to generate an interrupt
	
	CAUSE
	=====
	
	This represents an RCB timeout, indicating that the system sent an I/O to the
	card but received no interrupt notifying it that the I/O completed. Usually this
	error occurs if the disk does not respond to the adapter or the adapter
	encounters a firmware problem.
	
	RESOLUTION
	==========
	
	If the error does not occur frequently, it's nothing to be concerned about. If
	it does occur frequently, your system performance can be affected, in which case
	you may want to consider replacing the disk and controller.
	
	Additional query words: 2.10 2.1 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
