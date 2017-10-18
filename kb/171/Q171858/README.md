---
layout: page
title: "Q171858: WD97: Receive &quot;The Specified Path Is Invalid&quot; Saving HTML File"
permalink: kb/171/Q171858/
---

## Q171858: WD97: Receive &quot;The Specified Path Is Invalid&quot; Saving HTML File

	Article: Q171858
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to save an HTML file from Microsoft Word 97 for Windows to a
	Novell NetWare server or to an operating system that either does not use long
	file names or is set to use only 8.3 file names (file names with eight
	characters and a three letter extension), you will receive the following error
	message:
	
	  The specified path is invalid.
	
	
	CAUSE
	=====
	
	By default, Microsoft Word uses an .html file name extension for HTML- formatted
	documents. If the server does not have OS/2 or long file name space support
	installed, you will receive this error message.
	
	WORKAROUND
	==========
	
	Before clicking OK to save the file, delete the "l" from the ".html" file name
	extension (that is, change ".html" to ".htm"). Files with an .htm extension are
	still recognized as HTML files and can be saved to the server successfully.
	
	MORE INFORMATION
	================
	
	By default, Novell NetWare servers support MS-DOS file names only. Support for
	long file names is optional and can be added by an administrator.
	
	NetWare is manufactured by Novell, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	For information about how to contact Novell, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	Additional query words: OS/2 LONG_NAMES 3.11 3.12 4.10 4.1 4.11 IntraNetWare Banyan Vines
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
