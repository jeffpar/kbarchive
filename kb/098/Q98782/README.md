---
layout: page
title: "Q98782: Mac Wkst: Message Summary Screen Not Displayed"
permalink: /kb/098/Q98782/
---

## Q98782: Mac Wkst: Message Summary Screen Not Displayed

{% raw %}

	Article: Q98782
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.1 of Microsoft Mail for AppleTalk Networks, the Message Summary
	screen may disappear so that only the menu bar displays. This problem may occur
	after you click the zoom box or after you launch Mail.
	
	CAUSE
	=====
	
	The local data file contains the screen coordinates for the Message Summary
	screen's location. With version 3.1 of Mail, it is possible for these
	coordinates to give a reference point that is outside the current monitor's
	visible screen. Consequently, the summary screen cannot be viewed and only the
	menu bar remains.
	
	RESOLUTION
	==========
	
	To correct this problem, either remove or rebuild the user's local data file.
	Either action should force the summary screen to reappear in the default
	location the next time Mail is launched.
	
	Additionally, you should upgrade to version 3.1a of Microsoft Mail for AppleTalk
	Networks. Mail 3.1a ensures that the reference points lie within the current
	monitor's visible screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.1 of Microsoft Mail
	for AppleTalk Networks. This problem was corrected in version 3.1a.
	
	
	Additional query words: 3.10 missing gone mailbox file edit mail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
