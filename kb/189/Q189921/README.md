---
layout: page
title: "Q189921: PRB: Mailto: Hyperlink Object Starts Internet Explorer in Error"
permalink: /kb/189/Q189921/
---

## Q189921: PRB: Mailto: Hyperlink Object Starts Internet Explorer in Error

{% raw %}

	Article: Q189921
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Mailto: URL syntax with the HyperLink object to send e-mail causes
	Internet Explorer to launch before the new mail message window appears.
	
	CAUSE
	=====
	
	The API used by the HyperLink object does not support the Mailto: and File:
	links.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code:
	
	        oX=NewObject("HyperLink")
	        oX.NavigateTo("mailto:myemail@mydomain.com")
	
	Internet Explorer appears before the new mail message window.
	
	WORKAROUND
	----------
	
	To work around this behavior, use the FoxPro Foundation Classes' _ShellExecute
	class.
	
	  loRunIt = NEWOBJECT("_ShellExecute", HOME() + "ffc\_environ.vcx")
	  loRunIt.ShellExecute("mailto:myEmail@myDomain.com")
	
	Additional query words: kbVFp600 kbInternet
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
