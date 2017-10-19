---
layout: page
title: "Q90260: Running NetBIOS over DECnet Protocol"
permalink: /kb/090/Q90260/
---

## Q90260: Running NetBIOS over DECnet Protocol

	Article: Q90260
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	When Windows for Workgroups is configured for DECNet Protocol on Lana 0, and
	NetBEUI on Lana 1, running NetBIOS applications on Lana 0 may require that you
	increase the NETHEAPSIZE= entry [386Enh] section of the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	The default setting is NETHEAPSIZE=20. You may have to increase it to a value
	greater than 24. Try incrementing this value by 10 or 20 until your NetBIOS
	application behaves correctly.
	
	DECNet is manufactured by a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words: 3.10 3.11 dec network 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
