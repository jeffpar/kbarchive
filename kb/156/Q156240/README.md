---
layout: page
title: "Q156240: PRB: &quot;Missing Operand&quot; Using TIME() with WAIT WINDOW Command"
permalink: /kb/156/Q156240/
---

## Q156240: PRB: &quot;Missing Operand&quot; Using TIME() with WAIT WINDOW Command

{% raw %}

	Article: Q156240
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro, you can use the WAIT WINDOW command with any character
	expression to display a message in the upper right corner of the Visual FoxPro
	desktop. However, when you try to use the TIME() function with the WAIT WINDOW
	command, as in WAIT WINDOW TIME(), you receive the following error message:
	
	  Missing Operand
	
	CAUSE
	=====
	
	Although the TIME() function is returning a character string, the WAIT WINDOW
	command is interpreting the first four characters of the function (TIME) as an
	abbreviation for the TIMEOUT command. The TIMEOUT command is expecting a numeric
	value as its first clause, but instead it is being passed a value of "()." Since
	this is not a valid numeric value, the "Missing Operand" error occurs.
	
	RESOLUTION
	==========
	
	You can use the following workaround:
	
	     WAIT WINDOW ""+TIME()  && Includes the double quotation
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type the following in the Command window:
	
	     WAIT WINDOW Time()
	
	Additional query words: kbdse VfoxWin kbvfp300 kbvfp300b kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
