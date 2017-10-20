---
layout: page
title: "Q149899: BUG: Password Property Accepts No More Than 8 Characters"
permalink: /kb/149/Q149899/
---

## Q149899: BUG: Password Property Accepts No More Than 8 Characters

{% raw %}

	Article: Q149899
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Right-clicking the mouse on the Remote Data Control (MSRDC) displays the
	Properties menu item. Then select Properties, and a dialog box appears with the
	Password field as one of its selections. The Password field only accepts up to 8
	alphanumeric characters; any characters after that are ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. We are researching this issue and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	WORKAROUND
	==========
	
	When the Remote Data Control (MSRDC) is selected, the Microsoft Visual Basic
	Properties window shows the Password property and allows you to enter more than
	8 characters in the Password field.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Microsoft Visual Basic 4.0 Enterprise Edition, 32-bit project.
	  Form1 is created by default.
	
	2. Add the MSRDC control to Form1.
	
	3. Right-click the mouse on the MSRDC control, and select Properties.
	
	4. Type "123456789" (without the quotation marks) into the Password field,
	  watching what is actually being accepted by the field. Notice that you cannot
	  type in more than 8 characters.
	
	Additional query words: kbvbp400bug
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
