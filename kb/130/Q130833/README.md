---
layout: page
title: "Q130833: How to Find If Two Object Variables Refer to One Instance"
permalink: /kb/130/Q130833/
---

## Q130833: How to Find If Two Object Variables Refer to One Instance

	Article: Q130833
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a way to compare two object variables and verify whether
	they are two different instances of a class or a pointer to the same object.
	
	MORE INFORMATION
	================
	
	Although the equal sign operator (=) is usually used to compare data, it is the
	assignment operator for object type variables. Using the equal sign creates a
	reference to an object. For example:
	
	     oObj1=CREATEOBJECT('Custom') && Creates an instance of the Custom class
	     oObj2=oObj1                  && Creates a reference to oObj1
	
	The same object can be modified through the oObj1 or the oObj2 references.
	
	There is no Visual FoxPro function you can use to see if two variables are
	pointing to the same object or if they are two different instances. However, you
	can build a user-defined function to do it.
	
	The following example code provides a user-defined function that compares two
	variables. The function returns false (.F.) if the two variables do not point to
	the same object, and it returns true (.T.) if one variable is a reference to the
	other variable. The two variables point to the same object if modifying a
	property of one object reference affects the other object variable. If the value
	is not affected, then the two object variables represent two different
	instances.
	
	Sample code
	-----------
	
	  oObj1=CREATEOBJECT('Custom')
	  oObj2=CREATEOBJECT('Custom')
	  oObj3=oObj1
	  ? SameObj(oObj1,oObj2)
	  ? SameObj(oObj1,oObj3)
	  RETURN
	
	  FUNCTION SameObj(oObject1,oObject2)
	  LOCAL lcObjName1,lcTempObjName,llMatch
	
	  IF NOT COMPOBJ(oObject1,oObject2)
	       RETURN .F.
	  ENDIF
	  lcObjName1=oObject1.Name
	  oObject1.Name='_'+lcObjName1
	  llMatch=(oObject1.Name==oObject2.Name)
	  oObject1.Name=lcObjName1
	  RETURN llMatch
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
