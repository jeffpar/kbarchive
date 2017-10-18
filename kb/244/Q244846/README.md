---
layout: page
title: "Q244846: MAP Command in Nwscript.exe Does Not Work with Upper ASCII Codes"
permalink: kb/244/Q244846/
---

## Q244846: MAP Command in Nwscript.exe Does Not Work with Upper ASCII Codes

	Article: Q244846
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	French version(s) of Windows NT Server version 4.0 SP4, Terminal Server Edition.
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you install French Terminal Server Service Pack 4 (SP4) and the Client for
	NetWare, the MAP command in the NetWare login script may not work. If you remove
	SP4, the MAP command works correctly again.
	
	CAUSE
	=====
	
	This problem has been encountered with the French edition of Terminal Server
	SP4, but may also occur with any language.
	
	In the French version of Terminal Server SP4, the name of the 
	network provider for NetWare contains an accented "e" as the 
	second  letter in the name "Reseau Netware ou compatible." 
	In SP3, it is "Reseau NetWare ou compatible" with no accented 
	letter. The ASCII code for the accented "e" in SP4 is above 127, 
	and therefore the OEM code (MS-DOS) and the ANSI code (Windows) 
	are not the same. 
	
	During initialization, Nwscript.exe reads the name of the provider in the
	registry and converts the extended characters using the OEM code page instead of
	the ANSI code page. It then tries to map a drive, which is expecting an ANSI
	string and not an OEM string. This call does not succeed and generates a "The
	specified network provider name is invalid" (ERROR_BAD_PROVIDER) error message.
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, replace all registry entries for the network
	provider to make sure extended characters (ASCII code above 127) are not used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: gsnw
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
