---
layout: page
title: "Q193253: BUG: HalfHeightCaption Form Causes Small Empty Control Menu"
permalink: /kb/193/Q193253/
---

## Q193253: BUG: HalfHeightCaption Form Causes Small Empty Control Menu

{% raw %}

	Article: Q193253
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run a top-level form with the HalfHeightCaption property set to true
	(.T.) and you minimize the form, right-clicking the form icon on the system task
	bar causes a small empty control menu to display.
	
	RESOLUTION
	==========
	
	Here are the two workarounds for this problem:
	
	Method 1
	--------
	
	Create the form using the following code example:
	
	     PUBLIC oform  && If run from a program file.
	     oform = CREATEOBJECT('form1')
	     oform.Show()
	   
	     DEFINE CLASS form1 AS form
	        ShowWindow = 2
	        AutoCenter = .T.
	        HalfHeightCaption = .T.
	        Name = "Form1"
	        Caption = "Form1"
	     ENDDEFINE
	
	Method 2
	--------
	
	If the form is created with the Form Designer, place the following code in the
	Deactivate and Paint events of the form.
	
	In the Deactivate event:
	
	     DoDefault()
	     IF Thisform.WindowState = 1
	        Thisform.HalfHeightCaption = .F.
	        Thisform.Icon = Thisform.Icon
	     ENDIF
	
	In the Paint event:
	
	     IF Thisform.WindowState = 1
	        Thisform.HalfHeightCaption = .F.
	     ELSE
	        Thisform.HalfHeightCaption = .T.
	     ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior does not occur if the form is created using code instead of the
	Form Designer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form named Myform.
	
	2. Set the two following properties of the form:
	
	        HalfHeightCaption = .T.
	        ShowWindow = 2 - As Top-Level Form
	
	3. Save and run Myform.
	
	4. Click the minimize button to minimize the form.
	
	5. In the System Taskbar, right-click the icon to display the control menu. A
	  small empty control menu displays.
	
	Additional query words: kbVFp600bug kbVFp500abug kbXBase kbContainer kbCtrl kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
