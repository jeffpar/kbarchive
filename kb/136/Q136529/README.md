---
layout: page
title: "Q136529: BUG: MDI Child Form Is Drawn Without Title in Certain Cases"
permalink: /kb/136/Q136529/
---

## Q136529: BUG: MDI Child Form Is Drawn Without Title in Certain Cases

{% raw %}

	Article: Q136529
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MDI child form is drawn incorrectly at first when it is maximized in the Load
	event procedure of the MDI parent form by setting the child form's Windowstate
	property when the child form's height and width dimensions match those of the
	parent form. When drawn, the child form is missing the Title bar, Control box,
	and Restore button.
	
	WORKAROUND
	==========
	
	If the MDI parent form is resized, the child form is drawn correctly with its
	Title bar, Control box, and Restore button.
	
	The form is also drawn correctly if the height and width of the child form is set
	to the ScaleHeight and the ScaleWidth of the MDI parent instead of numerical
	values. For example, the following code sizes the child to the same dimensions
	as the MDI parent form, and then maximizes the form:
	
	     MDIForm1.Width = 6000
	     MDIForm1.Height = 3000
	     Form1.Width = MDIForm1.ScaleWidth
	     Form1.Height = MDIForm1.ScaleHeight
	     Form1.WindowState = 2   'Maximize the child window
	
	Replace the code in step 4 of the "Steps to Reproduce Problem" section of this
	article with this code to see that the child form is painted correctly when the
	example is run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On the File menu, click New Project. Form1 is created by default.
	
	2. Add a MDI parent form. In version 4.0, click MDI Form on the Insert menu. In
	  version 3.0, click New MDI Form on the File menu.
	
	3. Set the MDIChild property of Form1 to True.
	
	4. In the Load event of an MDI parent form, place this code:
	
	     MDIForm1.Width = 6000
	     MDIForm1.Height = 3000
	     Form1.Width = 6000
	     Form1.Height = 3000
	     Form1.WindowState = 2   'Maximize the child window
	
	5. Run the code by pressing the F5 key.
	
	Observe that the child form has been incorrectly painted. Refreshing the child
	form after it is maximized does not result in the child form being correctly
	painted.
	
	Additional query words: 3.00 4.00 buglist3.00 buglist4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB300Search kbVB400 kbVB300 kbVB16bitSearch
	Version           : :3.0,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
