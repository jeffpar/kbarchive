---
layout: page
title: "Q100611: FIX: VB 2.0 Prof Demo Causes Error: Invalid File Format"
permalink: /kb/100/Q100611/
---

## Q100611: FIX: VB 2.0 Prof Demo Causes Error: Invalid File Format

{% raw %}

	Article: Q100611
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the Professional Edition Demo for Visual Basic version 2.0 for Windows
	may immediately cause an "Invalid File Format" error. This problem may also
	occur when you run a Visual Basic program that uses the common dialog custom
	control.
	
	CAUSE
	=====
	
	This error is usually caused by an incorrect version of the common dialog VBX
	(CMDIALOG.VBX) file in the \WINDOWS directory. The Visual Basic version 1.0
	Professional Toolkit installs the common dialog VBX into the \WINDOWS directory,
	whereas the version 2.0 Professional Edition installs the common dialog VBX into
	the \WINDOWS\SYSTEM directory leaving the old version of the common dialog VBX
	in the \WINDOWS directory.
	
	When the version 2.0 professional demo is run, the demo finds the old common
	dialog VBX in the Windows directory first and gives the error "Invalid File
	Format."
	
	WORKAROUND
	==========
	
	To work around the problem, delete or move the Visual Basic version 1.0 version
	of the CMDIALOG.VBX out of the \WINDOWS directory. This will leave the correct
	version of the common dialog VBX in the \WINDOWS\SYSTEM directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the product listed above. This bug
	was corrected in Microsoft Visual Basic version 3.0 for Windows. In Visual Basic
	version 3.0, the Common dialog control ships with both the Standard and
	Professional editions, so the version 3.0 Professional edition demo doesn't
	discuss the Common dialog control, which avoids the the error. Version 3.0 of
	the Common dialog control replaces version 2.0 of the control.
	
	Additional query words: buglist2.00 fixlist3.00 2.00 errmsg 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
