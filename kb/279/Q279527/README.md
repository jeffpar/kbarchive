---
layout: page
title: "Q279527: MSN Companion setup dbconn2 err msg: &quot;...problem with the regist"
permalink: /kb/279/Q279527/
---

## Q279527: MSN Companion setup dbconn2 err msg: &quot;...problem with the regist

	Article: Q279527
	Product(s): The Microsoft Network
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN Companion, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During initial setup or out of box experience (OOBE) with MSN Companion, after
	the user enters their member ID and password, they get a "dbconn2" error:
	
	  It looks like there is a problem with the registration service.
	
	CAUSE
	=====
	
	The account servers are undergoing heavy traffic and there has not been enough
	time to set up the account and for it to replicate to all the right servers.
	
	RESOLUTION
	==========
	
	If the account was created less than an hour ago, then this is probably just a
	little delay in the servers and the account information has not been fully
	synchronized. Turn off the device and try again in an hour or two.
	
	If the account was created more than an hour ago, then it's probably a backlog in
	the account servers that happens when large numbers of customers sign up at the
	same time. Turn off the device and try again in an hour or two.
	
	Additional query words: kbimu ; dbconn2
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbMSNSearch kbMSNCompanion
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
