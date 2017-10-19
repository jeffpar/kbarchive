---
layout: page
title: "Q293187: SMS: Clients Look for Old Packages on Client Access Points"
permalink: /kb/293/Q293187/
---

## Q293187: SMS: Clients Look for Old Packages on Client Access Points

	Article: Q293187
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you review Server Message Block (SMB) traffic between a Systems Management
	Server (SMS) client and Client Access Points, you may see clients attempting to
	find packages (such as SO100001.pkg) in the
	\\%CAPSERVER%\CAP_%sitecode%\PkgInfo.box folder that have been deleted from the
	SMS Administrator console.
	
	This is an example of this traffic that you can see with Network Monitor:
	
	  Client->CAP
	  C transact2 Findfirst, File = \PkgInfo.box\S0100001.PKG
	
	  CAP->Client
	  R transact2 - NT Error, System, Error, Code - (15) STATUS_NO_SUCH_FILE
	
	The Smsapm32.log file contains the following entry:
	
	  TEST : The constructed file path is
	  '\\SERVER01\CAP_SO1\PkgInfo.box\S0100001.PKG'.
	  TEST : IsCurrent(\\SERVER01\CAP_SO1\PkgInfo.box\S0100001.PKG) =
	  TRUE~
	  SCHED DATA : Failed to get package object.~
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Make note of the package ID for all existing packages in the SMS
	  Administrator console.
	
	2. On the client, manually delete %packageid%.00? files in the
	  %SystemRoot%\MS\Sms\Clicomp\Apa\Jobs\Complete folder that are not noted as
	  existing packages.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	You can safely ignore this problem in most circumstances.
	
	
	Additional query words: prodsms cap caps
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
