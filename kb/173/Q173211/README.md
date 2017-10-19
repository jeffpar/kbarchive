---
layout: page
title: "Q173211: MDG: Admin Notice 102 Caused By Missing or Hidden C850sort.glb"
permalink: /kb/173/Q173211/
---

## Q173211: MDG: Admin Notice 102 Caused By Missing or Hidden C850sort.glb

	Article: Q173211
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you try to create an Init disk for any remote user, the following error
	message is returned and the process does not complete.
	
	  Notice: 102 Failure to generate part or all of RDI system
	
	CAUSE
	=====
	
	The C850sort.glb file and/or the Transfil.glb file required for this function
	are missing or hidden in the GLB directory on the postoffice.
	
	WORKAROUND
	==========
	
	To work around this problem, replace the missing file(s) from another postoffice
	or remove the Hidden attribute.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	Issue type        : kbprb
	
	=============================================================================
	
