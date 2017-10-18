---
layout: page
title: "Q187724: BUG: WLList and WLText Controls Cause Display Problem"
permalink: kb/187/Q187724/
---

## Q187724: BUG: WLList and WLText Controls Cause Display Problem

	Article: Q187724
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Invoking the WLList or WLText Properties sheet from within an ActiveX Control
	(OLE Control) and changing the Appearance property causes a ghost image of the
	control to appear within the Properties window. Also, a windows-type icon
	appears within the Windows Task Bar after invoking the Task Bar with the ALT+TAB
	keys.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add an ActiveX Control (OLE Control) to the form.
	
	2. Add the WLList control, version 6.0 to the OLE container.
	
	3. Right-click the OLE Container and choose WLList Properties.
	
	4. In the List Properties dialog box, change the Appearance property to 0-wlFlat
	  and then click Apply.
	
	5. Note that a ghost image of the control appears inside the Properties dialog
	  box. Click OK.
	
	6. Press the ALT+TAB keys to cycle through the running applications. A
	  Windows-type icon appears on the Task bar. However, no description appears
	  after you select the icon. To make the icon disappear, choose the Visual
	  FoxPro icon and press the ALT+TAB keys to move to the next icon, then use the
	  ALT+TAB keys to cycle through the remaining running applications again.
	
	Additional query words: kbActiveX kbVFp600bug kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
