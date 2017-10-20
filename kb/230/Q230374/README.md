---
layout: page
title: "Q230374: 'Subscript out of range' Error When Saving a Component Library"
permalink: /kb/230/Q230374/
---

## Q230374: 'Subscript out of range' Error When Saving a Component Library

{% raw %}

	Article: Q230374
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The COM Transaction Integrator for CICS and IMS Component Builder (CB) displays
	the following error message when trying to save a component library:
	
	  Subscript out of range.
	
	CAUSE
	=====
	
	A User Defined Type (UDT) has been specified as the automation type for a column
	of an ADO recordset.
	
	WORKAROUND
	==========
	
	Do not specify a UDT as the automation type for a column of an ADO recordset.
	UDTs are not a supported type for a recordset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the COM Transaction Integrator
	for CICS and IMS version 4.0 SP2.
	
	
	MORE INFORMATION
	================
	
	When creating a COMTI component library using CB, it is possible to modify the
	automation type of an existing recordset column to specify a UDT as the
	automation type. UDTs already defined in the library are listed in the drop-down
	list box of available automation types for the recordset column. This is an
	error.
	
	When creating a new column for a recordset, UDTs are not listed in the drop-down
	list box of available automation types.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
