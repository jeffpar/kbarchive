---
layout: page
title: "Q149549: Signing Out During Phonebook Update Hangs Guide and Moscp"
permalink: /kb/149/Q149549/
---

## Q149549: Signing Out During Phonebook Update Hangs Guide and Moscp

	Article: Q149549
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 1.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After signing out of MSN, The Microsoft Network, the MSN icon may remain on the
	taskbar and you may be unable to sign in to MSN again.
	
	CAUSE
	=====
	
	These symptoms can occur if you sign out of MSN while your phonebook is being
	updated, because Guide.exe and Moscp.exe are left running. The phonebook update
	is an invisible process that you do not see.
	
	RESOLUTION
	==========
	
	To sign in to MSN again, follow these steps:
	
	1. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. Click Moscp and then click End Task.
	
	3. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	4. Click Guide and then click End Task.
	
	5. Sign in to MSN.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130
	Version           : WINDOWS:1.3
	
	=============================================================================
	
