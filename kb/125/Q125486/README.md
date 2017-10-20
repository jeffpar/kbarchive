---
layout: page
title: "Q125486: TCP/IP Ioctlsocket Function Returns Incorrect Data"
permalink: /kb/125/Q125486/
---

## Q125486: TCP/IP Ioctlsocket Function Returns Incorrect Data

{% raw %}

	Article: Q125486
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11a; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11a 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A call to ioctlsocket() with a command of FIONREAD should return the amount of
	data currently in the receive buffer on a specific socket. If a recv() is then
	posted to the same socket, the recv() should complete successfully and return
	with the specified number of bytes of data.
	
	If a second ioctlsocket() call is issued to the same socket after a recv()
	completes, the number of bytes returned should be the bytes in the receive
	buffer before the recv() minus the bytes read by the recv() (assuming no
	additional data came in over the network).
	
	The problem described here is that number of bytes in the receive buffer returned
	from the ioctlsocket() call is not updated after a recv() is issued.
	
	The following sample debug log illustrates this problem:
	
	     Got an FD_READ
	     Disabling FD_READ
	     FIONREAD bytes = 239.
	     Bytes read = 100.
	     ioctl for  FIONREAD returned 239.
	     Bytes read = 100.
	     ioctl for  FIONREAD returned 239.
	     Bytes read = 39.
	     ioctl for  FIONREAD returned 0.
	     Enabling FD_READ
	     WM_DESTROY
	     Closing DebugFile
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft TCP/IP-32 for Windows
	for Workgroups, version 3.11a. This problem was corrected in Microsoft TCP/IP-32
	for Windows for Workgroups, version 3.11b.
	
	Additional query words: wfw wfwg 3.11 3.11a prodtcp32
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311a
	Version           : :3.11a; WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
