---
layout: page
title: "Q165128: Range Of LUs Wizard Should Use 2 Digits if Base is Hexadecimal"
permalink: /kb/165/Q165128/
---

## Q165128: Range Of LUs Wizard Should Use 2 Digits if Base is Hexadecimal

	Article: Q165128
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When setting up a range of LUs, if you add the LUs with leading zeros, Manager
	will create the LUs with three characters. This should not be an issue for most
	users, but may cause a problem if your base LU name contains six characters.
	
	NOTE: If you are using decimal you will be limited to a five character base name
	when using leading zeros. If you have less than 100 LUs you can use a six
	character base name without leading zeros.
	
	RESOLUTION
	==========
	
	The wizard was modified so that it only adds two hex digits to the LU name
	base.
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	The modified file is:
	
	  <Snaroot>\System\Snawiz.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
