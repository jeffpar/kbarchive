---
layout: page
title: "Q193749: PRB: Setting Scrollbars &gt; 0 Changes Height and Width Property"
permalink: kb/193/Q193749/
---

## Q193749: PRB: Setting Scrollbars &gt; 0 Changes Height and Width Property

	Article: Q193749
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbcode kbContainer kbCtrl kbDesigner kbvfp600
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Height and/or Width properties of a form reduce in size a few pixels at a
	time when both the following occur:
	
	- The Scrollbars property of the form is set greater than zero.
	
	  -and-
	
	- Any object that triggers the scrollbars to appear is moved to a different
	  position on the form at design time.
	
	This happens after you move the object and the form is closed and reopened.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you set the Scrollbars property of a form to "1 [ASCII 150] Horizontal",
	and you place an object on the form that displays off the right side of the
	visible form, scrollbars appear at the bottom of the form. If you then move the
	object to another position where part of the object is still off the visible
	area of the form, the Height property of the form decreases in value. The same
	behavior occurs with the Width property of a form if the Scrollbars property is
	set to "2 [ASCII 150] Vertical" and you move an object to another position where
	part of the object is off the visible area at the bottom of the form. Both the
	Height and Width properties reduce in size if the Scrollbars property is set to
	"3 [ASCII 150] Both" and you move an object to a position where part of the
	object is off of the bottom right corner of the visible part of the form. You
	must save and reopen the form to see the reduction of the properties in size
	each time you move an object.
	
	Steps to Reproduce Behavior
	---------------------------
	
	First Example
	-------------
	
	1. Create a form with the Form Designer and note the value of the Height
	  property.
	
	2. Change the Scrollbars property to 1.
	
	3. Place a command button on the form so that part of the command button hangs
	  off the right side of the visible part of the form.
	
	4. Close the form.
	
	5. Modify the form and note that the Height property value has changed. The
	  height of the form is reduced in size because you deduct the size of the
	  scrollbars from the height of the form.
	
	6. Move the command button slightly keeping part of it off the right side of the
	  visible form.
	
	7. Close the form, modify it and note that the Height property of the form again
	  reduces in size.
	
	The Height property reduces in size each time you move the object, then close and
	reopen the form.
	
	Second Example
	--------------
	
	Place the following code in a new program file and run the program. The program
	opens and closes a form (with scrollbars) after moving a command button. The
	Height and Width properties after each iteration display on the Visual FoxPro
	desktop when the program completes.
	
	     CLEAR
	     ? "Resolution is:",SYSMETRIC(1),SYSMETRIC(2)
	     ? ""
	     ? "        Height  and  Width."
	     LOCAL aobj[1], xx
	
	     DELETE FILE testxx.sc?
	     CREATE FORM testxx NOWAIT
	     =ASELOBJ(aobj,1)
	     xx = aobj[1]
	
	     ? xx.WIDTH, xx.HEIGHT
	     xx.ADDOBJECT('cmd1','commandbutton')
	     xx.cmd1.LEFT = 310
	     xx.cmd1.TOP = 240
	     xx.SCROLLBARS = 3
	     KEYBOARD 'Y' CLEAR
	     RELEASE WINDOW 'Form Designer'
	
	     FOR x = 1 TO 10
	           =do_and_show_dims()
	           =modi_form_move_button()
	     ENDFOR
	
	      PROCEDURE do_and_show_dims()
	
	           DO FORM testxx
	             _SCREEN.SHOW
	             ? testxx.WIDTH, testxx.HEIGHT
	              testxx.RELEASE
	      ENDPROC
	
	       PROCEDURE modi_form_move_button
	
	             MODI FORM testxx NOWAIT
	             =ASELOBJ(aobj,1)
	             xx = aobj[1]
	             xx.cmd1.LEFT = xx.cmd1.LEFT + 1
	             KEYBOARD 'Y' CLEAR
	             RELEASE WINDOW 'Form Designer'
	       ENDPROC
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbContainer kbCtrl kbDesigner kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
