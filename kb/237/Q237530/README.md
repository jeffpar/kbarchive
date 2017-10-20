---
layout: page
title: "Q237530: Encarta 2000: Error Message When You Double-Click a Shortcut"
permalink: /kb/237/Q237530/
---

## Q237530: Encarta 2000: Error Message When You Double-Click a Shortcut

{% raw %}

	Article: Q237530
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a shortcut to an article in Microsoft Encarta Encyclopedia
	2000, you may receive the following error message:
	
	  There is a problem starting Encarta Encyclopedia:
	
	  The command line is improperly formatted.
	
	  Please correct the command line parameters, or load Encarta Encyclopedia
	  without any command line parameters.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- Encarta Encyclopedia 2000 is not running.
	
	- The URL that links the shortcut to the article contains one or more blank
	  spaces between characters.
	
	RESOLUTION
	==========
	
	To work around this issue:
	
	1. On the Microsoft Windows desktop, right-click the selected shortcut, and then
	  click Properties.
	
	2. With your pointing device, place the insertion point to the right of the last
	  character in the URL box.
	
	3. Press the BACKSPACE key to delete all characters up to and including the
	  first EQUAL SIGN (=) to the left of the final blank space in the URL.
	
	4. Click OK.
	
	5. Scroll to the position in the article from which you created the shortcut.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Encarta Encyclopedia
	2000.
	
	MORE INFORMATION
	================
	
	To prevent this issue from occurring, make sure Encarta Encyclopedia 2000 is
	running when you double-click a shortcut on the Windows desktop.
	
	Additional query words: multi multi-media media mm ee2k hyperlink icons
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
