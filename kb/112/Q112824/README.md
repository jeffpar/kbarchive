---
layout: page
title: "Q112824: Mac Client Does Not Allow Auto Reconnect at Startup"
permalink: /kb/112/Q112824/
---

## Q112824: Mac Client Does Not Allow Auto Reconnect at Startup

	Article: Q112824
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Automatic Reconnect At Startup option in the Macintosh Chooser Connect
	dialog box is unavailable when you make a network connection from your Macintosh
	computer to a Windows NT Advanced Server with Services for Macintosh (SFM) using
	the Microsoft User Authentication Module (UAM).
	
	CAUSE
	=====
	
	This behavior is a limitation of the Macintosh Finder. All non-Apple UAM's
	cannot reconnect at startup, including those from Novell, DEC, Banyan, and
	Microsoft.
	
	NOTE: The Finder is a Macintosh application that allows access to documents and
	other applications. The Finder uses icons to represent objects on a disk or
	volume.
	
	WORKAROUND
	==========
	
	To make the volume automatically reconnect when you restart your computer,
	connect to the volume from the Chooser and create an alias for the volume.
	
	NOTE: You must enable the following for this to work correctly:
	
	- Through File Manager, MacFile, you must select "Guests Can Use this Volume."
	  This disables security on your volume so that anyone can access the Mac
	  volume.
	
	The Apple products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt Mac
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
