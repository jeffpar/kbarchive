---
layout: page
title: "Q137442: Why the Check Box Object Has No ReadOnly Property"
permalink: /kb/137/Q137442/
---

## Q137442: Why the Check Box Object Has No ReadOnly Property

{% raw %}

	Article: Q137442
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ReadOnly property appears only on the Column, EditBox, Grid, Spinner, and
	TextBox controls. This article explains why.
	
	MORE INFORMATION
	================
	
	There are two properties (ReadOnly and Enabled) that determine whether a control
	may be edited.
	
	When the Enabled property of a control is set to false (.F.), the control is not
	accessible. The user cannot give it the focus.
	
	When the ReadOnly property is set to true (.T.), the control is not editable.
	However, users can give the control the focus, move the insertion point through
	the text, and scroll by using scroll bar.
	
	Only those controls that need to provide these kinds of navigation capabilities
	while keeping the control non-editable have the ReadOnly property. For the
	others, such as the check box, the Enabled property alone is adequate.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
