---
layout: page
title: "Q107995: NDIS2 Drivers Load but NDIS3 Drivers Don't--Errors 6200 &amp; 58"
permalink: /kb/107/Q107995/
---

## Q107995: NDIS2 Drivers Load but NDIS3 Drivers Don't--Errors 6200 &amp; 58

	Article: Q107995
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows for Workgroups, you may receive one of the following
	error messages:
	
	  Error 6200: Adapter <adapter-name> not found
	
	  -or-
	
	  Error 58: The network has responded incorrectly
	
	NOTE: These errors usually occur in protected mode; real-mode networking usually
	loads correctly.
	
	CAUSE
	=====
	
	The above error messages may be caused by an incorrect I/O base address, an
	incorrect RAM address, or an improper IRQ setting in the PROTOCOL.INI file.
	
	These errors may be generated if the Transport= line in the [386Enh] section of
	the SYSTEM.INI contains protocols that are not in use. For example, if the
	Transport= line contains the following
	
	       Transport=netbeui.386,nwlink.386,nwnblink.386
	
	but the only protocol in use is NetBeui, the errors may occur.
	
	RESOLUTION
	==========
	
	Correct the invalid setting.
	
	If the Transport= line contains invalid references, remove them (that is, remove
	the references to nwlink.386, nwnblink.386, and IPX/SPX compatible transport).
	
	MORE INFORMATION
	================
	
	The NDIS2 network interface card (NIC) driver may not rely on the PROTOCOL.INI
	settings; however, the NDIS3 NIC driver relies almost exclusively on these
	settings.
	
	Additional query words: 3.11 error message err msg enhanced mode protect NDIS tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
