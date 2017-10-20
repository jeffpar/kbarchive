---
layout: page
title: "Q182668: BUG: Help File Inconsistent with Adv. Method Properties Window"
permalink: /kb/182/Q182668/
---

## Q182668: BUG: Help File Inconsistent with Adv. Method Properties Window

{% raw %}

	Article: Q182668
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
	
	The captions for the Unbounded field options on the Advanced tab of the method
	properties dialog box in the Component Builder (CB) are inconsistent with the
	online Help.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0 included with SNA Server version 4.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The following is the difference between variably-sized and bounded final
	fields:
	
	Final Field Is Bounded
	----------------------
	
	When the last data item is an array, the number of elements in the array varies.
	When the last data item is a recordset, the number of rows in the recordset
	varies.
	
	Final Field Is Variably Sized
	-----------------------------
	
	When the last data item is a string, the size of the string varies.
	
	
	Additional query words: comti wrong incorrect match
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
