---
layout: page
title: "Q318251: Streets and Trips 2002: Error When You Use the Find Feature"
permalink: /kb/318/Q318251/
---

## Q318251: Streets and Trips 2002: Error When You Use the Find Feature

{% raw %}

	Article: Q318251
	Product(s): Microsoft Automap
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets & Trips 2002, version 1.0 
	- Microsoft MapPoint 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Find feature or the Data-Import feature in the
	products listed above, you receive an error message similar to one of the
	following:
	
	  MapPoint 2002 has encountered a problem and needs to close.
	
	  Appname: mappoint.exe
	  Appver: 9.0.16.2001
	  Mod name: mappoint.exe
	  Modver: 9.0.16.2001
	  Offset: 000212fa
	
	  -or-
	
	  Streets & Trips 2002 has encountered a problem and needs to close.
	
	  Appname: streets.exe
	  Appver: 9.0.16.2001
	  Mod name: streets.exe
	  Modver: 9.0.16.2001
	  Offset: 000212fa
	
	CAUSE
	=====
	
	This issue can occur when the Microsoft Data Access Components (MDAC) on your
	computer are damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall MDAC from your Streets & Trips 2002 Setup
	CD-ROM or download and install MDAC from the World Wide Web. To do this, use one
	of the following methods.
	
	Method 1: Streets & Trips
	-------------------------
	
	NOTE: Use this method if you have the Streets & Trips 2002 Setup CD-ROM.
	
	1. Hold down the SHIFT key to disable Autoplay and insert your Streets &
	  Trips Setup CD-ROM into your CD-ROM drive or DVD-ROM drive.
	
	2. Double-click My Computer.
	
	3. Right-click your CD-ROM drive or DVD-ROM drive, and then click Explore.
	
	4. Locate and right-click mdac_typ.exe in the <CD-ROM>:\Support folder,
	  and then click Copy.
	
	5. Right-click an empty space on the desktop, and then click Paste.
	
	6. Restart your computer in Safe mode.
	
	7. Double-click mdac_type.exe on your desktop.
	
	8. Follow the onscreen instructions to complete the installation process.
	
	9. Restart your computer in Normal mode.
	
	Method 2: MapPoint
	------------------
	
	NOTE: Use this method if you do not have the Streets & Trips 2002 Setup
	CD-ROM.
	
	Part 1: Update MDAC:
	
	1. Connect to the Web, and then see the following Microsoft Web site:
	
	  http://www.microsoft.com/data
	
	2. Under UDA Contents, click Downloads, and then click the latest available
	  version of MDAC. Follow the onscreen instructions to complete the
	  installation process.
	
	Part 2: Install Microsoft Jet Components:
	
	1. See the following Microsoft Web site:
	
	  http://www.microsoft.com/data/
	
	2. Under UDA Contents, click Downloads, and then click the latest available
	  version of Microsoft Jet.
	
	3. Follow the onscreen instructions to complete the installation process.
	
	MORE INFORMATION
	================
	
	NOTE: MDAC 2.7 and earlier versions will not install on Windows XP.
	
	For additional information about installing MDAC on Windows XP, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q304432 INFO: MDAC 2.7 Redistributable Installer Does Not Install on Windows
	  XP
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
