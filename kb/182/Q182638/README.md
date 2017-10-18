---
layout: page
title: "Q182638: Admin: Snap-in Does Not Recognize the Local Machine Name"
permalink: kb/182/Q182638/
---

## Q182638: Admin: Snap-in Does Not Recognize the Local Machine Name

	Article: Q182638
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
	
	Inadvertently, you can add the local computer's COMTI snap-in to Microsoft
	Management Console (MMC) twice. The first time is by adding the local snap- in;
	the second time is by adding the same snap-in, having first selected the local
	machine name.
	
	To demonstrate the problem, perform the following steps:
	
	1. Start the COMTI Administration Tool; that is , start MMC with local machine
	  snap-in for COMTI.
	
	2. On the Console menu, select Add/Remove SnapIn.
	
	3. Add COM Transaction Integrator snap-in.
	
	4. In the Chooser dialog box, select Another Computer and type the name of the
	  local computer.
	
	You end up with two copies of the Administration snap-in, which can confuse later
	updates.
	
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
	
