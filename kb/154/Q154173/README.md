---
layout: page
title: "Q154173: Unsharing NetFax Folder Not Reflected in Fax Properties"
permalink: /kb/154/Q154173/
---

## Q154173: Unsharing NetFax Folder Not Reflected in Fax Properties

	Article: Q154173
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you stop sharing the NetFax folder in Windows Explorer, the Modem tab in Fax
	properties in the Mail And Fax tool in Control Panel continues to show the Fax
	as being shared. However, the NetFax folder is no longer accessible from the
	network and the fax modem is no longer shared.
	
	CAUSE
	=====
	
	The NetFax folder is created to allow others to use the fax modem across the
	network. If it is not shared, the fax modem is not available across the network.
	
	RESOLUTION
	==========
	
	To stop sharing the NetFax folder, follow these steps:
	
	1. In Control Panel, double-click Mail And Fax.
	
	2. Click Microsoft Fax, and then click Properties.
	
	3. On the Modem tab, click the "Let other people on the network use my modem to
	  send faxes" check box to clear it.
	
	NOTE: Clicking the Properties button on the Modem tab and then clicking Cancel
	causes the NetFax folder to be shared again.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
