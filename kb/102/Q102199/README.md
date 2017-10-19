---
layout: page
title: "Q102199: How to Protect the MS UAM on Individual Macintoshes"
permalink: /kb/102/Q102199/
---

## Q102199: How to Protect the MS UAM on Individual Macintoshes

	Article: Q102199
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a Windows NT Advanced Server running Services for the Macintosh requires that
	the Macintosh computers use the Microsoft User Authentication Module (UAM), then
	the Microsoft UAM may need to be protected from user activity, such as throwing
	the MS UAM away.
	
	See below for procedures that you can use to protect the MS UAM.
	
	MORE INFORMATION
	================
	
	To protect the MS UAM, do at least one of the following two procedures. Note
	that both of these procedures are performed on the Macintosh workstation,
	because that is where the MS UAM resides.
	
	Procedure 1
	-----------
	
	Make the AppleShare folder in the Macintosh's System Folder invisible. This keeps
	the Finder from displaying the folder, making it unlikely to be erased on
	accident. Hiding the folder requires using ResEdit or a similar utility.
	
	Procedure 2
	-----------
	
	Lock the MS UAM file in the AppleShare folder. This helps to keep the file from
	being thrown away by presenting the user with a warning first. To lock the MS
	UAM:
	
	1. Go to the Finder and select the MS UAM file in the AppleShare Folder.
	
	2. From the File menu, choose Get Info.
	
	3. Select the Locked check box in the bottom of the Get Info window, and close
	  the window.
	
	The best protection for the MS UAM is to use both of the actions described above.
	This hides the MS UAM and makes it more difficult to throw away by accident.
	
	NOTE: The actions in this article are designed to offer protection from casual
	users. More experienced users will still be able to remove the MS UAM if they
	want to.
	
	ResEdit is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt password
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
