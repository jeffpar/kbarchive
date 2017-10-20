---
layout: page
title: "Q136270: How to Expand or Collapse an Outline Control Programmatically"
permalink: /kb/136/Q136270/
---

## Q136270: How to Expand or Collapse an Outline Control Programmatically

{% raw %}

	Article: Q136270
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to expand or collapse the Outline control in an OLE
	Container control programmatically.
	
	MORE INFORMATION
	================
	
	Use the Object property along with the Expand method to expand or collapse an
	OutLine control. Here is the syntax:
	
	     ThisForm.<OleControl>.Object.Expand(<n>)=.T.|.F.
	
	The Object property provides access to the OLE Server properties and methods for
	an OLE object, which in this case, is the Outline control. The numeric value
	enclosed in the parentheses that follow Expand is the Index number of the item
	that you want to expand.
	
	Step-by-Step Example of Expanding and/or Collapsing an Outline Control
	----------------------------------------------------------------------
	
	1. Create a new form.
	
	2. Click OLE Container Control on the Form Controls toolbar, and then click the
	  form. The Insert Object dialog box appears.
	
	3. On the Insert Object dialog box, click Insert Control. Select Outline Control
	  from the Control Type list. Click OK to return to the Form Designer. The
	  default Name of this object is OleControl1. For this example, do not change
	  it.
	
	4. Insert the following code in the OleControl1 Init event procedure:
	
	     This.AddItem("U.S Auto Makers",0)
	     This.AddItem("Chrysler ",1)
	     This.AddItem("General Motors",2)
	     This.AddItem("Ford",3)
	     This.AddItem("Japanese Auto Makers",4)
	     This.AddItem("Mazda ",5)
	     This.AddItem("Nissan",6)
	     This.AddItem("Toyota",7
	
	     This.Indent(0)=1
	     This.Indent(1)=2
	     This.Indent(2)=2
	     This.Indent(3)=2
	     This.Indent(4)=1
	     This.Indent(5)=2
	     This.Indent(6)=2
	     This.Indent(7)=2
	
	5. Add two command buttons (Command1 and Command2) to the form and set their
	  Caption properties to "Expand U.S. List" and "Expand Japanese List"
	  respectively.
	
	6. Place the following code in the Command1 Click event procedure:
	
	     ThisForm.OleControl1.Object.Expand(0)=;
	        !(ThisForm.OleControl1.Object.Expand(0)
	     If ThisForm.OleControl1.Object.Expand(0)
	        This.Caption="Collapse U.S List"
	     Else
	        This.Caption="Expand U.S List"
	     EndIf
	
	7. Place the following code in the Click event of Command2:
	
	     ThisForm.OleControl1.Object.Expand(4)=;
	         !(ThisForm.OleControl1.Object.Expand(4)
	     If ThisForm.OleControl1.Object.Expand(4)
	         This.Caption="Collapse Japanese List"
	     Else
	         This.Caption="Expand Japanese List"
	     EndIf
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
