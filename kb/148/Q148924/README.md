---
layout: page
title: "Q148924: Dial-Up Scripting Does Not Work After Reinstalling DUN"
permalink: /kb/148/Q148924/
---

## Q148924: Dial-Up Scripting Does Not Work After Reinstalling DUN

{% raw %}

	Article: Q148924
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dial-Up Scripting may no longer work after Dial-Up Networking is reinstalled.
	The Dial-Up Scripting Tool shows that the correct script is applied to the
	Dial-Up Networking connection icon, but when you double- click the connection
	icon, Dial-Up Networking does not log you on and disconnects.
	
	CAUSE
	=====
	
	Reinstalling Dial-Up Networking overrides entries in the registry that Dial-Up
	Scripting requires to intercept the normal login procedure.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall Dial-Up Scripting. To do so, follow these
	steps:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. On the Windows Setup tab, click Have Disk.
	
	3. Type the path for the Rnaplus.inf file, and then click OK.
	
	  NOTE: If you are using the Windows 95 CD-ROM, the path is
	
	  <drive>:\Admin\Apptools\Dscript
	
	  where <drive> is the drive letter for the CD-ROM drive.
	
	4. Click the "SLIP and Scripting for Dial-Up Networking" check box to select it,
	  and then click Install.
	
	NOTE: These steps apply only to the retail release of Windows 95. This
	information does not apply to Windows 95 OEM Service Release version 2.
	
	For additional information about installing Dial-Up Scripting, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q153038 How to Automate Dial-Up Networking Connections
	
	MORE INFORMATION
	================
	
	Note that the resolution listed in this article can also be used to resolve the
	following error message in Dial-Up Networking:
	
	  An essential file is missing
	
	======================================================================
	Keywords          : kbnetwork kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
