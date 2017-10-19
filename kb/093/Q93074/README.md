---
layout: page
title: "Q93074: PC Win: Setup Does Not Change Language for Speller"
permalink: /kb/093/Q93074/
---

## Q93074: PC Win: Setup Does Not Change Language for Speller

	Article: Q93074
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install version 3.0, 3.0b, or 3.2 of Microsoft Mail for Windows, with the
	spell checking facility for one language, then install Mail with the spell
	checking facility for another language, spell checking will not work. If you try
	to check spelling in a message, Mail for Windows reports an error in loading the
	spell checker.
	
	CAUSE
	=====
	
	The Mail for Windows SETUP.EXE program adds or updates country information for
	the Spelling entry in the [Proofing Tools] section of WIN.INI, but does not
	update the [Proofing Tools] section in the MSMAIL.INI file.
	
	As a result, the MSMAIL.INI Spelling entry retains an outdated language setting
	if you re-install.
	
	RESOLUTION
	==========
	
	Find the correct language number under Spelling entry in the Proofing Tools
	section of WIN.INI and insert it under Spelling entry in the Proofing Tools
	section of MSMAIL.INI. Restart Mail for Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you install Mail for Windows with spell checking for a different language
	over a previously installed Mail, Mail checks the current MSMAIL.INI to see if
	it contains a Spelling entry. If an entry already exists, Mail leaves it intact
	as an existing valid value. When you install a new language, Mail detects the
	discrepancy between the entry you want and the current WIN.INI entry, so it
	writes the new WIN.INI Spelling entry. But Mail still considers the existing
	entry in the MSMAIL.INI to be correct, and does not update the MSMAIL.INI
	entry.
	
	When you install the United Kingdom version of Mail for Windows over the USA
	version, the Mail spell checker appears to work, but it uses the USA English
	dictionary, not the UK English dictionary which should have been installed.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
