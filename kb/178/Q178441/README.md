---
layout: page
title: "Q178441: ActiveMovie Version Error During Starts Here Setup"
permalink: /kb/178/Q178441/
---

## Q178441: ActiveMovie Version Error During Starts Here Setup

	Article: Q178441
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdocerr
	Last Modified: 28-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Office 97 Starts Here ISBN 1-57231-303-X 
	- MSPRESS Microsoft Office 97 Small Business Edition Starts Here 1-57231-607-1 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Starts Here 
	- MSPRESS Microsoft Windows 95 Starts Here Updated Edition ISBN 1-57231-736-1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have Microsoft Internet Explorer 4.0 installed and you attempt to run the
	Setup program from one of the products listed above, you may encounter the
	following error message:
	
	  The version of ActiveMovie that you are trying to install is older than the
	  one already present on your system.
	
	  ActiveMovie Setup cannot upgrade an existing installation if the version is
	  newer or if the language is different. Please uninstall your existing
	  ActiveMovie and then run setup again.
	
	CAUSE
	=====
	
	You can receive this error message if the version of ActiveMovie installed on
	your computer is later than the version the Starts Here program is attempting to
	install.
	
	RESOLUTION
	==========
	
	To resolve this error message, you must remove the existing version of
	ActiveMovie before you run the Starts Here Setup program.
	
	ActiveMovie may not be in the Add/Remove Programs tool in Control Panel if it is
	installed by another product.
	
	If ActiveMovie is not listed on the Install/Uninstall tab in the Add/Remove
	Programs tool in Control Panel, follow these steps to remove the previous
	version:
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. Double-click the Windows folder to expand the branch.
	
	3. Double-click the System folder to expand the branch.
	
	4. Locate and rename the following files:
	
	  Filename        Location in Win95      Location in Win NT
	  --------        -----------------      ------------------
	
	  AMovie.ocx      C:\Windows\System      C:\Windows\System32
	  Quartz.dll      C:\Windows\System      C:\Windows\System32
	  Actmovie.exe    C:\Windows\System      C:\Windows\System32
	
	5. Restart Windows to register these changes.
	
	6. Run the Setup program for the Starts Here program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem is very similar to one encountered with certain Mastering Series
	products. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q176217 PRB: Mastering VB 5.0 Err Msg: The Version of ActiveMovie...
	
	Additional query words: press ms_press 1-57231-736-1 1-57231-522-9 1-57231- 607-1 1-57231-303-X
	
	======================================================================
	Keywords          : kberrmsg kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
