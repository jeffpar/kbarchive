---
layout: page
title: "Q153983: Cannot Delete Directory from FPNW Server"
permalink: /kb/153/Q153983/
---

## Q153983: Cannot Delete Directory from FPNW Server

{% raw %}

	Article: Q153983
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you delete a directory on a File and Print Services for NetWare (FPNW)
	server, the directory still shows up in File Manager and in a DIR listing. If
	you try to look at the contents of the directory, you will get an 'Access
	Denied' error message. The security options in File Manager will be grayed out
	when this directory is selected, even if the directory is on a Windows NT file
	system (NTFS) partition.
	
	CAUSE
	=====
	
	When the directory was deleted, FPNW still had a handle open to the directory.
	Windows NT simply marked the directory as pending deletion. When a directory is
	in this state, it will show up in a directory list, but it cannot be accessed.
	
	For example, suppose FPNW allocated this handle for a NetWare Core Protocol (NCP)
	client that requested a Directory Search Handle. The client will not tell FPNW
	when it is done with the handle. This is caused by the design of the NCP client.
	Because FPNW does not know when the client is done with the handle, it will hold
	on to the handle until one of the following events occurs:
	
	- The client that requested the handle logs out.
	
	- The client that requested the handle un-maps its connection to the volume
	  where the directory exists.
	
	- The handle is re-allocated to a new directory. The last event occurs when the
	  client exceeds its maximum concurrent directory search limit (the default is
	  32). FPNW will then start re-using handles for that client.
	
	RESOLUTION
	==========
	
	The behavior is by design. Eventually the handle will be released and the
	directory will disappear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
