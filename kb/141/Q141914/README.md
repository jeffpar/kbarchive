---
layout: page
title: "Q141914: PRB: Record Number is Not Refreshed in Status Bar"
permalink: /kb/141/Q141914/
---

## Q141914: PRB: Record Number is Not Refreshed in Status Bar

{% raw %}

	Article: Q141914
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
	
	Changes to the current record number are not reflected in the status bar while
	using the outline control.
	
	WORKAROUND
	==========
	
	Click outside the outline control to refresh the status bar.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and drop an OLE Container Control onto it. Select Insert
	  Control for the OLE Container, and select Outline Control for the Control
	  Type.
	
	2. Add Vfp\Samples\Data\Employee.dbf to the Data Environment, and set the Order
	  property of the Employee cursor to L_NAME.
	
	3. Place the following code in the form's Init event:
	
	     SELECT Employee
	     GO TOP
	     FOR lnI=1 to RECCOUNT()
	       THISFORM.OLECONTROL1.ADDITEM(last_name,lnI)
	       THISFORM.OLECONTROL1.INDENT(lnI)=1
	       SKIP
	     ENDFOR
	     THISFORM.REFRESH
	
	4. Inside the Outline Control's DBLCLICK event, type the following:
	
	      =SEEK(THISFORM.OLECONTROL1.LIST(THISFORM.OLECONTROL1.LISTINDEX))
	
	5. Open the Debug Window and type the following on the left side:
	
	     RECNO()
	
	6. In the Command window, type:
	
	     SET STATUS BAR ON
	
	7. Run the form.
	
	8. Double-click any item in the outline control. The Debug Window correctly
	  displays the current record number. The Status Bar isn't updated with the
	  current record number. For the status bar to be updated, place the focus
	  outside the outline control.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
