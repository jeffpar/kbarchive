---
layout: page
title: "Q125618: Problem with Display Warning when Using Non-US Language"
permalink: /kb/125/Q125618/
---

## Q125618: Problem with Display Warning when Using Non-US Language

{% raw %}

	Article: Q125618
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message appears when you start the Display portion of Control
	Panel after you change systems language settings and restart Windows NT:
	
	  WARNING!
	
	  There are no font selections available for your currently selected language
	  setting. Font selections are only available for the English (Americain)
	  language. Use the International option in Control Panel to change your
	  language setting.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the International portion of Control Panel and change the language
	  setting to anything other than English (American).
	
	2. Choose OK. Notice that there is no message indicating that a shutdown and
	  restart must occur before changes can take place. You are simply returned to
	  Control Panel.
	
	3. Exit Control Panel.
	
	4. Shutdown and restart Windows NT.
	
	5. Run the Display portion of Control Panel and note the warning message
	  referenced above. Notice that "American" is misspelled "Americain" in the
	  warning message.
	
	Summary of Problems in this Bug and Causes
	------------------------------------------
	
	1. Changes made to language settings don't take effect until the system is
	  shutdown and restarted, but there is no message indicating this.
	
	  Cause: The current release of Windows NT does not take this fact into account.
	
	2. You can only use small fonts when selecting other English-based locales, such
	  as English (Australian); otherwise, when you use large fonts you get the
	  above warning message after changing locales.
	
	  Cause: The current release of Windows NT contains only small font support for
	  locales other than English (American).
	
	3. "American" is misspelled (see step 5 above).
	
	  Cause: Typographical error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt 3.5
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
