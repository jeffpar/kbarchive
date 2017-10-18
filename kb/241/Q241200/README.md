---
layout: page
title: "Q241200: Zone Error Message: Failed to Start ZProxy or ZoneClient"
permalink: kb/241/Q241200/
---

## Q241200: Zone Error Message: Failed to Start ZProxy or ZoneClient

	Article: Q241200
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu msgamekbfaq
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a Web page on the Zone, you may receive the following error
	message:
	
	  Failed to start ZProxy.
	
	  -or-
	
	  Failed to start ZoneClient.
	
	CAUSE
	=====
	
	This behavior occurs if the installation of the Zone software did not finish
	successfully.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Remove the Heartbeat ActiveX Control from Your Computer
	-------------------------------------------------------
	
	For information about how to remove the Heartbeat ActiveX Control from your
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q225041 Zone: How to Remove the Heartbeat ActiveX Control
	
	After removing the ActiveX Control, visit the following Zone.com Web site to
	reinstall the Zone software:
	
	  http://zone.msn.com/services/install.asp
	
	Remove the ZoneProxy and ZoneClient Files
	-----------------------------------------
	
	Remove the ZoneProxy file from your computer to allow Zone.com to automatically
	install and register a new copy:
	
	1. Click Start, point to Find, and then click "Files or Folders."
	
	2. In the Named box, type "zproxy.exe, zone.exe" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. In the list of found files, right-click the files, click Delete, and then
	  click Yes.
	
	  NOTE: By default, the Zproxy.exe file is located in the following folder:
	
	  <drive>:\Program Files\MSN Gaming Zone
	
	  where <drive> is the drive letter of the hard disk on which Microsoft
	  Windows is installed.
	
	5. Connect to the Zone to automatically install and register a new copy of the
	  Zproxy.exe file.
	
	If the issue continues to occur, proceed to the next method.
	
	Remove and Reinstall the Zone Software
	--------------------------------------
	
	To remove and reinstall the Zone software:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click MSN Gaming Zone, and then click
	  Add/Remove.
	
	4. Follow the instructions on the screen to remove the Zone software.
	
	Additional query words: msgame igz msngz
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu msgame kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
