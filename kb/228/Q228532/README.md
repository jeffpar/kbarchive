---
layout: page
title: "Q228532: SMS: French Conv20.exe Fails to Convert 1.2 Databases Char Set"
permalink: kb/228/Q228532/
---

## Q228532: SMS: French Conv20.exe Fails to Convert 1.2 Databases Char Set

	Article: Q228532
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbsms120
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	French Conv20.exe WILL NOT convert SMS 1.2 databases when the character set in
	SQL 6.5 is set to 850.
	
	The following error is recorded in CONV20.log :
	
	  Creation en cours des requetes et regroupements par defaut... SQL Msg
	  #170> Ligne 1: Syntaxe incorrecte au niveau de 'utilisateurs'.
	
	CAUSE
	=====
	
	An apostrophe used in a French description breaks the syntax of a SQL command.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbsms120 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
