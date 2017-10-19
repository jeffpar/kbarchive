---
layout: page
title: "Q177934: GP Fault When Clicking Properties on Any Local Group"
permalink: /kb/177/Q177934/
---

## Q177934: GP Fault When Clicking Properties on Any Local Group

	Article: Q177934
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When 16-bit Windows client users click Details on any local group, they will
	receive one of the following messages:
	
	- 
	
	  MSMAIL caused a General Protection Fault in module FRAMEWRK.DLL...
	
	- 
	
	  MSMAIL caused a General Protection Fault in module AB.DLL...
	
	MS-DOS Mail client, Windows Messaging, and Microsoft Exchange clients can access
	the details for local groups without a problem.
	
	CAUSE
	=====
	
	This problem is because there is corruption in Alias.tpl.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Copy Alias.tpl from a working postoffice.
	
	-or-
	
	- If another postoffice is not available, install a dummy postoffice and copy
	  Alias.tpl from it.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350 kbMail320
	Version           : WINDOWS:3.2,3.5
	Issue type        : kbprb
	
	=============================================================================
	
