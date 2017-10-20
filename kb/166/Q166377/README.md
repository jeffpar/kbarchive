---
layout: page
title: "Q166377: FIX: Report Designer Changes Font from Wingdings to Default Font"
permalink: /kb/166/Q166377/
---

## Q166377: FIX: Report Designer Changes Font from Wingdings to Default Font

{% raw %}

	Article: Q166377
	Product(s): Microsoft FoxPro
	Version(s): 5.0a
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbVS97sp2fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the you use the Wingdings font in a report, the font is changed to the
	default Report Designer font when the report is previewed.
	
	NOTE: Other fonts that have a script of "Symbol" as the Wingdings font seems to
	act in the same manner as described above.
	
	This behavior does not occur in Visual FoxPro 5.0 for Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a table to be used for a Quick Report.
	
	2. Create a Quick Report in the Report Designer.
	
	3. Select one or more objects on the report and change the font to Wingdings.
	
	4. Preview the report and notice that any object with the Wingdings font has
	  reverted to the report default font (usually Arial).
	
	  NOTE: The selected font remains as Wingdings, but the displayed font is
	  different.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp kbVS97sp2fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500a
	Version           : 5.0a
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
