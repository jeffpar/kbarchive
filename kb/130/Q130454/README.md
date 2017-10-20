---
layout: page
title: "Q130454: INFO: .dbf-style Help Font Changed to Microsoft Sans Serif"
permalink: /kb/130/Q130454/
---

## Q130454: INFO: .dbf-style Help Font Changed to Microsoft Sans Serif

{% raw %}

	Article: Q130454
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro uses a different font (Microsoft Sans Serif) in the MS-DOS style
	help file. The previous version (2.6) of FoxPro used FoxFont for the help file.
	
	MORE INFORMATION
	================
	
	FoxFont caused serious problems in localized versions. Some of the higher ASCII
	number characters used in FoxFont are special symbols that map to other symbols
	in the international code pages.
	
	MS Sans Serif is the Visual FoxPro version 3.0 system font. All dialogs, wizards,
	and other interface elements use MS Sans Serif. A design decision was made to
	use MS Sans Serif for .DBF style Help. International code pages map well to MS
	Sans Serif, so the ASCII character issue was resolved.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
