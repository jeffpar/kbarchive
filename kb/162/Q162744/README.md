---
layout: page
title: "Q162744: Using AOL's Internet Connection with Windows Programs"
permalink: /kb/162/Q162744/
---

## Q162744: Using AOL's Internet Connection with Windows Programs

	Article: Q162744
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1997 edition
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Cinemania for Windows 1997 edition 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Music Central for Windows 1997 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article tells how to activate single-click online access from
	32-bit Windows programs such as Encarta 97 and Cinemania 97 with America
	Online.
	
	To setup single-click access, do the following:
	
	1. Install "AOL 3.0 for Windows 95." This is available from America Online.
	
	2. Start the AOL software.
	
	3. Let the software dial and connect.
	
	4. Minimize AOL.
	
	  NOTE: Do not exit AOL. You must leave AOL running to provide the Internet
	  connection.
	
	5. Start your Windows program. The online features should now work
	  automatically.
	
	MORE INFORMATION
	================
	
	AOL 3.0 for Windows 95 installs the AOL Web browser and the standalone version
	of Microsoft Internet Explorer 3.01 (Version 3.0 (4.70.1215)). Windows programs
	that directly access Web features use Internet Explorer.
	
	AOL's software provides the Internet connection using the standard Windows 95
	32-bit "Winsock" interface. This is compatible with 32-bit programs that use Web
	access as well as "Designed for Windows 95" games that use Internet connections
	for multi-player gaming.
	
	NOTE: AOL 3.0 for Windows 95 must be started manually to provide the Internet
	connection. Let AOL dial and connect to the Internet before using online
	features.
	
	Winsock Files
	-------------
	
	If problems occur when using Internet Explorer over AOL's dial-up Internet
	connection, verify the correct Windows 95 Winsock files are in use. Replace them
	as necessary by running Windows 95 Setup again.
	
	+---------------------------------------------------+
	| File                          | Size   | Version  | 
	+---------------------------------------------------+
	| C:\Windows\Winsock.dll        | 42,080 | 4.00.950 | 
	+---------------------------------------------------+
	| C:\Windows\System\Wsock32.dll | 66,560 | 4.00.950 | 
	+---------------------------------------------------+
	
	
	Internet Explorer Not Working
	-----------------------------
	
	Internet Explorer is accessed by double-clicking "The Internet" icon on your
	Windows desktop. If Internet Explorer cannot start, re-install AOL 3.0 for
	Windows 95 by using Add/Remove Programs in the Control Panel.
	
	Proxy Settings
	--------------
	
	If, previous to installing AOL for Windows 95, you used Internet Explorer with a
	proxy server, you need to turn off the proxy settings. Both the AOL Web browser
	and Internet Explorer share the same configuration settings. Contact your
	network administrator for details.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbCineManiaSearch kbBookShelf1996 kbBookShelf1997 kbCinemania1997 kbMusicCentral kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbMusicCentral1997
	Version           : :1997 edition
	Issue type        : kbhowto
	
	=============================================================================
	
