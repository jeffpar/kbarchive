---
layout: page
title: "Q185841: Err Msg: This Program May Not Run Correctly Because of New..."
permalink: kb/185/Q185841/
---

## Q185841: Err Msg: This Program May Not Run Correctly Because of New...

	Article: Q185841
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:4.01,95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup win95 msiew95
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.5 
	- Microsoft Internet Explorer version 4.01 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to reinstall Windows 95 OEM Service Release (OSR) version 2.5, and
	Internet Explorer version 4.01 is installed, you may receive the following error
	message:
	
	  This program may not run correctly because of new features in Internet
	  Explorer 4.0. You may need to obtain an updated version of this program. For
	  information about obtaining an updated version, click Details. Or, if you
	  want to try running this program, click Details to determine whether it will
	  cause other problems. Then, if running this program will not cause other
	  problems, click Run Program.
	
	If you then click Details, you may receive the following message:
	
	  Important
	
	  You are trying to reinstall Windows on this computer. You cannot do
	  this when Internet Explorer 4.0 is installed on your computer. You need
	  to uninstall Internet Explorer 4.0 before reinstalling Windows.
	
	RESOLUTION
	==========
	
	To work around this issue, use either of the following methods:
	
	Reinstall OSR 2.5
	-----------------
	
	If you want to reinstall OSR 2.5 without first uninstalling Internet Explorer,
	click Run Program when you receive the error message listed in the Symptoms
	section of this article.
	
	Uninstall Internet Explorer and then reinstall OSR 2.5
	------------------------------------------------------
	
	Uninstall Internet Explorer, and then reinstall OSR 2.5. To do so, use the
	following steps:
	
	1. Uninstall Internet Explorer. For information about how to do so, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q174265 How to Uninstall Internet Explorer 4.0
	
	2. Reinstall OSR 2.5.
	
	MORE INFORMATION
	================
	
	The Internet Explorer Active Setup begins immediately after Windows Setup has
	restarted your computer and has finished configuring your computer. It is not
	possible to bypass the installation of Internet Explorer 4.01 by canceling the
	Active Setup wizard. You must finish installing Internet Explorer 4.01 before it
	can be uninstalled.
	
	Additional query words: 95 4.00
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup win95 msiew95 
	Technology        : kbIEsearch kbWin95search kbIE95Search kbOPKSearch kbZNotKeyword3 kbIE401Win95 kbWin95OPKOSR25
	Version           : WINDOWS:4.01,95
	Issue type        : kbprb
	
	=============================================================================
	
