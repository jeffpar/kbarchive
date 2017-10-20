---
layout: page
title: "Q194886: BUG: Repeatedly Calling Genxtab Can Cause Memory Leak"
permalink: /kb/194/Q194886/
---

## Q194886: BUG: Repeatedly Calling Genxtab Can Cause Memory Leak

{% raw %}

	Article: Q194886
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbXBase
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Repeatedly calling Genxtab.prg within a program causes Visual FoxPro 3.0x and
	5.0x to lose one memory handle in each iteration of the loop after the first
	pass. This problem does not occur in Visual FoxPro 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code:
	
	        CLEAR
	        SET SAFETY OFF
	        FOR i = 1 TO 200
	           ? "Run Number: " + STR(i), SYS(1016), SYS(1011)
	           SELECT to_country,ship_via,order_net FROM orders ;
	           ORDER BY to_country, ship_via ;
	           GROUP BY to_country, ship_via INTO TABLE bob
	           DO (_GENXTAB) WITH ('bob1'), , , , , , ,.T.
	        NEXT
	        SET SAFETY ON
	
	2. Run the program and notice the number of memory handles, the last number on
	  each line, increase by one with each iteration after the first pass.
	  Eventually, the system may report a memory error such as:
	
	  Windows 95
	
	  VFP caused an invalid page fault in module KERNEL32.DLL at <memory
	  address>.
	
	  -or-
	
	  Windows NT 4.0
	
	  vfp.exe
	  Exception: access violation(0x0000005), Address: <memory address>
	
	  However, to experience the system error message, you may need to increase the
	  number of iterations in the FOR...NEXT loop.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbXBase 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
