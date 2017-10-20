---
layout: page
title: "Q123208: TCP/IP-32 FTP.EXE PUT Command Fails on Some FTP Servers"
permalink: /kb/123/Q123208/
---

## Q123208: TCP/IP-32 FTP.EXE PUT Command Fails on Some FTP Servers

{% raw %}

	Article: Q123208
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft TCP/IP-32 for Windows for Workgroups includes an FTP client, FTP.EXE.
	When you use the FTP.EXE PUT command to transfer files to an FTP server the
	transfer fails. One of the following error messages (or one similar) appears:
	
	  426 Connection Closed, transfer aborted.
	
	  -or-
	
	  Error 146: Connection reset by peer.
	
	After the failed transfer, the resulting file on the FTP server may be smaller
	than the original file on the client workstation.
	
	CAUSE
	=====
	
	At the end of the file transfer to the FTP server, the TCP/IP-32 client sends a
	TCP packet with the RST bit set in the CODE field of the TCP header. A packet
	with the RST bit set requests a Connection Reset, and is normally used to break
	a TCP connection when an abnormal situation occurs. The effect of this
	Connection Reset depends on the version of software installed on the FTP server.
	Some FTP servers will react by aborting the file transfer before completely
	saving the file. Other FTP servers may save the whole file.
	
	
	RESOLUTION
	==========
	
	To avoid this problem in the future, obtain TCP/IP-32 for Windows for Workgroups
	version 3.11b.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for
	Workgroups version 3.11. This problem was corrected in TCP/IP-32 for Windows for
	Workgroups version 3.11a.
	
	Additional query words: prodtcp32 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311 kbTCPIP311a
	Version           : :3.11,3.11a
	
	=============================================================================
	

{% endraw %}
