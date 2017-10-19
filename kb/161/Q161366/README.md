---
layout: page
title: "Q161366: Err Msg: The Password You Specified Is Incorrect..."
permalink: /kb/161/Q161366/
---

## Q161366: Err Msg: The Password You Specified Is Incorrect...

	Article: Q161366
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): msnets
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a Windows for Workgroups 3.11-based computer that is
	configured to log on to a Windows NT domain, you may receive the following error
	message:
	
	  Windows for Workgroups
	  The password you specified is incorrect or your account is inactive. See your
	  network administrator for the password or to activate your account.
	
	CAUSE
	=====
	
	This behavior can occur if your Windows NT domain account is configured so that
	you are allowed to log on to the domain only from specific workstations, and you
	do not have permission to log on to the domain from the current workstation.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Log on to the domain from a authorized workstation.
	
	- Contact your network administrator to change your account permissions for the
	  current workstation.
	
	MORE INFORMATION
	================
	
	If you try to log on to a Windows NT domain from a Windows 95-based computer on
	which you do not have permission to log on from, you receive the following error
	message:
	
	  Microsoft Networking
	  You are not allowed to log on from this workstation.
	
	This is controlled by user manager - user properties - Logon To setting.
	
	If the setting is set to USER MAY LOGON FROM THESE WORKSTATIONS: The user will be
	restricted to one of the machines listed.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          : msnets 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
