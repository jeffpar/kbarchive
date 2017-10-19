---
layout: page
title: "Q129424: PRB: Property Not Evaluated When Object Is Created"
permalink: /kb/129/Q129424/
---

## Q129424: PRB: Property Not Evaluated When Object Is Created

	Article: Q129424
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The first time an instance of a class is created by using the CREATEOBJECT()
	function, the properties of the class hold correct values. However, if a
	property is based on an expression or a memory variable, it is not reevaluated
	when another object is instantiated. The properties are not redefined from the
	class definition once the class is in memory.
	
	CAUSE
	=====
	
	The property is evaluated in the body of the class definition. The class values
	are only evaluated the first time a class is loaded in memory. On the other
	hand, properties that are modified in a method of a class are evaluated each
	time the method is executed.
	
	RESOLUTION
	==========
	
	If you want to evaluate a property based on an expression each time an object is
	created, place the expression in the Init method, which is executed each time
	the Init event takes place.
	
	Sample Code
	-----------
	
	The following sample code demonstrates this method. In this example, two
	properties are set. They evaluate the settings of SET TALK and SET EXACT. The
	first property is set in a class definition. It is evaluated the first time the
	class is loaded in memory. The value of the cSetExact property is set in the
	Init event handler for this class. It is evaluated every time an object is
	created.
	
	     SET TALK ON
	     SET EXACT OFF
	     oObjenv = CREATEOBJECT('envircheck')
	     RELEASE oObjenv
	
	     SET TALK OFF
	     SET EXACT ON
	     oObjtest = CREATEOBJECT('envircheck')
	     RELEASE oObjtest
	
	     *: Class: envircheck  BaseClass: CUSTOM
	
	     DEFINE CLASS envircheck AS CUSTOM
	
	       mytalk = SET('talk')
	       myexact = ""
	      PROCEDURE INIT
	         THIS.myexact = SET('exact')
	         WAIT WINDOW "MYTALK is not reevaluated "+ THIS.mytalk
	         WAIT WINDOW "MYEXACT is reevaluated "+ THIS.myexact
	      ENDPROC
	
	     ENDDEFINE
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
