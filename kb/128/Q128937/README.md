---
layout: page
title: "Q128937: Printing Seems Slow on LANtastic-Shared Printer"
permalink: /kb/128/Q128937/
---

## Q128937: Printing Seems Slow on LANtastic-Shared Printer

	Article: Q128937
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are printing from a Windows-based application to a locally connected
	printer on a system running Artisoft LANtastic version 6.0, it may take a long
	time for the print job to finish.
	
	RESOLUTION
	==========
	
	Increase the Characters Per Second setting in the Resources section of
	LANtastic's Network Manager to print from a Windows-based application more
	quickly.
	
	To make changes to LANtastic's configuration, please refer to your LANtastic
	documentation or contact Artisoft Technical Support.
	
	
	MORE INFORMATION
	================
	
	When you print to a locally connected printer from a Windows-based application
	on a system running LANtastic version 6.0, all printing is carried out through
	the networking software. Print jobs are not sent directly to the printer port.
	This applies to Windows and Windows for Workgroups versions 3.1 and 3.11 running
	without Windows for Workgroups peer network functionality.
	
	You can configure LANtastic to specify how much relative CPU time is dedicated to
	non-server and server-related activities. This option is specified in the
	Characters Per Second parameter. LANtastic attempts to dedicate the necessary
	CPU resources to a particular print job to sustain the characters per second
	specified. When this setting is low (such as the default setting of 0) any
	application activity on the server will slow the printing process considerably.
	
	LANtastic is manufactured by Artisoft Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	LANtastic "Installation and Management Guide," pages 207-208 and pages 239-240
	
	
	Additional query words: 3.10 3.11 sluggish paused delayed
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
