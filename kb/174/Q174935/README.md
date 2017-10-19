---
layout: page
title: "Q174935: SMS: &quot;Error 5 Access Is Denied&quot; When Using Rservice.exe"
permalink: /kb/174/Q174935/
---

## Q174935: SMS: &quot;Error 5 Access Is Denied&quot; When Using Rservice.exe

	Article: Q174935
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kberrmsg kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Rservice.exe in a master domain model, you may receive the
	following error message:
	
	  Error 5 Access is denied
	
	This error occurs when you run RSERVICE on a Windows NT computer that is a member
	of one resource domain and the target computer is a member of a different
	resource domain. In this situation, RSERVICE uses the incorrect account to
	connect to the target computer. If RSERVICE is executed without the /c switch,
	it should connect to the target system with the account of user who is logged
	on. Instead of using the account of the user who is logged on, it uses the
	account specified in the Rservice.ini file.
	
	WORKAROUND
	==========
	
	Run RSERVICE from a computer that belongs to the master domain or the same
	resource domain that the target computer is located in.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	For example, you have domains R1, R2, and ACCTS in a master domain model where
	domain R1 and domain R2 trust domain ACCTS (the master domain). An administrator
	running RSERVICE on a Windows NT Server system belonging to R1, is logged on to
	the ACCTS domain as ACCTS\MikeT and has specified ACCTS\Smspcmsvc account in the
	Rservice.ini file.
	
	The test target computer is in R2 and the ACCTS\Smspcmsvc account does not have
	local administrative privileges to this client computer. As per the
	documentation, the administrator is relying on RSERVICE to give this
	ACCTS\Smspcmsvc account "Log on as a Service" rights and add this account to the
	target computer's local Administrators group.
	
	This fails and the "Error 5 Access is denied" error message is displayed.
	RSERVICE incorrectly tries to use the ACCTS\Smspcmsvc account to install the
	service instead of using the ACCTS\MikeT account which has administrator
	privileges on the client computer. If you give the ACCTS\Smspcmsvc account local
	administrator privileges to the target computer, it will successfully install
	the service.
	
	Additional query words: prodsms rc
	
	======================================================================
	Keywords          : kberrmsg kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
