---
layout: page
title: "Q162683: BUG: BROWSE FORMAT May Cause Blank Browse Window"
permalink: /kb/162/Q162683/
---

## Q162683: BUG: BROWSE FORMAT May Cause Blank Browse Window

{% raw %}

	Article: Q162683
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbHWMAC kbvfp kbvfp300bBUG kbvfp500aBUGkbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a BROWSE FORMAT command uses a format file that contains a syntax error, the
	resulting Browse window is blank. Visual FoxPro produces no error message.
	Earlier versions of FoxPro produce the following error message:
	
	  No fields to process
	
	And no Browse window appears.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Step to Reproduce Behavior
	--------------------------
	
	1. Use the Customer.dbf file located in the Visual FoxPro \Samples\Data folder.
	
	2. Create a format file by typing "MODIFY COMMAND Test.fmt" (without the
	  quotation marks) in the Command window. Add the following line of code to the
	  file:
	
	        @ SAY 24,24,  company+contact
	
	  This line of code is incorrect intentionally.
	
	3. Type the following lines in the Command window, pressing the Enter key after
	  each line:
	
	  " SET FORMAT TO Test.fmt
	  BROWSE FORMAT " (without the quotation marks)
	
	4. A blank Browse window appears.
	
	Additional query words: kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbHWMAC kbvfp kbvfp300bBUG kbvfp500aBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
