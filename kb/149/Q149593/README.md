---
layout: page
title: "Q149593: PowerPoint Could Not Locate Character Map"
permalink: /kb/149/Q149593/
---

## Q149593: PowerPoint Could Not Locate Character Map

{% raw %}

	Article: Q149593
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Character Map toolbar button in PowerPoint, you may receive the
	following error message:
	
	  PowerPoint could not locate or start Character Map Utility.
	
	You may receive this error message even if Character Map is installed and can be
	accessed from the Start menu in Windows 95.
	
	CAUSE
	=====
	
	This behavior will occur if Windows 95 was upgraded over an older version, and
	Character Map has not been registered.
	
	NOTE: You can access Character Map from the Interactive Settings menu in
	PowerPoint 7.0 if you browse for the full path; however, if you enter
	"charmap.exe" you will not be able to locate Character Map. Additionally, if you
	enter the fully qualified path from Interactive Settings, the toolbar button
	will work, but only in that session of PowerPoint; it will fail the next time
	you open PowerPoint.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following steps to force Windows 95 to
	reinstall (and thereby register) Character Map:
	
	1. In Control Panel, click the Add/Remove Programs icon.
	
	2. Click the Windows Setup tab.
	
	3. Click Accessories, and then click the Details button.
	
	  You will see that Character Map has not been selected.
	
	4. Select Character Map, and let Windows 95 install it.
	
	Character Map will now be registered properly, and the toolbar button will work
	properly.
	
	
	Additional query words: symbol charmap toolbar
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
