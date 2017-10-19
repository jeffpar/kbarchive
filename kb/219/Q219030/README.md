---
layout: page
title: "Q219030: XFOR: Parsing Problem with LinkAge and cc:Mail Connector"
permalink: /kb/219/Q219030/
---

## Q219030: XFOR: Parsing Problem with LinkAge and cc:Mail Connector

	Article: Q219030
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The LinkAge Message Exchange 3.2 cc:Mail Connector may not correctly parse user
	names during the directory synchronization (dirsync) process.
	
	The problem may occur if there is a cc:Mail postoffice that has been included in
	the dirsync process using the "include" statement in the Linkage.ini file under
	the LME-CCMAIL-CXA section. If the include statement completely contains the
	postoffice definition of an Exchange Server user, that user may not be
	replicated to cc:Mail.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	Component: LinkAge Message Exchange
	
	+---------------------+
	| File name | Date    | 
	+---------------------+
	| Lsccm.dll | 9/22/98 | 
	+---------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LinkAge Message Exchange version
	3.2.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
