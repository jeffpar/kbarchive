---
layout: page
title: "Q128719: PRB: &quot;Table or Row Buffering Requires that SET ...&quot; Error"
permalink: /kb/128/Q128719/
---

## Q128719: PRB: &quot;Table or Row Buffering Requires that SET ...&quot; Error

{% raw %}

	Article: Q128719
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
	
	Issuing a CURSORSETPROP() function without first issuing a SET MULTILOCKS ON
	command results in error number 1589. The error message is:
	
	  Table or Row Buffering Requires that SET MULTILOCKS is set to ON
	
	CAUSE
	=====
	
	You must enable multilocks prior to beginning to buffer through the
	CURSORSETPROP() function or through the interface.
	
	RESOLUTION
	==========
	
	Issue a SET MULTILOCKS ON command. You can handle this error in a program by
	using this error routine:
	
	     ON ERROR DO errhandler
	
	       PROCEDURE errhandler
	
	         =aerror(aLastError)
	         DO CASE
	            CASE aLastError(1) = 1589
	               SET MULTILOCKS ON
	               RETRY
	         ENDCASE
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	An on error routine should handle a variety of errors that may occur during
	processing. Include an OTHERWISE section within the DO CASE construct to handle
	errors that are not specifically included in the on error routine.
	
	REFERENCES
	==========
	
	Refer to the Visual FoxPro Developer's Guide, or to the Help menu, for a listing
	of Visual FoxPro system errors that can occur in your application.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
