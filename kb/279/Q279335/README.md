---
layout: page
title: "Q279335: Cannot Add the Same Workstation Restrictions to Multiple TN3270"
permalink: /kb/279/Q279335/
---

## Q279335: Cannot Add the Same Workstation Restrictions to Multiple TN3270

	Article: Q279335
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add the same workstation name or TCP/IP (Transfer Control
	Protocol/Internet Protocol) address to multiple TN3270 LUs in SNA Manager on
	Host Integration Server (HIS) 2000, you may receive the following error
	message:
	
	  The name or alias has already been used.
	
	This problem does not occur with SNA Server 4.0.
	
	CAUSE
	=====
	
	The HIS 2000 management interface incorrectly checks the validity of TN3270 LU
	restrictions to make sure there are no duplicate entries.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Host Integration Server 2000 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File name   Date        Time      
	  ------------------------------------------------------------------
	  snacfg.dll  12/05/2000  12:00PM     
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	If you need to allow a user to have access to a specific set of TN3270 display
	LUs, the following configuration may resolve the problem:
	
	1. Create an LUA (Logical Unit Application) pool.
	
	2. Assign the LUA LUs to the LUA pool instead of assigning them to the TN3270
	  server.
	
	3. Assign the LUA pool to the TN3270 server.
	
	4. Add the workstation name or TCP/IP address restriction to the LUA pool from
	  the previous step.
	
	If you need to allow multiple users to have access to a specific set of TN3270
	display LUs, then a unique LUA pool must be created for each user and the steps
	outlined here must be repeated for each pool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	The following steps can be used to reproduce the problem:
	
	1. Assign two (or more) LUs to the TN3270 server in SNA Manager.
	
	2. Configure one of the TN3270 LUs such that it is restricted for access by a
	  workstation called "Client1".
	
	3. Configure the other TN3270 LU and add Client1 as the workstation name.
	
	When the changes to the second TN3270 LU are applied, the result is the error
	message described in the "Symptoms" section. The same problem occurs if a TCP/IP
	address is used instead of a workstation name.
	
	You can assign the same workstation name or TCP/IP address to multiple TN3270 LUs
	if you want to allow a user to have access to multiple TN3270 sessions in an
	environment that does not tend to allow users access to all of the available
	TN3270 LUs.
	
	For additional information about restricting access to TN3270 LUs, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q190446 Restricting Access to TN3270 LUs
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
