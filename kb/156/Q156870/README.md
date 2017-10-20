---
layout: page
title: "Q156870: PRB: Mouse &amp; Click Events Behavior in List Box and Grid Differ"
permalink: /kb/156/Q156870/
---

## Q156870: PRB: Mouse &amp; Click Events Behavior in List Box and Grid Differ

{% raw %}

	Article: Q156870
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 5.00
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mouse and Click events do not fire on same areas of the object. The Click
	event ignores clicks to the scroll bar.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The behavior of the Mouse and Click events differ. The Click event executes
	after clicking on the item itself; however, the Click event ignores clicks to
	the object's scroll bars. For example, clicking on an item listed in a list box
	triggers the Click event.
	
	Conversely, Mouse events react to both clicks on the object and the scroll bars
	of the object. For example, consider a list box and its scroll bars. A MouseUp
	or MouseDown event fires after clicking the contents of the list box or the
	scroll bars of the object.
	
	This behavior occurs with grid and list box objects.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called Test.
	
	2. Place a list box object on the form.
	
	3. Right-click the list box and start the Builder.
	
	4. Under the List Items tab, change the "Fill List with" box to "Data entered by
	  hand." Enter in three values for three rows. Choose the OK button.
	
	5. In the MouseUp, MouseDown, and Click events of the list box enter the
	  following command:
	
	     WAIT WINDOW PROGRAM()
	
	6. Run the form and click on the scroll bars. Only the MouseUp and MouseDown
	  events fire. Now click on a row of the list box. The Click, MouseUp, and
	  MouseDown events all respond.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : 3.00 3.00b 5.00
	
	=============================================================================
	

{% endraw %}
