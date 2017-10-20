---
layout: page
title: "Q151769: FIX: Random Character in Wait Window After Set Default Options"
permalink: /kb/151/Q151769/
---

## Q151769: FIX: Random Character in Wait Window After Set Default Options

{% raw %}

	Article: Q151769
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbenv kbvfpkbbuglist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the default options for Microsoft Visual FoxPro and you have the
	status bar turned off, Visual FoxPro notifies you that the Default Options were
	saved in a Visual FoxPro wait window. A random character in the "Default Options
	Saved" wait window appears after the <Set as Default> button is pressed in
	the Tools/Options dialog.
	
	The messages that appear in the Visual FoxPro wait windows are:
	
	- Saving Options
	
	-and=
	
	- #Default Options Saved
	
	  where # is a garbage character that appears before the word "Default".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command Window, type "SET STATUS BAR OFF" (without the quotation
	  marks) and press the ENTER key.
	
	2. On the Tools menu, select Options.
	
	3. Change an option, and click the Set as Default button.
	
	This bug is a visual problem and does not affect the functionality of Visual
	FoxPro in any way.
	
	Additional query words: VfoxMac kbvfp600fix
	
	======================================================================
	Keywords          : kbenv kbvfp kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
