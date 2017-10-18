---
layout: page
title: "Q129672: MS Exchange and Dial-Up Networking Problems with Hayes Adapter"
permalink: kb/129/Q129672/
---

## Q129672: MS Exchange and Dial-Up Networking Problems with Hayes Adapter

	Article: Q129672
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a modem attached to a Hayes ESP/2 Communications Port
	Adapter, and using the third-party drivers for that adapter supplied by Hayes,
	Microsoft Exchange and Dial-Up Networking may not work correctly. In particular,
	you may receive the following error message:
	
	  Exception 0E
	
	CAUSE
	=====
	
	The third-party drivers supplied by Hayes for use with the ESP/2 Communications
	Port Adapter in previous versions of Windows are not fully compatible with
	Windows 95.
	
	RESOLUTION
	==========
	
	Remove the Hayes drivers from the [386Enh] section of the SYSTEM.INI file. For
	more information about how to do this, please contact Hayes.
	
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
