---
layout: page
title: "Q182636: COMTI Reserved Words Erroneously Allowed for Method Name"
permalink: /kb/182/Q182636/
---

## Q182636: COMTI Reserved Words Erroneously Allowed for Method Name

{% raw %}

	Article: Q182636
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
	
	When using Component Builder (CB), COMTI reserved words are allowed when they
	are entered for a method name, even though they should not be allowed.
	
	To demonstrate the problem, perform the following steps:
	
	1. Start CB and create a new type library.
	
	2. On the File menu, click Import, and then select COBOL Wizard.
	
	3. Enter the name of a COBOL file to import.
	
	4. Select a new method.
	
	5. Replace the default Method name with "Bstr" (without the quotation marks).
	
	6. Proceed to the Finish screen of the Wizard. You should see the following
	  status message:
	
	  The wizard completed successfully with no warnings or errors.
	
	  The crux of the matter is that the reserved name, Bstr, in this example, is
	  not caught until after the method is created.
	
	7. Click Finish and the following message box appears:
	
	  Title: Name Conflict.
	
	  Text: Method 'Bstr' cannot be imported as 'Bstr'. Reason: the name you
	  specified is a reserved name. Either specify a valid name and click 'OK' or
	  click 'Skip' to skip this method. Clicking 'Cancel' will abort this
	  operation.
	
	WORKAROUND
	==========
	
	Use a different Method name, one that is not a COMTI reserved word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0. This problem was corrected in the
	latest SNA Server version 4.0 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
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
