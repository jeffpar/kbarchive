---
layout: page
title: "Q151711: Error Msg: &quot;Unable to change password&quot; 0xC00000E5"
permalink: /kb/151/Q151711/
---

## Q151711: Error Msg: &quot;Unable to change password&quot; 0xC00000E5

	Article: Q151711
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error when trying to change your password from a
	Windows NT 3.5 or NT3.51 Workstation or Server in a Windows NT domain:
	
	  Unable to change your password on this account.
	  Error: 0xC00000E5
	
	CAUSE
	=====
	
	This might be caused by a UNIX server's having the same name as the NT domain,
	interfering with the NT stations' ability to change passwords.
	
	WORKAROUND
	==========
	
	Take the UNIX computer offline then try to change your password again. If taking
	the UNIX computer offline resolves the problem, you will need to either rename
	the UNIX server, rename the NT domain, or make all password changes at the NT
	primary domain controller console.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
