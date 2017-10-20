---
layout: page
title: "Q159271: HOWTO: Set the BackColor Property to Same Color as Title Bar"
permalink: /kb/159/Q159271/
---

## Q159271: HOWTO: Set the BackColor Property to Same Color as Title Bar

{% raw %}

	Article: Q159271
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information on how to change the BackColor property of a
	shape object in Visual FoxPro to the same color as the form's active title bar.
	
	MORE INFORMATION
	================
	
	The following example creates a form that contains a shape. Code in the Click
	event of the command button changes the BackColor property of the shape from its
	default color to the color of the form's title bar.
	
	1. Create a form
	
	2. Place a shape object on the form. The name of this shape should be Shape1.
	
	3. Add a command button to the form and place the following code in the Click
	  event of the button:
	
	     DECLARE INTEGER GetSysColor in User32.dll Integer
	     Thisform.Shape1.BackColor=GetSysColor(2)
	     ThisForm.Refresh
	
	4. Run the form and press the command button. The backcolor of the shape changes
	  to the same color as the forms title bar.
	
	The integer "2" in the GetSysColor() function points to the value of
	COLOR_ACTIVECAPTION from the Winuser.h file. The GetSysColor function is case
	sensitive; therefore, code must be entered exactly as shown above. The Winuser.h
	file is not a Visual FoxPro file. For more information on this file, consult
	Windows SDK literature. Information on the GetSysColor() function is available
	in the Win32 API Quick Reference help file that ships with Visual FoxPro 3.0 and
	3.0b Professional versions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
