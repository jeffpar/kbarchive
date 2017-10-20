---
layout: page
title: "Q164359: BUG: Incorrect Evaluation of Equation with Variables"
permalink: /kb/164/Q164359/
---

## Q164359: BUG: Incorrect Evaluation of Equation with Variables

{% raw %}

	Article: Q164359
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500bug kbvfp600bug
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0 and higher, an equation that contains variables may not be
	evaluated correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command window, issue the following commands:
	
	     SET DECIMALS TO 5
	     mVar = 1
	     ? mVar + (1048575+(mVar/1000)) = 1048576.001
	
	The value .T. (True) should be echoed to the screen but .F. is returned instead.
	
	The following recommendations may be used as alternative solutions to this
	problem:
	
	- Replacing mVar (inside the parentheses) with 1 exhibits the correct behavior,
	  as does removing the outside parentheses.
	
	- Using the ROUND() function may also solve this problem:
	
	        ? ROUND(mVar+(1048575+(mVar/1000)), 5) = 1048576.001
	
	This behavior does not occur in Visual FoxPro 3.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500bug kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
