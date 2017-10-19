---
layout: page
title: "Q123367: WFWG 3.11 Hangs with the Intel EtherExpress Pro"
permalink: /kb/123/Q123367/
---

## Q123367: WFWG 3.11 Hangs with the Intel EtherExpress Pro

	Article: Q123367
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer stops responding (hangs) when you start Windows for Workgroups a
	second time. No problems occur the first time you load Windows.
	
	CAUSE
	=====
	
	This problem can occur when you are using the Intel EtherExpress NDIS 3
	(enhanced mode) network interface card (NIC) driver with the Intel EtherExpress
	Pro card network adapter.
	
	STATUS
	======
	
	Intel is aware of this problem and has an updated NDIS 3 NIC driver available.
	
	RESOLUTION
	==========
	
	There are two solutions to this problem:
	
	- Obtain the updated NDIS 3 NIC driver from Intel.
	
	  -or-
	
	- Use the NDIS 2 (real-mode) NIC driver by performing the following steps:
	
	  1. Double-click the Network Setup icon in the Network group, then click the
	     Drivers button.
	
	  2. Double-click the Intel EtherExpress Pro network card driver.
	
	  3. Change the Driver Type from "Real and Enhanced Mode NDIS Driver" to "Real
	     Mode NDIS Driver."
	
	
	Additional query words: patch 3.11 ether express pro logo startup freezes
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	
	=============================================================================
	
