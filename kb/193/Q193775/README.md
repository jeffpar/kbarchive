---
layout: page
title: "Q193775: BUG: Labels Disabled in a Class Not Disabled at Run-Time"
permalink: /kb/193/Q193775/
---

## Q193775: BUG: Labels Disabled in a Class Not Disabled at Run-Time

{% raw %}

	Article: Q193775
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A label on a form appears enabled although the Enabled property is set to False
	(.F.).
	
	RESOLUTION
	==========
	
	Disable the label in the Init method of the label or the form. Please see the
	Steps to Reproduce Behavior section for more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Here are two scenarios where the problem occurs:
	
	- The label is subclassed from the Visual FoxPro label base class, either
	  visually or in code, and the Enabled property in the class definition is set
	  to False (.F.). Then you place the label subclass on a form.
	
	  -or-
	
	- When the label is on a form that is subclassed from the Visual FoxPro form
	  base class as a standard Visual FoxPro label base class and has it's Enabled
	  property is set to False (.F.).
	
	Steps to Reproduce Behavior
	---------------------------
	
	You can use the following steps to reproduce the problem described in the first
	scenario of the MORE INFORMATION section:
	
	1. Copy the following code into a new program file in Visual FoxPro and save it
	  as Test1.prg:
	
	        PUBLIC y
	        y=CREATEOBJECT("form1")
	        y.Show
	        RETURN
	
	        DEFINE CLASS form1 AS form
	           DoCreate = .T.
	           Caption = "Form1"
	           Name = "Form1"
	
	           ADD OBJECT brokenlabel1 AS brokenlabel WITH ;
	              Height = 24, ;
	              Left = 72, ;
	              Top = 48, ;
	              Width = 108, ;
	              Name = "brokenlabel1"
	
	           PROCEDURE Init
	              *Thisform.brokenlabel1.enabled=.F.
	           ENDPROC
	
	           PROCEDURE brokenlabel1.Init
	              *This.Enabled=.F.
	           ENDPROC
	        ENDDEFINE
	
	        DEFINE CLASS brokenlabel AS label
	           Caption = "Label1"
	           Enabled = .F.
	           Height = 17
	           Width = 40
	           Name = "brokenlabel"
	        ENDDEFINE
	
	2. From the Command window, issue the following commands:
	
	        DO test1.prg   && this should display the form
	        ? y.brokenlabel1.Enabled                && Returns False.
	        y.brokenlabel1.ForeColor=RGB(0,0,255)   && Makes the label text blue
	        *                                          but it shouldn't since the
	        *                                          label is disabled.
	        y.brokenlabel1.Enabled=.F.          && Finally disables the label.
	        RELEASE y                           && Closes the form.
	
	3. To make the label appear disabled when the form loads, uncomment the line of
	  code under the Init procedure of either the form or the label.
	
	Use the following steps to reproduce the problem described in the second scenario
	of the MORE INFORMATION section.
	
	1. Copy the code below into a new program file in Visual FoxPro and save it as
	  Test2.prg:
	
	        PUBLIC x
	        x=CREATEOBJECT("labelform")
	        x.SHOW
	
	        DEFINE CLASS labelform AS form
	
	          DoCreate = .T.
	          Caption = "Form2"
	          Name = "labelform"
	
	          ADD OBJECT label1 AS label WITH ;
	              Caption = "Label1", ;
	              Enabled = .F., ;
	              Height = 17, ;
	              Left = 48, ;
	              Top = 60, ;
	              Width = 72, ;
	              Name = "Label1"
	        ENDDEFINE
	
	2. From the Command window, issue the following commands:
	
	        DO test2.prg   && This should display the form.
	        ? x.label1.Enabled                && Returns False.
	        x.label1.ForeColor=RGB(0,0,255)   && Makes the label text blue
	        *                                    but it shouldn't since the label
	        *                                    is disabled.
	        x.label1.Enabled=.F.              && Finally disables the label.
	        RELEASE x                         && Closes the form.
	
	3. To make the label appear disabled when the form loads, add the following code
	  to the class definition after the ADD OBJECT section for the label:
	
	        PROCEDURE Init
	           Thisform.label1.Enabled=.F.
	        ENDPROC
	
	NOTE: All the code in the preceding steps came from opening the forms and visual
	classes in the Class Browser. The problems described also occur when using the
	Visual Class Designer and Form Designer to create the forms and classes.
	
	Additional query words: kbVFp600bug kbVFp500abug kbOOP kbvfp500a kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
