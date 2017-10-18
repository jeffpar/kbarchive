---
layout: page
title: "Q217115: &quot;Invalid Syntax&quot; Connecting to Microsoft Windows Update Web Site"
permalink: kb/217/Q217115/
---

## Q217115: &quot;Invalid Syntax&quot; Connecting to Microsoft Windows Update Web Site

	Article: Q217115
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win98
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you navigate to the Microsoft Windows Update Web site
	(http://windowsupdate.microsoft.com), you may receive the following error
	message:
	
	  Microsoft Internet Explorer
	  Internet Explorer cannot open the Internet site <web address>
	  Invalid syntax
	
	When you connect to other Internet sites containing scripts, you may receive the
	following error message:
	
	  Internet Explorer Script Error
	  An error has occurred in the script on this page.
	
	CAUSE
	=====
	
	This behavior can occur if Internet Explorer is set to an invalid default code
	page. To detect an invalid default code page:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Internet.
	
	3. On the General tab, click Fonts.
	
	4. If the "Default charset" line displays "(def charset here)," Internet
	  Explorer's default code page is invalid.
	
	RESOLUTION
	==========
	
	To resolve this issue, in Internet Properties, click Fonts, choose Western under
	Character Sets, click Set as Default, click OK, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg win98 
	Technology        : kbWin98search kbWin98
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	
