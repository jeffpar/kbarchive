---
layout: page
title: "Q154740: PRB: Error Occurs when Exiting FoxPro Modal Form"
permalink: /kb/154/Q154740/
---

## Q154740: PRB: Error Occurs when Exiting FoxPro Modal Form

{% raw %}

	Article: Q154740
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): kbtool kbvfp
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are exiting a modal form/formset with FoxPro menus created with DO FORM
	under Microsoft Windows version 3.1 and when Double-Byte Character Set (DBCS)
	are enabled, you receive the error message:
	
	  "There is not enough memory to complete this operation."
	
	This occurs in the release for the Far East only.
	
	NOTE: This problem does not occur under localized Windows NT/Windows 95.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a simple modal form.
	
	2. Open a Menu Designer dialog box.
	
	3. In the Prompt column of the Menu Designer dialog box, enter appropriate
	  double-byte characters.
	
	4. In the Result box, select Command.
	
	5. In the box to the right of the Result box, type the DO FORM form_name
	  command.
	
	6. Run the menu, and open the modal form.
	
	7. Release the modal form and you will get a "There is not enough memory to
	  complete this operation" error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
