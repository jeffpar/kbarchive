---
layout: page
title: "Q159902: Soccer: ErrMsg: A Required .DLL File, AMF16.DLL, Was Not Found"
permalink: /kb/159/Q159902/
---

## Q159902: Soccer: ErrMsg: A Required .DLL File, AMF16.DLL, Was Not Found

{% raw %}

	Article: Q159902
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Soccer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Soccer version 1.0, you may receive the
	following error message:
	
	  A required .DLL file, AMF16.DLL, was not found.
	
	CAUSE
	=====
	
	You will receive this error message if the Amf16.dll file has been removed from
	Windows\System folder.
	
	RESOLUTION
	==========
	
	The following steps describe how to resolve this problem:
	
	1. Click Start, point to Programs, and click Windows Explorer.
	
	2. Click the CD-ROM drive where the Microsoft Soccer compact disc resides.
	
	3. Double-click the US folder.
	
	4. Double-click the Game folder.
	
	5. With your right mouse button, click the Amf16.dll file, and then click the
	  Copy option from the pop-up menu.
	
	6. Click the Windows\System folder.
	
	7. With your right mouse button, click an empty area in the System folder
	  window, and then click Paste from the pop-up menu.
	
	8. Restart Soccer.
	
	MORE INFORMATION
	================
	
	The Amf16.dll file may have been inadvertently removed when you uninstalled
	another application within Windows. Follow the instructions above to reinstall
	the file.
	
	Additional query words: 1.00 football
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword kbSoccer
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
