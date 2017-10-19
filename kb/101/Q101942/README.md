---
layout: page
title: "Q101942: Err Msg: Network Error 2240 from Windows for Workgroups"
permalink: /kb/101/Q101942/
---

## Q101942: Err Msg: Network Error 2240 from Windows for Workgroups

	Article: Q101942
	Product(s): Microsoft Windows NT
	Version(s): 1.0,3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows for Workgroups version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While attempting to log onto a Windows NT Advanced Server domain from a Windows
	for Workgroups workstation, the following error message may be displayed:
	
	  Network Error 2240
	
	CAUSE
	=====
	
	This error message is generated because the user's Windows for Workgroups
	workstation is not listed as a possible workstation in the "User May Log On To
	These Workstations:" dialog in the profile for that user on the Windows NT
	Advanced Server.
	
	RESOLUTION
	==========
	
	To allow the user to log onto the domain, the user's Windows for Workgroups
	workstation name must me added to the list in Windows NTAS User Manager - User
	Properties - Logon From dialog box.
	
	Additional query words: wfw wfwg prodnt err msg alert interoperability (os/2 lm 2.x, novell, unix, nfs)
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbAudDeveloper kbWinNT310Search kbWFWSearch
	Version           : :1.0,3.1
	
	=============================================================================
	
