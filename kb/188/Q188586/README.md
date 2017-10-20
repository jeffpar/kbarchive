---
layout: page
title: "Q188586: HOWTO: Expedite the Visual Basic Support Process"
permalink: /kb/188/Q188586/
---

## Q188586: HOWTO: Expedite the Visual Basic Support Process

{% raw %}

	Article: Q188586
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides tips on how to reduce your Visual Basic program to a
	minimum so you can accurately describe the problem to a support professional,
	who will look for a way to duplicate the problem using the least objects and
	code.
	
	When you encounter a problem with a Visual Basic program and have to call
	Microsoft Technical Support for assistance, you can reduce your call time prior
	to calling by creating a version of your program that contains only those pieces
	needed to reproduce the problem.
	
	MORE INFORMATION
	================
	
	The following is the basic strategy of creating a minimal Visual Basic program
	to isolate the problem so a support professional can find a solution quickly.
	
	1. Make a back-up copy of your program.
	
	2. Follow the steps shown in the next section. After completing each step, check
	  to see if the problem still exists.
	
	3. When you have finished, copy the minimal program to a new project and check
	  to see if the problem still exists.
	
	NOTE: You may not have to perform all the steps presented here to isolate your
	problem. However, you may need to modify your code to get the program to compile
	properly to reproduce the problem.
	
	Steps to Reduce Your Program to a Minimum
	-----------------------------------------
	
	1. Identify and remove all forms, code modules, class modules, user controls,
	  and property pages not needed to re-create the problem.
	
	2. From the remaining forms, remove all controls and referenced objects not
	  needed to re-create the problem.
	
	3. From the Project menu, clear all References and Components not needed to
	  re-create the problem.
	
	  NOTE: Visual Basic prevents any control or reference used by the program from
	  being removed.
	
	4. Remove all unexecuted code from the remaining forms.
	
	5. At this point, you may be able to remove additional controls that are not
	  used by the remaining forms.
	
	  NOTE: Try clearing additional References and Components, as described in step
	  3.
	
	6. Remove pieces of code from the remaining procedures that do not appear to be
	  related to the problem.
	
	7. Try to remove pieces from the original project. For example, if the problem
	  is related to database access, use another database to reproduce the problem,
	  such as BIBLIO.MDB that ships with Visual Basic.
	
	8. Repeat this process until you have the smallest possible program, then copy
	  this program to a new project.
	
	Additional query words: kbDSupport kbdss kbVBp500 kbVBp400 kbVBp kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
