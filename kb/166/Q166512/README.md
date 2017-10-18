---
layout: page
title: "Q166512: PRB: Form Goes &quot;White&quot; when Viewing Tab Order with SSTab Control"
permalink: kb/166/Q166512/
---

## Q166512: PRB: Form Goes &quot;White&quot; when Viewing Tab Order with SSTab Control

	Article: Q166512
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a 6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When viewing the tab order of objects on a form, the whole form turns white and
	none of the objects are visible. If the tab order is being viewed by list, the
	form goes back to normal when the OK or Cancel button is clicked in the Tab
	Order dialog box. If you are viewing the tab order interactively, you must
	choose another object in the Object drop-down list of the Properties sheet for
	the form to come back to normal.
	
	RESOLUTION
	==========
	
	If you are using the SSTab Control or the Microsoft Tabbed Dialog Control in
	Visual FoxPro, view the tab order by list. If the tab order is viewed
	interactively, the objects are not visible for setting the tab order.
	
	Alternately, the Visual FoxPro PageFrame object could be used instead of the
	ActiveX control.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To change how the tab order of objects on a form is viewed, select Options from
	the Tools menu, and click the Forms tab. Tab Ordering is in the top right
	corner. This can be changed while a form is open in design mode and the change
	takes effect the next time the tab order is viewed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro, create a new form.
	
	2. Place an OLE Container Control on the new form.
	
	3. In the Insert Object dialog box that appears when the OLE Container Control
	  is added, select the Insert Control radio button on the left.
	
	4. From the list of controls, select the SSTab Object (if using Visual FoxPro
	  5.0) or the Microsoft Tabbed Dialog Control, version 5.0 (if using Visual
	  FoxPro 5.0a) and click OK.
	
	5. Right-click the control when it appears on the form and select Edit from the
	  shortcut menu that appears.
	
	6. While the Tab control is in edit mode, place a label and a text box on the
	  first tab (page) of the control. In the Property sheet, verify that
	  OLEControl1 is the currently selected object by looking in the Object
	  drop-down list. The label1 and text1 should be indented under OLEControl1.
	
	7. Now select Tab Order from the View menu. If it is set to By List, the Tab
	  Order dialog box appears. Note that the form goes white--all the objects
	  disappear. Click OK or Cancel and the objects will come back. If the tab
	  order is set to be viewed interactively, the form goes white-- all the
	  objects disappear. To get them back, select an object other than OLEControl1
	  in the Properties sheet Object drop-down list.
	
	REFERENCES
	==========
	
	For information on additional features and problems with the SSTab Control, see
	the following articles in the Microsoft Knowledge Base:
	
	  Q157761 How To Use the ActiveX Control SS Tab Object Properties
	
	  Q158757 PRB: TabPicture Property of SSTab Control Gives an OLE Error
	
	  Q161972 PRB: Displaying a Modal Form Causes the SSTab Control to Blank
	
	  Q162251 PRB: Closing a Top-Level Form Hangs Visual FoxPro
	
	  Q166139 HOWTO: Display Graphic on Each Tab of SSTab at Runtime
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : 5.0 5.0a 6.0
	Issue type        : kbprb
	
	=============================================================================
	
