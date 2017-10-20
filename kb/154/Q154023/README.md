---
layout: page
title: "Q154023: FIX: Error: &quot;Cannot Nest Aggregate Functions&quot;"
permalink: /kb/154/Q154023/
---

## Q154023: FIX: Error: &quot;Cannot Nest Aggregate Functions&quot;

{% raw %}

	Article: Q154023
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6,2.6a; WINDOWS:2.6,2.6a,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp260bug kbvfp260aBUGkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when running a form containing Structured Query
	Language (SQL) code:
	
	  "Error Loading File - Loading Form or the Data Environment - Record number
	  44. Cannot Nest Aggregate Functions".
	
	The record number that the error is referring to is always the FORM itself. In
	other words, the CLASS field contains 'FORM' and OBJECTNAME = 'FORM1'.
	
	CAUSE
	=====
	
	The cause of this problem is related to the way FoxPro internally parses the SQL
	code. The code is parsed and assigned an internal number. The number assigned is
	entirely dependent on the code itself and the order it is being generated in. In
	this case, the number generated is similar to the token for the SQL aggregate
	count; thus, FoxPro thinks that it has been nested.
	
	WORKAROUND
	==========
	
	The workaround is to change the order of the code. This can be accomplished in
	several different ways, depending on the code itself. For example, if User
	Defined Functions (UDFs)are being used by the code, they could be moved to
	another procedure. If IIF statements are being used, those could be moved to a
	.PRG file and then called as UDFs. Both of these will change the order in which
	the code is being parsed and will result in a different generated number. Since
	there are only a few numbers out of millions that may conflict, the chances of
	ever seeing the error again are very slim.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp260bug kbvfp260aBUG kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP300b
	Version           : MS-DOS:2.6,2.6a; WINDOWS:2.6,2.6a,3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
