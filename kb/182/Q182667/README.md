---
layout: page
title: "Q182667: Cannot Use Return Value as OCCURS DEPENDING ON Index"
permalink: /kb/182/Q182667/
---

## Q182667: Cannot Use Return Value as OCCURS DEPENDING ON Index

{% raw %}

	Article: Q182667
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Component Builder (CB), it is not possible to use a return value for
	the length specifier of an OCCURS DEPENDING ON (ODO) output parameter.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned in the STATUS section
	of this article. With the hotfix, you can use the return value as the length
	specifier for an ODO array. For this to work, the following conditions must be
	true:
	
	- The Remote Environment (RE) must be non-link (that is, it must be IMS or
	  CICS).
	
	- The ODO array must be output only.
	
	- The return value must be a simple numeric type and must occur before the
	  array and any other variable-length tables in the buffer (as is the case with
	  other ODO arrays).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0. This problem was corrected in the
	latest SNA Server version 4.0 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	
	Additional query words: comti programming model
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
