---
layout: page
title: "Q69844: Difference Between load= and run= Statements in WIN.INI"
permalink: /kb/069/Q69844/
---

## Q69844: Difference Between load= and run= Statements in WIN.INI

{% raw %}

	Article: Q69844
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "load=" and "run=" statements in the WIN.INI both load applications when
	Windows boots up.
	
	The "load=" statement loads applications as icons. None of these applications are
	the active application.
	
	The "run=" statement loads the applications in a window. The last application
	loaded by the "run=" statement is the active application.
	
	MORE INFORMATION
	================
	
	load=
	-----
	
	When loading an application from the "load=" statement in the WIN.INI file,
	Windows uses the function SW_SHOWMINNOACTIVE. This function leaves the
	application minimized (that is, an icon) as a background application.
	
	In 386 enhanced mode, if an MS-DOS application is on the "load=" line and the
	program information file (PIF) does not have the background option selected,
	then the application does not actually load until you double- click the icon,
	making the application active. With the background option selected in the PIF,
	the application is then allowed to run in the background and load into memory.
	
	In standard and real modes, MS-DOS applications on the "load=" line have an
	opportunity to load into memory before Windows continues on its next step. This
	happens because Windows swaps itself out of memory to run MS-DOS applications.
	The MS-DOS application becomes the active application during this process and
	loads into memory. Then the system switches back to Windows so Windows can
	continue with its next step.
	
	run=
	----
	
	When loading an application from the "run=" statement in the WIN.INI file,
	Windows uses the function SW_SHOWNORMAL. This function leaves the application
	maximized (that is, in a full-screen window) as the active application. If there
	is more than one application on the "run=" line, then the last application is
	the active application when Windows is through loading them.
	
	REFERENCES
	==========
	
	"Microsoft Windows Software Development Kit Reference Volume 1", page 4-432.
	
	"Programming MS Windows", Chapter 2 "Creating and Displaying Windows" pages 37,
	48.
	
	Additional query words: 3.00 3.0 3.0a 3.00a winmem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
