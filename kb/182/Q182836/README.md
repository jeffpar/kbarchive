---
layout: page
title: "Q182836: Numeric Edit Fields Allow Non-numeric Input"
permalink: kb/182/Q182836/
---

## Q182836: Numeric Edit Fields Allow Non-numeric Input

	Article: Q182836
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
	
	When you use Component Builder (CB), numeric edit controls (used to enter
	numeric data) will accept non-numeric data, if it is pasted, not typed. At
	least, the controls give the appearance of accepting the data. The value of the
	data defaults to zero and does not cause a problem at runtime, unless zero is
	the wrong value.
	
	Although the controls prevent you from typing non-numeric data, they do allow you
	to paste non-numeric data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
