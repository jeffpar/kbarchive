---
layout: page
title: "Q189423: Memory Leak: Recordsets with OCCURS DEPENDING ON Clause"
permalink: /kb/189/Q189423/
---

## Q189423: Memory Leak: Recordsets with OCCURS DEPENDING ON Clause

{% raw %}

	Article: Q189423
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAR-2002
	
	SYMPTOMS
	========
	
	Using Windows NT Task Manager, you can see increments in memory utilization upon
	repeated calls to a COMTI method. This memory leak occurs under the following
	conditions:
	
	1. The series of calls uses the same Microsoft Transaction Server process.
	
	2. The method invoked contains an input parameter that is a recordset. The
	  recordset contains zero rows of data when the call is made. The actual number
	  of rows contained by the recordset is indicated by another input parameter,
	  the count parameter or length-specifier.
	
	This usage results from importing a COBOL table or group item that contains the
	OCCURS DEPENDING ON clause. The OCCURS DEPENDING ON clause specifies the count
	parameter mentioned above.
	
	Using Component Builder, you can view the properties of the recordset input
	parameter and click the Recordsets tab to see that the "Occurs depending on"
	option is selected and specifies the count parameter.
	
	WORKAROUND
	==========
	
	To work around this problem, initialize at least one row of data of the input
	recordset. Regardless, the count parameter can be set to zero.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in COM Transaction Integrator for
	CICS and IMS version 1.0. This problem has been corrected in the latest U.S.
	service pack for SNA Server version 4.0. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
