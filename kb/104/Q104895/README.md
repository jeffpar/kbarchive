---
layout: page
title: "Q104895: FIX: No Hexidecimal Display in Watch and Locals"
permalink: /kb/104/Q104895/
---

## Q104895: FIX: No Hexidecimal Display in Watch and Locals

{% raw %}

	Article: Q104895
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changes to the display mode of the Visual Workbench debugging session are not
	effective until the debug session is stopped and restarted. Even after the
	display mode changes are in effect, the Visual Workbench does not display
	anything in Hexadecimal mode in the Locals window, but scalars are displayed in
	Hexadecimal mode in the Watch window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for MS-DOS,
	version 1.0 and 1.0a, and in FORTRAN PowerStation for Windows-NT, version 1.0.
	This problem was fixed in Fortran PowerStation 4.0.
	
	MORE INFORMATION
	================
	
	To reproduce this problem:
	
	1. Build the sample code below with the project in Debug mode.
	
	2. Choose Execute/Debug from the Options menu and clear (uncheck) the
	  Hexadecimal Display check box if it is selected.
	
	3. Single-step (F8) to the print statement.
	
	4. Display both the Locals and Watch window (choose both windows from the Window
	  menu), and then enter the following in the Watch window (one letter per
	  line):
	
	  " I
	  J " (without the quotation marks)
	
	5. Double-click to expand "I" in both the Watch and Locals windows (it may be
	  necessary to click in one window before I can be expanded in the other
	  window).
	
	6. Check that all values in both windows are displayed in decimal.
	
	7. Select Hexadecimal Display in the Execute/Debug dialog box.
	
	8. Check that all values in both windows are still displayed in decimal.
	
	9. Stop debugging using the Debug menu, and then repeat steps 3 and 5.
	
	10. Check that all values in the Locals window are still displayed in decimal,
	  that in the Watch window, only "J" and the indices to the array "I" are in
	  hexadecimal (they have a "#" in front). The values of the elements of 'I'
	  are still displayed in decimal. For example:
	
	         (i)(#B) = 12
	         j = #D
	
	Sample Code
	-----------
	
	         integer i(11),j
	         i = 12
	         j = 13
	         print *, i
	         end
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
