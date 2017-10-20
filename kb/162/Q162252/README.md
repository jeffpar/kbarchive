---
layout: page
title: "Q162252: BUG: Erroneous &quot;Class Definition is Cyclical&quot; Error"
permalink: /kb/162/Q162252/
---

## Q162252: BUG: Erroneous &quot;Class Definition is Cyclical&quot; Error

{% raw %}

	Article: Q162252
	Product(s): Microsoft FoxPro
	Version(s): 5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 08-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a container with nested controls to another container in Class
	Designer, the following error message appears:
	
	  Class definition is cyclical
	
	This behavior does not occur in Visual FoxPro 3.0b.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code illustrates the error:
	
	     CLEAR ALL
	     DELETE FILE cyctest.vcx
	     DELETE FILE cyctest.vct
	     KEYBOARD "{y}" CLEAR
	     CREATE CLASS pf AS PAGEFRAME OF cyctest NOWAIT
	     RELEASE WINDOW "Class Designer"
	
	     LOCAL aobj[1], xx
	     CREATE CLASS c1 AS CONTAINER OF cyctest NOWAIT
	     =ASELOBJ(aObj,1)
	     xx=aObj[1]
	     SET CLASSLIB TO cyctest
	
	     xx.ADDOBJECT('pf1','pf')
	     xx.pf1.Page1.ADDOBJECT('pf2','pf')
	
	     KEYBOARD "{y}" CLEAR
	     RELEASE WINDOW "Class Designer"
	
	     CREATE CLASS c2 OF cyctest AS CONTAINER NOWAIT
	     =ASELOBJ(aObj,1)
	     xx=aObj[1]
	     xx.ADDOBJECT('c11','c1')
	
	     SET CLASSLIB TO
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500bug kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : :5.0,6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
