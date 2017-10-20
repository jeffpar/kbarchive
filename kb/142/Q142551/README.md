---
layout: page
title: "Q142551: FIX: No Carriage Return Between RI Code and Appended Code"
permalink: /kb/142/Q142551/
---

## Q142551: FIX: No Carriage Return Between RI Code and Appended Code

{% raw %}

	Article: Q142551
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using "APPEND PROCEDURES FROM <Program File>" will append code to the
	stored procedures section of a database. Unfortunately, a carriage return is not
	placed between the last line of the Referential Integrity (RI) generated code
	and the first line of the appended code.
	
	WORKAROUND
	==========
	
	Use either of the following two workarounds:
	
	- Place a carriage return on the first line of <Program File> code.
	
	-or-
	
	- After appending code to the stored procedure, open the stored procedure of
	  the database, and enter the needed carriage return manually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Visual
	FoxPro version 3.0b for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open a database.
	
	2. Bring up the RI builder, and do something so that it generates some code in
	  the stored procedures.
	
	3. Type the following command in the Command window:
	
	  " APPEND PROCEDURES FROM <Program File> " (without the quotation marks)
	
	4. Examine the stored procedures. A carriage return is not placed between the RI
	  generated code and the appended code.
	
	Additional query words: VFoxWin buglist3.00 fixlist3.00b
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
