---
layout: page
title: "Q135617: BUG: Group Header Information Prints Incorrectly"
permalink: /kb/135/Q135617/
---

## Q135617: BUG: Group Header Information Prints Incorrectly

{% raw %}

	Article: Q135617
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Group header information prints incorrectly when all of the following are true:
	
	- The group is defined to start on a new page.
	
	- The group header is defined to print on every page.
	
	- The group footer is the only band that prints on the last page of the group.
	
	In this case, the group header information printed on the last page of the group
	is actually the header information for the next record. In Visual FoxPro version
	5.0, the group header does not print at all in this case.
	
	WORKAROUND
	==========
	
	This workaround does not apply to Visual FoxPro version 5.0. There does not
	appear to be a workaround to make the group footer print in the case described
	above.
	
	1. Add a field to the Group Header. Set the field expression to a variable (for
	  example, "repx").
	
	2. Add a field to the Group Footer. Set "Print Only When Expression is True" to
	  .F. and "Field Expression" to a UDF (for example, "letsgo()").
	
	3. In the UDF type the following:
	
	        repx=AGROUPS(i)  &&agroups is array that holds group header info.
	        IF i<ALEN(agroups)
	          i=i+1
	        ENDIF
	        RETURN
	
	4. Create a program for calling the report. Type the following into the prg:
	
	        Select <insert fieldname of group> from <insert tablename> ;
	          Group by <insert fieldname of group> into array agroups
	        i=2
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 5.00 3.00 3.00b
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
