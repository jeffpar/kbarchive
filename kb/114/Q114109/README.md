---
layout: page
title: "Q114109: Mail Spell Checker Defaults to Windows NT Subdirectory"
permalink: kb/114/Q114109/
---

## Q114109: Mail Spell Checker Defaults to Windows NT Subdirectory

	Article: Q114109
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the path for your custom dictionary in the Registry to be either a
	UNC path or a local drive path (other than the default Windows NT subdirectory),
	when you start Mail, and then choose Spelling from the Edit menu after you
	compose a new message, your changes are lost and Mail changes the path back to
	your Windows NT default directory.
	
	According to the Windows NT Resource Kit, Registry Entries for Microsoft Mail,
	you can change the path for your custom dictionary, by changing the
	HKEY_CURRENT_USER\Software\Microsoft\Mail\MS Proofing Tools. This does not work.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server. This problem was corrected in Windows NT version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
