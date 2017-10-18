---
layout: page
title: "Q272981: XADM: 1069 Error Message When Starting the System Attendant"
permalink: kb/272/Q272981/
---

## Q272981: XADM: 1069 Error Message When Starting the System Attendant

	Article: Q272981
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Server System Attendant service on a
	computer that is running Windows 2000 Server and is a domain controller, you may
	receive the following error message
	
	  Error 1069 - The service did not start due to a logon failure
	
	In addition to this message, the following event ID messages may be logged in the
	system log in Microsoft Event Viewer:
	
	  Event Type: Error
	  Event Source: Service Control Manager Event Category: None
	  Event ID: 7013
	  Date: 9/1/2000
	  Time: 3:32:48 PM
	  User: N/A
	  Computer: <MACHINENAME>
	  Description: Logon attempt with current password failed with the following
	  error: Logon failure: the user has not been granted the requested logon type
	  at this computer.
	
	  -and-
	
	  Event Type: Error
	  Event Source: Service Control Manager
	  Event Category: None
	  Event ID: 7000
	  Date: 9/1/2000
	  Time: 3:32:48 PM
	  User: N/A
	  Computer: <MACHINENAME>
	  Description:
	  The Microsoft Exchange System Attendant service failed to start due to the
	  following error:
	  The service did not start due to a logon failure.
	
	CAUSE
	=====
	
	This issue can occur if the Exchange service account does not have Log on as a
	Service permissions for this computer. The permissions may have been lost if the
	default domain controller policy was lost and re-created, and Exchange is
	installed on a domain controller. Typically, domain controller policies are in
	the Policies folder that is located at:
	
	  \\<domain>.com\sysvol\<domain>.com.
	
	On some occasions, these policies can become corrupt or missing.
	
	Typically, when policies are lost, you restore them from backup. However, when it
	is impossible to restore the policies, you have to re-create the policies
	manually. After you re-create the policies, the Exchange service account loses
	the special permissions it received when it was installed. These permissions
	are:
	
	- Log on as a Service
	
	- Back up Files and Directories
	
	- Act as Part of the Operating System
	
	For additional information about how to re-create policies, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q253268 Group Policy Error Message When Appropriate Sysvol Contents Are
	  Missing
	
	RESOLUTION
	==========
	
	To resolve this issue, reassign the permissions to the Exchange service account.
	To determine the Exchange Service Account:
	
	1. Click Services in Administrative Tools.
	
	2. Double-click "Microsoft Exchange Directory", and then click the Log On tab.
	
	3. The Exchange service account appears in the This Account field.
	
	4. Click Cancel.
	
	To reassign the proper permissions to the service account:
	
	1. Click Start, click Programs, click Administrative Tools, and then click
	  Domain Controller Security Policy.
	
	2. Browse to Local Policies, and then click User Rights Assignment.
	
	3. Give the Exchange service account the following permissions:
	
	   - Log on as a Service
	
	   - Back up Files and Directories
	
	   - Act as Part of the Operating System
	
	
	Additional query words: exch2kp2w dc
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
