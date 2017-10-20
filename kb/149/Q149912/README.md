---
layout: page
title: "Q149912: Network Connection to Macintosh Alias Could Not Be Found"
permalink: /kb/149/Q149912/
---

## Q149912: Network Connection to Macintosh Alias Could Not Be Found

{% raw %}

	Article: Q149912
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An alias for an application, file, or folder located on a Windows NT server can
	be created on a Macintosh client desktop. If the path to the original file that
	the alias is associated with is deleted, corrupted, or moved, the following
	error message appears:
	
	  The alias "Alias Title" could not be opened, because the shared disk "Shared
	  volume name," which contains the original item, could not be found on the
	  network.
	
	CAUSE
	=====
	
	This error usually occurs when the application or file has been moved or the
	"Shared volume name" has been changed. This can be determined by selecting the
	alias on the Macintosh desktop and clicking Get Info on the File menu. The
	window contains a field called "Original," which represents the path to the
	original file or application.
	
	Make sure the path is still valid and the application or file for which the alias
	was created is still there. This can be done by manually mounting the volume and
	running the application or file. If the path is different you can either:
	
	- Correct the path to the file by editing the Volume or Folder names to reflect
	  what is listed by the alias.
	
	  -or-
	
	- Delete the alias and re create it using the current path to the file.
	
	The original path reflected in the Get Info window on the Macintosh cannot be
	edited. The alias must be re-created.
	
	For additional information on Macintosh aliases, please see the following article
	in the Microsoft Knowledge Base:
	
	Q102740Macintosh Alias Does Not Use Microsoft UAM
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
