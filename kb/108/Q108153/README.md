---
layout: page
title: "Q108153: WFWG Err Msg: No Domain Server Was Available to Validate..."
permalink: /kb/108/Q108153/
---

## Q108153: WFWG Err Msg: No Domain Server Was Available to Validate...

	Article: Q108153
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork kberrmsg kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to a Microsoft Windows NT or Microsoft LAN Manager domain
	through Microsoft Windows for Workgroups, you may receive one of the following
	error messages:
	
	Windows for Workgroups 3.11
	---------------------------
	
	  No domain server was available to validate your password. You were logged on
	  without password validation.
	
	Windows for Workgroups 3.1
	--------------------------
	
	  No LAN Manager server was available to validate your password. You were
	  logged on without password validation.
	
	CAUSE
	=====
	
	This error occurs if you entered the incorrect domain name, or there is a space
	included in the Windows for Workgroups computer name.
	
	Microsoft Windows NT supports computer names with spaces, but in order for
	validation to occur, the computer name must appear in quotation marks. Windows
	for Workgroups does not allow the user to input the computer name when you log
	on; therefore, validation fails if you have a space included in your Windows for
	Workgroups computer name. The answer to whether or not validation has taken
	place never comes back.
	
	
	RESOLUTION
	==========
	
	To correct this problem, remove the space from the Windows for Workgroups
	computer name.
	
	Additional query words: 3.11 err msg Password Validation lanman winnt authentication ntas ntlan
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
