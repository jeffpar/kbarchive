---
layout: page
title: "Q179807: Prompted to Install Printer During Msbatch.inf Setup"
permalink: kb/179/Q179807/
---

## Q179807: Prompted to Install Printer During Msbatch.inf Setup

	Article: Q179807
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Msbatch.inf file to install a foreign language (localized)
	version of Windows 95, Setup may prompt you to install a printer even though you
	specified a printer in the [Printers] section of the Msbatch.inf file.
	
	CAUSE
	=====
	
	This behavior can occur if the [Printers] section heading in the Msbatch.inf
	file is not typed using the same language as the localized version of Windows 95
	you are installing.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use a text editor (such as Notepad) to edit the
	Msbatch.inf file on the server from which you are running Setup, and type the
	[Printers] section heading using the appropriate language.
	
	NOTE: You may need to install the appropriate language on the server before you
	edit the Msbatch.inf file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The [Printers] section heading is the only section heading in the Msbatch.inf
	file that must be typed using the same language as the localized version of
	Windows 95 you are installing.
	
	
	For additional information about using an Msbatch.inf file for batch
	installations of Windows 95, please see Appendix D in the Microsoft Windows 95
	Resource Kit.
	
	Additional query words: automate
	
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
