---
layout: page
title: "Q112402: DIR and File Manager Show SFM Files with Wrong Size"
permalink: /kb/112/Q112402/
---

## Q112402: DIR and File Manager Show SFM Files with Wrong Size

	Article: Q112402
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The wrong file size will be displayed when you view a Macintosh System
	executable or font file on a Services For Macintosh (SFM) volume on a Windows NT
	Server computer.
	
	This problem will occur in all versions of Windows NT when you use DIR from the
	command prompt or in File Manager. This will also occur when viewing a Macintosh
	executable file with Windows NT 4.0 Explorer. A Macintosh client shows the
	correct file size.
	
	CAUSE
	=====
	
	Macintosh files have both a Data Fork and a Resource Fork. Windows NT gets the
	file size info from the Data Fork. If no information is available in the Data
	Fork, the file size displayed is zero. Both Macintosh executable files and font
	files have 0 bytes listed in the Data Fork, so their size is displayed as 0
	bytes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.1,
	3.5, 3.51 and 4.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt Mac zero exe sfm
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
