---
layout: page
title: "Q232756: Connection Manager Runs After Disconnecting from Internet"
permalink: kb/232/Q232756/
---

## Q232756: Connection Manager Runs After Disconnecting from Internet

	Article: Q232756
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbtool dun msnetwork win98se kbDialUp
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5, 2.51, 2.52, 2.6 
	- the operating system: Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you disconnect from MSN, The Microsoft Network, on a computer running
	Microsoft Windows 95, Microsoft Windows 98, or Microsoft Windows 98 Second
	Edition, MSN Connection Manager may run and try to make a connection to the
	Internet.
	
	CAUSE
	=====
	
	This issue can occur if you log off the Internet while a program is trying to
	connect to the Internet.
	
	RESOLUTION
	==========
	
	To try to resolve this issue, use the appropriate method for your version of
	MSN. Note that these steps may not work in all cases. If these steps do not
	resolve the issue, follow the workaround for this issue.
	
	MSN Version 2.x
	---------------
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. In Windows Explorer, open the following folder:
	
	  C:\Program Files\Internet Explorer\Connection Manager\MSN
	
	3. Click the first file with a .tmp extension, and then click Delete on the File
	  menu. Repeat this step for each file with a .tmp extension in the MSN folder.
	
	Note that these temporary files are sequentially numbered and start with
	00000001.
	
	MSN Version 5.0
	---------------
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. In Windows Explorer, open the following folder:
	
	  C:\Windows\All Users\Application
	  Data\Microsoft\Network\Connections\Connection Manager\MSN
	
	3. Click the first file with a .tmp extension, and then click Delete on the File
	  menu. Repeat this step for each file with a .tmp extension in the MSN folder.
	
	Note that these temporary files are sequentially numbered and start with
	00000001.
	
	Working Around the Issue
	------------------------
	
	To work around this issue, click the Close button in the upper-right corner of
	the MSN Connection Manager dialog box.
	
	Additional query words: 2.00 2.50 2.60 5.00
	
	======================================================================
	Keywords          : kbtool dun msnetwork win98se kbDialUp 
	Technology        : kbWin98SEsearch kbMSNSearch kbWin98SE kbMSN200 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.0,2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	
