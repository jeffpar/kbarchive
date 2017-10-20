---
layout: page
title: "Q216449: BUG: Example for User Defined Type (UDT) Missing from CedarBank"
permalink: /kb/216/Q216449/
---

## Q216449: BUG: Example for User Defined Type (UDT) Missing from CedarBank

{% raw %}

	Article: Q216449
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The directory, VBClUDT, is not included with the other examples in the
	...\COMTI\Tutorial\CedarBnk directory after SNA Server is installed with the
	COMTI feature included. Therefore, COMTI has no sample installed to show how to
	use a User Defined Type as an altlernative to an ActiveX Data Object (ADO)
	recordset.
	
	WORKAROUND
	==========
	
	This code is present on the distribution CD in either of the following two
	directories and can be manually copied to your hard drive:
	
	- D:\Clients\Winnt\I386\Comti\Tutorial\Cedarbnk\VBClUDT
	
	  -or-
	
	- D:\I386\Comti\Tutorial\Cedarbnk\VBClUDT
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS, version 4.0 SP2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
