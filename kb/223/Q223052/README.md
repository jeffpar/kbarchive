---
layout: page
title: "Q223052: Cannot Set Custom Form As Default Paper Size"
permalink: kb/223/Q223052/
---

## Q223052: Cannot Set Custom Form As Default Paper Size

	Article: Q223052
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After Windows NT 4.0 Service Pack 4 is installed on Far East versions of Windows
	NT, custom forms cannot be used. The custom form can be created and selected as
	the default paper size; however, when you try to use it through WordPad or
	Microsoft Word, it is not selected as the default.
	
	CAUSE
	=====
	
	This problem does not occur on the English version of Windows NT. Localization
	of Rasdd.dll and Rasddui.dll may have left default document settings
	uninitialized.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Windows NT
	version 4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
