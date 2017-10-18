---
layout: page
title: "Q201271: XGEN: Exchange Server 5.5 Default File Structure"
permalink: kb/201/Q201271/
---

## Q201271: XGEN: Exchange Server 5.5 Default File Structure

	Article: Q201271
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Depending on the components selected during installation, Setup creates a
	default directory structure that stores the Exchange Server 5.5 program files.
	
	MORE INFORMATION
	================
	
	The following subdirectories are located in the root Exchsrvr directory folder:
	
	Note: Exchsrvr is the default root directory. This can be changed during
	installation and thus the subdirectories appear under the root directory name
	that was specified during Setup.
	
	- Add-ins: Subdirectories for extensions to Exchange Server. The default
	  installation contains dynamic-link libraries (DLLs) for the Microsoft Mail
	  Connector, the Microsoft Schedule+ Free/Busy Connector, the Simple Mail
	  Transfer Protocol (SMTP), and the Internet Mail Service.
	
	- Address: Subdirectories for e-mail address proxy DLLs. The default
	  installation contains DLLs for Microsoft Mail for PC and AppleTalk Networks
	  (now known as Quarterdeck Mail), the Microsoft Exchange Connector for Lotus
	  cc:Mail, SMTP, and X.400 e-mail address generators.
	
	- Bin: Components for Exchange Server and the Administrator program.
	
	- Ccmcdata: A directory structure that serves as a temporary storage location
	  to hold messages during transit. Connector for Lotus cc:Mail uses this
	  temporary storage space to move messages between Lotus cc:Mail and Exchange
	  Server. This directory is created only if you select to install the Connector
	  for Lotus cc:Mail component during Setup.
	
	- Connect: Components for various Exchange Server connectors. The default
	  installation contains .exe files for the Internet Mail Service, the Microsoft
	  Schedule+ Free/Busy Connector, Microsoft Mail for PC and AppleTalk Networks,
	  Lotus cc:Mail, and translators for other languages.
	
	- Docs: Online documentation. This directory is created only if you select to
	  install the online documentation component during Setup.
	
	- Dsadata: The directory database (Dir.edb) and Jet database logs (*.log).
	
	- Dxadata: The Directory Exchange Agent database (Xdir.edb) for Microsoft Mail
	  for PC Networks (MS Mail (PC)). This directory is created only if you set up
	  directory synchronization with an MS Mail (PC) network, which requires you to
	  install a Microsoft Mail Connector component during Setup.
	
	- Imcdata: Working directories for the Internet Mail Service.
	
	- Insdata: Working directories for the Internet News Service. This directory is
	  created whether or not you select to install the Internet News Service
	  component during Setup.
	
	- Kmsdata: Working directory for the Key Management server (KM server). This
	  directory contains the KM server database (Kmsmdb.edb) and Jet database logs
	  (*.log). This directory is empty unless you select to install the KM server
	  component during Setup.
	
	- Mdbdata: The private information store (Priv.edb), the public information
	  store (Pub.edb), and the Jet database logs (*.log).
	
	- Mtadata: Configuration, template database, and log files for the message
	  transfer agent (MTA).
	
	- Res: DLL files for the Microsoft Windows NT Event Viewer and the Windows NT
	  Performance Monitor.
	
	- Tracking.log: Log files for the message-tracking feature of the Administrator
	  program.
	
	- Webdata: Outlook Web Access (OWA) components. This directory is created only
	  if you select to install the OWA component during Setup.
	
	- Webdata.bak: Backup files for the OWA components in the Webdata folder. This
	  directory is created only if you select to install the OWA component during
	  Setup.
	
	- Webtemp: Temporary files for the OWA component. This directory is created
	  only if you select to install the OWA component during Setup.
	
	Additional query words: folder folders directory directories
	
	======================================================================
	Keywords          : exc55 
	Component         : Directory
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
