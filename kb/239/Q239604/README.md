---
layout: page
title: "Q239604: Unreadable Text in Regional Settings After Language Pack Install"
permalink: /kb/239/Q239604/
---

## Q239604: Unreadable Text in Regional Settings After Language Pack Install

	Article: Q239604
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add multiple language support on your computer and you view Regional
	Settings in Control Panel, unreadable text (for example, a box or vertical line)
	may be displayed in certain fields. Unreadable text may also be displayed in
	other windows or programs where you would expect to see normal text.
	
	CAUSE
	=====
	
	This behavior occurs because the files in the Langpack folder enable the use of
	non-English characters in documents and e-mail messages. However, the default
	system font is still used for the Windows NT user interface. Because the default
	system font is not capable of displaying all multiple language characters,
	unreadable text is displayed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For information about how to add languages in Windows NT, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q177561 HOWTO: Add and Enable Additional Languages in Windows NT
	
	
	
	Additional query words: garbled
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
