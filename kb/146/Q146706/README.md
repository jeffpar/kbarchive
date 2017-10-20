---
layout: page
title: "Q146706: XCLN: Setup Doesn't Remove Icons in Non-Default Group"
permalink: /kb/146/Q146706/
---

## Q146706: XCLN: Setup Doesn't Remove Icons in Non-Default Group

{% raw %}

	Article: Q146706
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The removal option of the Microsoft Exchange client Setup program for Windows NT
	will not remove program icons if the Microsoft Exchange client was installed in
	a non-default program group. The Windows 3.x and Windows 95 versions of the
	Microsoft Exchange client Setup program will do this correctly, however, even
	though they will remove the icons, they will not remove the empty program
	group.
	
	
	MORE INFORMATION
	================
	
	Windows 95 is different than the other two because Windows 95 has an Add/Remove
	Programs applet in the Control Panel. This will allow you to remove the
	Microsoft Exchange icon from the Programs menu.
	
	Another problem that will occur is that if the icons are moved from the original
	(default) program group to another, Setup will run correctly, but the icons will
	not be removed from the new group. In addition, if the original (empty) group is
	left in program manager, it will not be removed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Windows
	clients. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: program icons remove setup
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
