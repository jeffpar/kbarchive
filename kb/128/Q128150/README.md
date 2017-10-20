---
layout: page
title: "Q128150: DOC: Help File Incorrectly States SYS(1037) Ignored by Windows"
permalink: /kb/128/Q128150/
---

## Q128150: DOC: Help File Incorrectly States SYS(1037) Ignored by Windows

{% raw %}

	Article: Q128150
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6,2.6a
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Help file that ships with Microsoft FoxPro versions 2.6 and 2.6a states that
	the function SYS(1037) is for use in FoxPro for Macintosh only. It claims that
	SYS(1037) will be ignored by FoxPro for MS-DOS and FoxPro for Windows. This is
	incorrect.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	The SYS(1037) function may be used on the Macintosh to display the Page Setup
	dialog. It may also be used in FoxPro for Windows to display the Print Setup
	dialog box. SYS(1037) is ignored in FoxPro for MS-DOS. The following two-step
	procedure demonstrates the functionality of SYS(1037) in Windows:
	
	1. Open Microsoft FoxPro version 2.6 or 2.6a for Windows.
	
	2. Type "?SYS(1037)" (without the quotation marks) in the Command window, and
	  press ENTER. The Windows Printer Setup dialog box appears.
	
	Additional query words: VFP5.00 docerr 2.60 2.60a
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a
	Version           : WINDOWS:2.6,2.6a
	
	=============================================================================
	

{% endraw %}
