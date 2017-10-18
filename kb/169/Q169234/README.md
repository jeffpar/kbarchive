---
layout: page
title: "Q169234: Cannot Set Separator in Regional Settings Tool to Null"
permalink: kb/169/Q169234/
---

## Q169234: Cannot Set Separator in Regional Settings Tool to Null

	Article: Q169234
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set the list separator or digit-grouping symbol to a null
	character, you receive one of the following error messages:
	
	  One or more of the characters you typed in this field are invalid. Try typing
	  different characters.
	
	  One or more of the characters you typed for Grouping Symbol are invalid. Try
	  typing different characters.
	
	The list separator and digit-grouping symbol are configured by double- clicking
	Regional Settings in Control Panel, and then clicking the Number tab.
	
	
	CAUSE
	=====
	
	The Windows NT 4.0 user interface does not allow you to set the list separator
	or digit-grouping symbol to null using the Regional Settings tool in Control
	Panel.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	     HKEY_CURRENT_USER\Control Panel\International
	
	2. Edit the following values:
	
	     sThousand (for the digit-grouping symbol)
	     sList (for the list separator)
	
	3. Double-click the value you want to change, delete the current setting (which
	  is a comma by default), and click OK. This sets the value to null.
	
	Note that this change also makes the null value available in the List Separator
	and Digit Grouping Symbol boxes in the Regional Settings tool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: blank
	
	======================================================================
	Keywords          : kberrmsg kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
