---
layout: page
title: "Q183549: DBCS Parameters Not Allowed When Importing COBOL"
permalink: /kb/183/Q183549/
---

## Q183549: DBCS Parameters Not Allowed When Importing COBOL

{% raw %}

	Article: Q183549
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
	
	Importing a COBOL source file will fail when the COBOL data declaration section
	contains an item that is USAGE DISPLAY-1. This COBOL usage defines an item as a
	Double Byte Character Set (DBCS) string. The following error is displayed in a
	message box when you click the Next button on the COBOL Source File
	Specification page in the COMTI Import COBOL Wizard:
	
	  Text: Invalid syntax was found near:
	  * 05 <variable-name> PIC G(n) USAGE IS DISPLAY-1.
	
	After you click the OK button, the next wizard page is displayed and you can
	choose either to cancel the Import process or to continue. If you choose to
	continue, the unsupported COBOL statement is not displayed.
	
	CAUSE
	=====
	
	PIC G USAGE IS DISPLAY-1 (DBCS) is not supported in this version of the COM
	Transaction Integrator.
	
	WORKAROUND
	==========
	
	If the unsupported statement is not part of the interface being defined, you can
	continue the import and ignore the error message. If the unsupported statement
	is part of the interface, then you will need to apply the supported fix
	described below. It is not possible to send or receive DBCS characters with the
	COM Transaction Integrator version 1.0.
	
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
	

{% endraw %}
