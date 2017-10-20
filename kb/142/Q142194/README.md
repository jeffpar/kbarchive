---
layout: page
title: "Q142194: FIX: Control Class in Control Not Shown in Control Array"
permalink: /kb/142/Q142194/
---

## Q142194: FIX: Control Class in Control Not Shown in Control Array

{% raw %}

	Article: Q142194
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When one control class is added to another control class, the AMEMBERS()
	function and the Controls array do not see the control class that was added.
	This occurs whether the classes are created programmatically or visually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The following code creates two control classes: Ctl and Subcontrol. The program
	adds the Subcontrol class to the Ctl class. The ADD OBJECT method also adds two
	command buttons and a two-page pageframe to the Ctl class. Therefore, Ctl class
	contains the Subcontrol class, two command buttons, and a pageframe.
	
	The object positions referenced in the class definitions only apply if the class
	is created visually.
	
	The code example uses the AMEMBERS() function to place properties, procedures,
	and member objects into a memory variable array named atest. Because the
	Printmembers function is part of the Ctl class, it should have access to all the
	objects within that class. However, the AMEMBERS() functions lists all the
	objects in class except the subclass object. The AMEMBERS() function should have
	to access to all the members of its own class.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a program called Test.prg, and add the following code:
	
	     ** Ctl Class Definition
	     DEFINE CLASS ctl AS control
	
	        ADD OBJECT command1 AS commandbutton WITH ;
	           Top = 31
	           Left = 23
	
	        ADD OBJECT command2 AS commandbutton WITH ;
	           Top = 81
	           Left = 21
	
	        ADD OBJECT pageframe1 AS pageframe WITH ;
	           ErasePage = .T.
	           PageCount = 2
	           Top = 115
	           Left = 37
	
	        ADD OBJECT subcontrol1 AS subcontrol WITH ;
	           Top = 6
	           Left = 146
	
	        PROCEDURE printmembers
	
	           ACTIVATE SCREEN
	           x=This.name
	           ? AMEMBERS(atest,This,2)
	           DISPLAY MEMORY LIKE atest
	
	           FOR ii = 1 TO This.ControlCount
	             ? This.controls[ii].Name
	           ENDFOR
	
	           ? This.SubControl1.Name
	        ENDPROC
	
	     ENDDEFINE
	
	     *-- EndDefine: ctl
	
	     ** Subcontrol Class Definition
	
	     DEFINE CLASS subcontrol AS control
	     ENDDEFINE
	
	2. In the Command window, type each of the following commands on a separate
	  line:
	
	     SET LIBRARY TO TEST.PRG
	     X=CREATEOBJECT('Ctl')
	     X.Printmembers
	
	The array atest contains elements representing the command buttons and the
	pageframe objects that appear listed on the desktop. However, the Subcontrol
	class object is not listed. The AMEMBERS() functions does not find the
	Subcontrol object because it was added as a control. This causes the error
	message "Property Controls is not found." If the "Ignore" button is pressed, an
	"Unknown member SUBCONTOL1" message is displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
