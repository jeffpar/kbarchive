---
layout: page
title: "Q129413: Explanation &amp; Usage of the LOCKSCREEN Property"
permalink: /kb/129/Q129413/
---

## Q129413: Explanation &amp; Usage of the LOCKSCREEN Property

{% raw %}

	Article: Q129413
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
	
	Visual FoxPro forms support a special form property called LOCKSCREEN. This
	property is used to govern the behavior of a screen including how and when it
	updates when an event such as a color change occurs.
	
	MORE INFORMATION
	================
	
	The LOCKSCREEN property is explained as follows in the online Help:
	
	  The LOCKSCREEN property determines whether a Form batches all changes to
	  property settings on the Form and its contained objects.
	
	  Syntax:
	
	  Form.LockScreen[ = lExpr]
	
	  Settings:
	
	  lExpr
	
	  The settings for the LockScreen property are:
	
	  Setting      Description
	  --------------------------------------------------------------------
	  True (.T.)   The Form and its contained objects reflect changes in
	               property settings in batch mode, or all at once, rather
	               than as soon as the changes are made.
	
	  False (.F.)  (Default) The Form and its contained objects reflect
	               changes in property settings as soon as the changes are
	               made.
	
	  Remarks:
	
	  Available at design time and run time.
	
	  Set LockScreen to true (.T.) to reduce annoying screen refreshes when
	  presentation properties such as BackColor, FontName, and so on are changed
	  during run time.
	
	  NOTE: If you set LockScreen to false (.F.), the Form and all its controls are
	  repainted.
	
	The LOCKSCREEN property is found on the Layout tab of the Form Properties sheet.
	As noted, the default for this property is false, which means that as soon as a
	change is made to a form or its objects, as in the following, the change will be
	immediately reflected on the form:
	
	  Form1.BackColor=RGB(150,0,200)
	
	If the LOCKSCREEN property is set to true, the previous command will not be
	reflected until such time as you issue a command like this:
	
	  FORM1.REFRESH
	
	-or-
	
	  FORM1.PAINT
	
	The key advantage to you as a programmer is that you can make a series of changes
	to an object such as a screen without having each item flicker and update to
	reflect the new changes you've made. Instead, you can turn this property off,
	make your changes, and then force a refresh of the screen for a much crisper and
	more professional appearance.
	
	Additional query words: VFoxWin Screen Update Refresh 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
