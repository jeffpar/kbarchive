---
layout: page
title: "Q149183: PRB: Insufficient Memory If You Use PGUP or PGDN Key w/ Lists"
permalink: /kb/149/Q149183/
---

## Q149183: PRB: Insufficient Memory If You Use PGUP or PGDN Key w/ Lists

{% raw %}

	Article: Q149183
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you press and hold the PGUP or PGDN key to navigate through lists in FoxPro
	screens, then after a few times, you'll receive this error:
	
	  Insufficient Memory
	
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and place a list box on it.
	
	2. Select the From Fields option in the list box's List Items, and select a
	  field from a table such as Customer.Contact.
	
	3. Generate, and run the form.
	
	4. Open the Debug window, and enter SYS(1016).
	
	5. Press and hold the PGUP or PGDN key on your keyboard to navigate up or down
	  through the list.
	
	Note the number returned by SYS(1016) in the Debug window. After a few times of
	scrolling all the way down and all the way back up in the list, you should see
	the number displayed in Debug increase because more and more memory is used by
	the object. At some point (this varies from one system to anther), the error
	occurs.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
