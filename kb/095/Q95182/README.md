---
layout: page
title: "Q95182: DXMC0MOD.SYS Err Msg: Invalid Shared RAM Address"
permalink: /kb/095/Q95182/
---

## Q95182: DXMC0MOD.SYS Err Msg: Invalid Shared RAM Address

{% raw %}

	Article: Q95182
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Due to a difference in line parsing between the DEVICE and DEVICEHIGH commands
	you may receive one of the following error messages when the IBM network device
	driver, DXMC0MOD.SYS, loads:
	
	  Invalid shared RAM address
	
	  -or-
	
	  Invalid early token ring release
	
	After these error messages are displayed, the DXMC0MOD.SYS device driver does not
	load and the network fails to start. This occurs most often after MemMaker has
	been used, and DEVICE commands have been changed to DEVICEHIGH.
	
	CAUSE
	=====
	
	This problem is caused by the manner in which DEVICEHIGH parses command lines.
	The DXMC0MOD.SYS device driver does not correctly interpret the DEVICEHIGH
	parameter information.
	
	WORKAROUND
	==========
	
	To enable your network to start and avoid these error messages, make sure enough
	commas are used in the DXMC0MOD.SYS statement to act as delimiters for the three
	optional parameters required by DXMC0MOD.SYS. For example, each of the following
	lines cause error messages to be displayed:
	
	  DEVICEHIGH=C:\LSP\DXMC0MOD.SYS 400000000001
	  DEVICEHIGH=C:\LSP\DXMC0MOD.SYS 400000000001,D800
	  DEVICEHIGH=C:\LSP\DXMC0MOD.SYS ,D800
	
	To avoid these errors, change each line to the following:
	
	  DEVICEHIGH=C:\LSP\DXMC0MOD.SYS 400000000001,,
	  DEVICEHIGH=C:\LSP\DXMC0MOD.SYS 400000000001,D800,
	  DEVICEHIGH=C:\LSP\DXMC0MOD.SYS ,D800,
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
