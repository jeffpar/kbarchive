---
layout: page
title: "Q129310: PRB: OLE Error Messages Contain Both English &amp; German Text"
permalink: /kb/129/Q129310/
---

## Q129310: PRB: OLE Error Messages Contain Both English &amp; German Text

{% raw %}

	Article: Q129310
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error, like the following, which contains text in both English and German
	appears:
	
	  OLE Fehlercode 0x80010007: The callee (server (not server application)) is
	  not available and disappeared; all connections are invalid. the call may have
	  executed. OK Hilfe"
	
	CAUSE
	=====
	
	A German version of Visual FoxPro calls an OLE object that was created in the
	English version of the server application. The error dialog (with the OK and
	cancel) comes from FoxPro, so it is in German. The error message text comes from
	the called application, so it is in English.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Assuming you have the German version of Visual FoxPro, and the English version of
	Microsoft Draw, you can reproduce the behavior by following these steps:
	
	1. In the Command window, type the following commands:
	
	     CREATE TABLE german (object g)
	
	  APPEND BLANK
	
	2. From Edit menu (in German), select Insert Object (in German), and from the
	  Insert Object dialog, select "MS Drawing."
	
	  At this point, Microsoft Draw will crash giving the following English error
	  message:
	
	  
	
	     ED   Application has caused an error ...Close Ignore
	
	3. Choose Close. At this point, Microsoft Draw causes a general protection (GP)
	  fault.
	
	4. Click FoxPro's Window. Now you will see an error message from FoxPro that is
	  mixture of German and English.
	
	Additional query words: VFoxWin language international foreign GPF
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
