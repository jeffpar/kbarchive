---
layout: page
title: "Q165372: XADM: Err Msg When Running Admin Program: OR Is Incomplete"
permalink: kb/165/Q165372/
---

## Q165372: XADM: Err Msg When Running Admin Program: OR Is Incomplete

	Article: Q165372
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 16-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Administrator program, you receive the error
	message:
	
	  OR is incomplete. The Microsoft Exchange Administrator
	  ID #c10306ba.
	
	This occurs When you attempt to view the properties of an object.
	
	CAUSE
	=====
	
	This usually happens on Windows NT Workstation computers or Windows NT Member
	Servers after a trust is removed.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. In the Administrator program, on the Tools menu, click Options, and then
	  click Permissions.
	
	2. In the Default Windows NT Domain list, select the correct domain.
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
