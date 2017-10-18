---
layout: page
title: "Q147451: Limit on Number of Macintosh Shares You Can Create"
permalink: kb/147/Q147451/
---

## Q147451: Limit on Number of Macintosh Shares You Can Create

	Article: Q147451
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Server can create as many Macintosh volumes as you want, but there is
	a limit on the client side that may cause connecting Macintosh computers to stop
	responding if you exceed 50 volumes.
	
	MORE INFORMATION
	================
	
	On the AppleShare 4.x server, you are limited to creating 50 volumes, each of
	whose names must contain 27 or fewer characters. The Macintosh finder was
	engineered never to expect more total characters than this, and when the finder
	looks for a server share, it allocates memory for a string that is 50x27
	characters long. When the finder encounters a server whose shares have a total
	string length greater than 50x27, this can cause the server to stop responding.
	
	On a Windows NT server, you can successfully create and mount a few hundred
	visible Macintosh volumes by giving the volumes very short names, such as A1,
	A2, B1, B2, and so on. You can increase the number of volumes you can create by
	minimizing the string length of the volume names.
	
	Additional query words: prodnt sfm
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
