---
layout: page
title: "Q255783: Allegiance Err Msg: Invalid Page Fault in Module Allegiance.exe"
permalink: /kb/255/Q255783/
---

## Q255783: Allegiance Err Msg: Invalid Page Fault in Module Allegiance.exe

{% raw %}

	Article: Q255783
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Allegiance, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Allegiance, you may receive the following
	error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	If you click Details, you receive the following error message:
	
	  Allegiance has caused an invalid page fault in module Allegiance.exe.
	
	CAUSE
	=====
	
	This behavior can occur if Microsoft DirectInput is not installed properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall Microsoft DirectX:
	
	1. Insert the Allegiance CD-ROM in the CD-ROM drive. Press and hold down the
	  SHIFT key as you insert the CD-ROM to prevent Allegiance from starting
	  automatically.
	
	2. Double-click the My Computer icon on the desktop.
	
	3. Right-click the Allegiance CD-ROM, and then click Install DirectX 7.0a.
	
	4. Click Yes to accept the license agreement.
	
	5. Click Reinstall DirectX.
	
	MORE INFORMATION
	================
	
	You can also download and install the latest version of DirectX from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For more information about how to obtain the latest version of DirectX, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	Additional query words: 1.00 msgame igz msngz direct-x dx7
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbAllegianceSearch kbAllegiance
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
