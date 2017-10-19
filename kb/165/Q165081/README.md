---
layout: page
title: "Q165081: WINSCL Cannot Delete NetBIOS Registration That Contains Spaces"
permalink: /kb/165/Q165081/
---

## Q165081: WINSCL Cannot Delete NetBIOS Registration That Contains Spaces

	Article: Q165081
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to delete, register, query, or perform other action on a
	Windows Internet Name Service (WINS) database entry that contains spaces in the
	NetBIOS name, the operation fails. Usually, the error returned is:
	
	  Status returned is (FAILURE - 5)
	
	CAUSE
	=====
	
	WINSCL currently does not process NetBIOS registrations that contain spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5x and 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: extended garbage
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
