---
layout: page
title: "Q154414: WINS Default Configuration Value Changes for Windows NT 4.0"
permalink: kb/154/Q154414/
---

## Q154414: WINS Default Configuration Value Changes for Windows NT 4.0

	Article: Q154414
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Windows NT Server 4.0, WINS has changed its default configuration values
	from those defined under Windows NT 3.51.
	
	The default values for Windows NT Server 3.51 were changed in Windows NT Server
	4.0 to the following:
	
	  Renewal Interval = 96 Hours to 144 Hours
	  ExtinctionInterval = 96 Hours to 144 Hours
	  ExtinctionTimeout = 96 Hours to 144 Hours
	
	These values were changed to allow WINS to handle larger configurations of
	computers, as well as cut down on network traffic.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
