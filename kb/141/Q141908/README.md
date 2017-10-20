---
layout: page
title: "Q141908: PRB: Arrow Key Inconsistency in List Boxes"
permalink: /kb/141/Q141908/
---

## Q141908: PRB: Arrow Key Inconsistency in List Boxes

{% raw %}

	Article: Q141908
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating a list box, you notice that its behavior is inconsistent when
	scrolling through the records by using the arrow keys.
	
	WORKAROUND
	==========
	
	Place the following code in List2.Keypress to stop the arrow keys from moving
	beyond the top and bottom:
	
	  LPARAMETERS nKeyCode, nShiftAltCtrl
	  if (this.listindex=this.listcount and nKeyCode=24) or;
	     (this.listindex=1 and nKeyCode=5)
	      nodefault
	  ENDIF
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form, and place two list boxes (List1 and List2) on it.
	
	2. Populate List1 with more items than are displayable so that the scroll bar is
	  available.
	
	3. Populate List2 with only a couple of items so that the scrollbar is not
	  active.
	
	4. Scroll through both the list boxes by using the arrow keys.
	
	5. Notice that in the second list box, you can continuously scroll up past the
	  first list item to the bottom of the list and down past the end of the list
	  to the top. In List1 the scrolling stops at the top and the bottom of the
	  list.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
