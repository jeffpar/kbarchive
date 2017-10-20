---
layout: page
title: "Q83939: HOWTO: Print the Image of a Dialog Box"
permalink: /kb/083/Q83939/
---

## Q83939: HOWTO: Print the Image of a Dialog Box

{% raw %}

	Article: Q83939
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The App Studio, used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	App Studio and Developer Studio do not support printing a dialog box, bitmap,
	icon, cursor, or other resource. However, you can copy the image of a resource
	and paste it into Microsoft Paint, Word, or another graphics program and print
	the image in that application.
	
	MORE INFORMATION
	================
	
	To print the image of a dialog box, perform the following four steps:
	
	1. Start App Studio or Developer Studio and open or create a dialog box.
	
	2. Press ALT+PRINT SCRN to copy the image of the dialog box to the clipboard.
	
	3. Start Paint (or another program) and choose Paste from the Edit menu.
	
	4. Choose Print from the File menu to print the dialog box.
	
	Note that this process only captures the image of the dialog box that is
	currently open in the resource editor. You can use ALT+PRINT SCRN to copy to the
	clipboard the image of any dialog box or window in the Microsoft Windows
	environment. This feature is available in Windows NT and when 16- bit Windows
	runs in 386 enhanced mode.
	
	Windows captures the image of the dialog box in bitmap (.BMP) format. You can use
	Paint to change any features of the dialog box image before you print it.
	
	Additional query words: PBRUSH.EXE
	
	======================================================================
	Keywords          : kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
