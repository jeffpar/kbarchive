---
layout: page
title: "Q156211: Network Virus Checking Programs and Microsoft Windows NT"
permalink: /kb/156/Q156211/
---

## Q156211: Network Virus Checking Programs and Microsoft Windows NT

	Article: Q156211
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Network virus scanning software packages can cause network errors when installed
	on Windows NT Server. These packages can also cause problems when upgrading to
	Windows NT Server 4.0.
	
	
	MORE INFORMATION
	================
	
	Third-party network virus scanning software can be installed on Windows NT
	Server to check files for viruses as they are copied to and from a server. These
	programs are installed as a service and they act at the file system level.
	
	
	These services will often run fine until a seemingly unrelated change, like
	adding a fault tolerant set or installing a service pack, is made to the server.
	Often the users will report that similarly configured servers run the same
	scanning software without a problem.
	
	Common symptoms that suggest a problem with virus scanning software include
	clients mysteriously being disconnected or being unable to connect to the server
	in question, or users being unable to save or retrieve files. Often clients
	trying to access a server will get the message "Not enough server storage is
	available to process this command" when trying to attach to a server.
	
	If the network connection problems are present and a virus scanning product is
	installed, disabling the scanning service will confirm that the problem is the
	virus scanning software. Sometimes it may be necessary to disable the service
	and restart the server. If the virus scanning service is determined to be the
	problem, contact the manufacture of software in question.
	
	When upgrading a server to Windows NT 4.0 it is advisable to disable the virus
	scanning services, because Stop 0x00000050 error messages (blue screens) and
	other system problems have been observed after upgrading systems with these
	services installed. The software vendor or manufacturer should be contacted
	before upgrading a server to find out what procedures or updates are necessary
	when upgrading to Windows NT 4.0.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
