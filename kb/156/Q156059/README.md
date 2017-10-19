---
layout: page
title: "Q156059: PRB: Single Letter SCX Name Not Permitted in ON KEY LABEL"
permalink: /kb/156/Q156059/
---

## Q156059: PRB: Single Letter SCX Name Not Permitted in ON KEY LABEL

	Article: Q156059
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when you use any of the first ten characters of the
	alphabet (a-j) as a single letter SCX name and an ON KEY LABEL command to
	reference the form object:
	
	  "Unrecognized Command Verb"
	
	WORKAROUND
	==========
	
	Change the name of the form so it uses a different letter or has multiple
	characters in the name.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The first ten characters of the alphabet (a-j) are not supported as SCX names
	that can be referenced by the ON KEY LABEL command; these characters are
	reserved for dBASE compatibility. However, if you use any alphabet letter after
	"j," or any other multiple letter name, it will work properly.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form, and save it as "g.scx" (without the quotation marks).
	
	2. Add a couple of Textboxes to the form.
	
	3. In the Init Event of the form, put the following code:
	
	     ON KEY LABEL F4 g.text2.setfocus()
	
	4. Run the form.
	
	Note that the error occurred with "Unrecognized Command Verb."
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
