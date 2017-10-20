---
layout: page
title: "Q154449: BUG: Error #202 In Makestf when Running VFP/Mac Setup Wizard"
permalink: /kb/154/Q154449/
---

## Q154449: BUG: Error #202 In Makestf when Running VFP/Mac Setup Wizard

{% raw %}

	Article: Q154449
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Setup Wizard in Visual FoxPro for Macintosh, the following
	error is received shortly after clicking the Finish button:
	
	  Error #202 in makestf(0): Invalid path of file name.
	
	CAUSE
	=====
	
	The Application Name, as specified in Step 4 - Setup Options of the Setup
	Wizard, is 22 or more characters in length.
	
	This error can also be received with an Application Name less than 22 characters
	if one of the characters in the Application Name is a colon (:) or a backslash
	(\). The Macintosh System and FoxPro use these two characters for specifying
	folder paths.
	
	WORKAROUND
	==========
	
	Make sure the Application Name specified in Step 4 - Setup Options of the Visual
	FoxPro for Macintosh Setup Wizard is less than 22 characters and it does not
	contain any colons (:) or backslashes (\). Spaces are allowed in the Application
	Name and no other characters are known to cause problems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: kbdsd VFoxMac Makesft error 202
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
