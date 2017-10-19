---
layout: page
title: "Q124875: SMS: Spell Checker for Shared Version of Word Does Not Work"
permalink: /kb/124/Q124875/
---

## Q124875: SMS: Spell Checker for Shared Version of Word Does Not Work

	Article: Q124875
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Systems Management Server to share Microsoft Word, the spell
	checker does not work and the following error appears:
	
	  Word cannot find the spelling file XXXXX for English (US)
	
	  -or-
	
	  Word cannot find the spelling file MSAP2_??.LEX for English (US).
	
	Upon checking the WINWORD6.INI you may find corruption, that is random
	characters, on the lines that reference the location of the spell check files.
	
	RESOLUTION
	==========
	
	Microsoft has modified the file, SMSSETUP.EXE, to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110
	Version           : :1.1
	
	=============================================================================
	
