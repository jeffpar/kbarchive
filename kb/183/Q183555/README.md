---
layout: page
title: "Q183555: Size Of Dynamic Output Array Always Set to Maximum"
permalink: /kb/183/Q183555/
---

## Q183555: Size Of Dynamic Output Array Always Set to Maximum

{% raw %}

	Article: Q183555
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual Basic programmer uses the UBound function to obtain a count of the
	actual number of elements returned in an array, the result always indicates the
	maximum possible value, even though fewer elements may actually have been
	returned in the first (or only) array dimension.
	
	CAUSE
	=====
	
	The COM Transaction Integrator creates the safe array that is returned to the
	Visual Basic program. The dimension(s) of the returned array will always be set
	to the maximum, because the COMTI runtime component has no means of determining
	the actual number of elements returned without incurring excessive processing
	overhead.
	
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
	
	Steps to Reproduce:
	
	1. In Component Builder (CB), declare a method for which there is a parameter
	  declared as an output array.
	
	2. The parameter is the final output field returned.
	
	3. The method's advanced properties specify that the "Final field from host is
	  bounded." (Specifying the property, "Final field from host is bounded" for
	  the method indicates that the number of values returned in the first array
	  dimension can vary up to a specified maximum number.)
	
	4. The front-end client program written in Visual Basic declares this array as a
	  dynamic array.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
