---
layout: page
title: "Q173361: The MSN Home Page Reloads Continuously When You Connect"
permalink: /kb/173/Q173361/
---

## Q173361: The MSN Home Page Reloads Continuously When You Connect

{% raw %}

	Article: Q173361
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to MSN, The Microsoft Network, the default MSN page may reload
	continuously.
	
	CAUSE
	=====
	
	Some MSN components may be missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Open MSN the Microsoft Network by double-clicking the MSN icon on the
	  Desktop.
	
	2. Type http://fdl.msn.com/public/msndata/msn.ini in the Address box, and then
	  press ENTER.
	
	3. In Internet Explorer click File, click Save As, and then save the file to
	  Disk, as msn.ini.
	
	4. Go to C:\Program Files\OnMSN folder as the location for the Msn.ini file, and
	  then click OK.
	
	5. Quit MSN.
	
	INTERNET EXPLORER 3.X
	---------------------
	
	1. Right-click the the Internet icon on the desktop, and then click Properties.
	
	2. On the Advanced tab, click Settings.
	
	3. Click Empty Folder, and then click Yes.
	
	4. Click OK, and then click OK.
	
	INTERNET EXPLORER 4.X, 5.X
	--------------------------
	
	1. Right-click the The Internet icon on the desktop, and then click Properties.
	
	2. On the General tab, under Temporary Internet files, click Delete files, check
	  the Delete all offline content box, and then click OK.
	
	3. On the General tab, under History, click Clear History, and then click OK.
	
	4. Click Apply, and then OK.
	
	5. Start MSN to check if the issue continues to occur. If the continues to
	  occur, proceed to the next step. If the issue is resolved, skip the remaining
	  steps.
	
	6. After starting MSN, type http://setup.msn.com/ in the Address box, and then
	  follow the instructions on the screen to download and install MSN.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.0,2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
