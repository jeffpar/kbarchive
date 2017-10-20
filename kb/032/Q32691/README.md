---
layout: page
title: "Q32691: FIX: Error Message A4100: Impure Memory Reference"
permalink: /kb/032/Q32691/
---

## Q32691: FIX: Error Message A4100: Impure Memory Reference

{% raw %}

	Article: Q32691
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MASM incorrectly generates the error message "A4100: Impure memory reference" on
	the following source code:
	
	     .286
	     CODE segment
	          ASSUME cs:code
	          var1   db    ?
	          DIV    var1
	     CODE ends
	
	CAUSE
	=====
	
	The DIV instruction incorrectly generates the error message. This error occurs
	when the ".386" directive is used instead of the ".286" directive and the "dw"
	directive is used instead of the "db" directive. Also, if the ".386" directive
	is used with the "dd" directive, the DIV instruction will generate the error
	message again.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Version 5.10. This problem was
	corrected in MASM version 5.10a.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft product listed at the
	beginning of this article. This problem was corrected in version 5.10a.
	
	Additional query words: 5.10 buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
