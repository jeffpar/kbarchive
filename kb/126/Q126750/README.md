---
layout: page
title: "Q126750: PC Ext: Running External on PC-NFS File Services"
permalink: /kb/126/Q126750/
---

## Q126750: PC Ext: Running External on PC-NFS File Services

	Article: Q126750
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple Microsoft Mail Externals access the same postoffice located on a
	PC-NFS server, the following errors may appear in the SYSTEM.LOG:
	
	  [005] Mail retry count exceeded sending to: MAILNET /MAILP0
	  [016] Message was not sent due to missing message file.
	
	  Missing file is M:MAI\MA3\000162B3.MAI.
	
	  [021] Message was not delivered due to missing routing file.
	
	CAUSE
	=====
	
	This problem occurs when two or more Externals attempt to access the
	INQUEUE3.MBG and INQUEUE3.KEY files simultaneously. Normally, file locking is
	used to avoid a conflict. The above errors occur when PC-NFS file locking has
	not been enabled.
	
	RESOLUTION
	==========
	
	PC-NFS requires two procedures to enable file locking on shared file systems
	located on Sun servers. First, install the lock daemon included with PC-NFS on
	the server. Second, include the /MUSTSHARE or /MS command to the command line of
	the mount command that each External performs. The command is detailed on page
	76 in the "Administration Guide" of PC-NFS version 5.0.
	
	  Example: NET USE     M: server:/usr1/mail32 /ms
	
	The command can be performed on the command line, or it can be entered in the
	DRIVES.BAT file and performed when the redirector is started.
	
	The network can be started using a NETWORK.BAT file in the directory including
	the NFS files on the local drive. The file will include entries indicating the
	user or workstation login.
	
	  Example: NET START RDR wkstation *
	
	The machine specific addresses are located in the hosts file on each workstation.
	There is also another hosts file located on the server that will include the
	addresses of each user's workstation.
	
	  Example:   130.50.55.115   wkstation
	     130.50.5.55     server
	
	MORE INFORMATION
	================
	
	To verify that the workstations have the /MS option enabled, perform a trace on
	the network. If the /MUSTSHARE option is enabled, the workstation will send UDP
	packets to the server. Network Monitor will show the following text in the
	description of the UDP packet:
	
	  Src Port: Locus PC-Interface Conn Server
	
	Testing was done with version 5.0 of PC-NFS. File locking is described in PC-NFS
	Administration Guide appendix A. PC-NFS is a product of SunSelect, which is a
	Sun Microsystems business.
	
	Additional query words: 3.2 PCNFS PC
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
