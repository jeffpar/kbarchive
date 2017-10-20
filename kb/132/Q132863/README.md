---
layout: page
title: "Q132863: BUG: DBGETPROP() for Database Comments Not Working Correctly"
permalink: /kb/132/Q132863/
---

## Q132863: BUG: DBGETPROP() for Database Comments Not Working Correctly

{% raw %}

	Article: Q132863
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DBGETPROP(cName, cType, cProperty) function returns the value stored in
	cProperty of the current database, not the database cName specified in the first
	parameter of this function.
	
	WORKAROUND
	==========
	
	Ensure that the current database is set by issuing SET DATABASE before any
	DBGETPROP() or DBSETPROP() operations are done. For example,
	
	     OPEN DATABASE C:\VFP\SAMPLES\DATA\TESTDATA
	     ? DBSETPROP( "testdata", "database", "comment", "testing" )
	     CREATE DATABASE abc
	     SET DATABASE TO testdata
	     ? DBGETPROP( "testdata", "database", "comment" )
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Type the following code in the Command window:
	
	     OPEN DATABASE C:\VFP\SAMPLES\DATA\TESTDATA
	     ? DBSETPROP( "testdata", "database", "comment", "testing" )
	     CREATE DATABASE abc
	     ? DBGETPROP( "testdata", "database", "comment" )
	
	The ?DBGETPROP( "testdata", "database", "comment" ) returns an empty string
	because the "comment" field of the current database does not contain any values.
	The current database name is shown in the standard toolbar.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
