---
layout: page
title: "Q169771: Remote Session Manager Unavailable When Installing TelnetD"
permalink: /kb/169/Q169771/
---

## Q169771: Remote Session Manager Unavailable When Installing TelnetD

	Article: Q169771
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Telnet Server service does not install properly as described in the
	Telnet.wri documentation. The instructions are to select the Remote Session
	Manager when adding the Telnet service. However, the only selection available is
	Telnet Service Beta (Inbound Telnet).
	
	If you install TelnetD without installing the Remote Session Manager, clients
	attempting to connect to the server through Telnet will receive a "Connection
	Failed" error message.
	
	RESOLUTION
	==========
	
	This issue has been addressed in an updated Oemsetup.inf file for the TelnetD
	service.
	
	To obtain a copy of the latest Oemsetup.inf file for the Telnet Server:
	
	- Connect to the following ftp site:
	
	  ftp://ntrk.microsoft.com/telnet_beta/beta.10/
	
	  -or-
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/
	
	NOTE: You can also obtain the Oemsetup.inf file from the Windows NT 4.0 Resource
	Kit Supplement 4 in case the FTP site is unavailable.
	
	- Download Oemsetup.inf directly into your current Resource Kit Telnet
	  directory. This is typically C:\Reskit\Telnet.
	
	- Follow the directions in the Telnet.wri file.
	
	MORE INFORMATION
	================
	
	Telnet Server has two components: the service itself (Telnetd.exe), and an
	underlying component--the Remote Session Manager (Rsm.exe). The Telnet Server
	service operates by connecting to the Remote Session Manager (RSM) component.
	
	RSM is responsible for initiating, terminating, and managing the character-
	oriented remote Telnet session on a given system. RSM only affects the services
	provided in the Telnet Server service; it does not affect Microsoft Remote
	Access Service (RAS) or other layered products.
	
	Additional query words: telnet
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbMSPressSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
