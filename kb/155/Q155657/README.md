---
layout: page
title: "Q155657: Incoming Internet Mail Not Formatted Correctly"
permalink: /kb/155/Q155657/
---

## Q155657: Incoming Internet Mail Not Formatted Correctly

	Article: Q155657
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows Messaging to view Internet mail, if the mail is
	formatted in columns using spaces to align the text, the columns do not align.
	
	CAUSE
	=====
	
	This problem occurs because Windows Messaging does not use a fixed-pitch (or
	monospace) font to display messages. The default font in Windows Messaging is a
	variable-pitch font. There is currently no way to change the default font to a
	fixed-pitch font.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
