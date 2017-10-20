---
layout: page
title: "Q255725: PRB: Error Message Accessing Objects Added to Visual FoxPro COM"
permalink: /kb/255/Q255725/
---

## Q255725: PRB: Error Message Accessing Objects Added to Visual FoxPro COM

{% raw %}

	Article: Q255725
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 08-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an object is added to a Component Object Model (COM) server at run time,
	attempts to access that object result in the following error message:
	
	  OLE error code 0x80020006: Unknown name
	
	CAUSE
	=====
	
	Visual FoxPro looks in the type library file (.tlb) to locate the object name
	reference associated with the COM server. When Visual FoxPro cannot find the
	object name reference there, it produces the error.
	
	RESOLUTION
	==========
	
	To resolve this situation, do one of the following:
	
	- Add a procedure or procedures to the COM server that can access the added
	  object or objects.
	
	- Utilize functions or procedures in lieu of adding objects to COM servers at
	  run time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To produce the behavior, perform the following steps:
	
	1. Within Microsoft Visual FoxPro 6.0, create a new project called "mytest"
	  (without the quotation marks).
	
	2. Add a new program to the "mytest" (without the quotation marks) project and
	  input the following code:
	
	  DEFINE CLASS myole AS CUSTOM OLEPUBLIC
	      lcReturnValue = "This is a test."
	      FUNCTION givereturn
	          RETURN This.lcReturnValue
	      ENDFUNC
	      PROCEDURE returnmyname
	            RETURN This.oMyName.lcMyName
	      ENDPROC
	  ENDDEFINE
	
	  DEFINE CLASS myclass AS CUSTOM OLEPUBLIC
	     lcMyName = "This is my name"
	  ENDDEFINE
	
	3. Close and save the program as "test" (without the quotation marks).
	
	4. In the Project Manager, click the Build button, and build a single-threaded
	  COM server (DLL) in Visual FoxPro 6.0 with SP3, or build a COM DLL in Visual
	  FoxPro 6.0. Upon completion of the build, close the Project Manager.
	
	5. In the Microsoft Visual FoxPro Command window, run the following lines of
	  code:
	
	  oMyObj = CREATEOBJECT("mytest.myole") &&Loads the myole class of mytest.dll
	
	  ?oMyObj.GiveReturn() &&This will print "This is a test." to the screen
	
	  oMyObj.ADDOBJECT("oMyName","myclass") &&Add newclass object to myole
	
	  ?oMyObj.oMyName.lcMyName  &&This will produce the error
	
	6. Use the following line of code in the Command window and confirm that the
	  oMyNameobject is scoped to the returnmyname procedure:
	
	  ?oMyObj.ReturnMyName()  &&This will print "This is my name" to the screen
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Component         : kbole
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
