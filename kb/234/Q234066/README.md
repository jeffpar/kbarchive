---
layout: page
title: "Q234066: Can't Select Group Item for User Defined Type/Recordset"
permalink: /kb/234/Q234066/
---

## Q234066: Can't Select Group Item for User Defined Type/Recordset

{% raw %}

	Article: Q234066
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Import COBOL Wizard of the Component Builder, the Select
	control button is disabled when you try to designate a COBOL group item as an
	ADO Recordset or a User Defined Type (UDT).
	
	WORKAROUND
	==========
	
	Create a new method. Specify the COBOL group item as a parameter. Subsequently,
	Component Builder will allow you to designate this group item as a Recordset or
	a UDT. Then, if the method is a false one created only as a means to create the
	UDT or Recordset, it can be deleted manually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 SP2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
