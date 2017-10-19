---
layout: page
title: "Q260259: INFO: Undocumented {PAUSE} Option for KEYBOARD Command"
permalink: /kb/260/Q260259/
---

## Q260259: INFO: Undocumented {PAUSE} Option for KEYBOARD Command

	Article: Q260259
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 07-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The KEYBOARD command allows the {PAUSE nSeconds} option to be placed in a
	keyboard buffer along with the documented key labels. This option results in a
	pause of nSeconds in Visual FoxPro 5.0x and 6.0x. In Visual FoxPro 3.0x, it does
	not result in a syntax error, but does not pause.
	
	MORE INFORMATION
	================
	
	In the Command window, type:
	
	"KEYBOARD '{PAUSE 5}'" (without the quotation marks)
	
	and note that the cursor disappears from the Command window for five seconds
	before returning when running Visual FoxPro 5.0x or 6.0x.
	
	REFERENCES
	==========
	
	For more information on the KEYBOARD command, please see the Visual FoxPro
	Language Reference.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
