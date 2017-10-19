---
layout: page
title: "Q99695: PC Win: Spell Checker Changes Words Without Prompt"
permalink: /kb/099/Q99695/
---

## Q99695: PC Win: Spell Checker Changes Words Without Prompt

	Article: Q99695
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2; :3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	- Microsoft Mail for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail for Windows spell checker uses a custom dictionary file. If
	words are added through the user interface while another word is in the
	Suggested field, the spell checker may appear to be changing words without
	prompting the user for confirmation.
	
	
	CAUSE
	=====
	
	The custom dictionary is a text file and by default is named CUSTOM.DIC. The
	file consists of special or unique words that were not found by the spell check
	process in the main dictionary. The user may choose to add these words to the
	custom dictionary file. The added words are arranged within the custom
	dictionary file one word per line.
	
	If words are added with another word in the Suggested field, the original word
	may be replaced with the suggested word. The result would be two words per line
	within the custom dictionary file. If this happens, the spell checker will
	replace the first word on the line with the second word and will not prompt the
	user. For example, suppose the CUSTOM.DIC file contains the following entry:
	
	  manman madman
	
	Any time the spell checker encounters the first entry "manman," it would be
	changed to "madman" without prompting the user for confirmation.
	
	RESOLUTION
	==========
	
	To correct the problem, use a text editor to edit the custom dictionary and
	remove the second word on the line.
	
	Additional query words: 3.00 3.00b 3.20 spellchecker replaces check spelling always suggest bad words windows nt
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMail350NT kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2; :3.5
	
	=============================================================================
	
