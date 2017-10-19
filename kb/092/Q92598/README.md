---
layout: page
title: "Q92598: WFWG: Server Responds Slowly After RAS Connection is Made"
permalink: /kb/092/Q92598/
---

## Q92598: WFWG: Server Responds Slowly After RAS Connection is Made

	Article: Q92598
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice a general slowdown of your Windows for Workgroups server machine
	if another user has connected to it using Microsoft Remote Access Services (RAS)
	version 1.0. RAS version 1.1 does not exhibit this behavior.
	
	WORKAROUND
	==========
	
	To avoid this problem, add the following statement to the [network] section of
	the SYSTEM.INI file on the remote computer:
	
	  MaintainServerList=no
	
	NOTE: The "Microsoft Windows for Workgroups Resource Kit" manual for version 3.1
	incorrectly states on page E-10 that the MaintainServerList=No line should be
	added to the [386enh] section.
	
	MORE INFORMATION
	================
	
	After the computer with RAS 1.0 has connected to the server workstation, the
	network adapter on the server constantly sends broadcast messages or packets.
	This is known as a "broadcast storm." Until you restart the server machine, the
	"storm" continues.
	
	The nature of this problem often makes it difficult to detect. You may notice a
	sluggish keyboard response or experience slow network operations. If you have a
	CPU meter on the server machine, it registers 100% CPU usage when this problem
	occurs.
	
	Additional query words: lanman docerr wfwgrk 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
