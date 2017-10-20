---
layout: page
title: "Q174241: MSN Setup Stops Responding While Downloading Components"
permalink: /kb/174/Q174241/
---

## Q174241: MSN Setup Stops Responding While Downloading Components

{% raw %}

	Article: Q174241
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing MSN, The Microsoft Network, the Setup program may stop
	responding (hang) or seem to be stuck in a continuous loop when it attempts to
	download components.
	
	CAUSE
	=====
	
	This behavior can occur if MSN is installed on a drive other than the drive on
	which the Temporary Internet Files folder is located. By default, the Temporary
	Internet Files folder is located on the drive on which Windows is installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall and then reinstall MSN using the default
	installation locations. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. For each of the following components on the Install/Uninstall tab, click the
	  component, and then click Add/Remove.
	
	  NOTE: You must remove the components in the order in which they are listed
	  here.
	
	  MSN Version 2.0
	  ---------------
	
	  VRML Add-In 3.0
	  Internet Explorer 3.x
	  Internet Mail and News 1.0
	  Microsoft Activemovie
	  Microsoft Comic Chat
	  MSN Music & Animation Components
	  MSN Optional Controls
	  MSN Program Viewer
	  MSN Program Viewer Controls
	
	  MSN Version 2.5
	  ---------------
	
	  Connection Manager
	  Interactive Music
	  Internet Explorer 3.x
	  Internet Mail and News 1.0
	  Microsoft Activemovie
	  Microsoft Chat 2.0
	  Microsoft NetMeeting 2.0
	  MSN Optional Controls
	  MSN v2.5
	  Voxware VoxPlay Audio Control
	
	4. Restart the computer.
	
	5. Insert the MSN CD-ROM into the CD-ROM drive.
	
	6. On the Welcome To The MSN Start-Up CD screen, click Go To MSN Setup.
	
	7. Follow the instructions on the screen, using the default installation
	  location.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbMSNSearch kbMSN200 kbMSN250
	Version           : WINDOWS:2.0,2.5
	
	=============================================================================
	

{% endraw %}
