---
layout: page
title: "Q166426: Internet Explorer in PCWNT Cannot View Chinese BIG5 Characters."
permalink: /kb/166/Q166426/
---

## Q166426: Internet Explorer in PCWNT Cannot View Chinese BIG5 Characters.

	Article: Q166426
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation, Pan Chinese Edition, version 4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Explorer version 3.0 in Pan Chinese Windows NT Workstation version 4.0
	cannot view a Chinese BIG5 home page or any Chinese text that is in BIG5 code
	page format. This is true even when Chinese (BIG5) is selected in the Font
	Settings dialog box.
	
	CAUSE
	=====
	
	This problem may have the following causes:
	
	- Language support for Internet Explorer 3.0 and Microsoft Exchange Server
	  version 4.0 is not installed.
	
	  -or-
	
	- The MingLiU font is missing or corrupted.
	
	  -or-
	
	- Internet Explorer 3.0 (4.70.1158) in Pan Chinese Windows NT Workstation 4.0
	  is the U.S. version.
	
	RESOLUTION
	==========
	
	To install language support for Internet Explorer 3.0 and Microsoft Exchange
	Server 4.0:
	
	1. Log on to an account with administrator privileges.
	
	2. Use the right mouse button to click the Tchinese.inf file in the Langpack
	  folder on the Pan Chinese Windows NT Workstation 4.0 Compact Disc, and then
	  click Install. Once installation is complete, shut down and restart your
	  computer.
	
	3. On the Internet Explorer View menu, click Options.
	
	4. On the General tab, click Font Settings.
	
	5. In the Character Sets box, click Traditional Chinese.
	
	6. In the Proportional Font box, click MingLiU.
	
	7. In the Fixed-width Font box, click MingLiu.
	
	8. In the MIME Encoding box, click BIG5, click OK, and then click OK again.
	
	With the LangPack installed, Internet Explorer 4.0 users can install and use the
	Japanese/Korean Input Method Editor (IME) for Windows 95 & Windows NT 4.0.
	This will allow users to not just display but also input Japanese and Korean
	text into Web forms and Outlook Express 4.0 e-mail messages. For more
	information, please see the following Microsoft Knowledge Base articlse:
	
	  ARTICLE-ID: Q186113
	  TITLE : Internet Explorer Input Method Editor 4.0 for apanese/Korean
	
	  ARTICLE-ID: Q152421
	  TITLE : Microsoft Internet Explorer 3.01 for Windows 95 Available
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbHLangChinesePan kbWinNT400search
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	
