---
layout: page
title: "Q112022: Mac Client Cannot Print After Service Pack 2 is Installed"
permalink: kb/112/Q112022/
---

## Q112022: Mac Client Cannot Print After Service Pack 2 is Installed

	Article: Q112022
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install U.S. Service Pack 2 for Windows NT, trying to print from a
	Macintosh client causes this error message to appear:
	
	  <application_name> is unable to print this document. Make sure you've
	  selected a printer.
	
	This happens only if you have set up a user account for the Print Server for
	Macintosh as described on page 64 of the Windows NT Advanced Server "Services
	for Macintosh" (SFM) manual.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Services section of Control Panel to set
	the Print Server for Macintosh to log on as the System Account (while it is, you
	cannot set print permissions for Macintosh clients).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. This problem has been corrected in the latest U.S. Service Pack for
	Windows NT Advanced Server version 3.1. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt SP2 Mac sfm
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	
	=============================================================================
	
