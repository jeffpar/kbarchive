---
layout: page
title: "Q253297: XADM: Discussion of Public Folders and Temporary Replicas"
permalink: kb/253/Q253297/
---

## Q253297: XADM: Discussion of Public Folders and Temporary Replicas

	Article: Q253297
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article outlines the creation and capabilities of public folder temporary
	replicas (temp replicas). Temp replicas are created when you create child
	folders under parent folders that do not have local replicas on the public
	folder server of the client. These temp replicas home the child folder
	temporarily, until replication can be completed and the folder is rehomed to its
	parent server.
	
	MORE INFORMATION
	================
	
	The Temp Replica Creation Process
	---------------------------------
	
	The simplest way to describe the temp replica creation process is with an
	example. This example uses a simple two server site that contains Server M and
	Server P, where Server M is the client mailbox server and Server P is a public
	folder replica server.
	
	When the client initially logs on to the Exchange Server computer, the client
	must determine which server it obtains public folder tree (or hierarchy)
	information from. This property is stored in the directory as the
	Home-Public-Server attribute of the Private Information Store object.
	
	After the client determines which public folder server it uses, the client
	connects to the public information store of that server to obtain the public
	folder tree that is displayed in the client view (note that the public folder
	tree is replicated to every Exchange Server computer in the organization that
	has a Public Information Store directory object). In this example, this public
	folder server is Server M.
	
	A temp replica is created if a user creates a child folder under a parent folder
	that has no local replica on the public folder server of the client. A temporary
	replica is created on the public folder server of the user, and then the client
	server is added to the list of replicas. This replica exists until the content
	can be replicated to the home server of the parent folder. After the data is
	replicated to the replica servers and the replication engine on the hierarchy
	server determines that this folder has indeed been replicated to other servers,
	the client server removes itself from the replica list so that the replica list
	is identical to its parent again. At this point, the home-server attribute is
	updated. If the replica list still contains another server in the same site as
	the client's server, that server becomes the new home server. If there are no
	other replicas in the same site, a server in a different site is chosen as the
	home server. Usually, this server is the home server of the parent folder, but
	no there is no set algorithm to determine the home server. The following example
	describes this process in detail.
	
	This example assumes that the top-level folder structure has been created, all of
	the folders are homed on Server P, and the only replicas are on Server P.
	
	In this example, during the initial client connection the following occurs:
	
	- A user starts the client.
	
	- The client connects to the directory and determines that the client uses
	  Server M as the public folder server (the client reads the Home-Public-Server
	  attribute of the Private Information Store object).
	
	- The client connects to the public information store on Server M, retrieves
	  the public folder tree data, and the public folder tree data is displayed in
	  the client.
	
	When the user creates a child folder (named the Our Folder folder) under the
	top-level folder from the client, a temp replica is created. The folder
	structure is displayed as follows:
	
	  
	
	  public folder
	     |
	     +----top-level folder
	                  |
	                   ----Our Folder
	
	Using the Exchange Server Administrator Program to Open Folder Properties
	-------------------------------------------------------------------------
	
	1. In the Exchange Server Administrator program, open the properties of the
	  object for a child folder that you created (in the example above, the
	  properties of the Our Folder object).
	
	2. Click the Replicas tab. In the example above, the only replica for the Our
	  Folder folder is on Server P, even though the user created this folder while
	  connected to Server M. This is because the user inherits all of the
	  properties (copy) from the parent folder.
	
	3. Navigate to the Servers container, open the properties of the Public
	  Information Store container of the server that you were connected to when you
	  created the child folder (in the example above, Server M), and then select
	  the Public Folder Resources tab. In the example above, there is no listing
	  for the Our Folder object, even though the user created the folder there.
	
	Determining If a Folder Is in a Temp Replica State
	--------------------------------------------------
	
	To determine if a folder is in a temp replica state:
	
	1. Open the properties of the Public Information Store container.
	
	2. Click the Age Limits tab.
	
	3. Click Columns.
	
	4. Add the Delete Pending column to the right side, and then click OK.
	
	5. If the folder that you want to determine the status of (in the example above,
	  the Our Folder folder) is displayed as True in the Delete Pending column, the
	  folder is in a temp replica state.
	
	Conditions That Change the Temp Replica State of a Folder
	---------------------------------------------------------
	
	- The folder must be synchronized with the replica on the public folder replica
	  server (in the example above, Server P).
	
	- All of the client connections must be disconnected from the temp replica on
	  the server that the child folder was created on (in the example above, Server
	  M). This includes the Exchange Server Administrator program.
	
	- If the time on the system passes midnight and the two conditions above are
	  met, the temp replica is removed and the folder is rehomed to the public
	  folder replica server (in the example above, Server P). If these conditions
	  are not met, the folder remains on the server that the user was connected to
	  when the child folder was created (in the example above, Server M).
	
	Issues Associated with Folders in the Temp Replica State
	--------------------------------------------------------
	
	- A folder may appear to be homed on a server that has no replica. A user may
	  assume that the folder has been rehomed, when in fact the folder is in a temp
	  replica state.
	
	- The client may appear to connect to a server that does not have a replica.
	
	- Until the clients disconnect from the temp replica, the folders do not rehome
	  to the proper server. This can result in a folder content discrepancy between
	  clients if they are connected to different servers, and in the Exchange
	  Server Administrator program it appears that there is only one replica, when
	  in fact there are two.
	
	Additional query words: replication temporary
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
