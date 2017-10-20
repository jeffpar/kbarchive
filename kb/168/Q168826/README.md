---
layout: page
title: "Q168826: PRB: Adding VB Custom Method Control Causes Fault in VFP5"
permalink: /kb/168/Q168826/
---

## Q168826: PRB: Adding VB Custom Method Control Causes Fault in VFP5

{% raw %}

	Article: Q168826
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding a custom control that has been created in Visual Basic 5.0 using a custom
	method can cause a fault in Visual FoxPro 5.0 and 5.0a.
	
	If the operating system is Windows 95, the message is "Illegal Operation -
	Invalid Page Fault." If the operating system is Windows NT, the error is an
	Application Error, Visual FoxPro referenced memory location 0x00000000, which
	could not be read.
	
	RESOLUTION
	==========
	
	Add SYS(2333,0) in the INIT event of the form, save and run the form at least
	once before adding the custom control to the form. Using the SYS(2333,0)
	disables the ActiveX dual interface (VTABLE binding) support.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create the control in Visual Basic 5.0 with the following steps:
	
	1. Run Visual Basic 5.0, and select "Create new ActiveX control."
	
	2. Add a TextBox control to the form.
	
	3. Click Add-Ins on the menu. If the ActiveX Control Interface Wizard does not
	  already show up as one of the options, select Add-Ins Manager.
	
	4. When the Add-Ins manager shows up, click the ActiveX Control Interface
	  Wizard.
	
	5. Click the Add-Ins menu again, and select the ActiveX Control Interface
	  Wizard.
	
	6. Click Next until you reach the Select Interface Members screen, then remove
	  all props/events/methods from the Selected name list box.
	
	7. Click Next to go to the Create Custom Interface Member' screen, then click
	  New.
	
	8. In the Add custom Member dialog box, type MYTEST under the Name text box,
	  select Method for the type, and then click OK.
	
	9. Click Next twice, and then click Finish.
	
	10. From the File menu, select Make <project name> to compile the OCX.
	
	In Visual FoxPro 5.0, do the Following:
	
	1. Start Visual FoxPro.
	
	2. Create a new form.
	
	3. Add an OLE Container control to the form.
	
	4. Select your new Visual Basic created control from the list (if you do not
	  name the project or the control in Visual Basic, the name in the box will be
	  Project1.UserControl1).
	
	NOTE: A system error occurs, caused by Visual FoxPro 5. This error does not occur
	with Visual FoxPro 3.x.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
