---
layout: page
title: "Q134641: DOCERR: Calling Parent Class Method Code Example Is Incorrect"
permalink: /kb/134/Q134641/
---

## Q134641: DOCERR: Calling Parent Class Method Code Example Is Incorrect

	Article: Q134641
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Scope Resolution examples shown in the Developer's Guide, page 272, "Calling
	Parent Class Method Code," are not correct for the released version of Visual
	FoxPro version 3.0.
	
	MORE INFORMATION
	================
	
	In the Developer's Guide, on page 272, there are two specific examples to call
	parent class code from the VCR visual class provided as a sample with Visual
	FoxPro version 3.0. The message being issued does not properly reference the
	object to which the message is being sent.
	
	The first example, cmdNav::Click(), causes a "This object does not inherit from
	class CMDNAV" error message. The correct command to execute is:
	
	     VCR.cmdTop::Click
	
	In this particular case, the actual name of the parent class (VCR) and the member
	of that parent (cmdTop) must be explicitly used in order to properly reference
	the object where the method to execute is located.
	
	
	The second example, =EVAL(this.ParentClass + '::Click()', on Page 272 causes a
	"Missing Expression" error message. The syntax should be:
	
	     =EVAL(This.Parent.Class+"."+This.Name+"::click()")
	
	In this example, This.Parent.Class evaluates to VCR, which is the container
	Class. And This.Name evaluates to the name of the current object (cmdTop). The
	result of the evaluation is the same message identified in the first example,
	VCR.cmdTop::Click.
	
	Additional query words: 3.00 VFoxWin OOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
