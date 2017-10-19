---
layout: page
title: "Q111927: WFWG 3.11 System Hangs with Shiva SREMOTE.DOS"
permalink: /kb/111/Q111927/
---

## Q111927: WFWG 3.11 System Hangs with Shiva SREMOTE.DOS

	Article: Q111927
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Shiva's SREMOTE.DOS, upgrading to Windows for Workgroups 3.11
	may cause your system to stop responding (hang) when you start Windows for
	Workgroups.
	
	WORKAROUND
	==========
	
	You may be able to work around this problem by obtaining an updated driver from
	Shiva.
	
	Until you can obtain the updated Shiva software, you can run Windows for
	Workgroups by removing the Shiva components. To do so:
	
	1. Run Windows for Workgroups with the /N switch [type "win /n" (without the
	  quotation marks)].
	
	2. Remove the Shiva components from the Network Drivers section of the Network
	  Setup dialog box.
	
	3. Restart Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	SREMOTE.DOS provides an NDIS 2.0 asynchronous driver for accessing a modem from
	the Windows for Workgroups network redirector. Shiva also replaces the NDIS 2.0
	VNB.386 (virtual NetBEUI) component from Windows for Workgroups 3.10. In Windows
	for Workgroups 3.11, there is a new NDIS 3.0 virtual NetBEUI protocol
	(NETBEUI.386), which is incompatible with SREMOTE.DOS.
	
	SREMOTE.DOS is manufactured by Shiva, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	For additional information, please contact Shiva Technical Support.
	
	Additional query words: 3.11 TSHOOT Netmodem/e
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
