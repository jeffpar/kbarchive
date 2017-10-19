---
layout: page
title: "Q159597: Windows Messaging Setup Wizard Error: &quot;Path ... Is Not Valid&quot;"
permalink: /kb/159/Q159597/
---

## Q159597: Windows Messaging Setup Wizard Error: &quot;Path ... Is Not Valid&quot;

	Article: Q159597
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you run the Windows Messaging Setup Wizard, you may receive one of the
	following error messages:
	
	  Windows Messaging Setup Wizard
	  The path specified for the file C:\Mail\Mailbox.pst is not valid.
	
	  -or-
	
	  Path does not exist. Please verify the correct path was given.
	
	  -or-
	
	  Windows Messaging Setup Wizard
	  The path specified for this personal address book file is not valid. Type the
	  path and filename of the personal address book you want to use,or choose
	  Browse to select a location.
	
	NOTE: The path specified in the preceding error messages is given as an example;
	the path may vary depending on your specific path.
	
	CAUSE
	=====
	
	You typed in a new path for the personal folder file (PST file) or the personal
	address book (PAB file), and one or more folders in the path you specified does
	not exist. The Windows Messaging Setup Wizard will only create new folders for
	you when you are using Browse.
	
	RESOLUTION
	==========
	
	To resolve this problem, you must either specify a path that contains an
	existing folder or create the folder with Browse before continuing with the
	Windows Messaging Setup Wizard.
	
	NOTE: Do not confuse the term "folder" (referring to the term currently used to
	represent directories on your hard disk drive) with "personal folder file" (the
	file containing your Windows Messaging folders, where mail messages are stored).
	
	Additional query words: prodnt exchange
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
