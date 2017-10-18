---
layout: page
title: "Q157003: PC Adm: Microsoft Mail Administrator Program and VDM"
permalink: kb/157/Q157003/
---

## Q157003: PC Adm: Microsoft Mail Administrator Program and VDM

	Article: Q157003
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running the Microsoft Mail Administrator program under an MS-DOS virtual machine
	(VDM) is supported; however, just as with any application being run under a VDM,
	it is susceptible to causing corruption to the postoffice under certain
	situations.
	
	MORE INFORMATION
	================
	
	Any networked MS-DOS application that relies on the sophisticated file I/O
	caching of a VDM could potentially experience file corruption because of one of
	the following:
	
	- Closing the VDM without properly closing down the MS-DOS application running
	  in its window.
	
	- Ungracefully shutting the power down to a computer that has a running MS-DOS
	  application under a VDM.
	
	- Faulty networking hardware or network card device drivers that do not
	  properly handle I/O requests from the network and return improper values to
	  the MS-DOS application.
	
	When you run the Microsoft Mail Administrator program under a VDM in Microsoft
	Windows, Windows for Workgroups, Windows 95, or Windows NT, the following rules
	should be followed to prevent any corruption to the Microsoft Mail 3.x
	postoffice database files:
	
	- Always shut down the Administrator program by first pressing the ESCAPE (ESC)
	  key, and then pressing Y, and then closing the VDM window.
	
	- If you are experiencing problems performing normal Administrator functions
	  under a VDM, try performing the same task in a VDM on another workstation or
	  from a native MS-DOS workstation.
	
	- If the problems persist, contact Microsoft Technical Support.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
