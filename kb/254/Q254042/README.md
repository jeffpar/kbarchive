---
layout: page
title: "Q254042: Preserve Custom Services File When Installing Network Components"
permalink: /kb/254/Q254042/
---

## Q254042: Preserve Custom Services File When Installing Network Components

	Article: Q254042
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbenv kbnetwork dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply the Dial-Up Networking (DUN) 1.3 update to a Windows 95-based
	computer, the Services file is overwritten. The Services file is also
	overwritten when you reinstall network components such as protocols or network
	adapter drivers.
	
	The Services file is located in the Windows folder. It is used to store network
	resource mapping information such as drives, printers, and ports. Network
	administrators may prefer to have a modified Services file preserved under all
	circumstances. This article describes how you can prevent the customized
	Services file from being overwritten during network component installation.
	
	CAUSE
	=====
	
	When you install network components such as DUN 1.3, a new copy of the Services
	file is extracted from the Windows cabinet file to the Windows folder, where it
	overwrites any existing modified Services file. This is the default behavior in
	Windows 95.
	
	RESOLUTION
	==========
	
	You can prevent your custom Services file from being overwritten when you
	install network components by modifying a line in the Nettrans.inf file at the
	installation source.
	
	Use any text editor (such as Notepad) to edit the Nettrans.inf file. Locate the
	[MSTCP.CopyFiles.win] section in the file, and then modify the Services file
	entry in the Nettrans.inf file as follows:
	
	  services,,,16,
	
	"16" is a flag that indicates that the file should not be overwritten if it
	already exists.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Make sure to modify the Nettrans.inf file at the installation source (typically
	a flat folder), not the copy of Nettrans.inf file that is located in the
	Windows\Inf folder. Any changes you make to the Nettrans.inf file in the
	Windows\Inf folder are overwritten from the installation source folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
