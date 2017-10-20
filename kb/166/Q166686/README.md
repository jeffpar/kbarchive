---
layout: page
title: "Q166686: English Text in Error Message on Non-English Windows NT"
permalink: /kb/166/Q166686/
---

## Q166686: English Text in Error Message on Non-English Windows NT

{% raw %}

	Article: Q166686
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetworkkbbuglist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the RASDIAL utility is used to dial a non-existent entry on a non- English
	version of Windows NT 4.0, the following is displayed:
	
	  C:> rasdial bogus
	  Error from RasGetEntryProperties = 623        <-------- Problem
	
	  RAS-Fehler 623 - Telefoneintrag konnte nicht gefunden werden.
	
	  Weitere Hilfe zu diesem Fehler erhalten Sie folgendermaszen:
	          Geben Sie ein: 'winhlp32 rasphone.hlp'
	          Wahlen Sie die Index-Seite in der Windows-Hilfe aus, und geben
	          Sie dann
	  ein: 'Fehler 623'
	
	NOTE: The spelling of the following two words is changed from the original
	spelling because the Knowledge Base cannot display some of the characters:
	
	  folgendermaszen - the "sz" is used to represent the German
	  alphabetic character "ess zeht."
	
	  Wahlen - the letter "a" is used to represent the German alphabetic
	  Character "a umlaut."
	
	CAUSE
	=====
	
	This occurs because the text "Error from:" is hard-coded and not localized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt nttcp
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
