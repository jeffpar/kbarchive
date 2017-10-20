---
layout: page
title: "Q134246: How to Hide the Application Control Box"
permalink: /kb/134/Q134246/
---

## Q134246: How to Hide the Application Control Box

{% raw %}

	Article: Q134246
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To hide the Application Control menu in Visual FoxPro, issue the following
	command in a program or in the Command window:
	
	     _SCREEN.CONTROLBOX=.F.
	
	To get the Application Control menu back, issue this command:
	
	     _SCREEN.CONTROLBOX=.T.
	
	MORE INFORMATION
	================
	
	This works with Visual FoxPro running under Windows 3.x, Windows NT, or Windows
	95.
	
	The Application Control menu in Windows 3.x and Windows NT is the large minus
	sign that appears in the top left of an application's window. It is at the end
	of the title bar for the application. It has commands for:
	
	  Restore
	  Move
	  Size
	  Minimize
	  Maximize
	  Close
	  Switch To
	
	The Application Control menu in Windows 3.x and Windows NT can be accessed by
	clicking the mouse or plressing ALT+Spacebar.
	
	In Windows 95, the Application Control menu is an icon, which for Visual FoxPro
	is a picture of the FoxPro fox. It has the same commands found in Windows 3.x
	except for Switch To. Disabling the Application Control menu in Visual FoxPro
	running under Windows 95 also disables the close box in the top right corner of
	the application's windows (the "x" box).
	
	NOTE: Be sure to allow a way to quit FoxPro or bring back the Application Control
	menu.
	
	Additional query words: 3.00 VFoxWin closebox
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
