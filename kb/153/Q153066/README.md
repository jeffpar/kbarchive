---
layout: page
title: "Q153066: IPC&#36; Connections Do Not Disconnect"
permalink: /kb/153/Q153066/
---

## Q153066: IPC&#36; Connections Do Not Disconnect

	Article: Q153066
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a connection is made to a Windows NT 3.51 server to which the user has had
	no prior connection, a connection is made to IPC$ as well as to the share. After
	disconnecting from the share, the connection to IPC$ remains, as can be seen in
	Server Manager under Shares. This may cause concerns for administrators, who may
	feel that the connection and any credentials associated with the user who made
	the connection might be accessible by someone else using the same computer.
	
	For instance, one company reported the following situation. Administrators needed
	to connect to the server from a computer that a user had already logged on to.
	The administrator used CONNECT AS to make a connection to the server, downloaded
	some files, then disconnected. They noticed that the IPC$ connection was still
	there in Server Manager. Their concern was then that the user at that computer
	might be able to access the server over that connection with administrator
	access.
	
	Additionally, the IPC$ connection is counted by License Manager. As long as the
	IPC$ connection is valid, it takes up a license, perhaps preventing other users
	from connecting to a resource.
	
	This connection will drop off when autodisconnect runs (after 15 minutes of
	inactivity by default).
	
	RESOLUTION
	==========
	
	This does not pose a security concern, as explained below (under MORE
	INFORMATION). However, license counts by License Manager are a valid concern.
	One instant solution is to turn off the License Logging service, using the
	Services tool in Control Panel.
	
	The problem has been corrected in Windows NT 4.0. The IPC$ connection is dropped
	immediately after user validation.
	
	
	MORE INFORMATION
	================
	
	Server Manager will show the connection user as the user's name while the share
	connection is maintained. If the user disconnects from the share, then the IPC$
	connection user will change to the user's computer name. At this point, any user
	at that computer attempting to connect will have to authenticate with the
	server. Although the IPC$ connection is still intact, it is not associated with
	any user name or credentials, so it does not pose a security risk.
	
	Additional query words: 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
