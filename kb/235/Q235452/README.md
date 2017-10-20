---
layout: page
title: "Q235452: XGEN: Updates to the Exchange Server 5.5 SP3 Release Notes"
permalink: /kb/235/Q235452/
---

## Q235452: XGEN: Updates to the Exchange Server 5.5 SP3 Release Notes

{% raw %}

	Article: Q235452
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains updates to the release notes for Exchange Server 5.5
	Service Pack 3. The topics discussed are:
	
	- Application Conversion Assistant and Application Connector for Lotus Notes do not support Windows 2000 or Outlook 2000.
	- Running the Move Server wizard in an environment with Active Directory Connector causes loss of accounts.
	- Windows 2000 does not support TP4 X.400 Connectors.
	- Windows 2000 Release Candidate 2 or later is required to use Secure Sockets Layer (SSL) with Exchange Server 5.5 Service Pack 3.
	- Installing the Internet Mail Service on a Windows 2000 member server.
	- Service Pack 3 includes Microsoft Outlook 2000, not Microsoft Outlook 98.
	
	MORE INFORMATION
	================
	
	Application Conversion Assistant and Application Connector for Lotus Notes Do Not Support Windows 2000 or Outlook 2000
	----------------------------------------------------------------------------------------------------------------------
	
	The Microsoft Exchange Application Conversion Assistant and Application Connector
	for Lotus Notes do not support beta or final releases of Microsoft Windows 2000
	or Microsoft Outlook 2000. For more information about the software and operating
	system requirements for these programs, see the Developer's Guide for the
	Microsoft Exchange Application Conversion Assistant for Lotus Notes
	(Appconv.rtf) or the Administrator's Guide for the Microsoft Exchange
	Application Connector for Lotus Notes (Appconn.rtf). These files are located in
	the folder in which the associated program is installed.
	
	
	Running the Move Server Wizard in an Environment with Active Directory Connector Causes Loss of Accounts
	--------------------------------------------------------------------------------------------------------
	
	In an environment where the Active Directory Connector is set up as a link
	between Exchange Server 5.5 and Active Directory, do not run the Move Server
	wizard. Running the Move Server wizard in this environment causes the Active
	Directory Connector to delete the Windows 2000 accounts of users moved by the
	Move Server wizard.
	
	
	Windows 2000 Does Not Support TP4 X.400 Connectors
	--------------------------------------------------
	
	If you have a Transport Class 4 (TP4) X.400 Connector installed, do not upgrade
	your Exchange Server computer to Windows 2000. Windows 2000 does not support the
	TP4 transport protocol.
	
	
	Windows 2000 Release Candidate 2 or Later Is Required to Use Secure Sockets Layer (SSL) with Exchange 5.5 Service Pack 3
	------------------------------------------------------------------------------------------------------------------------
	
	To start the Microsoft Internet Information Server (IIS) Key Manager in Windows
	2000, click Start, click Run, type "keyring.exe" (without the quotation marks)
	in the Open box, and then click OK.
	
	
	Installing the Internet Mail Service on a Windows 2000 Member Server
	--------------------------------------------------------------------
	
	If your computer running Windows 2000 is a member of an existing domain and you
	attempt to install the Internet Mail Service, you are prompted to configure a
	Domain Name System (DNS) domain name before continuing. This message prompts you
	to use the Network tool in Control Panel, which is incorrect. If you use the
	Network tool in Control Panel to make the necessary changes, and then attempt to
	perform the operation again, you receive the same message.
	
	To correctly configure a DNS domain name:
	
	1. In Control Panel, double-click System.
	
	2. Click the Network Identification tab, click Properties, and then click More.
	
	3. In the "Primary DNS suffix of this computer" box, type the appropriate DNS
	  domain name, and then click OK to close each open dialog box. If you are not
	  sure what to type, contact your system administrator.
	
	4. Restart the computer.
	
	
	Service Pack 3 Includes Microsoft Outlook 2000, Not Microsoft Outlook 98
	------------------------------------------------------------------------
	
	The Before You Begin section in the release notes for Exchange Server 5.5 Service
	Pack 3 indicates that the service pack includes Microsoft Outlook 98, which is
	not true. The service pack actually includes Microsoft Outlook 2000.
	
	Additional query words: mbclean
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
