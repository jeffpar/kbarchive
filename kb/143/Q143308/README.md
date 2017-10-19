---
layout: page
title: "Q143308: BUG: Textwidth Method Does Not Return Foxel Units"
permalink: /kb/143/Q143308/
---

## Q143308: BUG: Textwidth Method Does Not Return Foxel Units

	Article: Q143308
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbgraphic kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TextWidth method of Visual FoxPro for Windows is defined as returning the
	length of a text string expressed in a count of units, the units being expressed
	in either pixels or foxels depending on the current scalemode of the form.
	However, the values are actually returned in pixels, only, regardless of the
	scalemode property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Illustrate this Problem
	--------------------------------
	
	In the Visual FoxPro Command window, type the following sequence of commands and
	observe the information that is displayed in the upper-left portion of the
	desktop:
	
	 x = CreateObject("form")
	 ? x.ScaleMode             && returns 3 (pixels, the default)
	 ? x.TextWidth("testing")  && shows 42 (pixels, if standard font)
	 x.Scalemode = 0           && Foxels
	 ? x.TextWidth("testing")  && shows 42 - the pixels measurement
	
	Additional query words: txtwidth kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbgraphic kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
