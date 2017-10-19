---
layout: page
title: "Q185721: Faxing from Win95 Prompts for Intervention or Has Blank Status"
permalink: /kb/185/Q185721/
---

## Q185721: Faxing from Win95 Prompts for Intervention or Has Blank Status

	Article: Q185721
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT4.0,4.0a;WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Faxing from a Windows 95 client to a Small Business Server may stall and the
	client faxing queue displays a blank status or User Intervention Status Needed.
	The fax job never shows up in the server fax queue.
	
	CAUSE
	=====
	
	During the Computer Setup Wizard, the user may have been denied permissions to
	the fax printer. Even after re-enabling permissions, the problem may still
	persist.
	
	RESOLUTION
	==========
	
	Enable permissions for the Windows 95 user on the SBS fax printer from the
	Manage Faxes icon in the More Tasks tab of the SBS Management Console, and then
	restart the client computer so that the permission changes take effect.
	
	MORE INFORMATION
	================
	
	Because the Windows 95 printing subsystem is different than the Windows NT
	printing subsystem, this problem does not occur on Windows NT.
	
	Under normal operation, the Windows 95 client queue will empty when the server
	accepts the fax queue. At that time, the server queue is not viewable from the
	client, giving the appearance of a successful fax job to the Windows 95 client.
	
	Additional query words: win95 sbs smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin95search kbSBServSearch kbZNotKeyword3 kbSBServ400 kbSBServ400a
	Version           : WinNT4.0,4.0a;WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
