---
layout: page
title: "Q101646: Scenes 1.0: Scenes in Startup Group Affects Logon Applications"
permalink: /kb/101/Q101646/
---

## Q101646: Scenes 1.0: Scenes in Startup Group Affects Logon Applications

{% raw %}

	Article: Q101646
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a program with a logon feature in your Startup group, when you start
	Windows, Scenes does not allow you to log on without manually switching to the
	program's logon dialog box.
	
	When you install Microsoft Scenes version 1.0 for Windows, a program item is
	placed in the Startup group of Program Manager.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. In the Startup group in Program Manager, rearrange the program icons so that
	  the Scenes icon is placed before all other program icons.
	
	2. In Program Manager, press and hold down the ALT key while you press ENTER
	  (ALT+ENTER) to view the program item properties of each program in the
	  Startup group. Make sure the Run Minimized box for each program contains a
	  check.
	
	3. On the Options menu, make sure Minimize On Use is checked.
	
	NOTE: Setting programs with logon features to use the "Minimize on Use" option
	does not prevent the logon dialog box from automatically appearing.
	
	Additional query words: msscenes screen saver screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
