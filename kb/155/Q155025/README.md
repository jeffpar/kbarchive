---
layout: page
title: "Q155025: DBWEB: Control Panel Hangs when dbWeb Service is Running"
permalink: kb/155/Q155025/
---

## Q155025: DBWEB: Control Panel Hangs when dbWeb Service is Running

	Article: Q155025
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft dbWeb, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	
	SYMPTOMS
	========
	
	If dbWeb is running and you use Control Panel to open either the Mouse, Sound,
	or Desktop Icons, and then click OK to quit them, Control Panel seems to stop
	responding (hangs). This occurs only when you click OK. If you click Cancel
	instead to quit Control Panel, then Control Panel doesn't hang.
	
	Note that this problem occurs only when you use dbWeb with Microsoft Windows NT,
	version 3.51.
	
	RESOLUTION
	==========
	
	The only workaround is to quit dbWeb before opening the Mouse, Sound, or Desktop
	configuration icons.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in dbWeb versions 1.0, 1.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT, versions
	3.51 and earlier. This problem no longer occurs in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	To stop the dbWeb Service follow these steps.
	
	1. Double-click the Control Panel icon in the Main program group.
	
	2. In Control Panel, double-click the Services icon.
	
	3. Under Services, click on the dbWeb Service to select it, and then click Stop.
	
	4. When the dbWeb Service is stopped, you can go in and out of the Mouse, Sound,
	  and Desktop Icons without hanging the Control Panel.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. First, determine if the dbWeb Service is running by checking Services under
	  the Control Panel. Start dbWeb Services if necessary.
	
	2. In Control Panel, double-click the Desktop.
	
	3. Click OK on the Desktop Configuration dialog box.
	
	4. You should see the Desktop Configuration dialog box hang, making the Control
	  Panel inaccessible.
	
	5. Press CTRL+ALT+DEL to bring up the Task List. Select the Control Panel task,
	  then click End Task. The next dialog box asks for Wait, End Task, and Cancel;
	  click End Task again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbdbWebSearch kbdbWeb100 kbdbWeb110
	Version           : WINDOWS:1.0,1.1
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
