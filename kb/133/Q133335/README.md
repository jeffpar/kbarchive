---
layout: page
title: "Q133335: PRB: Cannot Rename Objects Originally Defined in a Container"
permalink: /kb/133/Q133335/
---

## Q133335: PRB: Cannot Rename Objects Originally Defined in a Container

{% raw %}

	Article: Q133335
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an option group class defined in a Visual Class Library (VCX) is placed on
	a form, each of the names of the option buttons in the option group is read
	only. However, if a button is added to the group after it is subclassed, the
	name of the added button can be modified (is read/write).
	
	CAUSE
	=====
	
	When you define a container visual class in a VCX, the method and property
	settings reference the name of the contained object. For example, the Top
	property of an option button in an option group is referenced as follows in the
	class definition:
	
	     Option1.Top = 5
	
	If the contained object is renamed when an instance is created, any reference in
	the class definition is lost and the code won't run. Therefore, by design, users
	are prevented from renaming the contained object to ensure that the code runs as
	expected. The same behavior applies to member objects of any contained class.
	
	RESOLUTION
	==========
	
	If you need to be able to change the name of an object on the form, create the
	container class in a VCX with no object members. This way, you can add the
	objects later, and those added objects will be read/write, so you can control
	the objects when they are placed on the form. If the contained objects need to
	have a consistent look, you can create custom builders to add the controls.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new class by typing "CREATE CLASS" (without the quotation marks) in
	  the Command window.
	
	2. Name the class, and on the BasedOn menu, click OptionGroup. Change the
	  ButtonCount property to 3.
	
	3. Save and close the Class.
	
	4. Create a new form.
	
	5. Click the View Classes button on the Form Controls toolbar, and select Add.
	
	6. Add the Visual Class you just created.
	
	7. Drop the option group onto the form.
	
	8. Modify the ButtonCount property to 4.
	
	9. Using the right mouse button, click the button, select edit and inspect the
	  name property of all objects. The name of each of the first three buttons is
	  read only, but the name of the fourth button is read/write.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
