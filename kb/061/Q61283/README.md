---
layout: page
title: "Q61283: Mac Wkst: Custom Chime Does Not Sound When New Mail Arrives"
permalink: /kb/061/Q61283/
---

## Q61283: Mac Wkst: Custom Chime Does Not Sound When New Mail Arrives

{% raw %}

	Article: Q61283
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you change your Microsoft Mail for AppleTalk Networks chime to a custom
	chime, although the SND ID and the Purgeable check box are correctly set, the
	chime may not sound when new mail arrives.
	
	The problem may be caused by Suitcase II, version 1.2.5. If the Suitcase II INIT
	loads before the Microsoft Mail driver, the custom chime will not sound when
	mail arrives. To correct this problem, change the order in which the INITs load
	so that the Microsoft Mail driver loads before Suitcase II. This problem does
	not occur with the standard mail arrival chime, just the custom chime.
	
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
