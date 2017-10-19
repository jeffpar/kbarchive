---
layout: page
title: "Q135984: PC Win: Mail Only Displays the Global Address List"
permalink: /kb/135/Q135984/
---

## Q135984: PC Win: Mail Only Displays the Global Address List

	Article: Q135984
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to address a mail message in Mail for Windows, you only see the
	Global Address List (GAL); you do not see the postoffice address and gateway
	address lists. However, your Personal Address Book (PAB) is still available.
	
	RESOLUTION
	==========
	
	If you can only view the GAL, you have the entry GALONLY=1 in the MSMAIL.INI in
	the [Microsoft Mail] section. If you want to view the other address lists,
	either remove the GALONLY=1 entry or change the entry in the MSMAIL.INI to the
	following:
	
	  [Microsoft Mail]
	  GALONLY=0
	
	Additional query words: 3.x 3.00 3.20 3.50 postoffice
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail350 kbMail320
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	
