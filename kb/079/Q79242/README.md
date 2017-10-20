---
layout: page
title: "Q79242: BUG: Some Property Values May Be Incorrect in Maximized Form"
permalink: /kb/079/Q79242/
---

## Q79242: BUG: Some Property Values May Be Incorrect in Maximized Form

{% raw %}

	Article: Q79242
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Standard Edition for Windows, versions 1.0, 2.0, 3.0 
	- Microsoft Windows versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Top, Left, ScaleHeight, and ScaleWidth properties of a maximized Visual
	Basic for Windows form may return incorrect values. When a form is maximized,
	the values returned by these properties should be close to the resolution of
	your monitor. The only difference between the property values returned and the
	resolution should be due to BorderStyles, menus, or title bars, and should in no
	case be greater than the resolution of your monitor.
	
	CAUSE
	=====
	
	In some cases, with a maximized form, the returned property values can be
	greater than the screen resolution. This is because of a problem in the Windows
	API routine, GetClientRect(), which Visual Basic calls to get the form
	properties. This is a problem with Microsoft Windows versions 3.0 and 3.1, not
	with Visual Basic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Windows versions 3.0 and
	3.1. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Left property determines the distance between the internal left edge of an
	object and the left edge of its container. The Top property determines the
	distance between the internal top edge of an object and the top edge of its
	container. ScaleHeight sets or returns the range of the vertical axis for an
	object's internal coordinate system, and ScaleWidth sets or returns the
	horizontal axis. On a form, the coordinate system includes the form's internal
	area, not including borders and title bar.
	
	Steps to Reproduce Problem
	--------------------------
	
	To duplicate the problem, experiment with various BorderStyles, set ScaleMode to
	pixels, and add the following code:
	
	     Sub Form_Click()
	        Print Left,Top,ScaleWidth,ScaleHeight
	     End Sub
	
	Run the application and click the form. Note the values printed. With no border,
	the values should correspond to the resolution of your monitor, and should
	change slightly for each BorderStyle from the addition of borders, menus, and
	title bars.
	
	Here's another example. This occurs when you use the following code in a
	maximized form with a ScaleMode of 1 (twips) in a 800-by-600 (pixel) screen
	resolution:
	
	     Sub Form_Click
	        Print "Screen = "; screen.width; ", "; screen.height
	        ' Enter each Print statements on one, single line.
	        Print "Form = "; form1.width; ", "; form1.height;
	                      " at "; form1.left; ", "; form1.top
	        Print "-------------------------------------------------------
	               ------------------------"
	     End Sub
	
	The following is the results:
	
	  Screen = 12000, 9000
	  Form = 12120, 9120 at -60, -60
	
	Additional query words: buglist3.00 buglist3.10 2.00 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbWin3xSearch kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbZNotKeyword3 kbWin300 kbWin310 kbVB200
	Version           : :1.0,2.0,3.0,3.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
