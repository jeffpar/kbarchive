---
layout: page
title: "Q170575: MDG: Help, About Shows &quot;Microsoft Mail for Windows 95&quot;"
permalink: /kb/170/Q170575/
---

## Q170575: MDG: Help, About Shows &quot;Microsoft Mail for Windows 95&quot;

{% raw %}

	Article: Q170575
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Windows Client, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Client for Windows installed under Windows 95 does not have a
	Spell Check Option on the Edit drop down menu. Clicking About on the Help menu,
	shows the Microsoft Mail version to be "Microsoft Mail for Windows 95."
	
	CAUSE
	=====
	
	This problem occurs when the MS Mail client for Windows Setup.exe is started
	either from a Start, Run, drivesUNC statement or through Network Neighborhood.
	The installation will indicate the setup was successful; however, the Msmail.exe
	will not be updated to indicate this is a full version of the mail client and
	not the workgroups version.
	
	WORKAROUND
	==========
	
	A mapped drive is required for a successful setup of MS Mail client for Windows.
	Rerun Setup.exe from a mapped drive.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailClient350
	Version           : :3.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
