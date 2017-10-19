---
layout: page
title: "Q299823: MapPoint: &quot;Runtime Error: 16398&quot; Err Msg When You Start MapPoint"
permalink: /kb/299/Q299823/
---

## Q299823: MapPoint: &quot;Runtime Error: 16398&quot; Err Msg When You Start MapPoint

	Article: Q299823
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft MapPoint 2002, you may receive the following error
	message:
	
	  Runtime error: 16398
	  MapPoint can't run because its not registered on your system, or it can't be
	  found. Install MapPoint and try again.
	
	CAUSE
	=====
	
	This behavior can occur if MapPoint was installed under a different user than
	the user who is currently logged on to the computer.
	
	RESOLUTION
	==========
	
	To work around this issue, use the Run command to start the program. To do this,
	follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following:
	
	  c:\program files\microsoft mappoint\mappoint.exe /regserver
	
	NOTE: It is assumed that you used the default path to install MapPoint 2002. If
	you changed the installation path, you must change the information in the Open
	box to reflect this new path.
	
	3. Click OK.
	
	The correct registry entries for the user who is currently logged on are
	automatically added.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2002
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
