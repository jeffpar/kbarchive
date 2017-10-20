---
layout: page
title: "Q81888: FIX: MASM Incorrectly Allows Relative Values as Constant"
permalink: /kb/081/Q81888/
---

## Q81888: FIX: MASM Incorrectly Allows Relative Values as Constant

{% raw %}

	Article: Q81888
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) versions 5.1 and 5.1a incorrectly allow
	relative expressions to be used as constant expressions if the relative
	expression is used inside an IF1 directive. Instead of generating an error, the
	assembler uses the current value of the relative expression as a constant
	expression.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a. This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	A constant expression is a numeric expression that can be resolved at assembly
	time. A relative expression is a expression that cannot be resolved at assembly
	time and must be resolved at link time. Relative expressions include all data
	and code labels, including the current location counter, $. Anything that
	generates a fixup record is a relative expression.
	
	MASM 6.0 correctly generates the following error when a relative expression is
	used in a place where only a constant is allowed:
	
	  error A2026: constant expected
	
	Converting MASM 5.1 programs to MASM 6.0 programs that rely on this problem in
	MASM 5.1 may be difficult. The difference between two relative expressions is a
	constant expression, and this may be used to replace the single relative
	expression. The sample code below demonstrates this workaround. This solution
	may not be valid in all instances. Since MASM 6.0 evaluates these types of
	expressions on the first pass only, the constant value may not be what was
	expected if subsequent passes change the values of the relative expressions.
	
	In MASM 6.0, the IF1 directive is always considered true. The IF2 directive is no
	longer supported in MASM 6.0.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	
	  .STACK
	
	  .CODE
	  start: mov     ax, @data
	         mov     ds, ax
	
	         mov     ax, 4C00h
	         int     21h
	
	  IF1
	
	  ;The following line causes an A2026 error in MASM 6.0.
	  ProgSize       CATSTR   <Program Size is >, %$
	
	  ;The following line assembles error free in MASM 5.1 and MASM 6.0.
	  ;ProgSize       CATSTR    <Program Size is >, %($-start)
	
	  ENDIF
	
	  %      %OUT    ProgSize
	
	  END    start
	
	Additional query words: 5.10 5.10a 6.00 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
