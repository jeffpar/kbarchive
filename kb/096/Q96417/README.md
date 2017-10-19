---
layout: page
title: "Q96417: Mac GW: Incompatibility Between GW and Cache Switch"
permalink: /kb/096/Q96417/
---

## Q96417: Mac GW: Incompatibility Between GW and Cache Switch

	Article: Q96417
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway (GW) chooser extension version 3.0x is incompatible
	with the Cache Switch Control Panel found on Apple Macintosh Quadra machines.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0 of Microsoft Mail
	for AppleTalk Networks. This problem was corrected in version 3.1.
	
	If a gateway is to be used on a Quadra, the Cache Switch CDEV must be disabled.
	
	MORE INFORMATION
	================
	
	The MS Mail GW extension is used for communication between the Microsoft Mail
	server and a gateway. If MS Mail GW is loaded and the cache switch is enabled,
	the machine will stop operating on startup. The cache switch turns on the 8K
	copy-back caching scheme used on Quadra machines.
	
	Additional query words: 3.00 3.1 bomb
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
