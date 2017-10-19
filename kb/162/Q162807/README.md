---
layout: page
title: "Q162807: Err Msg: RAS Error 633: The Port Is in Use or Not Configured"
permalink: /kb/162/Q162807/
---

## Q162807: Err Msg: RAS Error 633: The Port Is in Use or Not Configured

	Article: Q162807
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to dial out using the Remote Access Service (RAS), you may
	receive the following error message:
	
	  RAS Error 633: The port is in use or not configured for Remote Access
	  Dial-Out.
	
	Stopping and restarting the Remote Access Service temporarily resolves the
	problem.
	
	CAUSE
	=====
	
	If Rasdial.exe terminates prematurely, it can leave the port in an indeterminate
	state. The port disappears from Remote Access Server Manager if it is configured
	for dial-in.
	
	This problem is not specific to Rasdial.exe. Any program that terminates
	prematurely without clearing the port state may cause the same problem.
	
	RESOLUTION
	==========
	
	Install the latest Service Pack for Windows NT version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information about obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	Additional query words: prodnt dun
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
