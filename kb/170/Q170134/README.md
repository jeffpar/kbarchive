---
layout: page
title: "Q170134: RASDIAL Error 623 When Dial-up Entry Name Contains Spaces"
permalink: /kb/170/Q170134/
---

## Q170134: RASDIAL Error 623 When Dial-up Entry Name Contains Spaces

{% raw %}

	Article: Q170134
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Windows NT RASDIAL utility to dial an entry from the
	remote access service (RAS) phone book (Windows NT 3.51) or dial-up networking
	(Windows NT 4.0), the following error message will be returned if the entry name
	contains a space or spaces:
	
	  Error 623 - Cannot find the phone book entry
	
	CAUSE
	=====
	
	RASDIAL reads the name entered at the RASDIAL command until it finds a space.
	For example, if you have an entry in your RAS phone book called MY ISP and you
	attempt to dial it using RASDIAL by entering the following command: RASDIAL MY
	ISP, you get the error 623. This is because RASDIAL tries to dial an entry in
	your RAS phone book called MY.
	
	RESOLUTION
	==========
	
	Put quotation marks around the dial-up entry name; for example:
	
	  RASDIAL "MY ISP"
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	

{% endraw %}
