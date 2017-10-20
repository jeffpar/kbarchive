---
layout: page
title: "Q124882: PC Win: Err Msg: The Following Name Did Not Resolve..."
permalink: /kb/124/Q124882/
---

## Q124882: PC Win: Err Msg: The Following Name Did Not Resolve...

{% raw %}

	Article: Q124882
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a user cuts or copies a mail name from a message and then tries to paste that
	name into a Personal Group in Microsoft Mail for Windows, the following error
	will occur:
	
	  The following name didn't resolve to an existing entry and won't be added to
	  the group.
	
	RESOLUTION
	==========
	
	A workaround to this problem is to manually type the users name into the Group
	Members dialog box. If this is a valid name that can be resolved, it will be
	added to the Personal Group.
	
	MORE INFORMATION
	================
	
	To Reproduce the Problem
	------------------------
	
	1. Open a mail message in the Windows client.
	
	2. Highlight a mail name and select Edit, Copy to place the name in the
	  clipboard.
	
	3. From the Windows client menu, select Mail, Personal Groups.
	
	4. Select New, add the desired group name, and select Create.
	
	5. Click the Group Members dialog box.
	
	6. Paste the mail name from the clipboard by typing CTRL+V or SHIFT+Insert.
	
	7. Double-clicking on the underlined name shows it can be resolved.
	
	8. Select OK from Personal Groups.
	
	9. The following error will occur:
	
	  The following name didn't resolve to an existing entry and won't be added to
	  the group.
	
	Additional query words: 3.00 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
