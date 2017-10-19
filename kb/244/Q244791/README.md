---
layout: page
title: "Q244791: BUG: MSDN Library Subset Problem on Windows 2000"
permalink: /kb/244/Q244791/
---

## Q244791: BUG: MSDN Library Subset Problem on Windows 2000

	Article: Q244791
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbOSWin2000 kbDSupport kbGrpDSTools
	Last Modified: 25-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Subsets appear incorrectly in the Microsoft Developer's Network (MSDN) Library.
	Some of the subset names appear with garbage characters.
	
	CAUSE
	=====
	
	This problem will occur is you have more than one language version of the same
	MSDN Library is installed on the Windows 2000 computer. For example, this
	problem could happen on a Japanese system with both the Japanese and English
	versions of the October 1999 MSDN Library installed.
	
	Windows 2000 copies the subset file (.chs) from the MSDN installation directory
	(.\Program Files\Microsoft Visual Studio\MSDN\[month]\[langID]\[collection].CHS)
	to the User Profile directory for the current user. By default the subset file
	is placed in the following location:
	
	.\Documents and Settings\[username]\Application Data\Microsoft\HTML Help
	
	The problem occurs because the subset file name is the same for all language
	versions of the same MSDN Library. When the second language version of the same
	MSDN Library is installed, the original .chs file in the User Profile directory
	gets overwritten with a new .chs file. Viewing subset information that was
	intended for a different language MSDN Library can result in garbage characters
	appearing in the subset list.
	
	RESOLUTION
	==========
	
	When two language versions of the same MSDN Libraries are installed, you must
	choose one of the language versions to correctly display subset information. It
	is currently impossible to have subset information appear correctly for both
	language versions of the MSDN Library.
	
	The original subset file is still located in the MSDN installation directory. For
	example, the English October 1999 MSDN Library subset file is located in the
	following default directory:
	
	.\Program Files\Microsoft Visual Studio\MSDN\99OCT\1033\MSDN930.CHS
	
	One of the language-specific .chs files can be copied into the User Profile
	directory as described in the "Cause" section. That same language version of the
	MSDN Library will now display subset information correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Note that when working with international versions of the MSDN Library, only
	7-bit ASCII can be used for custom subset names. Other code pages do not work
	correctly and are unsupported.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbOSWin2000 kbDSupport kbGrpDSTools 
	Technology        : kbOSWin2000 kbOSWinSearch kbMSDNSearch kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
