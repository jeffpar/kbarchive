---
layout: page
title: "Q141917: PRB: WAIT WINDOW Will Not Terminate with Outline Control"
permalink: /kb/141/Q141917/
---

## Q141917: PRB: WAIT WINDOW Will Not Terminate with Outline Control

{% raw %}

	Article: Q141917
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
	
	When you use an Outline Control, the WAIT WINDOW will not deactivate when a
	navigation key is pressed (keyboard or mouse).
	
	WORKAROUND
	==========
	
	Click outside the outline control to deactivate WAIT WINDOW or select a key
	other than keys used to navigate in the outline control (arrow keys, PGUP, or
	PGDN).
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and drop an OLE Container Control onto the form. Select
	  Insert Control for the OLE Container and Outline Control for the Control
	  Type.
	
	2. Add Vfp\Samples\Data\Customer.dbf to the Data Environment, and set the Order
	  property of the Customer cursor to CONTACT.
	
	3. In the form's Init event, place this code:
	
	     ****** Begin INIT ******
	
	     SELECT Customer
	     GO TOP
	     FOR lnI=1 to RECCOUNT()
	       THISFORM.OLECONTROL1.ADDITEM(contact,lnI)
	       THISFORM.OLECONTROL1.INDENT(lnI)=1
	       SKIP
	     ENDFOR
	     THISFORM.REFRESH
	
	     ******* End INIT *******
	
	4. Inside the Outline control's DBLCLICK event, type:
	
	     WAIT WINDOW
	
	5. Run the form. Double-click any item inside the outline control. The Wait
	  Window will not deactivate. You can move up and down the outline control list
	  by using either the keyboard or mouse controls and the Wait window will still
	  be active. You must select outside the outline control to deactivate the WAIT
	  WINDOW.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
