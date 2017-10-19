---
layout: page
title: "Q140640: BUG: GP Fault Opening a File w/ Visual Basic 3.0 &amp; Windows NT"
permalink: /kb/140/Q140640/
---

## Q140640: BUG: GP Fault Opening a File w/ Visual Basic 3.0 &amp; Windows NT

	Article: Q140640
	Product(s): Microsoft Windows NT
	Version(s): 3.0,3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT may return a general protection (GP) fault in Vb.exe at various
	memory addresses when you use the "Open <file> For Append" command in
	Visual Basic version 3.0.
	
	RESOLUTION
	==========
	
	Close the text file prior to running the Visual Basic program or upgrade to
	Visual Basic 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5, and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set up an application in Visual Basic 3.0 that opens a text file for append.
	
	2. Open the text file in an application such as Notepad.
	
	3. Run the Visual Basic application created in step 1.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.0,3.5,3.51
	
	=============================================================================
	
