---
layout: page
title: "Q137521: BUG: Class Browser: Error When Typing a Subclass in Type Combo"
permalink: /kb/137/Q137521/
---

## Q137521: BUG: Class Browser: Error When Typing a Subclass in Type Combo

{% raw %}

	Article: Q137521
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Class Browser, typing the name of a subclass in the Type combo box to
	filter information results in this error:
	
	  Unable to Display Class Hierarchy for <class name>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the Class Browser by clicking Class Browser on the Tools menu.
	
	2. Open a .vcx file that has some child classes. For example, open Tsbase.vcx
	  located in the Samples\Mainsamp\Libs directory.
	
	3. Type in a name of a child class in the Type combo box. For example, type
	  "tsmaintform" (without the quotation marks). The error message "Unable to
	  Display Class Hierarchy for Class (tsmaintform)" is displayed.
	
	
	Additional query words: 5.00 3.00 3.00b kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
