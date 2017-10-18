---
layout: page
title: "Q154969: Problem Installing Rnaplus.inf File"
permalink: kb/154/Q154969/
---

## Q154969: Problem Installing Rnaplus.inf File

	Article: Q154969
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install SLIP and Scripting for Dial-Up Networking by using the
	right mouse button to click the Rnaplus.inf file and then clicking Install, it
	may not be installed.
	
	CAUSE
	=====
	
	The Rnaplus.inf file included on the Windows 95 CD-ROM does not include the
	[DefaultInstall] section required for installing programs using the context
	menu.
	
	
	RESOLUTION
	==========
	
	To install SLIP and Scripting for Dial-Up Networking, use either of the
	following methods:
	
	Method 1
	--------
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. On the Windows Setup tab, click Have Disk.
	
	3. Type the path for the Rnaplus.inf file, and then click OK.
	
	  NOTE: If you are using the Windows 95 CD-ROM, the path is
	
	  <drive>:\Admin\Apptools\Dscript
	
	  where <drive> is the letter for the CD-ROM drive.
	
	4. Click the "SLIP and Scripting for Dial-Up Networking" check box to select it,
	  and then click Install.
	
	Method 2
	--------
	
	1. Click the "SLIP and Scripting Support" link on the following Microsoft Web
	  page:
	
	  http://www.microsoft.com/windows/software/admintools.htm
	
	2. Download the Dscript.exe file to an empty folder on your hard disk.
	
	3. Double-click the Dscript.exe file you downloaded to extract the files it
	  contains.
	
	4. Use the right mouse button to click the Rnaplus.inf file extracted in step 3,
	  and then click Install on the menu that appears.
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
