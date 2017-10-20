---
layout: page
title: "Q112288: PC Win: Duplicate Menu Options"
permalink: /kb/112/Q112288/
---

## Q112288: PC Win: Duplicate Menu Options

{% raw %}

	Article: Q112288
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create custom menus, you may get a duplicated entry in the menu
	listing, as well as a missing entry.
	
	The MSMAIL.INI and SHARED.INI files require the following syntax:
	
	  Tag=Mail version;[Menu Name]; [Command Name];...
	
	If, when defining a menu, you use the same Tag, it will be repeated in the menu
	listing.
	
	MORE INFORMATION
	================
	
	A example of duplicate entries is:
	
	  [Custom commands]
	  MyCommand=3.0;File;&Run Notepad;0;appexec.dll;notepad; ...
	  MyCommand=3.0;File;&Run Calculator;0;appexec.dll;calc; ...
	
	This will place Run Notepad under the File menu twice because the tag is not
	unique.
	
	An example of correct entries is:
	
	  [Custom commands]
	  MyCommand1=3.0;File;&Run Notepad;0;appexec.dll;notepad; ...
	  MyCommand2=3.0;File;&Run Calculator;0;appexec.dll;calc; ...
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
