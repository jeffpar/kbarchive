---
layout: page
title: "Q149459: MS Exchange Tools Menu Does Not Work or Mouse Hangs"
permalink: /kb/149/Q149459/
---

## Q149459: MS Exchange Tools Menu Does Not Work or Mouse Hangs

{% raw %}

	Article: Q149459
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you download and install the Microsoft Exchange Update, the Tools menu may
	not work, or the mouse may stop responding (hang).
	
	RESOLUTION
	==========
	
	
	To resolve this problem, follow these steps:
	
	1. Remove Microsoft Exchange and MSN, The Microsoft Network. To do so, follow
	  these steps:
	  a. In Control Panel, double-click Add/Remove Programs.
	
	  b. Click the Windows Setup tab.
	
	  c. Click the Microsoft Exchange and The Microsoft Network check boxes to
	     clear them, and then click OK.
	
	2. Restart your computer.
	
	3. Use Windows Explorer or My Computer to open the Program Files\Microsoft
	  Exchange folder. Move all the files, except the following files, to another
	  folder:
	
	  - Mapiwm.tpl
	  - Scanpst.exe
	  - Mlset32.exe
	  - Mlshext.dll
	  - Exchng32.log
	
	4. Reinstall Microsoft Exchange and MSN. To do so, follow these steps:
	  a. In Control Panel, double-click Add/Remove Programs.
	
	  b. Click the Windows Setup tab.
	
	  c. Click the Microsoft Exchange and The Microsoft Network check boxes to
	     select them, and then click OK.
	
	     NOTE: If you receive a message stating that the Mapi file being installed
	     is older than the file currently installed on your computer, install the
	     older version of the file.
	
	5. Run the Microsoft Exchange Setup Wizard.
	
	Additional query words: msn freeze
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN120
	Version           : WINDOWS:1.2
	
	=============================================================================
	

{% endraw %}
