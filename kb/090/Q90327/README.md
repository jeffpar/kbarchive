---
layout: page
title: "Q90327: Intel EtherExpress (EE) 16 32K Buffer"
permalink: /kb/090/Q90327/
---

## Q90327: Intel EtherExpress (EE) 16 32K Buffer

	Article: Q90327
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Intel EtherExpress (EE) 16 network card, included in some Windows for
	Workgroup packages, has a 32K RAM buffer. The default configuration for Windows
	for Workgroups does not use this buffer (base memory address is set to Automatic
	Or Unused).
	
	MORE INFORMATION
	================
	
	To use the 32K buffer with Windows for Workgroups, you would have to use the
	Intel SoftSet utility (SOFTSET.EXE) to change the memory mapping option to
	Memory Mapped, and then modify the NETWORK.INF file to enable the option by
	default when installing Windows for Workgroups. This configuration is not as
	reliable or as fast (on this card configuration) as the I/O memory mapping
	(Automatic Or Unused) that is set up by default, and is not supported by
	Microsoft.
	
	The Intel EtherExpress (EE) 16 network card is shipped with the following Windows
	for Workgroup packages:
	
	- Windows for Workgroups Network Starter Kit (software and hardware for two)
	
	- Windows for Workgroups Network User Kit (software and hardware for one)
	
	- Windows for Workgroups 3.1 Addon Network Starter Kit (software and hardware
	  for two existing 3.1 users)
	
	- Windows for Workgroups 3.1 Addon User Kit (software and hardware for one
	  existing 3.1 user)
	
	Additional query words: 3.10 mapping 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
