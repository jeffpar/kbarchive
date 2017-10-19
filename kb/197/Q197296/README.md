---
layout: page
title: "Q197296: BUG: Error 424 Adding Data Object Wizard-Created Ctrl to Form"
permalink: /kb/197/Q197296/
---

## Q197296: BUG: Error 424 Adding Data Object Wizard-Created Ctrl to Form

	Article: Q197296
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAddIn kbCtrl kbDatabase kbDataview kbVBp600 kbVBp600bug kbDataEnv kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to place a user control that was created using the Data Object
	Wizard onto a form, Error 424 ("Object Required") occurs.
	
	CAUSE
	=====
	
	When you place a user control on a form, that control's Resize event is
	executed. If you create a list box or combo box type of user control using the
	Data Object Wizard, that control's Resize event refers to the contained list box
	or combo box incorrectly and causes error 424, "Object required."
	
	RESOLUTION
	==========
	
	To resolve this problem, change the code in the user control's Resize event to
	refer correctly to the list box or combo box contained in that user control. An
	example is provided in the MORE INFORMATION section of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The steps below describe how to reproduce and correct this behavior. The steps
	are broken up into sections that you need to follow in sequence. Note that while
	it is necessary to create a Data Environment and a Class object, the details of
	their creation are not directly related to the behavior described.
	
	This example creates a UserControl based on a ListBox. The information in the
	article is also relevant if the UserControl is based on a ComboBox. Some
	details, such as the names of objects created by the Data Object Wizard, will
	vary in the latter case.
	
	Creating a Data Environment Object
	----------------------------------
	
	1. Start Visual Basic 6.0.
	
	2. Create a new Standard EXE project. Form1 is created by default.
	
	3. From the Project menu, click Add Data Environment.
	
	4. Right-click Connection1 in the Data Environment, and click Properties.
	
	5. In the Data Link Properties dialog box, set the following properties, test
	  the connection, and then click OK:
	
	   - On the Provider tab, select the Microsoft Jet 3.51 OLE DB Provider option.
	
	   - On the Connection tab, select nwind.mdb, which is in the same directory as
	     Visual Basic, as the Database name.
	
	6. In the Data Environment, right-click Connection1 and click Add Command.
	
	7. Right-click Command1, and click Properties.
	
	8. In the Command1 Properties dialog box, set the following properties and click
	  OK:
	
	   - On the General tab, click the Table option for the Database Object.
	
	   - On the General tab, click the Products option for the Object Name.
	
	Creating a Class Object
	-----------------------
	
	1. From the Add-Ins menu, click VB 6 Data Object Wizard.
	
	  NOTE: If this option does not appear on the menu, load the Wizard using the
	  Add-In Manager and make sure to select the Loaded/Unloaded check box.
	
	2. If the Introduction dialog box of the wizard appears, click Next.
	
	3. In the Create Object dialog box of the wizard, click Next.
	
	4. In the Select Data Environment Command dialog box of the wizard, click
	  Command1 and click Next.
	
	5. Click Next on each dialog box until you reach the Finish dialog box.
	
	Creating a User Control
	-----------------------
	
	The following steps describe how to create a user control, which exposes the
	problem described in this article.
	
	1. In the Finish dialog box of the wizard, enter "MyClass" (no quotes) as the
	  name for the Class object you are creating, and click Finish.
	
	2. From the Add-Ins menu, click VB 6 Data Object Wizard.
	
	3. If the Introduction dialog box of the wizard appears, click Next.
	
	4. In the Create Object dialog box of the wizard, click the option to create "A
	  User Control object bound to an existing Class object" and click Next.
	
	5. In the Select the Data Class to Use dialog box of the wizard, select
	  rsclsMyClass and click Next.
	
	6. In the Select User Control Type dialog box of the wizard, select ListBox and
	  click Next.
	
	7. In the Map Class Properties to a Control Type dialog box of the wizard, click
	  Next.
	
	8. In the Enter User Control Name dialog box of the wizard, enter "MyControl"
	  (no quotes) as the User Control Name and click Finish.
	
	Placing the User Control on the Form
	------------------------------------
	
	1. Close the design window for the newly-created UserControl.
	
	  NOTE: It will be titled "Project1 - uctMyControlListBox (UserControl)". You
	  must close it before you can place it on a form.)
	
	2. You have to add the UserControl to the Toolbox. Place this control on Form1.
	  (Form1 is created by default when the project was initially created.)
	
	RESULT: Run Time Error 424 (Object required) occurs.
	
	Resolving the Problem
	---------------------
	
	1. Click the Debug button on the error dialog box.
	
	2. Notice that the highlighted line of code that caused the error is in the
	  UserControl's Resize event procedure and refers to lstMyControl. There are
	  also three additional references to lstMyControl in this procedure.
	
	3. From the Run menu, click End.
	
	4. In the UserControl's Resize event procedure, change the references to
	  lstMyControl to lstMyClass.
	
	5. Again, try to place the UserControl on Form1.
	
	RESULT: The control is placed successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAddIn kbCtrl kbDatabase kbDataview kbVBp600 kbVBp600bug kbDataEnv kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
