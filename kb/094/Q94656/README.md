---
layout: page
title: "Q94656: Excessive Memory Consumption in MS-DOS with WFWG"
permalink: /kb/094/Q94656/
---

## Q94656: Excessive Memory Consumption in MS-DOS with WFWG

{% raw %}

	Article: Q94656
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Workgroup Connections, version 1.0 
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running Windows for Workgroups (WFWG), Workgroup Connections, or Workgroup
	Add-On for MS-DOS the MS-DOS version 5.0 MEM/C command or other memory viewing
	utility may report MS-DOS to be using excessive amounts (75K or more) of
	conventional memory if the NET START command has not yet been executed.
	
	Microsoft recommends that the NET START command be issued before any other
	terminate-and-stay-resident (TSR) programs are loaded. Loading TSRs before the
	NET START command may prevent the protocol manager, PROTMAN.DOS, from returning
	its memory to the system pool, or may cause other unpredictable system behavior.
	
	MORE INFORMATION
	================
	
	The Windows for Workgroups protocol manager, PROTMAN.DOS, allocates memory
	containing data that is a parsed version of PROTOCOL.INI. Other drivers (for
	network cards and protocols) need to use the data during the initialization
	process, so PROTMAN.DOS holds the data until the binding (NET START) is
	complete. Once the binding has occurred, the memory allocated by PROTMAN.DOS is
	freed.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311 kbWFW311DOS
	Version           : WINDOWS:3.1,3.11; :1.0,3.11
	
	=============================================================================
	

{% endraw %}
