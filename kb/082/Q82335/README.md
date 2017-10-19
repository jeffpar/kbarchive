---
layout: page
title: "Q82335: DEC Pathworks Has DDE Problems with Wall Data Rumba"
permalink: /kb/082/Q82335/
---

## Q82335: DEC Pathworks Has DDE Problems with Wall Data Rumba

	Article: Q82335
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform dynamic data exchange (DDE) with Wall Data Rumba over a Digital
	Equipment Corporation (DEC) Pathworks network, the applications may cause
	Microsoft Windows to terminate abruptly.
	
	CAUSE
	=====
	
	The problem has been narrowed down to the NETBIOS provided by DEC not working
	properly when using gateways.
	
	WORKAROUND
	==========
	
	Adding *vnetbios to the SYSTEM.INI [386Enh] network= line, may resolve the
	problem.
	
	MORE INFORMATION
	================
	
	For more information, please contact DEC.
	
	The DEC product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
