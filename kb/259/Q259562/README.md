---
layout: page
title: "Q259562: INFO: The Visual FoxPro Digits of Precision"
permalink: /kb/259/Q259562/
---

## Q259562: INFO: The Visual FoxPro Digits of Precision

{% raw %}

	Article: Q259562
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 21-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro is documented as having 16 digits of precision. This is an
	approximation: the actual maximum exactly representable number is
	9007199254740992 (2^53).
	
	MORE INFORMATION
	================
	
	Floating point numbers are stored in 8-byte or 64-bit representations. There are
	12 bits of overhead, leaving 52 bits to store the number. There is one more
	implied bit that gives you 2^53 as the maximum. The maximum number that can be
	stored by Visual FoxPro is 2^1023. The highest power of two that is printed out
	exactly using the ? command with the default setting of SET DECIMALS TO 2 is
	2^43.
	
	The following code demonstrates this:
	
	  * Start of Code
	  SET DECIMALS TO 2
	  ? 2^43             && All digits displayed
	  ? 2^44             && Scientific notation
	
	  SET DECIMALS TO 5
	  ? 2^53             && Maximum exact number
	
	  ? 2^53 - 1         && Correct result
	  ? 2^53 + 1         && Incorrect result: rounded in floating point
	
	  ? 2^1023           && Cannot display: *'s will be printed
	  ? 2^1022           && Can display
	  * End of Code
	
	REFERENCES
	==========
	
	For more information about Visual FoxPro System Capacities, please see that
	topic in the Visual FoxPro Help files.
	
	For additional information about numeric precision, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q129171 INFO: The Difference Among Visual FoxPro Numeric Data Types
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
