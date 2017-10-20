---
layout: page
title: "Q86191: System Resources Leak with After Dark 2.0 Randomizer"
permalink: /kb/086/Q86191/
---

## Q86191: System Resources Leak with After Dark 2.0 Randomizer

{% raw %}

	Article: Q86191
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your system resources are depleted when you run Berkeley Systems' After Dark
	version 2.0.
	
	CAUSE
	=====
	
	If After Dark 2.0 is configured to use Aquatic Realm, Flying Toasters, Marbles
	or any combination of the three with the Randomizer feature enabled, system
	resources are allocated but not released. As reported in the Program Manager
	Help About dialog box, this depletes your system resources when you run After
	Dark 2.0.
	
	RESOLUTION
	==========
	
	This problem can be corrected by replacing AD_RSRC.DLL with a patched version
	that is available from Berkeley Systems' technical support. AD_RSRC.DLL is also
	available on CompuServe in the WINAPC forum or on America Online in the
	BerkSysWin forum.
	
	MORE INFORMATION
	================
	
	For more information, contact Berkeley Systems.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 AfterDark Berkley Berkely 3rdparty
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
