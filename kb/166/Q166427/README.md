---
layout: page
title: "Q166427: How to Set System Locale in Multiple User Profile Environments"
permalink: kb/166/Q166427/
---

## Q166427: How to Set System Locale in Multiple User Profile Environments

	Article: Q166427
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Pan Chinese version of Windows NT Workstation version 4.0, system code
	pages can only be changed by a user who has Administrator rights. Only a user
	with Administrator rights can change the default locale, which includes all the
	locale ID changes, font code mapping, font display mapping, and all Vga*.* font
	changes. Non-administrators can change the locale, but they can only change the
	locale ID and regional settings for their own profile. The font, code, and
	display mappings are the defaults set by the administrator. The system default
	locale will be unavailable for non-administrators.
	
	Users can change the Date, Calendar, and Number formats only. The Set As System
	default locale in the Regional Settings is unavailable.
	
	The system code page and font mapping are based on the administrator settings.
	
	For example, if the System locale is set to Chinese (Taiwan) by the
	administrator, all Chinese characters can only be displayed as BIG5 or Unicode
	code page format; other Chinese character formats or Chinese applications using
	the GB or GBK code pages will display incorrectly.
	
	The administrator can determine what System locale is suitable for his or her
	users and install appropriate code page applications for them. Users can alter
	the Date, Calendar, and Number (including currency) format by changing the
	locale settings.
	
	RESOLUTION
	==========
	
	To change the System locale:
	
	1. Log on with Administrator user rights.
	
	2. Click Start and select Settings, and then Control Panel.
	
	3. Click the Regional Settings tab.
	
	4. Select either Chinese (PRC) or Chinese (Taiwan) locale.
	
	5. Check the Set as System default locale box and click the OK button.
	
	6. Restart the computer.
	
	Selected System locale will be activated after restarting.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q166429
	  TITLE : PCNTW: How to Set Appropriate System Locale for Applications
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
