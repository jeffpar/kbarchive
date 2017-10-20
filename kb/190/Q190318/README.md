---
layout: page
title: "Q190318: PRB: BINTOC() Fails with SET COLLATE TO &quot;GENERAL&quot;"
permalink: /kb/190/Q190318/
---

## Q190318: PRB: BINTOC() Fails with SET COLLATE TO &quot;GENERAL&quot;

{% raw %}

	Article: Q190318
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating an index using the BINTOC() function, with the COLLATE set to
	GENERAL, the following error occurs:
	
	  Uniqueness of index <index name> is violated.
	
	RESOLUTION
	==========
	
	When you create an index using BINTOC, use "SET COLLATE TO MACHINE". In
	addition, when you create an index based on a NOCPTRANS field (binary character
	field), use "SET COLLATE TO MACHINE" or the same problem described earlier
	occurs.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following sample code:
	
	     CREATE TABLE test (id I, other I)
	     FOR lni = 1 TO 10
	        INSERT INTO test (id ) VALUE (lni)
	     ENDFOR
	     SET COLLATE TO ""
	     INDEX ON BINTOC(id) TAG id CANDIDATE  && Index successful.
	     SET COLLATE TO "GENERAL"
	     INDEX ON BINTOC(id) TAG idG CANDIDATE && Index fails.
	
	The last line of code fails with the error message described previously.
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
