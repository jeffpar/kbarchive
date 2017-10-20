---
layout: page
title: "Q94363: SMC_ARC.DOS May Result in a POR Failure or Adapter Not Found"
permalink: /kb/094/Q94363/
---

## Q94363: SMC_ARC.DOS May Result in a POR Failure or Adapter Not Found

{% raw %}

	Article: Q94363
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may occur during startup if the SMC_ARC.DOS driver
	is being used:
	
	  SMC Arcnet Mac Driver 10/01/91 Version 2.05 PS110,PS210 Board in a PS/2
	  System
	
	  \dev\smc_arc Error:POR failure or Adapter not found
	
	This error indicates that the system board is being detected as a PS/2 board even
	though it is an ISA or EISA board.
	
	WORKAROUND
	==========
	
	To work around the problem, edit the MAC driver section (example: [MS$SMC270])of
	the Windows for Workgroups PROTOCOL.INI file adding the following line:
	
	  Micro_Channel=0
	
	Here is an example of how the section reads:
	
	  [MS$SMC270]
	  DriverName=SMC_ARC$
	  interrupt=2
	  iobase=0x2E0
	  memorybase=0xD000
	  MICRO_CHANNEL=0
	
	WARNING: When editing the PROTOCOL.INI file manually, always remember that
	modifications made with the Network settings in Control Panel may result in the
	loss of any manual editing. Therefore, it may be necessary to add this entry
	again after modifying settings through Control Panel.
	
	Additional query words: 3.1 3.10 ps2 micro channel err msg boot process bootup start up
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
