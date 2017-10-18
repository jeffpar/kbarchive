---
layout: page
title: "Q272070: SMS: Logon Server Manager Cannot Modify VB Scripts for Logon"
permalink: kb/272/Q272070/
---

## Q272070: SMS: Logon Server Manager Cannot Modify VB Scripts for Logon

	Article: Q272070
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable either Windows Networking Logon Client Installation or Windows
	Networking Logon Discovery, and you then enable Modify User Logon Scripts
	Systems Management Server (SMS) either at the top or at the bottom of the
	existing script, the script modifications do not modify the logon script if the
	logon script has a .vbs extension.
	
	CAUSE
	=====
	
	Logon Server Manager (LSM) does not modify Visual Basic (VB) Scripts to call the
	SMSLS batch file. Because of the complexities that are involved with VB Script
	calls for additional processes, LSM records the following entry in the
	Nt_logon.log file instead:
	
	  Users with scripts that can't be changed are: <account name>
	
	WORKAROUND
	==========
	
	To work around this behavior, instead of specifying the VB Script directly as
	the user logon script, create a small batch file that calls the VB Script. With
	this method, you can use SMS Logon Server Manager to modify the user logon
	script while still utilizing the advanced features of a VB Script.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix 
	Component         : SystemManagement UserProfile
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
