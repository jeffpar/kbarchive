---
layout: page
title: "Q312946: Using Services for UNIX to Synchronize Passwords with NIS Domain"
permalink: kb/312/Q312946/
---

## Q312946: Using Services for UNIX to Synchronize Passwords with NIS Domain

	Article: Q312946
	Product(s): Microsoft Windows NT
	Version(s): 2.0,2.1 OEM Only,2.2 OEM Only,2.3 OEM Only,3.0
	Operating System(s): 
	Keyword(s): w2000sfu
	Last Modified: 21-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.0, 2.1 OEM Only, 2.2 OEM Only, 2.3 OEM Only, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can us Password Synchronization to provide one-way (Windows-to-UNIX) and
	two-way password synchronization between Windows-based domains and Network
	Information Service (NIS) domains. You can do this whether the master server of
	the NIS domain is running on UNIX or is running Windows (Server for NIS).
	
	MORE INFORMATION
	================
	
	If the NIS master server is running UNIX, you can provide one-way
	synchronization by following these steps:
	
	1. Install Password Synchronization on all of the Windows-based computers (such
	  as the domain controllers) from which you want to synchronize passwords.
	
	2. Install the single-sign-on daemon (SSOD) on the NIS master server.
	
	3. Edit the sso.conf file on the NIS master server as follows:
	
	  a. Set USE_NIS to 1.
	
	  b. Set NIS_UPDATE_PATH to specify the location of the NIS makefile file.
	
	This instructs the SSOD to run the makefile file and to push the changed maps
	when a password-change request is received from the Windows-based domain.
	If Server for NIS is acting as the master server for the NIS domain, you do not
	have to do anything to provide one-way password synchronization. When a Windows
	user changes his or her password, Server for NIS automatically updates the UNIX
	password for NIS clients. If you also want to synchronize passwords with UNIX
	computers that are not part of the NIS domain, you can install Password
	Synchronization on the Windows-based domain controllers and configure the UNIX
	computers as described earlier in this article.
	
	Providing UNIX-to-Windows synchronization is similar for both types of NIS
	domains. To do this:
	
	1. If the NIS master server is running UNIX, configure it for one-way
	  synchronization as described earlier in this article.
	
	2. Install Password Synchronization on all domain controllers. If the NIS master
	  server is a UNIX computer, configure Password Synchronization on Windows for
	  two-way synchronization with the master server. Add each NIS client to the
	  list of computers that Password Synchronization synchronizes with. Make sure
	  to turn on UNIX-to-Windows synchronization and to turn off Windows-to-UNIX
	  synchronization. Windows-to-UNIX synchronization must be turned on only for
	  the NIS master.
	
	3. Install the Password Synchronization pluggable authentication module (PAM) on
	  each NIS client, and then copy the sso.conf file from the master server to
	  the /etc folder on those clients.
	
	4. If the NIS master server is a Windows-based computer that runs Server for
	  NIS, copy the Sso.cfg file to one of the NIS clients. Set SYNC_HOSTS to
	  specify the computer that is running Server for NIS as the Windows-based
	  computer with which to synchronize passwords, and then copy that file to the
	  other UNIX clients.
	
	5. Configure each UNIX computer to allow users to use the yppasswd command to
	  change their passwords. To do this, replace the yppasswd binary file on the
	  UNIX computer with a link to the passwd binary file, and then edit the
	  /etc/nsswitch.conf file to replace the passwd and shadow lines with the
	  following lines:
	
	  passwd: files [NOTFOUND=continue] nis
	  shadow: files [NOTFOUND=continue] nis
	
	After you do this, when a user runs the yppasswd command to change his or her
	password, the passwd binary file is run to change the password. If the user's
	passwd entry is not found in the local passwd and shadow files, the NIS password
	is changed instead.
	
	Additional query words: SFU sync sso.conf solar coaster solarcoaster interix
	
	======================================================================
	Keywords          : w2000sfu 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch kbWinServiceUNIX300 kbWinServiceUNIX210OEM kbWinServiceUNIX220OEM
	Version           : :2.0,2.1 OEM Only,2.2 OEM Only,2.3 OEM Only,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
