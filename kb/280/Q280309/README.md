---
layout: page
title: "Q280309: PRB: _VFP.DataToClip() Only Reads DataSession 1"
permalink: /kb/280/Q280309/
---

## Q280309: PRB: _VFP.DataToClip() Only Reads DataSession 1

{% raw %}

	Article: Q280309
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 27-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DataToClip() method is not able to access data in a private data session.
	
	CAUSE
	=====
	
	Because DataToClip is associated with the Application Object (_VFP), it only has
	access to the data in the Object's DataSession, which is DataSession 1.
	
	RESOLUTION
	==========
	
	One workaround is to write a routine that converts each field to character type
	(the Transform() function does this easily in Visual FoxPro 6.0), concatenates
	the information, and stores it to the _CLIPTEXT variable.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To display this behavior, paste the following code in a .prg file and run it:
	
	  CLOSE DATA ALL
	  _CLIPTEXT = ""
	
	  loForm = CREATEOBJECT("MyDSForm")
	  MESSAGEBOX(_CLIPTEXT)
	
	  DEFINE CLASS MyDSForm AS form
	     DataSession = 2
	     
	     PROCEDURE Init
	        USE HOME() + "labels"
	        
	        *!* Because we did "CLOSE DATA ALL" at the top of the program,
	        *!* there is no data in the default session to read.
	        _VFP.DataToClip()
	        
	        *!* If you uncomment the next line, you will receive an error.
	        *!*   _VFP.DataToClip("labels", 100)
	     ENDproc
	  ENDdefine
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
