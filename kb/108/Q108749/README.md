---
layout: page
title: "Q108749: IPX&#92;SPX Compatible Transport Generates Error 7361"
permalink: /kb/108/Q108749/
---

## Q108749: IPX&#92;SPX Compatible Transport Generates Error 7361

{% raw %}

	Article: Q108749
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IPX/SPX-compatible transport with NetBIOS as the only protocol
	in Windows for Workgroups version 3.11 and the real-mode redirector is started,
	the following error message is displayed
	
	  The WORKSTATION service is not started
	  Is it OK to start it? (Y/N) [Y]:
	
	followed by the error:
	
	  Error 7361: IPX or NETBIOS must be running in order to load the network
	  services.
	
	If you type "net help 7361" (without the quotation marks), you receive the
	following explanation:
	
	  Your system is configured to use a monolithic driver such as IPX or
	  XNS and the driver is not loaded.
	
	  ACTION
	
	  To load the driver, follow the instructions in the documentation that
	  comes with your secondary network.
	
	CAUSE
	=====
	
	This error is caused by either a missing NetBEUI or NDISHLP.SYS driver on the
	transport= line in the [network drivers] section of the SYSTEM.INI file. This
	error may also be caused by using the enhanced-mode NDIS driver and attempting
	to start the network services from MS-DOS.
	
	RESOLUTION
	==========
	
	To load the real-mode NetBEUI protocol, make sure you have the following line in
	the [network drivers] section of the SYSTEM.INI file:
	
	       transport=*netbeui,ndishlp.sys
	
	To load a real-mode NDIS driver, double-click the Network Setup icon in the
	Network group. Click the Drivers button, then click the Setup button. In the
	Driver Type box, click Real Mode NDIS Driver or click Real And Enhanced Mode
	Driver.
	
	Additional query words: 3.11 Novell
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbWFW311DOS
	Version           : :3.11
	
	=============================================================================
	

{% endraw %}
