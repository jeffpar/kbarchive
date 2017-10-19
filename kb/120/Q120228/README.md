---
layout: page
title: "Q120228: RAS Point-to-Point: Password Conventions and Common Problems"
permalink: /kb/120/Q120228/
---

## Q120228: RAS Point-to-Point: Password Conventions and Common Problems

	Article: Q120228
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork kbprb kberrmsg kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information about the password convention of Remote Access
	Services (RAS) Point-to-Point (PTP) in Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	During setup of RAS PTP in Windows for Workgroups, you are presented with a
	configuration dialog box. Be sure to select Allow Incoming Calls in this dialog
	box. You may also want to enter a password in order to limit who has remote
	access to your resources. (This password is the one remote users must enter as
	their password for successful connection and validation to RAS PTP.) Listed
	below are two common problems that occur with password validation.
	
	Your Computer Rejects Valid Incoming Calls
	------------------------------------------
	
	If your computer occasionally rejects incoming calls from people using the valid
	password, restart RAS on the server computer, and then choose the Answer button
	again on your computer. If the problem persists, restart RAS on both the server
	and client computers.
	
	RAS Error 691: Invalid User Account or Password
	-----------------------------------------------
	
	The password that the remote user must use for validation is the same password
	the server setup used in the RAS PTP configuration. If the two do not match, the
	above error appears.
	
	Additional query words: 3.11 invalid incorrect err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
