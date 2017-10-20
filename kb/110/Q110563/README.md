---
layout: page
title: "Q110563: Changing the Default Font in Windows NT Microsoft Mail"
permalink: /kb/110/Q110563/
---

## Q110563: Changing the Default Font in Windows NT Microsoft Mail

{% raw %}

	Article: Q110563
	Product(s): Microsoft Windows NT
	Version(s): 3.1,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Windows NT 3.x:
	---------------
	
	By default, Microsoft Mail uses Helvetica 10 for the message body text. You
	can modify the registry if you want to change the default font.
	
	To change the default font for the message body text, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Open Registry Editor by choosing Run from the File menu of Program Manager,
	  type REGEDT32.EXE, and then choose the OK button.
	
	2. Use the following path:
	  HKEY_CURRENT_USER\Software\Microsoft\Mail\Microsoft Mail
	
	3. From the Edit menu, choose Add Value to create the following entry:
	
	  NormalFont REG_SZ
	
	  From the Edit menu, choose Add Value. In the Value Name field, type
	  NormalFont. Select REG_SZ for the Data Type and choose the OK button. In the
	  String field, type the following and then choose the OK button:
	
	  "<typeface name>, <point size>, <flag for bold>, <flag
	  for italic>"
	
	The following is a sample registry entry for changing the font to Arial:
	
	  NormalFont:REG_SZ:Arial,14,0,0
	
	This entry has four parts, each separated by a comma: typeface name (not
	the font file name), point size, flag for bold, and flag for italic. The
	Change Font command in the View menu toggles between the Normal font and
	the Fixed font. The Fixed font is useful for viewing messages that were
	created using a fixed-pitch font. Both entries affect only message body
	text, not the message envelope text or folder lists; Mail uses Helvetica 8
	for that purpose.
	
	Windows NT 4.0:
	---------------
	
	You may change the font on Windows NT 4.0 Messaging System by:
	
	- Select Tool on the menu
	
	- Select Option
	
	- Select Read folder or Send folder
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,4.0
	
	=============================================================================
	

{% endraw %}
