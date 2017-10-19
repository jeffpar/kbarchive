---
layout: page
title: "Q150275: Redirector Doesn't Close the Session After User Logs Off"
permalink: /kb/150/Q150275/
---

## Q150275: Redirector Doesn't Close the Session After User Logs Off

	Article: Q150275
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On Windows NT, it is possible for multiple logon sessions to be in progress
	simultaneously from a single workstation to a single server, for example an
	interactive logon session initiated by the interactive logon user and another
	session initiated by a service. These logon sessions are multiplexed over a
	single virtual circuit (VC). If a resource is kept open by the noninteractive
	session on the server, the server will keep open the session for the interactive
	user even after the user has logged off from the workstation.
	
	CAUSE
	=====
	
	When a user logs off, the Rdr.sys checks to see if there is any open resource
	for that user. Rdr.sys will close any resources that are open with the session
	ID of the currently logged on user and then send a logoff request to the server;
	the server will then close the session. However, if a resource is open on a
	noninteractive session, Rdr.sys will close the resources open by the interactive
	user but will not send a logoff request to the server. As a result, the session
	will be kept open for the user on the server even after the user has logged off.
	
	RESOLUTION
	==========
	
	Use the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: rdr.sys redirector workstation srv.sys
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
