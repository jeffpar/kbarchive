---
layout: page
title: "Q131230: NT and WfWG Clients Get Diff. Results Accessing Share w/o Perm."
permalink: /kb/131/Q131230/
---

## Q131230: NT and WfWG Clients Get Diff. Results Accessing Share w/o Perm.

	Article: Q131230
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive different results when trying to access a share from a Windows NT
	client versus a Windows for Workgroups client if the share is on an NTFS
	partition and the NTFS directory permissions have been revoked for the user on
	this share.
	
	- From the Windows for Workgroups client you can connect to the share, however
	  the following error appears:
	
	  No File Found
	
	- From a Windows NT client you are not be able to connect to the share, and the
	  following error appears:
	
	  You do not have permission to access this directory
	
	As a result, from the Windows for Workgroups computer, you can access a
	subdirectory of this share if you have permission on it, but from the Windows NT
	client, you cannot access the share or any subdirectory under it.
	
	CAUSE
	=====
	
	The server returns an SMB_ERR_NO_FILES response to the Windows for Workgroups
	client and an STATUS_ACCESS_DENIED response to the Windows NT client.
	
	WORKAROUND
	==========
	
	Directly share the subdirectory when you must revoke permissions on its parent
	share.
	
	Additional query words: prodnt 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : 3.50
	
	=============================================================================
	
