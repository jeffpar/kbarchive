---
layout: page
title: "Q279003: Understanding and Configuring the SNA Server/HIS 2000 Web Client"
permalink: kb/279/Q279003/
---

## Q279003: Understanding and Configuring the SNA Server/HIS 2000 Web Client

	Article: Q279003
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNA Server/Host Integration Server (HIS) 2000 Web Client started shipping
	with SNA Server 3.0 Service Pack 2 (SP2). The Web Client offers the following
	benefits:
	
	- Administrators can control/configure the 3270/5250 Web Client settings that
	  are used for session access.
	
	- Administrators can update the Web Client cabinet (*.cab) files from one
	  location. The next time a Web Client accesses the Web page, Administrators
	  receive the latest updated files.
	
	- Users can install the Web Client by way of a Web browser, with the configured
	  settings that are already set by the Administrator.
	
	- Users can initiate a 3270/5250 session by way of a Web browser.
	
	MORE INFORMATION
	================
	
	It is important to understand that the Web Client does not run in the context of
	the browser; rather, the Web Client is a means of installing the necessary files
	for session access. Though a session can be kicked off (spawned) by way of a Web
	browser, each session runs in its own separate process.
	
	For customers who want the ability to run sessions from within a Web browser
	(true HTML conversion of the data stream), a 3rd-party solution is necessary
	from such vendors as IBM, Attachmate, and NetManage.
	
	
	Requirements
	------------
	
	- The Server must be running Microsoft Windows NT 4.0 or later with Microsoft
	  Internet Information Server (IIS) 3.0 or later.
	
	- The Web Client runs on any client that the SNA Server/HIS 2000 end-user
	  client currently supports. Microsoft Windows 95, Microsoft Windows 98,
	  Microsoft Windows Millennium (Me), Microsoft Windows NT Workstation, and
	  Microsoft Windows 2000 Professional are all supported.
	
	- The Web Client requires that Microsoft Internet Explorer 3.01 or later be
	  installed on the client computer to install the necessary files.
	
	- The Web Client Setup program must be run on a TCP/IP network for Web
	  browser-to-Web server and Web Client to SNA Server/HIS 2000 connectivity.
	
	Before a user can install the Web Client, an Administrator must first make sure
	the following steps are completed/tested:
	
	1. Copy the contents of the \Client\Web folder from the SNA Server/HIS 2000
	  CD-ROM to the target folder on your Web server. If you are using IIS, the
	  target folder might be %SystemDrive%\Inetpub\Wwwroot\Webclient.
	
	  The Wwwroot folder is the default location from which IIS publishes Web pages.
	  In this example, the Webclient folder is created by an Administrator.
	
	2. On the Web server, edit the appropriate *.htm files, which now reside in the
	  \Webclient folder. For "full" installations (which include the 3270/5250
	  emulators), edit the 3270full.htm and/or 5250full.htm files.
	
	  These files allow an Administrator to configure such parameters as sponsor
	  server, local LU, remote LU, firewall entry, and so on. For example, if you
	  want to use the 5250 emulator to get a sponsor connection to a server that is
	  named MAINSNA with a Local LU name of SNALOCAL and a Remote LU name of
	  BIGBLUE, you would edit the following lines in the 5250full.htm file to
	  resemble the following:
	
	  snactrl.SetSponsors "MAINSNA"
	  snactrl.Set5250LocalLU "SNALOCAL"
	  snactrl.Set5250RemoteLU "BIGBLUE"
	
	  NOTE: Although it is possible to configure the "minimum" installation files
	  (5250min.htm and 3270min.htm), the HTML file that is provided with SNA
	  Server/HIS 2000 allows for installing only the "full" client. To use the
	  "minimum" installation files, please review the product Help documentation.
	
	3. On a client computer, point your Web browser to the following URL:
	
	  http://<servername>/webclient/default.htm
	
	4. Once you are connected to this URL, your Web page will present you with three
	  buttons to select:
	
	   - Click button to connect to mainframe.
	   - Click button to connect to AS/400.
	   - Click button to install the End-User Client.
	
	  Assuming that both the mainframe (3270) and AS/400 (5250) *full.htm files were
	  configured properly, once you click the button in question, the Web Client
	  files will be downloaded to the user's local hard drive and stored in the
	  Winroot\Sna95\System folder. After this process is completed, the 3270 or
	  5250 emulator will open in a separate process and be ready for use.
	
	  The button to install the end-user client is used for installing the SNA
	  client files, but not the 3270/5250 emulator. A 3rd-party emulator can be
	  installed at a later time to provide for session access.
	
	REFERENCES
	==========
	
	For more information on using, configuring, and troubleshooting the Web Client,
	please review the Help documentation.
	
	For additional information about known issues with the Web Client, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q280740 Issues Associated with the SNA Server HIS 2000 Web Client
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	
	=============================================================================
	
