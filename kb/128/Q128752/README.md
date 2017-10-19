---
layout: page
title: "Q128752: How to Use Hot Keys in Visual FoxPro"
permalink: /kb/128/Q128752/
---

## Q128752: How to Use Hot Keys in Visual FoxPro

	Article: Q128752
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Like FoxPro 2.x, Visual FoxPro provides support for access keys in objects. In
	addition to the standard types of access keys for objects, Visual FoxPro also
	now supports access keys on Label controls.
	
	MORE INFORMATION
	================
	
	Access keys in Visual FoxPro work the same as they did in earlier releases of
	FoxPro. An access key combination is defined by including the control characters
	'back slash-left angle bracket' (\<) within the text caption of the selected
	object.
	
	You may be familiar with the use of access keys for an object such as a FoxPro
	2.x push button. Visual FoxPro has extended this ability to include the Label
	control as well. In FoxPro 2.x, this functionality was difficult to achieve and
	required additional work on the part of the programmer.
	
	In Visual FoxPro, access keys are added to label controls in the same manner as
	you would add one to any other object, such as a push button. It is important to
	keep the following key points in mind when using this functionality:
	
	- The Label control has a tab index value located under the 'Other' tab of the
	  Label Properties sheet.
	
	- Labels that are assigned an access key value will activate the next object in
	  the tab index order. If you have a form that has a label control with a tab
	  index value of 2 on it and an access key value of the letter 'a' , when the
	  user presses ALT+A, the object which has tab index value 3 will receive
	  focus. In most cases, this would ordinarily be an object such as a combo box
	  or text box.
	
	Step-by-Step Example
	--------------------
	
	In the ORDENTRY screen of the TASTRADE project, located in the SAMPLES\MAINSAMP
	subdirectory of Visual FoxPro, the customer field has an access key value of C.
	The tab index order for the Label control is 1. Tab index 2 is the
	cboCustomer_Id field, so when ALT+C is pressed, focus moves to the
	cboCustomer_Id field. The following procedure shows how to examine this screen:
	
	1. Open or switch to Microsoft Visual FoxPro.
	
	2. From the File menu, choose Open. This invokes the Open dialog box. Under the
	  'List Files of Type' list box, select Project.
	
	3. Select the MAINSAMP directory as found in \VFP\SAMPLES\MAINSAMP.
	
	4. Choose the TASTRADE project and click OK.
	
	5. In the Project Manager, click the plus sign (+) next to the word Documents.
	
	6. Click the plus (+) sign next to the word Forms.
	
	7. From the list of forms, choose Ordentry.
	
	NOTE: You should also be aware that access keys can be assigned to numbers as
	well as to text. The following Label control caption is activated by pressing
	ALT+3:
	
	    Label1.Caption = 'Number \<3'
	
	The following Visual FoxPro objects support the use of access keys:
	
	  CheckBox
	  CommandButton
	  Label
	  OptionButton
	  Page
	
	For objects like CommandGroups and PageFrame pages, you must select the
	appropriate object in the group. For example, in a PageFrame, to add an access
	key to a caption on a page, you must select the Page 1 object from the
	PageFrame. Note that Header objects in a grid don't support access keys.
	
	If a user presses an access key combination for an object on a currently inactive
	form that is part of a FormSet, the inactive form will be activated. Pressing
	hot keys that are independent and separate from any FormSet will NOT activate
	the independent form.
	
	Access keys on menus have not changed in Visual FoxPro. Although you can define
	an access key in a menu using by using the control character (\<) sequence,
	access keys must still be assigned to menu pads and bars by using the shortcut
	option. For the purposes of this document, shortcut key and access key are used
	interchangeably. As before, when a menu pad has an access key defined, you will
	not see any indicator that an access key has been assigned unless you
	specifically add the access or shortcut key sequence to the pad name.
	
	Bars under a pad do not have to have the access key sequence assigned to the pad
	name. When a shortcut has been defined for a bar as it has been for the bar
	named 'A menu bar' below, Visual FoxPro will list the access key combination
	next to the pad name.
	
	  Mymenu
	    A menu bar ALT+A
	
	The order of precedence of menus and access keys has also not changed in Visual
	FoxPro. When two or more pads share the same access key combination, such as two
	pads both with a shortcut of ALT+Q, focus moves to the first pad by default.
	
	When a bar in a submenu has the same shortcut key as a menu pad, focus still
	moves to the menu pad by default.
	
	If you do define a shortcut key for a menu bar, you don't have to have any
	shortcut key text. Removing the key text will result in a cleaner menu look. You
	can then clue the user to the access key by putting the control key sequence
	(\<) in front of the letter which defines the access or shortcut key.
	
	NOTE: You can also define a number hot key in a menu.
	
	Additional query words: VFoxWin Labels Hotkeys hot keys Forms
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
