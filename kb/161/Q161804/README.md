---
layout: page
title: "Q161804: VB 4.0 32-bit Custom Controls Reset After Applying WinNT 4.0 SP2"
permalink: /kb/161/Q161804/
---

## Q161804: VB 4.0 32-bit Custom Controls Reset After Applying WinNT 4.0 SP2

	Article: Q161804
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0 SP2
	Operating System(s): 
	Keyword(s): kbinterop kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP2 
	- Microsoft Windows NT Server version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the 32-bit version of Visual Basic 4.0 and upgrade to Windows
	NT 4.0 Service Pack 2, the SSPanel of Visual Basic loses its properties. The
	control behind the scenes is Threed32.ocx
	
	RESOLUTION
	==========
	
	Run the Windows NT 4.0 Service Pack 2 update again to remove Service Pack 2.
	However, this is only available it was selected when the service pack was first
	applied.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server version 4.0 Service Pack 2. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: SP2 prodnt sp vb
	======================================================================
	Keywords          : kbinterop kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search
	Version           : WINNT:4.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
