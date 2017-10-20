---
layout: page
title: "Q123862: Opening a File Causes the Application to Close"
permalink: /kb/123/Q123862/
---

## Q123862: Opening a File Causes the Application to Close

{% raw %}

	Article: Q123862
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a file from an application that uses common dialog
	boxes, the application appears to close.
	
	CAUSE
	=====
	
	A bug in ChopText() (called by DlgDirList) trashes the stack in USER
	server-side.C:\SW\MW\R2\LIB\SERVICES\NT almost fits into static control, while
	C:\...\MW\R2\LIB\SERVICES\NT does fit, even though it is more characters. In
	this case, ChopText substitutes the first 6 characters of the path with a prefix
	containing 7 characters. The extra character is written in front of lpch, which
	corrupts the stack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodnt 3.50 file/open screen disappear
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
