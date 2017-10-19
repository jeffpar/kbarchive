---
layout: page
title: "Q138145: BUG: Different TAB &amp; SHIFT+TAB Behavior in Visual FoxPro Popup"
permalink: /kb/138/Q138145/
---

## Q138145: BUG: Different TAB &amp; SHIFT+TAB Behavior in Visual FoxPro Popup

	Article: Q138145
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FoxPro 2.x, the TAB or SHIFT+TAB keys can be used to exit a popup menu, but
	in Visual FoxPro, pressing TAB or SHIFT+TAB does nothing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the following code in FoxPro version 2.6 for Windows:
	
	        DEFINE POPUP POP_UP FROM 10,10 SHADOW
	        DEFINE BAR 1 OF POP_UP PROMPT "Cedar Springs"
	        DEFINE BAR 2 OF POP_UP PROMPT "Detroit"
	        DEFINE BAR 3 OF POP_UP PROMPT "Grand Rapids"
	        DEFINE BAR 4 OF POP_UP PROMPT "Lansing"
	        DEFINE BAR 5 OF POP_UP PROMPT "Muskegon"
	        ON SELECTION POPUP POP_UP DEACTIVATE POPUP POP_UP
	        ACTIVATE POPUP POP_UP
	        RELEASE POPUP POP_UP
	
	2. Press TAB or SHIFT+TAB to exit the popup.
	
	3. Run the same code In Visual FoxPro 3.0.
	
	4. Press the TAB or SHIFT+TAB to see that this does not exit the popup.
	
	Additional query words: behavior access key kbvfp300 kbvfp5006
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
