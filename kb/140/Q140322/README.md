---
layout: page
title: "Q140322: FIX: GDI Resource Leak in Visual FoxPro DE in Windows 95"
permalink: kb/140/Q140322/
---

## Q140322: FIX: GDI Resource Leak in Visual FoxPro DE in Windows 95

	Article: Q140322
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro version 3.0, every time you open the Data Environment window of
	a form and move the tables around or resize the Data Environment window, you
	lose GDI resources that cannot be recovered until you exit out of Visual FoxPro.
	After you do this several times, the GDI resources get so low that other
	programs can't run or Visual FoxPro may quit.
	
	WORKAROUND
	==========
	
	Restart Visual FoxPro to recover all system resources. Refrain from moving
	tables around in the Data Environment of the form and refrain from resizing the
	Data Environment window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro
	version 3.0b.
	
	
	MORE INFORMATION
	================
	
	This problem also occurs in the Database Designer as described in the following
	article in the Microsoft Knowledge Base:
	
	  Q138233 BUG: Memory Leak When Scroll Database Designer in Windows 95
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Ensure that the Windows 95 System resource meter is installed on your system.
	  In Windows 95, click the Start button, click Programs, click Accessories,
	  click System Tools, and then click Resource meter. The green Resource Meter
	  icon will appear on the task bar next to the clock.
	
	2. Open Testdata.dbc located in the Vfp\Samples\Data directory.
	
	3. Create a new Form.
	
	4. Check GDI Resources by right-clicking the resource meter icon and then
	  clicking Details.
	
	5. Open the Data Environment for the form, and add all the tables from
	  Testdata.dbc.
	
	6. Resize the Data Environment window, and move the tables around within the
	  Data Environment window.
	
	7. Close the Data Environment, and then close and save the form
	
	8. Check the GDI Resources to see that you have lost anywhere from 1% to 3% of
	  the available resources.
	
	9. Open the form and the Data Environment. Repeat steps 6 through 8. Note that
	  you continue to lose 1% to 3% of the GDI Resource each time you open and
	  close the form.
	
	Additional query words: VFoxWin Database Designer buglist3.00 fixlist3.00b
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
