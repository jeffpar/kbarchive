---
layout: page
title: "Q111929: Error 58 with SMC Ethercard and ODI Drivers"
permalink: /kb/111/Q111929/
---

## Q111929: Error 58 with SMC Ethercard and ODI Drivers

{% raw %}

	Article: Q111929
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows for Workgroups 3.11 on a Zenith computer using the
	Zenith-provided ODI drivers for the bundled SMC Ethercard, you receive the
	following error message:
	
	  Error 58: The network has responded incorrectly
	
	CAUSE
	=====
	
	The Zenith-provided version of the ODI driver is named ZECODI. If the SMC
	Ethercard multiple link interface device (MLID) was installed after Windows for
	Workgroups was set up, the Bindings= lines in the PROTOCOL.INI file are written
	incorrectly.
	
	RESOLUTION
	==========
	
	To correct this problem, edit the PROTOCOL.INI file by replacing any instances
	of SMC8000 with ZECODI in the Bindings= lines.
	
	Zenith Technical Support recommends that customers use the drivers that ship with
	their versions of the network card. Since there is no OEMSETUP.INF file, users
	are directed to install the card as the SMC Ethercard Plus. If the MLID is
	running before you set up Windows for Workgroups, the Bindings= lines are
	written correctly. Windows for Workgroups pulls the MLID name from LSL if the
	MLID is running.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
