---
layout: page
title: "Q192268: Err Msg: Cmmgr32.exe Is Linked to Missing Export Advapi32.dll"
permalink: /kb/192/Q192268/
---

## Q192268: Err Msg: Cmmgr32.exe Is Linked to Missing Export Advapi32.dll

{% raw %}

	Article: Q192268
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kberrmsg kbmsn
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start MSN, The Microsoft Network, or Microsoft Internet Explorer, you
	may receive the following error message:
	
	  Cmmgr32.exe is linked to missing export Advapi32.dll.
	
	CAUSE
	=====
	
	This behavior can occur if the Advapi32.dll file is the wrong version.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the latest version of the Advapi32.dll file. To
	do this, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. Click Connection Manager, and then click Add/Remove. Follow the prompts on
	  the screen to remove Connection Manager.
	
	3. Close Control Panel, and then restart the computer.
	
	4. Insert the MSN CD-ROM into the CD-ROM drive. Press and hold down the SHIFT
	  key when you insert the CD-ROM to prevent the MSN Setup program from starting
	  automatically.
	
	5. Double-click the My Computer icon on the desktop.
	
	6. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	7. Double-click the Ie40 folder.
	
	8. Double-click the Ie4setup.exe file, and then follow the instructions on the
	  screen to install Internet Explorer.
	
	9. On the Go menu, click Up One Level.
	
	10. Double-click the Msnsetup folder.
	
	11. Double-click the Compnts folder.
	
	12. Double-click the Msnsvc.exe file.
	
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
