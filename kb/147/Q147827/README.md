---
layout: page
title: "Q147827: ErrMsg: ResKit - LMUICMNO.DLL Could Not Be Found"
permalink: /kb/147/Q147827/
---

## Q147827: ErrMsg: ResKit - LMUICMNO.DLL Could Not Be Found

	Article: Q147827
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you try to run Domain Monitor,
	Browser Monitor, User Manager for Domains, or Server Manager for Domains from
	the Windows NT 3.1 Resource Kit on a Windows NT 3.5 or NT 3.51 Workstation:
	
	  Unable to Locate DLL
	  The dynamic link library LMUICMN0.dll could not be found in the specified
	  path.
	
	CAUSE
	=====
	
	The above error message appears when running programs from the Windows NT 3.1
	Resource Kit on Windows NT 3.5 or NT 3.51 computers. Windows NT 3.5 and NT 3.51
	Workstation does not require the files LMUICMN0.DLL and LMUICMN1.DLL, thus does
	not have them installed on thesystem.
	
	WORKAROUND
	==========
	
	The Windows NT Resource Kit tools are version specific. You must run the Windows
	NT Resource Kit from the same version as the version of Windows NT Workstation
	that is running the Windows NT Resource Kit tools.
	
	Additional query words: reskit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351
	Version           : 3.50 3.51
	
	=============================================================================
	
