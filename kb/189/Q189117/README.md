---
layout: page
title: "Q189117: BUG: Printing from Outlook w/ @...SAY Results in Light Printing"
permalink: /kb/189/Q189117/
---

## Q189117: BUG: Printing from Outlook w/ @...SAY Results in Light Printing

{% raw %}

	Article: Q189117
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows 95 or Windows 98, when an Outlook mail message is printed, any
	printing output from Visual FoxPro using @...SAY is light-colored. This problem
	does not occur under Windows NT nor does it occur with all printers.
	
	RESOLUTION
	==========
	
	If you use a Hewlett-Packard printer, send a reset code to the printer using ???
	CHR(27) + CHR(69). Please refer to the printer's manual for the reset code of
	other printers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. While running Windows 95 or Windows 98, print an Outlook mail message.
	
	2. From FoxPro, print text by running the following code:
	
	        * ??? ""                && Open the printer in RAW mode.
	        * ??? CHR(27)+CHR(69)   && Unremark this and the above line to fix.
	        SET DEVICE TO PRINTER
	        @ 1,1 SAY "This is a test."
	        SET DEVICE TO SCREEN
	        SET PRINTER TO
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Stewart, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbDSE faintly pale gray grey kbVFp300bbug kbVFp500abug kbPrinting
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
