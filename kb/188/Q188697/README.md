---
layout: page
title: "Q188697: Disconnecting Network Printer Leaves Registry Settings"
permalink: /kb/188/Q188697/
---

## Q188697: Disconnecting Network Printer Leaves Registry Settings

{% raw %}

	Article: Q188697
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Users who delete their network connected Windows NT logical printer and then
	re-add the logical printer find that their printer settings remain the same as
	when they set them previously. This may become a problem if the user wanted to
	delete all of the default settings for the printer by removing the printer and
	re-adding it or if an administrator changed the printer driver on the server and
	kept the logical printer share name the same.
	
	CAUSE
	=====
	
	Two values in the registry under the HKEY_CURRENT_USER are not deleted. The
	following registry keys contain network printer information for the currently
	logged on user:
	
	  
	  HKEY_CURRENT_USER\Printers\DevModes2
	
	  HKEY_CURRENT_USER\Printers\Settings
	
	Both keys contain a UNC value to the printer with REG_BINARY data. This data
	contains the printer and document settings. When a user deletes the logical
	printer in the printers folder, the above values are not removed but the
	HKEY_CURRENT_USER\Printers\Connections key for the network connected printer is
	removed. This causes the printer to appear to have been removed. Normally this
	behavior does not cause a problem to printer functionality if the printer is
	re-added. The exception to this is if the printer driver is changed, the new
	driver may possibly store different information in the DevModes and Settings
	keys. Because the keys are already there, the new information is not pulled down
	to the client computers HKEY_CURRENT_USER hive.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To completely remove the network printer settings, use the following steps:
	
	1. In the Printers folder on the workstation, delete the network connected
	  printer.
	
	2. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	3. Select the Spooler service, and then click Stop.
	
	4. Run Registry Editor (Regedt32.exe).
	
	5. Delete the following registry keys:
	
	  HKEY_CURRENT_USER\Printers\DevModes2
	
	  HKEY_CURRENT_USER\Printers\Settings
	
	6. Restart the Spooler service.
	
	When a new driver is installed for a logical printer and it is totally different,
	another workaround would be to rename the share. When a client then attempts to
	connect to the newly shared printer, new unique entries are created and
	populated with the correct driver settings information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: output incorrect hydra
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
