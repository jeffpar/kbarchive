---
layout: page
title: "Q233288: Personal Computer Network File System Daemon (PCNFSD)"
permalink: /kb/233/Q233288/
---

## Q233288: Personal Computer Network File System Daemon (PCNFSD)

{% raw %}

	Article: Q233288
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, used with:
	   - Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The personal computer network file system daemon (PCNFSD) service is accepted by
	the X/Open committee as a semi-standard for (PC)NFS. (PC)NFS refers to all NFS
	systems running on a personal computer. Windows NT Services for UNIX provides
	(PC)NFS capabilities for Windows NT as well as the PCNFSD service.
	
	The PCNFSD service authenticates and provides printing services to clients and it
	services remote procedure call (RPC) requests directed at program number 150001.
	
	MORE INFORMATION
	================
	
	NFS is not aware of user names or passwords; it uses numbers to identify users.
	You can use the PCNFSD service to map user names and passwords to the numeric
	IDs required by NFS.
	
	When you log on to your (PC)NFS client, the client sends your user name and
	password in clear text to the configured PCNFSD server. The PCNFSD service
	verifies the credentials and returns the user's numeric IDs and some additional
	information. When the (PC)NFS client uses its NFS client software to mount an
	export, the NFS client provides these numeric IDs to the NFS server for
	authentication.
	
	By default, some PCNFSD servers do not accept system accounts credentials (for
	example, user IDs less than 100). Check the PCNFSD Manage or Configuration files
	for additional information.
	
	Although (PC)NFS printing is not supported in Services for UNIX, it is briefly
	discussed here. The (PC)NFS client sends a print request command to the PCNFSD
	server. The server responds back with a spool directory to deposit files to be
	printed. The (PC)NFS client mounts this export and deposits files that it wants
	printed on the server. The (PC)NFS client then sends a print start command to
	the PCNFSD server to print the files.
	
	How to Verify that the PCNFSD Service Is Working
	------------------------------------------------
	
	To verify that the PCNFSD service is working, type the following command
	
	"rpcinfo -p pcnfsd_server" (without the quotation marks)
	
	where pcnfsd_server is the IP address or host name of your PCNFSD server. This
	command works on Services for UNIX and all recent UNIX operating systems.
	
	You should receive output similar to the following example:
	
	  
	
	  program vers proto port service
	
	  150001  1    udp   1040  pcnfsd
	  150001  2    udp   1040  pcnfsd
	
	The output indicates that there is an RPC program (program number 150001)
	listening to User Datagram Protocol (UDP) port 1040 that accepts either PCNFSD
	protocol version. The port is variable, the protocols may include TCP, and the
	version numbers accepted may differ, depending on the operating system of
	server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : winnt:4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
