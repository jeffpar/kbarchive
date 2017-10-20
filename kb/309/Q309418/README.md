---
layout: page
title: "Q309418: Description of the Loadqm.exe File"
permalink: /kb/309/Q309418/
---

## Q309418: Description of the Loadqm.exe File

{% raw %}

	Article: Q309418
	Product(s): The Microsoft Network
	Version(s): 6.0,6.1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 07-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN versions 6.0, 6.1 
	- Microsoft Windows Millennium Edition 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install MSN Explorer, the Loadqm.exe file is added to the Startup
	folder, and Loadqm.exe then starts each time you start your computer. Loadqm.exe
	loads the MSN Queue Manager component which manages queuing for the background
	file-transfer mechanism that is known as the drizzling service.
	
	MORE INFORMATION
	================
	
	The drizzle component runs as the Loadqm.exe launcher, and because of this,
	global drizzles can only be run in the current user context. This feature is
	required to enable WU AutoUpdate.
	
	The Drizzling service is the preferred way to transfer data to the client for
	background tasks and system services by preserving the end user experience by
	not affecting available bandwidth. Requests to the Drizzle service are submitted
	and the files can be transferred in a throttled manner so that the interactive
	user is not affected by the bandwidth that is consumed.
	
	How to Disable the AutoUpdate Feature
	-------------------------------------
	
	To disable AutoUpdate:
	
	1. If you can already view protected operating system files, skip to step 2. If
	  you cannot already view protected operating system files:
	
	  a. Double-click My Computer, and then click Folder Options on the Tools menu.
	
	  b. Click the View tab.
	
	  c. In the Advanced Settings box, click Show hidden files and folders, and
	     then click to clear the Hide File Extensions for Known File Types and Hide
	     Protected Operating System Files check boxes.
	
	  d. Click OK.
	
	2. In My Computer, double-click drive C, double-click the Program Files folder,
	  double-click the MSN folder, and then double-click the MSNCoreFiles folder.
	
	3. Right-click the Msn6.ini file, and then click Open to open the file in
	  Notepad. In the [msn6] section of the file there should be a line that starts
	  with AutoUpdate=(some URL). Change this to "AutoUpdate=0" (without the
	  quotation marks). On the File menu, click Save, and then quit Notepad.
	
	4. Restart your computer.
	
	NOTE: To turn the AutoUpdate feature back on, change the AutoUpdate=0 entry to
	AutoUpdate=1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinMEsearch kbWin98search kbWin98SEsearch kbMSNSearch kbWin98 kbWinME kbWin98SE kbMSN600 kbMSN610
	Version           : :6.0,6.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
