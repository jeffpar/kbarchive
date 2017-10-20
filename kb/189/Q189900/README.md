---
layout: page
title: "Q189900: PRB: HyperLink Object Does Not Support Moving to FILE: URL"
permalink: /kb/189/Q189900/
---

## Q189900: PRB: HyperLink Object Does Not Support Moving to FILE: URL

{% raw %}

	Article: Q189900
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the HyperLink object to move to a FILE: URL, it does not cause any
	errors, but it does not appear to do anything.
	
	CAUSE
	=====
	
	The API that is used by the HyperLink object does not support the Mailto: and
	File: links.
	
	RESOLUTION
	==========
	
	Use the HyperLink foundation classes, such as the HyperLink Label or the
	HyperLink button, found in the _hyperlink.vcx foundation class library. These
	foundation classes support the FILE: links.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	     ox=CreateObject("hyperlink")
	     ox.NavigateTo("FILE:c:\")
	
	RESULT: This code runs without error, but nothing happens.
	
	Additional query words: kbVFp600 kbDatabase kbInternet
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
