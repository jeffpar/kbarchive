---
layout: page
title: "Q160773: BUG: Derived Group Class Loses Custom Properties"
permalink: kb/160/Q160773/
---

## Q160773: BUG: Derived Group Class Loses Custom Properties

	Article: Q160773
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a custom class object is added to a Group type class using the AddObject()
	method, the properties of that custom class object revert to its default values
	when that derived Group type class is viewed in the Class Designer or dropped on
	a form.
	
	RESOLUTION
	==========
	
	The custom button can be added using the ADD OBJECT clause of the DEFINE CLASS
	command and will retain its custom property. The bug manifests itself only when
	adding the custom class with the addobject() method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following code and paste it into a program named Test.prg:
	
	     ** Code to demonstrate that when a custom class object is
	     ** added to a Group type class the properties of that
	     ** custom class object revert to the its default values.
	     **
	     ** The code in this program could also be entered
	     ** through the Command window.
	     **
	     ** test.prg
	     LOCAL aobj[1], xx
	     CREATE CLASS optbut AS optionbutton OF test.vcx NOWAIT
	     =ASELOBJ(aobj,1)        && Get an object reference
	     xx = aobj[1]
	     xx.Caption='custom'     && Demonstrate that it's custom
	     KEYBOARD 'Y' CLEAR      && Avoid the dialog box - save class
	     RELEASE WINDOW 'Class Designer'
	
	     SET CLASSLIB to test
	     CREATE CLASS optgrp AS optiongroup OF test.vcx NOWAIT
	     =ASELOBJ(aobj,1)        && Get another object reference
	     xx = aobj[1]
	     xx.Height=xx.Height*1.5 && See that you actually ran it
	     xx.AddObject('opt1','optbut')     && Add custom class object
	     KEYBOARD 'Y' CLEAR
	     RELEASE WINDOW 'Class Designer'
	
	     MODIFY CLASS optgrp OF test.vcx NOWAIT
	
	     ** The caption of the third option button has reverted to the default.
	     ** This problem also occurs with the Command Button group.
	     ** You can examine the Optbut class of Test.vcx with the
	     ** MODIFY CLASS optbut OF Test.vcx to see that it still has
	     ** the customized caption property.
	
	2. Run that program.
	
	The third option button (default is two buttons) appears in the final
	OptionButton group but has lost its custom caption and now shows the default
	caption.
	
	The sequence of commands can be executed in the Command window so that you can
	more closely observe the process.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
