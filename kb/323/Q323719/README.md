---
layout: page
title: "Q323719: Win32 Version of RSH Reports &quot;Option t Not Valid&quot; to Rcp Clients"
permalink: /kb/323/Q323719/
---

## Q323719: Win32 Version of RSH Reports &quot;Option t Not Valid&quot; to Rcp Clients

{% raw %}

	Article: Q323719
	Product(s): Microsoft Windows NT
	Version(s): 2.0,2.1 OEM Only,2.2 OEM Only,2.3 OEM Only,3.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 01-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.0, 2.1 OEM Only, 2.2 OEM Only, 2.3 OEM Only, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an rcp command from a UNIX/Linux client to the Windows Services for
	UNIX RSH service, you may receive the following error message:
	
	  Example:
	  $ rcp testfile winsvr2k:/
	  Option t is not valid.
	
	CAUSE
	=====
	
	This problem occurs because of an incompatibility between the UNIX rcp command
	and the Windows rcp.exe command. If the destination file is on a remote
	computer, the UNIX rcp starts rcp -t on the remote computer and sends the file.
	The "-t" option tells the remote rcp to start up in receive mode and wait for
	the incoming file. Windows rcp.exe has a different method of transferring files
	between computers, so it does not support the "-t" option.
	
	RESOLUTION
	==========
	
	The Interix version of rcp supports the "-t" option. To cause that version to be
	invoked, you have to use the Interix version of rshd daemon instead of the
	Windows Remote Shell service. The Interix rshd calls the Interix rcp, but the
	Windows Remote Shell service calls the Windows rcp.exe.
	
	MORE INFORMATION
	================
	
	To configure the Interix version of rshd under SFU 3.0:
	
	1. Turn off the Remote Shell Service. To do this, ho one of the following:
	
	   - Microsoft Windows NT 4.0: In Control Panel, double-click Services, and
	     then stop the Remote Shell Service and turn it off.
	
	   - Microsoft Windows 2000 or Microsoft Windows XP: In Control Panel,
	     double-click Administrative Tools, double-click Services, and then stop
	     the Remote Shell Service and turn it off.
	
	2. Start an Interix command shell such as the C or Korn shell.
	
	3. Edit the Etc/Inetd.conf file to turn on the Interix version of rshd by
	  removing the number sign (#) from the following line:
	
	  #shell stream tcp nowait NULL /usr/sbin/in.rshd in.rshd -a
	
	4. Restart the computer.
	
	5. After you get inetd running as a daemon by editing Inetd.conf, you have to
	  edit the Etc/Hosts.equiv file by using a C or Korn shell, because it replaces
	  the %Systemroot%\System32\Drivers\Etc\.rhosts file that is used with the
	  Win32 version of RSHSVC. This file will have the same format as the .rhosts
	  file. Please note that this file does not support the + + construct and you
	  must populate it with the specific hosts and users.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch kbWinServiceUNIX300 kbWinServiceUNIX210OEM kbWinServiceUNIX220OEM
	Version           : :2.0,2.1 OEM Only,2.2 OEM Only,2.3 OEM Only,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
