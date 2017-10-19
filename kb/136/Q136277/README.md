---
layout: page
title: "Q136277: FIX: FormCount Property Does Not Count Toolbars in a Form Set"
permalink: /kb/136/Q136277/
---

## Q136277: FIX: FormCount Property Does Not Count Toolbars in a Form Set

	Article: Q136277
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
	
	The FormCount property of a form set should hold the number of forms in the form
	set. However, the FormCount property does not include any toolbars that are
	contained in the form set.
	
	WORKAROUND
	==========
	
	Use the Forms array property to identify forms or toolbars in a form set. It is
	automatically created when the form set is run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a toolbar class for the form. On the File menu, click New. Select the
	  Class option, and click the New File button. In the Class Name box, type
	  MyToolbar. In the Based On list, click Toolbar. In the Stored In box, type
	  Mytool. Click OK, and the Class Designer form appears.
	
	2. Click the command button object in the Forms Controls toolbar, and then click
	  the empty area of the toolbar located in the upper-left corner of the Class
	  Designer. A small command button appears. Type the word Quit as the caption,
	  and resize the command button to allow the word Quit to appear in full view.
	  Double-click it, and add the following line of code to its Click event
	  procedure. Save and close the Class Designer.
	
	     THISFORMSET.RELEASE
	
	3. Create a new form. On the File menu, click New. Select the Form option, and
	  click the New File button. On the Form menu, click Create Form Set. Then on
	  the Form menu, click Add New Form to place a second form in the form set.
	
	4. Add a text box (Text1) to the form set, and type the following in the
	  ControlSource property for the Text1 box:
	
	     ThisFormSet.FormCount
	
	  FormCount is a property of the form set that tells how many forms are in the
	  form set.
	
	5. Add a command button to the form set and place the following code in the
	  command button's Click event procedure:
	
	     FOR X= 1 TO THISFORMSET.FORMCOUNT
	        WAIT WINDOW MYFORM.FORMS(X).NAME
	     ENDFOR
	
	6. Add another command button to the form set and place the following code in
	  its click event procedure:
	
	     WAIT WINDOW MYFORM.FORMS(1).NAME
	     WAIT WINDOW MYFORM.FORMS(2).NAME
	     WAIT WINDOW MYFORM.FORMS(3).NAME
	
	7. Click the View Classes tool in the Forms Controls toolbar. Then click Add,
	  and select the Mytool.vcx file. The custom tool MyToolbar now appears in the
	  Forms Controls toolbar replacing the objects that usually appear there. Click
	  MyToolbar, and then click the form. The toolbar with the Quit command button
	  appears in the form set.
	
	8. Save the form as MyForm, and run it. Note the value shown in Text1 is 2.
	  There are two forms plus the custom toolbar form, so it should show a value
	  of 3. Click the first command button, and notice that the first and second
	  wait windows show the names of the forms of the form set stored in the Forms
	  array. Click the second command button. Wait windows appear with the names of
	  the first and second forms, and the third wait window shows the name of the
	  custom toolbar. This name is stored as the third element of the Forms array.
	  If the second form had been added after the custom toolbar, then clicking the
	  first command button would have caused the name of the first form and the
	  name of the toolbar to appear. The name of the second form is still in the
	  Forms array, but it is located in the third array element instead of the
	  second array element. The FormCount property works correctly if no toolbars
	  are added to the form set.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
