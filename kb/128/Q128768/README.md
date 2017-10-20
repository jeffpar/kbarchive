---
layout: page
title: "Q128768: How to Use the SETALL() Method in Visual FoxPro"
permalink: /kb/128/Q128768/
---

## Q128768: How to Use the SETALL() Method in Visual FoxPro

{% raw %}

	Article: Q128768
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SETALL() is a new method provided with Visual FoxPro version 3.0. You can use it
	to set the properties (one at a time) for all of the instances of a certain
	class of controls within a container. This article shows by example how to use
	SETALL().
	
	MORE INFORMATION
	================
	
	The syntax for the method is:
	
	     ContainerName.SETALL(cProperty, Value[, cClass])
	
	Here cProperty is the property to be set, value specifies the new setting for the
	property, and cClass specifies the class name of the class on which the object
	is based (not the Visual FoxPro base class for the object).
	
	General Instructions for Illustration
	-------------------------------------
	
	Using the visual interface of Visual FoxPro, start a new form named fTest.
	Populate it with a grid with two columns, three text boxes, and a command button
	group with five buttons.
	
	In the Click method of one of the command buttons, insert the commands to change
	properties of each of the classes using the SETALL() method.
	
	Step-by-Step Instructions to Demonstrate the Use of SETALL()
	------------------------------------------------------------
	
	1. Start the form definition by choosing New from the File menu. Then select
	  Form and then New File.
	
	2. Look for the window titled Form Designer - FormDocn (where n is the
	  consecutive number of this form document in this session of Visual FoxPro) on
	  the desktop. Be sure the Form Controls Toolbar is visible. If it is not,
	  choose Form Controls Toolbar from the View menu.
	
	3. Click the Button Lock tool on the Form Controls Toolbar. Then Click the Text
	  Box tool. Click in three different locations on the Form1 area of the Form
	  Designer to instantiate three separate text box objects.
	
	4. Click the Button Lock tool again to unlock the Form Controls Toolbar.
	
	5. Click the Grid tool on the Form Controls Toolbar, and place a grid on the
	  form.
	
	6. Click the grid to select it. It will have small handles on each corner and in
	  the middle of each of the four sides. Right-click in the grid. That will
	  produce a pop-up with seven choices. Click the Properties choice.
	
	7. In the resulting "Properties - FormDocn" window, click the ColumnCount
	  property. In the edit box beneath the tabs, change the column count to 2, and
	  then press the ENTER key.
	
	8. With the mouse pointer, seize the middle handle on the right side of the grid
	  and pull the right side to the right to resize the grid so that you can see
	  the two column headings.
	
	9. Click the Command Group tool. Then place a command button group on the form.
	  Select the group by clicking it. Then right-click, and select Properties from
	  the pop-up.
	
	10. Change the ButtonCount property to 5, and press ENTER.
	
	11. Using the mouse pointer, resize the command group by pulling its bottom
	  boundary down so that five buttons are visible.
	
	12. Right-click the command group, and select Edit from the pop-up. Click to
	  select the top button.
	
	13. Notice that Command1 appears as the Object in the Properties window. Change
	  the Caption property to say "Change."
	
	14. Using the mouse, select the bottom button. Change its caption to "Quit."
	
	15. Double-click the bottom button. This should cause an edit window with the
	  title "Command5.Click" to appear. In that window, type the following
	  command, and save it by pressing CTRL+W.
	
	      ThisForm.Release
	
	16. Double-click the top button. In the "Command1.Click" edit window, enter the
	  following code, and save it by pressing CTRL+W.
	
	      THISFORM.Grid1.SetAll('ForeColor',RGB(0,255,0),'header')
	      THISFORM.SetAll('DisabledBackColor',RGB(128,0,0),'textbox')
	      THISFORM.SetAll('DisabledForeColor',RGB(255,0,128),'commandbutton')
	      THISFORM.SetAll('Enabled',.F.,'textbox')
	      THISFORM.SetAll('Enabled',.F.,'commandbutton')
	      THISFORM.CommandGroup1.Command1.Enabled = .T. && See note below
	      THISFORM.CommandGroup1.Command5.Enabled = .T.
	      THISFORM.Refresh
	
	      *NOTE: Alternatively, the contents of this line could be:
	      *
	      *   THIS.Enabled = .T.
	      *
	      * because the code is in the click method of Command1
	
	17. Run the form by clicking the Exclamation Point symbol on the top Toolbar.
	  Save the changes and name the form fTest. The form should appear with text
	  boxes that have white backgrounds, grid headers in the default gray color,
	  and command buttons with black letters on gray buttons.
	
	18. Click the Change button. Observe the changed properties.
	
	19. Click the Quit button.
	
	The class of objects that can be affected by the SETALL() method is listed in the
	Visual FoxPro Help text for the word SETALL.
	
	Additional query words: 3.00 VFoxWin visual property method object class
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbAudDeveloper kbFoxproSearch
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
