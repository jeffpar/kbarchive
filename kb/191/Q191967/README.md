---
layout: page
title: "Q191967: PRB: Visual FoxPro In-Process Servers Do Not Run Concurrently"
permalink: /kb/191/Q191967/
---

## Q191967: PRB: Visual FoxPro In-Process Servers Do Not Run Concurrently

{% raw %}

	Article: Q191967
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual FoxPro 6.0 Component Object Model (COM) component (DLL) is
	accessed by multiple threads (or processes, if the Visual FoxPro component is
	part of a Microsoft Transaction Server package), if one thread calls a method on
	the component while another thread is already executing a method, the new method
	call will not begin executing until the existing method call has finished.
	
	CAUSE
	=====
	
	In the object implementation in Visual FoxPro, entry into the run-time is
	blocked while another object is in execution.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In order to preserve data integrity of variables, Microsoft Visual FoxPro blocks
	entry into the run-time while another object is in execution.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual FoxPro COM .dll, called VFPMTS, by adding a program file with
	  the following code to a project:
	
	        DEFINE CLASS MTSServer as Custom OLEPUBLIC
	
	        oAPPServer = .NULL.
	        oObjectContext = .NULL.
	        cErrorMsg = ""
	
	        FUNCTION FastHit
	           RETURN "Done. " + TIME()
	        ENDFUNC
	        FUNCTION SlowHit
	        LPARAMETER lnSecs
	           lnSecs=IIF(type("lnSecs")="N",lnSecs,5)
	
	           THIS.oAppServer = CREATEOBJECT("MTXaS.Appserver.1")
	           THIS.oObjectContext = THIS.oAppServer.GetObjectContext()
	
	           lcOutput = ""
	
	           FOR x = 1 to lnSecs * 300000
	              i=1
	           ENDFOR
	
	           THIS.oObjectContext.SetComplete()
	           RETURN lcOutput + "Done waiting for "+STR(lnSecs)+" secs"
	        ENDFUNC
	        FUNCTION Error
	        LPARAMETER lnErrorNo, lcCode, lnLine
	
	           THIS.cErrorMsg = THIS.cErrorMsg + STR(lnErrorNo)+ " - " ;
	           + STR(lnLine) + " " + lcCode + " - " +Message()
	        ENDFUNC
	        ENDDEFINE
	
	2. Build the project into a multi-use COM .dll then add it to Microsoft
	  Transaction Server (MTS) using the Import Component option of an MTS package.
	
	3. Start up two Visual FoxPro sessions.
	
	In Session one, run the following code from the Command window:
	
	     o=create("vfpmts.mtsserver")
	     ? o.SlowHit(35)
	
	In Session two run the following code from the Command window:
	
	     o=create("vfpmts.mtsserver")
	     ? o.FastHit()
	
	Make sure you run the call to FastHit after SlowHit starts.
	
	Notice that the FastHit does not start until after the SlowHit completes.
	
	Additional query words: kbVFp600 kbCOMt kbMTS
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
