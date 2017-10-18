---
layout: page
title: "Q178882: XWEB: French Version of Internet Explorer 3.x Replaces VBScript."
permalink: kb/178/Q178882/
---

## Q178882: XWEB: French Version of Internet Explorer 3.x Replaces VBScript.

	Article: Q178882
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.0,3.01,3.02,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Internet Explorer versions 3.0, 3.01, 3.02 for Windows NT 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the French version of Microsoft Internet Explorer 3.x is installed over
	Microsoft Exchange Server 5.5, Web access to the Exchange Server computer will
	fail with VB Script errors.
	
	CAUSE
	=====
	
	The version of VBScript.dll installed by Internet Explorer (1.0.0.806)
	overwrites the version installed by Exchange Server (3.1.0.2115).
	
	WORKAROUND
	==========
	
	Copy the newer version of VBScript.dll from the Exchange Server 5.5 CD-ROM to
	the <WinNT>\System32 directory.
	
	MORE INFORMATION
	================
	
	When Internet Explorer 3.x copies files during setup there is no warning when
	the newer version of VBScript.dll is replaced with an older version. Normally,
	there is a warning before replacing existing files that are of a newer version.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbIEsearch kbZNotKeyword2 kbOWASearch kbIENT400Search kbZNotKeyword3 kbOWA550 kbIE300WinNT400 kbIE301WinNT400 kbIE302WinNT400
	Version           : WINDOWS:3.0,3.01,3.02,5.5
	Issue type        : kbbug
	
	=============================================================================
	
