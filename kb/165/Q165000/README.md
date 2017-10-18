---
layout: page
title: "Q165000: XCLN: How to Enable Hyperlinks in an Exchange Form"
permalink: kb/165/Q165000/
---

## Q165000: XCLN: How to Enable Hyperlinks in an Exchange Form

	Article: Q165000
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; Win95:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to enable the use of Internet hyperlinks and file
	shortcuts in a Microsoft Exchange form. This allows the recipient of a form to
	view references to the Internet and file resources as hyperlinks. For example,
	these can be viewed as hyperlinks or shortcuts:
	
	  http://www.microsoft.com
	
	  ftp://ftp.microsoft.com
	
	  file:\\myserver\myshare\myfile.doc
	
	MORE INFORMATION
	================
	
	To enable Internet hypertext links or file shortcuts in a form, you must use a
	RichEntry field that has a Reference Name of MAPI_Body_Custom. Only one field
	per window can be used as a MAPI_Body_Custom, so only one RichEntry field per
	window can allow Internet and file hyperlinks. However, you can have multiple
	RichEntry fields on a Form window.
	
	To change the Reference Name of a RichEntry field to MAPI_Body_Custom:
	
	1. In the Form window, select the RichEntry field you want to use and on the
	  View menu, click Field Properties.
	
	2. On the General tab, in the Reference Name box, select the MAPI_Body_Custom
	  check box.
	
	NOTE: If this name is already taken by another field on the Form window, change
	one of the fields' Reference Names. Only one field per window can have the name
	MAPI_Body_Custom.
	
	Additional query words: hypertext link forms eform
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0; Win95:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
