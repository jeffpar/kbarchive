---
layout: page
title: "Q77725: Must Exit and Reenter Windows to Update Sound Driver"
permalink: /kb/077/Q77725/
---

## Q77725: Must Exit and Reenter Windows to Update Sound Driver

{% raw %}

	Article: Q77725
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0; WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	You must exit Windows version 3.0 and 3.0a and run Windows with
	Multimedia Extensions again after adding a new Multimedia driver
	within the Driver option in the Control Panel. This is so that the
	changes can take effect.
	
	This information does not apply to later versions of Windows.
	
	When adding a new driver, the SYSTEM.INI file gets updated but not
	reinitialized. This can only be done when first starting Windows with
	Multimedia Extensions.
	
	Additional query words: 1.00 1.0 MMWIN
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWinMultiXSearch kbWin300 kbWin300a kbWinMultiX100
	Version           : :1.0; WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
