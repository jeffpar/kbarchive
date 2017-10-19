---
layout: page
title: "Q50593: Using OS/2 LAN Manager Alerts"
permalink: /kb/050/Q50593/
---

## Q50593: Using OS/2 LAN Manager Alerts

	Article: Q50593
	Product(s): Microsoft LAN Manager
	Version(s): 1.0,1.1,2.0,2.1,2.1a,2.2
	Operating System(s): 
	Keyword(s): kbfile kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LAN Manager, versions 1.0, 1.1, 2.0, 2.1, 2.1a, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the use of OS/2 LAN Manager alerts.
	
	MORE INFORMATION
	================
	
	Alerts can be a confusing subject. First, alerts function locally, not across
	the network. When a NetAlertStart() is issued, an entry in a workstation memory
	page is created. There are no entries made to the NetBios() table when an alert
	is registered.
	
	The source of most of the confusion is a server-level service called Alerter.
	This function does a number of NetAlertStart()s for the alerts it will monitor
	(admin, print, user). When an alert is generated on the server, the alerter
	service receives the local message in the mailslot associated with the alert.
	Based on the alert type, the information is reformatted as a message and
	transmitted via the NetMessageBufferSend() call.
	
	The Netpopup system is sort of a mirror image of the Alerter system. Netpopup
	registers for MESSAGE alerts. When the Messenger service receives a message, it
	raises the message alert and thus transfers the information to the Netpopup
	subsystem.
	
	In the Software/Data Library is a file named ALERTS that contains two source
	programs, ALRTMON.C and ALRTRAIS.C. ALRTMON.C establishes an alert monitor and
	ALRTRAIS.C raises an alert.
	
	You can find ALERTS.EXE,
	(http://support.microsoft.com/download/support/mslfiles/ALERTS.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.com home
	  page, click the Support icon. Click Knowledge Base, and select the product.
	  Enter kbfile ALERTS.EXE, and click GO! Open the article, and click the button
	  to download the file.
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com Change to the Softlib/Mslfiles
	  folder. Get ALERTS.EXE
	
	- Microsoft Download Service (MSDL) Dial (425) 936-6735 to connect to MSDL
	  Download ALERTS.EXE
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbnetwork 
	Technology        : kbAudDeveloper kbLanManSearch kbLanMan100 kbLanMan110 kbLanMan200 kbLanMan210 kbLanMan210a kbLanMan220
	Version           : :1.0,1.1,2.0,2.1,2.1a,2.2
	
	=============================================================================
	
