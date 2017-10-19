---
layout: page
title: "Q108504: SFM: Some Files Get Wrong Icon in Finder"
permalink: /kb/108/Q108504/
---

## Q108504: SFM: Some Files Get Wrong Icon in Finder

	Article: Q108504
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
	
	SYMPTOMS
	========
	
	When you are using Services for Macintosh (SFM) on a Windows NT Advanced Server,
	some of the files may appear with incorrect icons to the Macintosh users.
	
	WORKAROUND
	==========
	
	Load the file into Word for the Macintosh by running Word and then using the
	choose Open from the File menu. After the file is loaded, choose Save As from
	the File menu and use the same filename. This overwrites the original file and
	will be fine.
	
	MORE INFORMATION
	================
	
	When you are using a Windows NT Advanced Server as a way to share files between
	PC users and Macintosh users, some files may appear incorrectly, specifically
	between Microsoft Word for Windows 6.0 and Microsoft Word for the Macintosh 5.1.
	Out of 100 files saved by Word for Windows users, approximately five will show
	up in the Macintosh Finder with a generic "PC file" icon. When the file is in
	this state, Macintosh users cannot double- click the icon to edit the file.
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Advanced
	Server version 3.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt winword Mac
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
