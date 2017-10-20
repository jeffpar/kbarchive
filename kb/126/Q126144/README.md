---
layout: page
title: "Q126144: Cannot Print to PostScript Printer on Novell Network"
permalink: /kb/126/Q126144/
---

## Q126144: Cannot Print to PostScript Printer on Novell Network

{% raw %}

	Article: Q126144
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a network printer on a Novell NetWare network, your print job
	does not appear.
	
	CAUSE
	=====
	
	This problem can occur if you enable the banner page and print to a PostScript
	printer. By default, Novell NetWare print servers do not support banners on
	PostScript printers.
	
	NOTE: The Novell NetWare print server, not Windows 95, generates the banner page.
	Windows 95 does not control whether or not the banner page is printed.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Disable the banner page.
	
	- Print to a non-PostScript printer.
	
	- Contact Novell or your network administrator about enabling PostScript
	  banners on the PostScript print server.
	
	MORE INFORMATION
	================
	
	If you have difficulties printing to a PostScript printer over a network, it may
	be because banner pages are incorrectly configured on the NetWare server. Unless
	banner pages are correctly configured on the NetWare server, they will cause
	errors and nothing will print. To solve this problem, you can either disable
	banner pages by removing the check mark from the Banner Pages box in Capture
	printer properties, or contact your network administrator to correctly configure
	banner pages on the NetWare server for a PostScript printer.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
