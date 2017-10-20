---
layout: page
title: "Q273471: Creating Multiple-Line, Single-Value Attributes in Templates"
permalink: /kb/273/Q273471/
---

## Q273471: Creating Multiple-Line, Single-Value Attributes in Templates

{% raw %}

	Article: Q273471
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): metadirectory MMS
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a single-value, multiple-line attribute in a construction
	template, you must incorporate the c_newline constant into the construction
	template.
	
	MORE INFORMATION
	================
	
	For example, assume that there are three variables: $v1, $v2, and $v3. These are
	all single-value variables. To combine them into a single-value, multiple-line
	attribute, use the c_newline constant. You can then specify the inclusion of a
	linefeed in the value:
	
	  $newVar = $v1 $c_newline $v2 $c_newline $v3
	
	As with all variables that are used in a Microsoft Metadirectory Services (MMS)
	template, you must use a preceding "$" character to force the parser to
	recognize the constant as a value rather than as a literal string.
	
	You must define the c_newline constant in the management agent's Design MA
	action, on the Template Definitions tab. If required, add the following line to
	the Template Definitions tab:
	
	  c_newline        code:10
	
	Additional query words: line feed valued lined
	
	======================================================================
	Keywords          : metadirectory MMS 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
