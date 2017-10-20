---
layout: page
title: "Q142735: DOCERR: Error #1966 Has Incorrect Help Explanation"
permalink: /kb/142/Q142735/
---

## Q142735: DOCERR: Error #1966 Has Incorrect Help Explanation

{% raw %}

	Article: Q142735
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The help explanation for Error #1966 says "You are invoking the Load event of
	the data environment ..." The data environment doesn't have a Load event. It
	should say the Opentables method instead.
	
	MORE INFORMATION
	================
	
	Steps to Demonstrate Error Message
	----------------------------------
	
	1. In the Command window, type:
	
	  " ERROR(1966) " (without the quotation marks)
	
	2. Click the Help button for the error message.
	
	3. The error message from the Help file states:
	
	  You are invoking the Load event of the data environment and the data
	  environment is already loaded.
	
	  It should say:
	
	  You are invoking the Opentables method of the data environment and the data
	  environment is already loaded.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
