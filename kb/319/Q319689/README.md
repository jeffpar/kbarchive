---
layout: page
title: "Q319689: Streets &amp; Trips 2002: Err Msg: Cannot Find Pocket Streets"
permalink: /kb/319/Q319689/
---

## Q319689: Streets &amp; Trips 2002: Err Msg: Cannot Find Pocket Streets

{% raw %}

	Article: Q319689
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft Streets & Trips 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to install Microsoft Pocket Streets 2002 Update, you may receive an
	error message similar to the following:
	
	  Cannot find Pocket Streets or one of its components. Make sure all required
	  libraries are installed.
	
	CAUSE
	=====
	
	This behavior may occur if one or more of the following conditions are true:
	
	- Your desktop computer does not meet the minimum system requirements.
	
	- Streets & Trips is not installed in the default folder.
	
	- Your handheld device is not a Pocket PC. This update supports only the Pocket
	  PC version of Pocket Streets. It does not support the Handheld PC version or
	  the Palm-size PC version of Pocket Streets.
	
	  NOTE: MapPoint and Streets & Trips 2002 contain three platform-specific
	  versions of Pocket Streets. When you install MapPoint or Streets & Trips,
	  only the version that is appropriate for your platform is installed. This
	  update supports only the version that works with the Pocket PC.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps in the order in which they are
	presented.
	
	Verify That Your Desktop Computer Meets the Minimum System Requirements
	-----------------------------------------------------------------------
	
	The minimum requirements for the desktop computer to run Pocket Streets 2002 are
	the following:
	
	- Any of the following operating systems:
	
	   - Microsoft Windows 98.
	
	   - Windows 98 Second Edition.
	
	   - Microsoft Windows 2000.
	
	   - Microsoft Windows Millennium Edition (Windows Me).
	
	   - Microsoft Windows NT 4.0 with Service Pack 6 or later. On systems that run
	     Windows NT 4.0 with Service Pack 6, the version of Microsoft Internet
	     Explorer must be upgraded to at least 4.01 with Service Pack 1.
	
	   - Microsoft Windows XP.
	
	- ActiveSync technology 3.1 or later.
	
	- A licensed copy of Pocket Streets 2002, which is available in MapPoint 2002,
	  Streets & Trips 2002, and AutoRoute 2002.
	
	Verify the Version of Pocket Streets That Is Installed
	------------------------------------------------------
	
	1. On your Pocket PC, tap Start, and then tap Settings.
	
	2. Tap Control Panel.
	
	3. Tap the System tab.
	
	4. Verify that your Pocket PC has Windows CE 3.0 or later installed.
	
	  NOTE: Devices other than Pocket PCs do not have a core version of 3.0 or
	  later.
	
	Remove Streets & Trips and Reinstall It in the Default Folder
	-------------------------------------------------------------
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please see your product documentation
	to complete these steps.
	
	Remove Streets & Trips:
	
	1. On your desktop computer, click Start, and then click Control Panel.
	
	2. Double-click "Add or Remove Programs".
	
	3. In the list of installed programs, click "Microsoft Streets & Trips
	  2002", and then click Remove.
	
	  Click Yes to confirm the removal.
	
	4. Start Windows Explorer.
	
	5. Browse to C:\Program Files\Microsoft Streets & Trips.
	
	  The program may be installed in a different location on your computer. If so,
	  locate the correct folder.
	
	6. Right-click the folder, and then click Delete on the shortcut menu.
	
	  Click Yes to confirm the removal of the folder.
	
	Remove the Registry Keys:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. Browse to the following key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Automap
	
	4. Right-click Automap, and then click Delete.
	
	  Click Yes to confirm the removal.
	
	5. Repeat steps 3 and 4 to delete the following key:
	
	  HKEY_Local_Machine\Software\Microsoft\Automap
	
	6. Quit the Registry Editor.
	
	Reinstall Streets & Trips:
	
	1. Insert the Streets & Trips Setup CD-ROM in the CD-ROM drive or DVD-ROM
	  drive.
	
	2. Do one of the following:
	
	   - If the installation process starts automatically, skip to step 6.
	
	     -or-
	
	   - If the installation process does not start automatically, click Start, and
	     then click Control Panel.
	
	3. In Control Panel, double-click "Add or Remove Programs".
	
	4. Click Add New Programs.
	
	5. Click "CD or Floppy".
	
	6. Follow the on-screen instructions to complete the installation process.
	
	  NOTE: Make sure that you install the program in the default folder.
	
	7. Install the Pocket Streets 2002 Update.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
