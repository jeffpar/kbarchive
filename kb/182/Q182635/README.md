---
layout: page
title: "Q182635: Paste in Label Edit Mode Shows Name Conflict Message Box"
permalink: kb/182/Q182635/
---

## Q182635: Paste in Label Edit Mode Shows Name Conflict Message Box

	Article: Q182635
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Component Builder (CB), pasting text when editing the name of a parameter
	causes an error message. The following message box appears:
	
	  Title: Name Conflict.
	
	  Text: This parameter could not be added as This_Is_Parameter1 because another
	  item by that name already exists". Either specify another name and click
	  'OK', click 'Skip' to skip the item, or click 'Cancel' to abort this
	  operation.
	
	Note that the name is not changed.
	
	This behavior applies to methods, parameters, recordsets, and recordset members.
	This is an example uses a parameter.
	
	To demonstrate the problem, perform the following steps:
	
	1. Start CB.
	
	2. Create a new interface.
	
	3. Insert a method.
	
	4. Insert two parameters, Parameter1 and Parameter2.
	
	5. Right-click Parameter1 and click Rename.
	
	6. Change the name to This_Is_Parameter1.
	
	7. Click and drag the pointer to highlight only the first part of the name
	  (This_Is_) you changed in the preceding step. Press CTRL+C to copy it to the
	  Clipboard.
	
	8. Right-click Parameter2 and click Rename.
	
	9. Press the HOME key to cancel selection of the entire name and position the
	  cursor at beginning of the name.
	
	10. Press CTRL+V to paste from the Clipboard and the message box appears.
	
	WORKAROUND
	==========
	
	To avoid the unwanted error message, you can change the name without using a
	paste operation.
	
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
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbSNAServ400
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
