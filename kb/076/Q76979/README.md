---
layout: page
title: "Q76979: Mouse Driver 7.0 and MS-DOS Applications in Windows 3.0"
permalink: /kb/076/Q76979/
---

## Q76979: Mouse Driver 7.0 and MS-DOS Applications in Windows 3.0

{% raw %}

	Article: Q76979
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 23-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.0 
	- Microsoft Mouse Driver 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Microsoft Mouse driver version 7.0 and Microsoft Windows version
	3.0, some MS-DOS applications may generate an error message indicating that they
	cannot be run in a window, even though it is possible to do so.
	
	MORE INFORMATION
	================
	
	The following message may appear when an MS-DOS application is run from
	Microsoft Windows 3.0 in windowed mode and the Microsoft Mouse driver version
	7.0 has been loaded:
	
	  
	
	  You cannot run this application in a window or in
	  the background. You can display it in a window,
	  but it will be suspended until you run it full
	  screen. Check the PIF setting to ensure they are correct.
	
	The above message may appear when you try to run a program that uses graphics
	modes or the mouse in a window.
	
	However, if the application does not use graphics modes or a mouse, the
	application may be switched into full screen mode by pressing ALT+ENTER, then
	switched back into window mode by pressing ALT+ENTER again. The application can
	then be run normally in a window.
	
	Microsoft has confirmed this to be a problem with Microsoft Mouse driver version
	7.0. This problem does not occur in later versions of the Microsoft Mouse
	driver.
	
	The Microsoft Mouse driver version 7.04 is included in compressed form on the
	distribution disks for Microsoft Windows 3.0. For information on expanding the
	compressed mouse driver files, query on the following words:
	
	  nonexpanded and mouse driver and files
	
	Additional query words: 3.00 3.00a 5.00 7.00 3.1 noupd
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWin3xSearch kbZNotKeyword3 kbMouseSearch kbWin300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
