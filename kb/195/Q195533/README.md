---
layout: page
title: "Q195533: INFO: Application Object Protected in Custom VFP COM Servers"
permalink: /kb/195/Q195533/
---

## Q195533: INFO: Application Object Protected in Custom VFP COM Servers

	Article: Q195533
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp600
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The application object in Microsoft Visual FoxPro version 6.0 custom COM servers
	is protected.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro 5.0, the application object was exposed by default in all
	custom COM servers. In Visual FoxPro 6.0, the application object is now
	"protected," so that it cannot be accessed outside a particular instance of the
	object.
	
	To show this, build the following code into a Visual FoxPro COM .exe:
	
	Sample Code
	-----------
	
	     **********Server Code*******************
	     DEFINE CLASS Test1 AS CUSTOM OLEPUBLIC
	
	        PROCEDURE retapp
	           RETURN THIS.APPLICATION
	        ENDPROC
	        PROCEDURE retapp2
	           RETURN _VFP.APPLICATION
	        ENDPROC
	     ENDDEFINE
	     **********End Server Code***************
	
	     **********Begin Client Code************
	     oX=CREATEOBJECT("SERVTEST.TEST1")
	     oY=oX.retapp &&Works
	     oZ=oX.retapp2 &&Works
	     ?oY.Name
	     ?oZ.Name
	     ?oX.Application.Name &&Errors Occur
	     *********End Client Code***************
	
	The first two references work because they access the application object from
	within the instance of the object through a method and return the result to the
	client.
	
	The last reference "oX.Application.Name" tries to reference the Application
	object directly from the client. This returns the following error message:
	
	  OLE error code 0x80020006: Unknown name
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	
