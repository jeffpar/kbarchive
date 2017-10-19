---
layout: page
title: "Q108318: AppleTalk Rights Inheritence in Subfolders"
permalink: /kb/108/Q108318/
---

## Q108318: AppleTalk Rights Inheritence in Subfolders

	Article: Q108318
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows NT Advanced Server Services for Macintosh, AppleTalk cascades the
	general rights down to each subfolder from the parent folder.
	
	MORE INFORMATION
	================
	
	For example, if a file folder has the following rights
	
	                         See          See           Make
	                        Folder       Files         Changes
	
	  --------------------------------------------------------
	  Owner:  User1           X            X              X
	
	  User\Group: Users       X            X              X
	
	  Everyone                O            O              O
	
	a different user who creates a folder within the above folder would receive the
	following rights:
	
	                         See          See           Make
	                        Folder       Files         Changes
	
	  --------------------------------------------------------
	  Owner:  User2           X            X              X
	
	  User\Group: Users       X            X              X
	
	  Everyone                O            O              O
	
	The owner of this new folder is now the new owner and thus this user now has full
	rights to change the rights for any group that wants to access this folder (on
	the Macintosh side). This can bring up some administration problems because an
	administrator may want to give all rights of administration to a given folder's
	owner for all subfolders. This is an issue related to AppleTalk functionality
	rather than to Windows NT Advanced Server or LAN Manager rights.
	
	Additional query words: sfm prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
