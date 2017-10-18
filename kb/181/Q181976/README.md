---
layout: page
title: "Q181976: Windows 95 Client Fails to Connect After Forced Password Change"
permalink: kb/181/Q181976/
---

## Q181976: Windows 95 Client Fails to Connect After Forced Password Change

	Article: Q181976
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows NT Server user account is configured to require the user to change
	the password at the next logon attempt, and the SNA Server Windows 95 client is
	started, the SNA Server Windows 95 client logon will report one of the following
	errors:
	
	- If the Windows 95 client is running on a Windows NT system:
	
	  Password Change Error
	  Specified old password does not match password in
	  logon attempt
	
	- If the Windows 95 client is running on a Windows 95 system:
	
	  Logon failed
	
	In addition, attempting to start the 3270 application (Win3270.exe) included with
	the SNA Server Client for Windows 95 (where the Windows NT password was forced
	to be changed on next logon) results in an application exception in Win3270.exe.
	
	CAUSE
	=====
	
	The Windows 95 password change fails because the password change routine checks
	the SecurityVersion in the registry, which does not exist until the user changes
	the Windows 95 client configuration. By default, the client uses the Windows NT
	domain password. Because the SecurityVersion does not exist, the password change
	routine assumes it has the plain text password when it does not, resulting in
	the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
