---
layout: page
title: "Q191608: XFOR: Failure Creating Windows NT Accounts Using Linkage 3.2"
permalink: /kb/191/Q191608/
---

## Q191608: XFOR: Failure Creating Windows NT Accounts Using Linkage 3.2

{% raw %}

	Article: Q191608
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to create a Windows NT user account after configuring Linkage
	Message Exchange 3.2 LDE between Lotus Notes and Exchange Server (and enabling
	Windows NT account creation or deletion), the attempt will produce a failure
	(viewable in Linkage Admin) similar to the following :
	
	  1998/05/29 11:39:27- DXAMEX(019b) 2 67206:MS Exchange Reports: Unable to
	  create Windows NT account TESTDOMAIN\\TESTUSER for mailbox Test User
	  because it contains the illegal character(s) \.
	
	CAUSE
	=====
	
	Linkage Message Exchange 3.2 uses the Exchange Server Directory Application
	Program Interface (DAPI) to communicate with the Microsoft Exchange Server
	Directory service. The Windows NT account name was being passed from Linkage
	Message Exchange 3.2 to DAPI in an "Assoc-NT-Account" attribute with a value of
	TESTDOMAIN\\TESTUSER. Normally, if an attribute has a backslash, then it is
	appropriate to escape the backslash (add another backslash); however, DAPI does
	not expect this processing for the "Assoc-NT- Account."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange version
	3.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
