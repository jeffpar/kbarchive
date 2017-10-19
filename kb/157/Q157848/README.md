---
layout: page
title: "Q157848: Custom Forms Not Available for Panasonic KXP-1124i"
permalink: /kb/157/Q157848/
---

## Q157848: Custom Forms Not Available for Panasonic KXP-1124i

	Article: Q157848
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a custom form in Server properties in the Printers folder for
	your Panasonic KXP-1124i printer, the custom form may not be available to be
	assigned to any tray in the properties for your printer.
	
	
	CAUSE
	=====
	
	This behavior can occur if the custom form that you created has a width greater
	than eight inches.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Obtain the fix described below, or obtain the next Service Pack when it
	  becomes available.
	
	- Edit the form so that its width is equal to or less than eight inches. To do
	  so, follow these steps:
	
	  1. Click the Start button, point to Settings, and then click Printers.
	
	  2. Click your printer, and then click Server Properties on the File menu.
	
	  3. Click the custom form in the Forms On <ComputerName> box.
	
	  4. Change the Width setting to be equal to or less than eight inches.
	
	  5. Click Save Form, and then click OK.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q157172
	  TITLE : How to Create Custom Forms in Windows NT 4.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information about obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base:
	
	  servpack
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
