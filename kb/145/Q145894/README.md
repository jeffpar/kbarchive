---
layout: page
title: "Q145894: How to Protect Properties and Methods in a Class"
permalink: /kb/145/Q145894/
---

## Q145894: How to Protect Properties and Methods in a Class

	Article: Q145894
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to use the PROTECT option of a class to hide properties
	and methods that are used only in the specific object class.
	
	MORE INFORMATION
	================
	
	Within Visual FoxPro, the PROTECTED keyword in the class definition prevents
	access to these properties by any methods outside of its class. Therefore, the
	PROTECTED properties are invisible to outside methods. The ability to hide
	properties or methods when using an object-oriented programming approach in
	Visual FoxPro is a form of encapsulation.
	
	The following example demonstrates the concept by creating a class called
	Protect_Globals. The PROTECTED keyword limits the scope of the property
	gd_sysdate to the Protect_Globals class. The property gc_day is not protected
	and can be accessed outside the class.
	
	Create a Class with Protected and Unprotected Properties
	--------------------------------------------------------
	
	1. On the File menu, click New, select Class, and then click the New File
	  button.
	
	2. For the Class Name, enter Protect_Globals. This will be Based On Custom and
	  Store In g_class.
	
	3. Within the Class Designer, click the Class menu, and select New Property. For
	  the Name, type gd_sysdate, and select the Protected check box. Then click the
	  OK button.
	
	4. On the Properties sheet, locate the gd_sysdate property, and change its value
	  to:
	
	     =DATE()
	
	5. On the Class menu, click New Property. For the Name, type gc_day. Leave the
	  Protected check box unchecked, and click the OK button.
	
	6. On the Properties sheet, locate the gc_day property, and change its value
	  to:
	
	     =CDOW(DATE())
	
	7. On the Class menu, click New Method. For the Name, type getsysdate. Leave the
	  Protected check box unchecked, and click the OK button.
	
	8. On the Properties sheet, locate the getsysdate method, and enter the
	  following code:
	
	     WAIT WINDOW DTOC(This.gd_sysdate) NOWAIT
	
	9. Close the Class Designer, and save changes to the Protect_Globals class.
	
	Place the Class within a Form
	-----------------------------
	
	1. On the File menu, click New, and select Form, and then click the New File
	  button.
	
	2. Select the View Classes tool from the Form Controls, and Add the g_class that
	  was created previously.
	
	3. Locate and select the Protect_Globals tool, and then click any place on the
	  form. This will create an instance of the Protect_Globals class with the name
	  Protect_Globals1.
	
	4. Select the View Classes tool from the Form Controls, and select Standard.
	
	5. Add three command buttons (Command1, Command2, and Command3) to the new form.
	
	6. Change the Caption of Command1 to GC_DAY. Within its Click event, enter the
	  following:
	
	     WAIT WINDOW ThisForm.Protect_Globals1.gc_day NOWAIT
	
	7. Change the Caption of Command2 to GETSYSDATE. Within its Click event, enter
	  the following:
	
	     ThisForm.Protect_Globals1.getsysdate
	
	8. Change the Caption of Command3 to GD_SYSDATE. Within its Click event, enter
	  the following:
	
	     WAIT WINDOW DTOC(ThisForm.Protect_Globals1.gd_sysdate) NOWAIT
	
	9. Save the form as g_form, and close the Form Designer.
	
	Run the Form
	------------
	
	1. Use the DO FORM command to run the g_form you just created.
	
	2. Click the GC_DAY command button, and note that a WAIT WINDOW appears and
	  displays the gd_day property of the Protect_Globals class.
	
	3. Click the GETSYSDATE command button, and note that the gd_sysdate property of
	  the Protect_Globals class is displayed by calling the getsysday method of
	  that class.
	
	4. Click the GD_SYSDATE command button. This results in a Program Error
	  indicating that the gd_sysdate property cannot be found. This is because the
	  gd_sysdate property is hidden to the form.
	
	5. Select Ignore, and close the form.
	
	In Step 3 it was possible for the value to be displayed by calling a method of
	the Protect_Globals class that passed the data contained within the gd_sysdate
	property. But because that property is protected, it is completely hidden from
	the command button of the form that attempted to call the gd_sysdate property
	directly.
	
	Additional query words: Encapsulation VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
