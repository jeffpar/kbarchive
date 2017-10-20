---
layout: page
title: "Q176318: WINS Manager Displays Dots Instead of Sixteenth Character"
permalink: /kb/176/Q176318/
---

## Q176318: WINS Manager Displays Dots Instead of Sixteenth Character

{% raw %}

	Article: Q176318
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view your Windows Internet Name Service (WINS) database in the Show
	Database dialog box of WINS Manager, there may be a series of three dots instead
	of the normal sixteenth character hexadecimal identifier.
	
	For example:
	
	  Server1...
	
	whereas you would normally see:
	
	  Server1[20h]
	
	NOTE: This does not cause name resolution problems for clients using the same
	NetBIOS Scope.
	
	CAUSE
	=====
	
	You configured your WINS Server with a NetBIOS Scope in the TCP/IP Properties.
	
	RESOLUTION
	==========
	
	This issue is strictly a display problem and does not provide any name
	resolution problems. To view the complete WINS entries, you will need to do one
	of the following:
	
	- Disable the NetBIOS Scope identifier on the WINS Server.
	
	  -or-
	
	- Winsdmp.exe or Winscl.exe from the Windows NT Server Resource Kit to view
	  your WINS information.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q142302
	TITLE : Information About the WINSDMP.EXE Utility
	
	ARTICLE-ID: Q137582
	TITLE : Using WINSCL.EXE
	
	MORE INFORMATION
	================
	
	Your WINS Server stores the NetBIOS name with the hex value as the sixteenth
	character. The entry has the NetBIOS Scope appended to the sixteen characters.
	
	NOTE: Using a NetBIOS Scope improperly can result in failure to establish trusts
	between domains, and loss of connectivity.
	
	
	Additional query words: dot
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
