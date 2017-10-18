---
layout: page
title: "Q313621: Port Mapper Services Cause Services for UNIX Not to Work"
permalink: kb/313/Q313621/
---

## Q313621: Port Mapper Services Cause Services for UNIX Not to Work

	Article: Q313621
	Product(s): Microsoft Windows NT
	Version(s): 2.0,2.1 OEM Only,2.2 OEM Only,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.0, 2.1 OEM Only, 2.2 OEM Only, 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Services for UNIX may not work or may not be installed correctly if you install
	some third-party port mapper services on the same server as Services for UNIX.
	The conflict may cause a complete loss of functionality in Services for UNIX, or
	may cause some of the programs that are installed by Services for UNIX not to
	work correctly.
	
	Some of the symptoms of such a conflict include:
	
	- Some or all of the services that are installed by Service for UNIX do not
	  start.
	
	- UNIX NIS clients that use Server for NIS as the NIS master cannot contact the
	  NIS master, or cannot run commands to view or change the maps on the NIS
	  master.
	
	- If you mount a Server for NFS export, none of the files or folders in the
	  export are shown. If you try to modify a file, you receive a "Stale NFS file
	  handle" error message.
	
	- While you are installing Services for UNIX, you receive error messages that
	  state that some services cannot start.
	
	- All files written by the Gateway for NFS service have anonymous file
	  permissions on the UNIX side even when User Name Mapping is properly
	  configured.
	
	CAUSE
	=====
	
	The conflict occurs because the Services for UNIX port mapper and the
	third-party port mapper both try to register with the same port. The Services
	for UNIX port mapper must be able to register on UDP and TCP port 111. Some
	third-party port mappers also register on UDP and TCP port 111. The third-party
	port mapper registers with UDP and TCP port 111. This causes the Services for
	UNIX port mapper not to start because it cannot register with port 111. If the
	Services for UNIX port mapper cannot start, some or all of the services that are
	installed by Services for UNIX may not work because the services depend on the
	port mapper.
	
	It does not matter whether you install Services for UNIX or the third-party port
	mapper first. The third-party port mapper takes over after you restart the
	computer.
	
	The following third-party port mappers are known to cause this conflict:
	
	- The NobleNet port mapper service
	- The Legato NetWorker port mapper
	
	The NobleNet port mapper service is installed as part of the Dell OpenManager
	Server agent. The NobleNet port mapper service might also be installed by other
	programs. The NobleNet port mapper program file is named Portserv.exe. This
	program runs when the NobleNet port mapper service starts.
	
	The Legato NetWorker port mapper is installed as part of Legato NetWorker. The
	Legato NetWorker port mapper program file is named Nsrexecd.exe. This program
	runs when the NetWorker Remote Exec service starts.
	
	The Legato NetWorker port mapper binds a socket to port 7938 first. It then tries
	to bind to port 111. If the bind operation does not succeed, it ignores the
	error, assumes that another program is already bound to port 111, and continues
	without serving port 111.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the program that installs the third-party port
	mapper. After you remove the program, restart your computer.
	
	Workaround Methods for Legato NetWorker
	---------------------------------------
	
	Note that these resolution methods do not work for NobleNet.
	
	You can use either of the following workarounds to use both Legato NetWorker and
	Services for UNIX on the same server.
	
	Method 1
	--------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	This method takes advantage of the NetWorker behavior of binding to port 7938
	first and then binding to port 111. You can configure Services for UNIX to load
	before NetWorker. This permits the Services for UNIX port mapper to be able to
	bind to port 111. You do this by making the NetWorker Remote Exec service
	(Nsrexecd) dependent on the Services for UNIX port mapper. To do this:
	
	1. Start Registry Editor. Click Start, click Run, type "regedt32" (without the
	  quotation marks), and then click OK.
	
	2. Locate and then click the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\nsrexecd
	
	3. Add a REG_MULTI_SZ value that is named DependOnService, and then add portmap
	  to the list.
	
	4. Click OK to close the dialog box, and then quit Registry Editor.
	
	The next time that you restart the server, Services for UNIX starts before the
	NetWorker Remote Exec service. The Services for UNIX port mapper can then bind
	to port 111.
	
	Method 2
	--------
	
	In this method, you prevent NetWorker from trying to bind to port 111. Edit the
	Nsrla.res file in the Program Files\Nsr\Res folder. Find the following entry:
	
	  emulate portmapper: Yes;
	
	Change the entry to:
	
	  emulate portmapper: No;
	
	Note that neither of these methods reduces the functionality of NetWorker. For
	lookups, NetWorker tries port 7938 first, and then fails over to 111.
	
	WORKAROUND
	==========
	
	To work around this issue, disable the service that loads the third-party port
	mapper, and then restart the server.
	
	MORE INFORMATION
	================
	
	To determine if a third-party port mapper is causing the Services for UNIX port
	mapper not to start, check the System event log for an error message with a
	source of Portmapper, an event ID of 3001, and this description:
	
	  The Portmap service did not start as it could not register on port UDP 111.
	  Please ensure that no other program has registered on UDP port 111.
	
	You might also see an error message that refers to TCP port 111. This event log
	error message is typically followed by a number of Service Control Manager error
	messages that indicate that many of the Services for UNIX services did not
	start.
	
	To verify whether the conflict is causing a particular Services for UNIX program
	not to work, run the "rpcinfo -p" command. Determine whether that particular
	program is registered with both a TCP and a UDP port. If "portmapper" is not
	listed as registered with TCP and UDP port 111, it is likely that a third-party
	port mapper is installed. Note that there are some cases in which "portmapper"
	will be listed in the Rpcinfo output as being registered with TCP and UDP port
	111, but a third-party port mapper may still have taken those ports. You can
	tell that this is the case if none of the Services for UNIX programs are shown
	in the Rpcinfo output.
	
	Sample Rpcinfo Output
	---------------------
	
	This is an example of the Rpcinfo output for a complete Services for UNIX
	installation. The ports for some of the programs may vary:
	
	  
	
	  Program     Version  Protocol  Port
	  -----------------------------------------------
	  100000      2        udp        111  portmapper
	  100000      2        tcp        111  portmapper
	  150001      1        udp       1035  pcnfsd
	  150001      2        udp       1035  pcnfsd
	  351455      1        tcp        852  mapsvc
	  351455      1        udp        857  mapsvc
	  351455      2        tcp        862  mapsvc
	  351455      2        udp        867  mapsvc
	  100004      2        udp        924  ypserv
	  100009      1        udp        929  yppasswdd
	  100004      2        tcp        934  ypserv
	  1073741824  1        udp        939   
	  100005      1        udp       1048  mountd
	  100005      2        udp       1048  mountd
	  100005      3        udp       1048  mountd
	  100005      1        tcp       1048  mountd
	  100005      2        tcp       1048  mountd
	  100005      3        tcp       1048  mountd
	  100021      1        udp       1047  nlockmgr
	  100021      2        udp       1047  nlockmgr
	  100021      3        udp       1047  nlockmgr
	  100021      4        udp       1047  nlockmgr
	  100021      1        tcp       1047  nlockmgr
	  100021      2        tcp       1047  nlockmgr
	  100021      3        tcp       1047  nlockmgr
	  100021      4        tcp       1047  nlockmgr
	  100024      1        udp       1039  status
	  100024      1        tcp       1039  status
	  100003      2        udp       2049  nfs
	  100003      3        udp       2049  nfs
	  100003      2        tcp       2049  nfs
	  100003      3        tcp       2049  nfs
	
	This is an example of the Rpcinfo output if the NobleNet port mapper is installed
	on a computer with Services for UNIX:
	
	  
	
	  Program  Version  Protocol  Port
	  --------------------------------------------
	  100000   2        tcp        111  portmapper
	  100000   2        udp        111  portmapper
	  300503   1        tcp       1086
	
	This is an example of the Rpcinfo output if the Legato NetWorker port mapper is
	installed on a computer with Services for UNIX:
	
	  
	
	  program  Version  Protocol  Port
	  --------------------------------------------
	  100000   2        tcp       7938  portmapper
	  100000   2        udp       7938  portmapper
	  390113   1        tcp       7937
	  390103   2        tcp       9404
	  390109   2        tcp       9404
	  390110   1        tcp       9404
	  390103   2        udp       9405
	  390109   2        udp       9405
	  390110   1        udp       9405
	  390107   5        tcp       9411
	  390107   6        tcp       9411
	  390105   5        tcp       9417
	  390105   6        tcp       9417
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: sfu
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch kbWinServiceUNIX300 kbWinServiceUNIX210OEM kbWinServiceUNIX220OEM
	Version           : :2.0,2.1 OEM Only,2.2 OEM Only,3.0
	Issue type        : kbprb
	
	=============================================================================
	
