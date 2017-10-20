---
layout: page
title: "Q132361: Updated Proteon 139X NDIS Driver Needed for Network Client 3.0"
permalink: /kb/132/Q132361/
---

## Q132361: Updated Proteon 139X NDIS Driver Needed for Network Client 3.0

{% raw %}

	Article: Q132361
	Product(s): Microsoft Windows NT
	Version(s): 3.0,3.5,3.5,3.51,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5,3.51, 3.5, 3.51 
	- Microsoft Windows NT Workstation version 3.5,3.51 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Network Client Administrator utility provided with the Windows NT Server
	CD-ROM, is used to create a network installation startup disk for Microsoft
	Network Client version 3.0. If the Proteon Token Ring P1390 or P1392 network
	interface cards (NICs) are used, the startup disk may fail to initialize
	properly. Both of these NICs use the Proteon 139x NDIS driver, (NDIS39XR.DOS).
	
	Your computer stops responding (hangs) with the following error:
	
	  EMM386: DMA Mode Not Supported.
	  Press ENTER to Reboot.
	
	If you remark out the EMM386.EXE line in the CONFIG.SYS file, the network fails
	to initialize and the system hangs with the following error:
	
	  M0010: Driver configuration error
	
	
	CAUSE
	=====
	
	The EMM386 error is caused by the driver attempting to perform direct memory
	access (DMA) using a mode not supported by the EMM386 expanded- memory manager.
	The system has become unstable and must be restarted.
	
	The M0010 error is a generic message, generated as a result of NIC/driver
	configuration issues.
	
	RESOLUTION
	==========
	
	Proteon has updated the NDIS driver for 139x adapters. A newer version dated
	6/6/95 corrects the EMM386 problem. The drivers can be downloaded from Proteon's
	BBS @ 508-366-7827. The file to download is 39WFW311.EXE.
	
	
	Replace NDIS39XR.DOS in the NET directory on the startup disk with the new
	driver.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : :3.0,3.5,3.5,3.51,3.51
	
	=============================================================================
	

{% endraw %}
