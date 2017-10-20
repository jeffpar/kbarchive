---
layout: page
title: "Q83976: Great Plains Accounting Software and Windows 3.1"
permalink: /kb/083/Q83976/
---

## Q83976: Great Plains Accounting Software and Windows 3.1

{% raw %}

	Article: Q83976
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run Great Plains Accounting software version 6.1 in the Microsoft Windows
	operating system version 3.1 and the FILES statement in your CONFIG.SYS file is
	set to less than 50, MS-DOS run-time errors occur.
	
	Great Plains technical support recommends using a minimum setting of FILES=50 for
	a single-user environment and FILES=60 for a multi-user environment. It may be
	necessary to increase these values.
	
	You may get the following error messages when running Great Plains from Windows
	3.1:
	
	  Cannot Read from Drive C:
	
	  -or-
	
	  Cannot Run this Application in a Window
	
	MORE INFORMATION
	================
	
	Cannot Read from Drive C:
	-------------------------
	
	When printing, the error message
	
	  Cannot Read from Drive C:
	
	may appear. Edit line seven, in Printer Setup-SY5020, within the Great Plains
	Accounting System Utilities menu. Change the Printer Device Name from PRN: to
	LPT1:.
	
	Cannot Run this Application in a Window
	---------------------------------------
	
	The error message
	
	  Cannot Run this Application in a Window
	
	may appear if the video memory option of the PIF is set to High Graphics. Change
	this setting from High Graphics to Text.
	
	Great Plains technical support has a "technical note" available that explains how
	to use version 6.1 (an MS-DOS-based application) with Windows version 3.1.
	
	Great Plains Accounting software is manufactured by Great Plains Software, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: 3.10 3.11 multiuser 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
