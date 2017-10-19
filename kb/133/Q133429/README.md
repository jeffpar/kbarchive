---
layout: page
title: "Q133429: PC WRmt: Err Msg: Postoffice Has Not Accepted Mail Item"
permalink: /kb/133/Q133429/
---

## Q133429: PC WRmt: Err Msg: Postoffice Has Not Accepted Mail Item

	Article: Q133429
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 3.2 of Microsoft Mail Remote for Windows, you may receive
	the following error:
	
	  Postoffice has not accepted mail item
	
	The error on the IBM-compatible running EXTERNAL.EXE is:
	
	  Caller: Sign-on ID or password incorrect.
	
	CAUSE
	=====
	
	It is possible that EXTERNAL has a DrivesWAN connection to the remote user's
	home postoffice (PO).
	
	RESOLUTION
	==========
	
	Postoffices connected using the DrivesWAN option are send-only postoffices. You
	must remove the DrivesWAN option or set up another EXTERNAL to handle the remote
	users for that PO.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
