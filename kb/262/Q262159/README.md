---
layout: page
title: "Q262159: Error Message When You Install Pocket Streets 2001"
permalink: /kb/262/Q262159/
---

## Q262159: Error Message When You Install Pocket Streets 2001

{% raw %}

	Article: Q262159
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2001 
	- Microsoft Streets and Trips 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Pocket Streets 2001 on your Microsoft
	Windows CE device or Microsoft Pocket PC, you may receive one of the following
	error messages:
	
	   - The application cannot run on the current OS version.
	
	   - Ceappmgr caused an invalid page fault in module Ceappmgr.exe.
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions is true:
	
	- Microsoft Windows CE Services version 2.2 is installed on your desktop
	  computer.
	
	- You are running an older version of Pocket Streets on a Compaq Ipaq. The Ipaq
	  is based on a different processor than most Pocket PCs.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method.
	
	Windows CE Services 2.2 Is Installed on My Desktop Computer
	-----------------------------------------------------------
	
	To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Pocket Streets 2001, and then click Add/Remove.
	
	4. Follow the instructions on the screen to uninstall Pocket Streets 2001.
	
	5. Download and install Microsoft ActiveSync 3.1 from the following Microsoft
	  Web site:
	
	  http://www.microsoft.com/pocketstreets/previous
	
	6. Reinstall Pocket Streets 2001.
	
	I Run Pocket Streets on a Pocket PC with the Strongarm Processor
	----------------------------------------------------------------
	
	Please see the following Knowledge Base article for issues regarding Pocket PC
	devices using the Strongarm processor:
	
	  Q269332 Error Message: Microsoft Pocket Streets 2001 Does Not Support the
	  Connected Device Type
	
	Additional query words: mp2001 st2001 active sync wince p/pc h/pc
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbMapptSearch kbMapPoint2001 kbExpediaStreets2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
