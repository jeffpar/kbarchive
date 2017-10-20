---
layout: page
title: "Q139154: INFO: OLE Control Licensing in Visual FoxPro"
permalink: /kb/139/Q139154/
---

## Q139154: INFO: OLE Control Licensing in Visual FoxPro

{% raw %}

	Article: Q139154
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbole kbAutomation kbvfp300 kbvfp500 kbvfp600
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro will not allow an OLE Control to be created or instantiated unless
	the correct license is present. Developers who purchase and install an OLE
	Control as well as its license will be able to add this control to forms.
	
	License information is saved with the form or class. This allows distributed
	forms to run successfully on workstations that do not have a design-time
	license. Users are not able to open these forms for modification unless they
	also purchase a design time license from the control's vendor.
	
	Developers may also distribute visual class libraries that contain OLE controls.
	New controls based on these visual classes may be added to running forms. Users
	may not modify these visual classes, add new controls based on them to forms in
	design mode, or subclass them.
	
	MORE INFORMATION
	================
	
	OLE controls may be developed and distributed without charge or licensing
	requirements. However, most will be designed so that they fail without a
	license. There are currently two types of licenses for OLE controls: design-time
	and run-time.
	
	- A design-time license allows you to create new OLE Controls.
	- A run-time license allows you run a form that contains an OLE control.
	
	The remainder of this article describes the most common licensing scheme used.
	However, control vendors are not required to follow this scheme.
	
	Controls may require no licenses or may supply design-time or run-time licenses
	only.
	
	Controls may check for license information in a manner other than described here.
	Refer to the OLE control's documentation for more information.
	
	A license is a key or a value that a control can check by looking in the registry
	or the container application. When you attempt to add an OLE control such as the
	Outline control to a new form, the Outline control checks the registry for its
	design-time license key. If it finds this key, the new control is added.
	
	When you save that form, Visual FoxPro requests the second type of key, the
	run-time license key, from the control. This second value is stored in the form.
	When the form is run, Visual FoxPro passes the run-time key to the control as it
	instantiates the form. This prevents the control from checking for a design-time
	key. This form will run on any workstation where the Outline control is
	installed, regardless of the existence of a design- time key.
	
	The design-time license is a key in the registry of the workstation. It is
	generally placed there by the installation program that installed the OLE
	control. However, vendors may supply a .reg file that can be merged into the
	registry instead.
	
	
	Four Step-by-Step Examples
	--------------------------
	
	The following examples demonstrate how OLE controls may be used in Visual FoxPro
	applications and how they can be successfully distributed. These examples use
	the Outline control, which is shipped with the professional version of Visual
	FoxPro 3.0. The following examples are included:
	
	- Distributing a form that contains an Outline control.
	
	- Distributing a visual class that contains an Outline control.
	
	- Distributing a program that tries to create a new OLE control.
	
	- Distributing a program that creates a new OLE control from a class.
	
	These examples use two example workstations called DevMachine and UserMachine
	that have been set up by using these steps:
	
	1. On DevMachine, install the Outline control and its design-time license, and
	  register the Outline control for the Form Control toolbox. To do this:
	
	  a. On the Tools menu, click Options, and then click the Control tab.
	
	  b. Select the OLE Controls check box and the Outline control check box. Then
	     click OK.
	
	2. If the Outline control is not available, run Visual FoxPro setup again.
	  Select the Professional Features option, select the OLE Controls check box,
	  complete setup, and then repeat steps 1.a. and 1.b.
	
	3. On UserMachine, ensure that the Outline control is not installed and that
	  Visual FoxPro 3.0 (standard or professional) is installed.
	
	
	Distributing a Form that Contains an Outline Control
	----------------------------------------------------
	
	1. Create a new form on DevMachine:
	
	  a. On the File Menu, click New. Then click Form, and click the New button.
	
	  b. Select the View Classes shortcut button in the Form Controls Toolbar.
	
	  c. Select the Outline control, and create a new control on the form.
	
	  d. Save this form as a class named Outltest in a Visual Class Library named
	     Outltest.vcx. Then close and save this form as Outltest.scx.
	
	2. Run the form on UserMachine:
	
	  a. Copy Outltest.scx, Outltest.sct, Outltest.vcx, Outltest.vct, and
	     Msoutl32.ocx to UserMachine.
	
	     NOTE: Msoutl32.ocx is located in the \Windows\System directory or, in
	     Windows NT, it is located in the \Windows\System32 directory.
	
	  b. On the Program menu, click Do. Select the form, and click DO. As a result,
	     you will see that the form runs and the control is functional.
	
	  c. To test the outline, enter the following in the Command window:
	
	  
	
	        OUTLTEST.Olecontrol1.Additem('First Item')
	
	3. On the File menu, click Open, and set the type of file to Visual Class
	  Library. Then select Outltest.vcx.
	
	4. Click OK to the following error message:
	
	  OLE error code 0x80040112: Appropriate license for this class not found. OLE
	  object is being ignored. Record Number 4.
	
	5. When the form opens, verify that the Outline control is no longer there.
	
	6. Make a change to the form, and close it. Click Yes when prompted to save.
	
	7. Open the Outltest class from Outltest.vcx again, and verify that the form
	  that comprises the class was saved without the Outline control.
	
	Distributing a Visual Class that Contains an Outline Control
	------------------------------------------------------------
	
	1. Create the visual class on DevMachine:
	
	  a. On the File menu, click New, and then click Class to create a new class.
	     Name the new class RedOutl.vcx. Base it on OLEContainerControl and save it
	     in a Visual Class Library called Olelib.vcx.
	
	  b. Select the OLE container control from the formtool tool bar. When the
	     Insert Object dialog box appears, select OLEControl. Then select the
	     Outline control.
	
	  c. Double-click the BackColor property, and select red from the dialog box.
	
	  d. Close and save this class.
	
	  e. Create a new form.
	
	  f. Click the View Classes shortcut button. Then click Add, and select the
	     Visual Class Library Olelib.vcx.
	
	  g. Select RedOutl, and create a new control on the form.
	
	  h. Close and save the form as Subtest.scx
	
	2. Run the form on UserMachine
	
	  a. Copy Olelib.vcx, Olelib.vct, Subtest.scx, Subtest.sct, And Msoutl32.ocx.
	
	  b. On the Program menu, click Do, and select Subtest.scx. As a result, you
	     will see that the form runs without error, and the Outline control is
	     functional.
	
	3. Create a new form and add Olelib.vcx to the Form Controls toolbar.
	
	4. Create a new control based on RedOutl. The following error occurs:
	
	  Error: OLE Error Code 0x80040112: Appropriate license for this class not
	  found.
	
	NOTE: The visual class library OLELIB.VCX is used in the last example, so do not
	delete this file.
	
	Distributing a Program that Attempts to Create a New OLE Control
	----------------------------------------------------------------
	
	1. Create a new program on DevMachine. Add the following code, and save it as
	  Outltest.prg.
	
	  
	
	     PUBLIC NewForm
	     NewForm = CREATE("form")
	     NewForm.Show
	     NewForm.AddObject("NewOutline","OLEControl","MSOutl.Outline")
	     NewForm.NewOutline.visible=.t.
	
	2. Run the program on UserMachine:
	
	  a. Copy Outltest.prg and Msoutl32.ocx to UserMachine
	
	  b. On the Program menu, click DO, select Outltest.prg, anc click DO. As a
	     result, you will see that the form is created and shown and then the
	     following error occurs:
	
	  OLE Error Code 0x80040112: Appropriate license for this class not found.
	
	Distributing a Program that Creates a New OLE Control from a Class
	------------------------------------------------------------------
	
	NOTE: This example requires the Visual Class Library Olelib.vcx file created in
	step 1 of the "Distributing a Visual Class that Contains an Outline Control"
	example.
	
	1. Create a new program on DevMachine, add the following code, and save the
	  program as Subtest.prg:
	
	  
	
	     PUBLIC NewForm
	     NewForm = CREATE("form")
	     NewForm.Show
	     NewForm.ScaleMode = 3
	     SET CLASSLIB to OLELIB.VCX
	     NewForm.AddObject("NewOutline","RedOutl")
	     NewForm.NewOutline.RedOutl.visible=.t.
	
	2. Run the program on UserMachine
	
	  a. Copy the Subtest.prg, Olelib.vcx, Olelib.vct, and Msoutl32.ocx to
	     UserMachine.
	
	  b. Run the program. As a result, the form runs successfully.
	
	Additional query words: license design user
	
	======================================================================
	Keywords          : kbcode kbinterop kbole kbAutomation kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
