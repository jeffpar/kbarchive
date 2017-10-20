---
layout: page
title: "Q164156: XCLN: Err Msg: Spell Check Operation could not be Completed"
permalink: /kb/164/Q164156/
---

## Q164156: XCLN: Err Msg: Spell Check Operation could not be Completed

{% raw %}

	Article: Q164156
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When spell checking a message within a Microsoft Exchange Windows client, the
	following error may be displayed
	
	  The spelling operation could not be completed. The spelling
	  checker could not be started. Some components are either missing
	  or incorrectly configured in your Win.ini file. See your
	  administrator.
	
	This error is usually due to the Microsoft Exchange Client looking for spelling
	files in either an invalid directory or a location that you don't have
	permission to access. Confirm the following registry entries and Win.ini entries
	point to valid files stored in accessible locations.
	
	For Windows NT and Windows 95 clients:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Proofing Tools
	  \Spelling\1033\Normal
	
	  Engine=C:\Program Files\Common Files\Microsoft Shared\PROOF\MSSP232.DLL
	
	  Dictionary=C:\Program Files\Common Files\Microsoft Shared\PROOF\mssp2_en.lex
	
	For Windows 3.x clients:
	
	     [MS Proofing Tools]
	     Custom Dict=C:\win31\msapps\proof\CUSTOM.DIC
	     Spelling 1033,0=c:\win31\msapps\proof\msspell.dll,
	        c:\win31\msapps\proof\mssp_am.lex
	     Spelling (Mail) 1033,0=C:\WIN31\MSAPPS\PROOF\MSSPELL.DLL,
	        C:\WIN31\MSAPPS\PROOF\MSSP_AM.LEX
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
