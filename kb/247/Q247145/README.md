---
layout: page
title: "Q247145: XADM: ID No. c1040af3 or c1040af5 When Rehoming a Public Folder"
permalink: /kb/247/Q247145/
---

## Q247145: XADM: ID No. c1040af3 or c1040af5 When Rehoming a Public Folder

	Article: Q247145
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55kbfaq
	Last Modified: 03-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to rehome a public folder to a server in another site, you may
	receive the following error message:
	
	  Microsoft Exchange Server is unable to rehome the selected public folder.
	  Ensure that the Limit administrative access to home site option
	  is not set for this public folder, and that the server you are currently
	  connected to supports RPC network connections to the new home
	  server.
	
	This error message contains one of the following ID numbers:
	
	  ID no: c1040af3
	
	  - or -
	
	  ID no: c1040af5
	
	CAUSE
	=====
	
	If you receive an error message that contains ID number c1040af3, you do not
	have Service Account Administrator permissions for the remote Exchange Server
	site to which you are rehoming the public folder.
	
	If you receive an error message that contains ID number c1040af5, one of the
	following conditions exists:
	
	- The Exchange Server computer in the destination site is located in a domain
	  that does not trust the domain that you are logged on to when you attempt to
	  change the Home Server attribute of the public folder.
	
	- In User Manager on the remote computer, the user right to "Access this
	  Computer from the Network" has been taken away from the Everyone group, and
	  neither your account nor a global group that your account belongs to has been
	  granted the user right to "Access this Computer from the Network."
	
	- There is no remote procedure call (RPC) connectivity between the current home
	  server and the intended home server.
	
	RESOLUTION
	==========
	
	If Exchange Server rights, Windows NT user rights, or network connectivity
	prevent you from rehoming the public folder from the home site, have a Service
	Account Administrator in the destination site where the replica exists rehome
	the folder. This resolves the problem if the folder does not have the "Limit
	Administrative Access to Home Site" option enabled. You do not need Exchange
	Server rights or Windows NT rights to the computer where the public folder is
	currently homed to pull the Home Server attribute from the server and site where
	a replica exists.
	
	For example, if an organization contains the following sites, servers, and public
	folders:
	
	  Site_A
	  Server_A
	  Folder_A
	
	  Site_B
	  Server_B
	  replica of Folder_A
	
	From Server_B, you can rehome the replica of Folder_A to Server_B without any
	connectivity or rights to Server_A if the Limit Administrative Access to Home
	Site option is not set on the folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbfaq
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA MIPS PPC x86
	Issue type        : kbprb
	
	=============================================================================
	
