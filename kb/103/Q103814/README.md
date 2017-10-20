---
layout: page
title: "Q103814: PC Win: MAPIHELP=path Not Updated When Mail Is Installed"
permalink: /kb/103/Q103814/
---

## Q103814: PC Win: MAPIHELP=path Not Updated When Mail Is Installed

{% raw %}

	Article: Q103814
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MAPIHelp=<path> setting in the MSMAIL.INI file does not get updated
	when you install version 3.2 of Microsoft Mail for Windows over an existing
	older version and the setup directory differs from the existing mail directory.
	
	CAUSE
	=====
	
	Setup fails to update all paths pointing to program files.
	
	RESOLUTION
	==========
	
	Edit the MSMAIL.INI file and make sure the MAPIHELP=<path> setting points
	to your system's most recent installation of Mail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for Windows. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
