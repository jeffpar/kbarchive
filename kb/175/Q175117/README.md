---
layout: page
title: "Q175117: XADM: Setup Fails When Joining a Site"
permalink: kb/175/Q175117/
---

## Q175117: XADM: Setup Fails When Joining a Site

	Article: Q175117
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server setup, you may receive the following
	error message:
	
	  Some replication operations were not completed. Directories will be
	  updated during normal replication updates. In the mean time, some
	  directory services may not start or may fail. To view details of the
	  error, see the application event log.
	
	  Setup
	  ID no. c1030b4b
	
	In the event log, you will find the following warning:
	
	  Setup Replication Configuration warning 2015
	
	  An error occurred while preparing to update the replica of naming
	  context '/o=Test/ou=Test1/cn=Configuration' on server 'NEW-YORK'. The
	  replica will be updated on server 'NEW-YORK' during the course of any
	  normal replication updates. <<0xc1030b1a - The directory database has
	  reported an error. Use the Services icon in the Control Panel to stop
	  and then start the Microsoft Exchange Directory Service.>>
	
	CAUSE
	=====
	
	This problem occurs when you simultaneously run Exchange Server setup on several
	computers during the process of adding Exchange Server to an Exchange Server
	site.
	
	WORKAROUND
	==========
	
	Manually start the Exchange Server services from the Control Panel Services icon
	to start replication.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbprb
	
	=============================================================================
	
