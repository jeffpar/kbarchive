---
layout: page
title: "Q106509: PC Adm: Err Msg: Notice 28 Error File Not Accessible"
permalink: /kb/106/Q106509/
---

## Q106509: PC Adm: Err Msg: Notice 28 Error File Not Accessible

	Article: Q106509
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 2.1e, 3.0, 3.0b, and 3.2 of Microsoft Mail for PC Networks, when a
	Microsoft Mail administrator tries to recover a password by selecting
	Local-Admin, Recover from the Mail Administrator program (ADMIN.EXE), the
	following error message may be displayed:
	
	  Notice 28 Error file not accessible. Check server connection
	
	CAUSE
	=====
	
	This error occurs when the ERRORADM.GLB file is missing from the GLB
	subdirectory of the Mail database. The ERRORADM.GLB file is the error message
	file for the Administrator program. It is usually made read-only.
	
	RESOLUTION
	==========
	
	To resolve this problem, restore the file from a backup copy. If a backup is
	unavailable, you can copy this file from the original Microsoft Mail Setup disk
	2.
	
	Additional query words: 2.10e 3.00 3.00b 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.0b,3.2
	
	=============================================================================
	
