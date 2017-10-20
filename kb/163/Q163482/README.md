---
layout: page
title: "Q163482: XCLN: Exchange and Schedule+ Options Not Available On Start"
permalink: /kb/163/Q163482/
---

## Q163482: XCLN: Exchange and Schedule+ Options Not Available On Start

{% raw %}

	Article: Q163482
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Start menu only displays the options for Microsoft Exchange and Schedule+ if
	you are currently logged on as the Windows NT account user who installed the
	Microsoft Exchange client. If you go to the Start menu and click Programs, and
	you do not see the Exchange and Schedule+ options under Microsoft Exchange, then
	your current Windows NT account may not have been used to install the Microsoft
	Exchange client.
	
	WORKAROUND
	==========
	
	You can force the options for Exchange and Schedule+ to appear on the Start menu
	by doing the following:
	
	1. Open the <winnt>\Profiles\<user who did install>\Start Menu\
	  directory for Schedule+ and Exchange.
	
	2. Copy the icons listed in the directory.
	
	3. Paste them into the <winnt>\Profiles\All Users\Start Menu\ directory.
	
	The icons will now be in the bottom half of the Start menu for all users.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
