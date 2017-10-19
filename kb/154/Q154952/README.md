---
layout: page
title: "Q154952: Remote Admin Can Access a File for Which Everyone Has No Access"
permalink: /kb/154/Q154952/
---

## Q154952: Remote Admin Can Access a File for Which Everyone Has No Access

	Article: Q154952
	Product(s): Internet Information Server
	Version(s): winnt:1.0,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An administrator from a remote client running a browser that supports NTLM
	authentication is able to access a file for which 'everyone' has no access.
	
	Example:
	
	The file \inetsrv\wwwroot\samples\disclaim.htm has permissions set for everyone
	as no access. The Server is configured for Anonymous Authentication and Windows
	NT Challenge/Response Authentication. A remote client running the browser can do
	NTLM authentication. Access the url http://IIS-Server/samples/disclaim.htm
	
	Internet Information Server IIS will let you view the file after a sequence of
	NTLM challenge/response messages, if you are an administrator on the server
	computer.
	
	If the user logged on to the remote client is not an administrator on the server,
	then access is denied. Also, if you run the browser locally on the IIS computer
	while logged on as an administrator and try to access the same URL, you get the
	correct error message:
	
	  Error: Access is Denied.
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below, or upgrade to Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodiis prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbiisSearch kbiis100
	Version           : winnt:1.0,3.51
	
	=============================================================================
	
