---
layout: page
title: "Q102740: Macintosh Alias Does Not Use Microsoft UAM"
permalink: kb/102/Q102740/
---

## Q102740: Macintosh Alias Does Not Use Microsoft UAM

	Article: Q102740
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	When a user creates an alias of a Macintosh volume that resides on a
	Windows NT Server running Services for Macintosh, that alias will use only
	the Apple User Authentication Module (UAM), even if the Windows NT Server
	computer requires the Microsoft UAM. (This remains true with Apple System
	7.5.)
	
	Apple System 7.x has the ability to create an alias for a file, folder, or
	volume. The alias is a small file that points to the original item. When
	the user selects the alias, the system automatically connects the user to
	where the original file, folder, or volume is, and uses the original. This
	functionality allows the user to have an item in many places at once,
	without actually duplicating the item.
	
	An alias of a Macintosh AppleShare volume lets the user bypass having to
	use the Chooser every time they want to use that AppleShare volume. When
	the alias to an AppleShare volume is opened, the user is either greeted
	with a logon dialog box, or is immediately logged on. (The former only
	happens if the alias was created from a volume in which the users name and
	password were saved.)
	
	With AppleShare Client 3.6.5, the alias works on "normal" AppleShare
	volumes or on AppleShare volumes that reside on Windows NT Servers running
	Services for Macintosh. The difference is that the alias only knows how to
	use the Apple UAM, and if the Microsoft UAM is required by the Windows NT
	Server, the alias will only be able to use the Apple UAM. This results in
	the user being logged on with the guest option, regardless of the user name
	and password given.
	
	AppleShare Client 3.7 software introduced support for third-party UAMs,
	such as the Microsoft UAM, in aliases. For more information on the updated
	AppleShare Client, contact Apple Technical Support at (800) SOS-APPL.
	
	The third-party products discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3.10 sfm prodnt security mac
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	
