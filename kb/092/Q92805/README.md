---
layout: page
title: "Q92805: PC Win: Spelling and Custom Dict Entries in WIN.INI"
permalink: /kb/092/Q92805/
---

## Q92805: PC Win: Spelling and Custom Dict Entries in WIN.INI

	Article: Q92805
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail put special Spelling and Custom Dict 1 entries into the WIN.INI
	file (other Microsoft products share a single Spelling and Custom Dict 1 entry).
	For example, Microsoft Mail adds the following three lines to the [MS Proofing
	Tools] section of the WIN.INI file:
	
	  [MS Proofing Tools]
	  Custom Dict=C:\win31\msapps\proof\CUSTOM.DIC
	  Spelling 1033,0=c:\win31\msapps\proof\msspell.dll,
	
	  c:\win31\msapps\proof\mssp_am.lex
	
	  -> Spelling (Mail) 1033,0=C:\WIN31\MSAPPS\PROOF\MSSPELL.DLL,
	  -> C:\WIN31\MSAPPS\PROOF\MSSP_AM.LEX
	  -> Custom Dict 1=C:\win31\msapps\proof\CUSTOM.DIC
	
	Microsoft Mail takes this approach in order to leave existing Windows
	applications as they are while at the same time providing Microsoft Mail with
	the versions of the spell checker and the dictionaries it requires.
	
	MORE INFORMATION
	================
	
	Here is the complete process Microsoft Mail follows:
	
	1. Look for existing spelling entries in the WIN.INI file.
	
	2. Check the .DLL file names of the spelling entries.
	
	3. If the spelling entry .DLL filename is not MSSPELL.DLL, add a line to the
	  WIN.INI so Microsoft Mail will not interfere with other Windows applications.
	
	4. If the spelling entry .DLL filename is MSSPELL.DLL, try to update the DLL
	  file to the latest version if possible. One problem here is that Microsoft
	  Publisher requires version 1.01 of the speller. Microsoft Mail would break
	  Microsoft Publisher if it updated the .DLL version rather than putting in a
	  special section just for Microsoft Mail.
	
	5. Look for a Custom Dict 1 entry in the WIN.INI file. If one is found, it may
	  point to a dictionary that is not supported by Microsoft Mail. Because it is
	  not possible to determine what type of dictionary (if any) is pointed to by a
	  Custom Dict 1 entry, Microsoft Mail creates a new entry in the WIN.INI file
	  to point to the custom dictionary (a Softart dictionary) that Microsoft Mail
	  does support.
	
	6. Create a Custom Dict 1 entry if none exists in the WIN.INI file.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
