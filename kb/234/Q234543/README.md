---
layout: page
title: "Q234543: Internet Explorer Installs Newer Encryption Files on SP3 but Not"
permalink: /kb/234/Q234543/
---

## Q234543: Internet Explorer Installs Newer Encryption Files on SP3 but Not

	Article: Q234543
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Internet Explorer 5 on a computer running Windows NT
	4.0 Service Pack 3, new encryption files are installed. However, when you
	install Internet Explorer 5 on a computer running Windows NT 4.0 Service Pack 4,
	these encryption files are not updated, even though they are older files.
	
	CAUSE
	=====
	
	This issue occurs because of a file versioning problem. Even though the files
	are older, their version was higher and thus, they were not overwritten. This
	behavior has been corrected in Windows NT 4.0 Service Pack 5 (SP5) so that both
	Internet Explorer 5 and SP5 install the same version of these encryption files.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	The latest service pack is also available at the following Internet location:
	
	  http://www.microsoft.com/windows/servicepacks/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
