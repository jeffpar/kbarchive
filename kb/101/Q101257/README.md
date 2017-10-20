---
layout: page
title: "Q101257: FIX: Incorrect Behavior in MaskedEdit BorderStyle Property"
permalink: /kb/101/Q101257/
---

## Q101257: FIX: Incorrect Behavior in MaskedEdit BorderStyle Property

{% raw %}

	Article: Q101257
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the BorderStyle property of the Masked Edit control to None at design
	time results in an "Invalid property value" error at run time. In addition,
	setting the Mask property to anything and then setting the BorderStyle property
	back to Single causes unusual characters to appear in the Mask property.
	
	CAUSE
	=====
	
	The cause of the problem is unknown at this time.
	
	WORKAROUND
	==========
	
	There is no known work around at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in Visual Basic
	version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. From the File menu, choose Add File (ALT F, A), and add MSMASKED.VBX to your
	  project.
	
	3. Place a Masked Edit control (MaskedEdit1) on Form1.
	
	4. Set the BorderStyle Property of MaskedEdit1 to 0 - None.
	
	5. From the Run menu, choose start (ALT, R, S), or press the F5 key to run the
	  program.
	
	6. Visual Basic will generate an "Invalid Property Value" error. Click OK in the
	  error message to return to Visual Basic.
	
	7. Set the Mask Property of MaskedEdit1 to #### and set the BorderStyle Property
	  back to 1 - Single.
	
	8. Now check the Mask Property. It contains unusual characters, but it should
	  still contain ####.
	
	Additional query words: buglist3.00 3.00 fixlist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
