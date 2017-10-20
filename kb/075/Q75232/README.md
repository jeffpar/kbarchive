---
layout: page
title: "Q75232: Saving Files over the Network on Novell v2.15"
permalink: /kb/075/Q75232/
---

## Q75232: Saving Files over the Network on Novell v2.15

{% raw %}

	Article: Q75232
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If your application reports that there is not enough space on the network drive
	to save the files you are accessing via Novell NetWare, verify that there is
	enough space available on the network drive. If there is, try setting the
	following line in the SHELL.CFG file and restart the network:
	
	  CACHEBUFFERS=NO
	
	MORE INFORMATION
	================
	
	The SHELL.CFG file is a NetWare configuration file used to define configuration
	options for the NetWare shell components IPX, NET5, and Net BIOS. It should be
	located in the start-up directory of the network shell programs. Many network
	installations do not have a SHELL.CFG present as a default; in this case, you
	can create one using any nonformatting text editor.
	
	For information on cachebuffers option and other SHELL.CFG options, see the
	"NetWare Supervisor Reference Guide."
	
	The products included here are manufactured by Novell, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 5.00 3rdparty noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
