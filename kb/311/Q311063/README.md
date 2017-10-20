---
layout: page
title: "Q311063: PRB: FSIZE() Returns Zero If Expression Has Trailing Spaces"
permalink: /kb/311/Q311063/
---

## Q311063: PRB: FSIZE() Returns Zero If Expression Has Trailing Spaces

{% raw %}

	Article: Q311063
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300b kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet kbvfp300
	Last Modified: 13-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you pass a field name that has trailing spaces to the FSIZE() function, it
	will not find the name and will return 0.
	
	CAUSE
	=====
	
	FSIZE() performs an exactly-equal test when searching for a matching field name.
	
	RESOLUTION
	==========
	
	Use the ALLTRIM() function to strip out trailing spaces in the expression that
	you pass to FSIZE().
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code to see the behavior. Uncomment the last line for the
	workaround.
	
	  CREATE CURSOR test (cField C(30))
	  INSERT INTO test VALUES ("labels.Type")
	  lcField = SUBSTR(test.cField, AT(".", test.cField) + 1)
	  lcAlias = LEFT(test.cField, AT(".", test.cField) - 1)
	
	  USE HOME() + "labels" IN 0
	  ? FSIZE(lcField, lcAlias)  && 0
	  *!* ? FSIZE(ALLTRIM(lcField), lcAlias) && 12
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300b kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet kbvfp300xSearch kbvfp500xSearch kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
