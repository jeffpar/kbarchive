---
layout: page
title: "Q193944: PRB: AddProperty Does Not Work in OLE DLL"
permalink: /kb/193/Q193944/
---

## Q193944: PRB: AddProperty Does Not Work in OLE DLL

	Article: Q193944
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a custom Component Object Model (COM) server that uses the AddProperty
	method of the same object, returns an OLE Automation error when the property is
	referenced.
	
	CAUSE
	=====
	
	Microsoft Visual FoxPro allows creation of the property, although it does not
	expose it publicly. You can access the added property within the class
	definition. For example, the following code sample shows assignment of the
	initial value of the added property to an existing property.
	
	1. Modify the custom COM server created in the MORE INFORMATION section to the
	  following code:
	
	        DEFINE CLASS addcomprop AS LINE OLEPUBLIC
	           errbyte=0
	           mytest=""
	           PROCEDURE INIT
	              THIS.ADDPROPERTY("NewProp", "Test")
	              THIS.mytest=THIS.NewProp
	              *No Error, from preceding line, Shows NewProp's Existence
	           ENDPROC
	           PROCEDURE ERROR
	              LPARAMETERS nError, cMethod, nLine
	              THIS.errbyte=STRTOFILE(STR(nError) + " " + cMethod + " " ;
	              + STR(nLine),"c:\errfile.txt")
	           ENDPROC
	        ENDDEFINE
	
	2. Call the preceding server with the following client code:
	
	        x = CREATEOBJECT("PropTest1.addcomprop")
	        ? x.mytest && Returns Value 'Test' rather than ''
	        ? x.errbyte && Returns 0 for no errors.
	        ? x.NewProp && Returns Unknown Name Error.
	
	RESOLUTION
	==========
	
	Reference the property internally in the object, and expose it through a public
	property, or a return value of a method.
	
	A better way to create a property that you do not publicly expose in a COM server
	is to use the PROTECTED or HIDDEN keyword when defining the property. For
	example, you could use the following code in the class definition (not in the
	Init event or any other procedure) in place of the
	This.AddProperty("NewProp","Test") code that is in the Init event of the class
	definition:
	
	     PROTECTED NewProp
	     NewProp="Test"
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following error is not trappable by the Error event of the class set as
	OLEPUBLIC:
	
	  Error Text: "Program Error OLE error code 0x80020006: Unknown Name"
	
	NOTE: We do not recommend that you create properties programmatically in COM
	servers because the type library file, PropTest1.tlb, will not reflect the
	properties.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a program file, attach it to a project, and build
	  it into PropTest1.exe:
	
	        DEFINE CLASS addcomprop AS LINE OLEPUBLIC
	           errbyte=0
	           PROCEDURE INIT
	              THIS.ADDPROPERTY("NewProp", "Test")
	           ENDPROC
	           PROCEDURE ERROR
	              LPARAMETERS nError, cMethod, nLine
	              THIS.errbyte=STRTOFILE(STR(nError) + " " + cMethod + " " ;
	              + STR(nLine),"c:\errfile.txt")
	           ENDPROC
	        ENDDEFINE
	
	2. Use the following code in a program file to call that custom COM server:
	
	        x = CREATEOBJECT("PropTest1.addcomprop")
	        ? x.errbyte    && Returns 0 for no errors.
	        ? x.NewProp    && Returns Unknown Name Error.
	
	Additional query words: kbCOMt kbCtrl kbVFp600 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
