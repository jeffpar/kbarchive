---
layout: page
title: "Q162849: KiXtart Script Error: Unknown Macro"
permalink: kb/162/Q162849/
---

## Q162849: KiXtart Script Error: Unknown Macro

	Article: Q162849
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the KiXtart logon script with a Windows 95 client you get the
	following error:
	
	  Script Error: Unknown Macro !
	  @IPAddress0
	
	-or-
	
	  Script Error: Unknown Macro !
	  @HostName
	
	CAUSE
	=====
	
	The macros, @IPAddress0-3 and @Hostname did not exist in KiXtart before version
	3.35. The version released in the Windows NT 4.0 Resource Kit is 3.21.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Download the most recent version of KiXtart from the KiXtart home page at the
	  following Web site:
	
	  http://www.kixtart.to/
	
	- Disable these macros in your logon script file.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
