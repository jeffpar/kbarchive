---
layout: page
title: "Q102734: PRB: GET Objects w/ MS Sans Serif Font Look Strange in Win 3.0"
permalink: /kb/102/Q102734/
---

## Q102734: PRB: GET Objects w/ MS Sans Serif Font Look Strange in Win 3.0

{% raw %}

	Article: Q102734
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	GET objects created with the MS Sans Serif font (or any TrueType font) in FoxPro
	for Windows while it is running in the Windows version 3.1 environment will not
	look correct when the program is run in the Windows version 3.0 environment.
	
	CAUSE
	=====
	
	This behavior occurs because the MS Sans Serif font is unavailable in Windows
	3.0 and a bitmapped font is used instead. As a result, the font will look
	different and spacing problems, such edit regions overflowing into push buttons
	on the screen, will occur.
	
	This behavior is noticeable when using RQBE to send output to a graph. The
	GraphWizard uses the MS Sans Serif font.
	
	RESOLUTION
	==========
	
	To work around this problem, use fonts that are available to both Windows 3.0
	and 3.1. For example, use one of the fonts that shipped with Windows 3.0, such
	as Courier, Helv, or Tms Rmn.
	
	REFERENCES
	==========
	
	For more information on fonts, see the "Windows Resource Kit" manual for Windows
	3.1.
	
	Additional query words: FoxWin 2.50 WINDOWS 3.0 GET READ FONT RQBE
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a
	Version           : WINDOWS:2.5,2.5a
	
	=============================================================================
	

{% endraw %}
