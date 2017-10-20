---
layout: page
title: "Q131915: PC Ext: Using External and Dynamic Drives on Novell NetWare"
permalink: /kb/131/Q131915/
---

## Q131915: PC Ext: Using External and Dynamic Drives on Novell NetWare

{% raw %}

	Article: Q131915
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.2 and 3.2a of Microsoft Mail for PC Networks, when you use the
	EXTERNAL.EXE program to connect dynamically to a Novell server, and that server
	is the Novell server that validates the user account on your network, the server
	will not disconnect the session that EXTERNAL.EXE creates.
	
	MORE INFORMATION
	================
	
	The workstation that runs EXTERNAL.EXE connects to the Novell network, and the
	workstation shell then sends out a NetWare Core Protocol Language (NCP) request
	for an active Novell server to validate the user account.
	
	When a server responds, the shell establishes a Not Logged In connection on that
	server. If EXTERNAL.EXE dynamically connects to the server to deliver messages
	to a postoffice there, the connection changes to the account name used by the
	workstation. When EXTERNAL.EXE subsequently dynamically disconnects from the
	server, the connection at the workstation is terminated (the drive letter used
	by EXTERNAL.EXE is unmapped) but the server keeps the connection open with the
	account name, not Not Logged In.
	
	This is normal behavior for Novell, because the server must maintain a connection
	in order to continue to validate the user account.
	
	NOTE: The shell and Novell NetWare communicate using a language called NetWare
	Core Protocol (NCP). NCP is used for all client requests for service and for the
	responses to those requests. NCP is the single most important application layer
	protocol that NetWare provides. Without NCP, none of the file services offered
	by NetWare would be possible.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q92369 Novell NetWare and NCP Calls -- General Information
	
	Additional query words: 3.20 novell external dynamic drives
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	

{% endraw %}
