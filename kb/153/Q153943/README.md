---
layout: page
title: "Q153943: Password Changed by Mac User not Synchronized with FPNW"
permalink: /kb/153/Q153943/
---

## Q153943: Password Changed by Mac User not Synchronized with FPNW

	Article: Q153943
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you change a user account's NT domain password from a Macintosh client, the
	password is not synchronized with FPNW. If you try to log on to FPNW server from
	a Novell client using this account with the new password, the logon will fail.
	
	CAUSE
	=====
	
	The Service for Macintosh does not set the Netware compatible encrypted form of
	the password stored in the user record.
	
	WORKAROUND
	==========
	
	You will need to change the user account password from one of the following:
	
	- NT's User Manager from a workstation/server that has had FPNW (or FPNW tools)
	  installed.
	
	- From the Change Password dialog from the cntl-alt-delete screen of Windows
	  NT.
	
	- From a Netware compatible client or MS-DOS networking client running the
	  chgpass that is included with FPNW.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in NT 3.51 and FPNW version 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
