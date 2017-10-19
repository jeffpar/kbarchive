---
layout: page
title: "Q131357: How to Reference Objects in the Container Hierarchy"
permalink: /kb/131/Q131357/
---

## Q131357: How to Reference Objects in the Container Hierarchy

	Article: Q131357
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to reference objects and manipulate them in the
	container hierarchy. It shows how to use the generic object references (THIS,
	THISFORM, THISFORMSET, and Parent) in Visual FoxPro.
	
	MORE INFORMATION
	================
	
	To manipulate an object, you must identify it in relation to the container
	hierarchy. When referencing objects, you can use the names of the objects to
	move through the container hierarchy. However, hard coding the names does not
	allow the code to be reusable.
	
	There are four keywords that make it easier to reference an object from within
	the container hierarchy: THIS, THISFORM, THISFORMSET, and Parent. Visual FoxPro
	compiles THIS, THISFORM, and THISFORMSET into tokens that resolve to their
	actual object names at run time. By using these four generic keywords, you
	ensure that the code is reusable.
	
	THIS Keyword
	------------
	
	The keyword THIS allows you to reference a class's property or method. If there
	are multiple instances of an object, THIS always refers to the instance in which
	the code is executing. THIS is a generic reference and always refers to the
	correct object, thus making the code reusable.
	
	For example, if you want the caption of a command button when clicked to change
	to "OK," place the following code in the Click event of the command button:
	
	     THIS.Caption="OK"
	
	Sending Messages Without Naming the Container
	---------------------------------------------
	
	In a method within a container, you can send a message to another object without
	using the name of the container. In fact, it's better (more generic) not to name
	it explicitly. There are two techniques for referring to a contained object
	indirectly:
	
	- Use the token THISFORM or THISFORMSET keyword.
	
	  -or-
	
	- Use the Parent keyword.
	
	THISFORM Keyword
	----------------
	
	THISFORM is a generic object reference to the form in which the code is
	executing. You can manipulate the form or any object on the form container by
	using THISFORM.
	
	For example, say you have a form named myform with two command buttons named
	cmdBtn1 and cmdBtn2. You can manipulate the form and the cmdBtn2 button by
	clicking the cmdBtn1 button. In this example, to change the background color of
	the form to red and the caption of cmdBtn2 to "Hello," place the following code
	in the Click event of the cmdBtn1 button:
	
	     THISFORM.BackColor = RGB(255,0,0)
	     THISFORM.cmdBtn2.Caption = "Hello"
	
	THISFORMSET Keyword
	-------------------
	
	THISFORMSET is a generic object reference to the form set in which the code is
	executing. You can manipulate the form set or any object in the form set
	container by using THISFORMSET.
	
	For example, say you have a form set named frsMyfrs with two forms named
	frmMyfrm1 and frmMyfrm2. The frmMyfrm1 form contains a command button named
	cmdBtn1, and the frmMyfrm2 form contains a label named lblMylb1. You can change
	the background color of the label on frmMyfrm2 to blue when you click cmdBtn1 in
	frmMyfrm1 by placing the following code in the Click event of the cmdBtn1
	button.
	
	     THISFORMSET.frmMyfrm2.lblMylb1.BackColor = RGB(0,0,255)
	
	Parent Keyword
	--------------
	
	Parent is a generic keyword that refers to the immediate container of the object.
	It is another way to reference objects without hard-coding their names. By
	evaluating the expression THIS.PARENT, you get the name of the container. These
	can be chained together, as in THIS.PARENT.PARENT. The only disadvantage of
	PARENT is that you need to know how many levels of containers to point through
	to get the name of the one that contains your target object.
	
	For example, say you have a form with a page frame named pgfPgframe1 that has two
	pages named pagPage1 and pagPage2 on it. The pagPage1 page has a grid named
	grdMygrid1 and a command button named cmdCommand1 on it. To change the
	background color of the grid to blue when you click the cmdCommand1 button, you
	could place the following code in the cmdCommand1 button's Click event:
	
	     THISFORMSET.pgfPgframe1.pagPage1.grdMygrid1.BackColor = RGB(0,0,255)
	
	But this hard-codes the names of many objects, so the code is less reusable. You
	can use the Parent keyword to refer to the container of an object. Because
	cmdCommand1 and grdMygrid1 are both in the same container, OR have the same
	Parent (pagPage1), you can use the Parent keyword. Therefore, you can accomplish
	the same result by placing the following code in the cmdCommand1 button's Click
	event:
	
	     THIS.Parent.grdMygrid1.BackColor = RGB(0,0,255)
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro Developer's Guide, Chapter 3.
	
	FoxPro Advisor June 1995 issue, "I hear a Symphony," by Alan Schwartz.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
