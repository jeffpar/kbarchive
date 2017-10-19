---
layout: page
title: "Q166665: XCLN: Troubleshooting AppleTalk Connection"
permalink: /kb/166/Q166665/
---

## Q166665: XCLN: Troubleshooting AppleTalk Connection

	Article: Q166665
	Product(s): Microsoft Exchange
	Version(s): Macintosh:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Macintosh client cannot use AppleTalk network protocol to
	connect to the computer running Microsoft Exchange Server. The following error
	message may appear:
	
	  Your Microsoft Exchange Server is unavailable.
	
	CAUSE
	=====
	
	Usually, these symptoms mean a connection to the computer running Exchange
	Server cannot be made. It could also mean the server is down, AppleTalk is not
	being routed between network segments, or the Windows NT Services are not
	configured correctly. To determine the cause, answer the troubleshooting
	questions below.
	
	MORE INFORMATION
	================
	
	Troubleshooting
	---------------
	
	1. Has AppleTalk been configured on the Macintosh?
	
	  Go to the Apple Menu, Control Panels, AppleTalk. Make sure the "Connect Via"
	  is set to Ethernet (or whatever is applicable for your network). The "current
	  zone" should appear in the box below. If this hasn't been activated, make
	  sure to activate after selecting connection.
	
	2. Has Services for Macintosh been installed and configured and is it running on
	  the computer running Windows NT Server and Exchange Server?
	
	  If Services for Macintosh has been installed, you will see this under File
	  Service for Macintosh in Control Panel Services. This should be set as
	  Automatic, and Status should be Started. If this has not been installed,
	  refer to Windows NT documentation for installation instructions.
	
	  For additional information on Services for Macintosh, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q149202 XCLN: Client for Macintosh Release Notes
	
	  Also see the Windows NT Server documentation on MacFile and Services for
	  Macintosh.
	
	3. Is the MacFile name the same as the machine name of the computer running
	  Windows NT Server and Exchange Server?
	
	  This name needs to be the same for Exchange to access the Exchange server
	  correctly, as detailed in the Exchange Macintosh Release Notes.
	
	  This assumes the previous steps have been completed. To check the name, go to
	  Control Panel MacFile. Click Attributes. This will show the server name
	  broadcast over AppleTalk.
	
	4. Are there any restrictions on the MacFile Connections on the computer running
	  Windows NT Server and Exchange Server?
	
	  Again, go to Control Panel MacFile. Click Attributes. Under Sessions, is there
	  a limit? If so, is it high enough to allow all Exchange Macintosh clients to
	  connect?
	
	5. Is there additional security restrictions on the MacFile Connections on the
	  Windows NT/Exchange Server?
	
	  Again, go to Control Panel MacFile. Click on the Attributes button. Under
	  "Security," clear all options.
	
	  NOTE: If you allow Guests to log on, then the Macintosh client may be using
	  guest authentication to log on, but that should not be enough to log on to an
	  Exchange account. You usually need an NT account (that is, Exchange Primary
	  NT account) to log on to Exchange.
	
	  NOTE: It does not matter whether the Allow Workstations To Change Passwords
	  check box is selected. If this is not selected, this will force the Macintosh
	  to enter a password when logging in. It is recommended that you clear this
	  check box, for tighter security.
	
	  NOTE: The Require Microsoft Authentication option is used for additional
	  security, but requires additional setup on the Macintosh (including copying
	  over the AppleShare Folder to the Macintosh). For testing, it is best to
	  clear this check box to make sure the Macintosh can connect. If a connection
	  is successful without this, you know the Macintosh requires additional setup.
	  See Windows NT documentation for details.
	
	6. Do you know the AppleTalk zone? Or, is there a zone set?
	
	  NOTE: You do not need to set this up if you only have one network segment.
	  Exchange will think the AppleTalk zone is *, if no zone is selected.
	
	  To check the AppleTalk zone:
	
	   - On the computer running Windows NT Server and Exchange Server, go to
	     Control Panels Network, and click the Services tab (for NT 4.0) to see the
	     Properties on Services for Macintosh.
	
	   - You can select the "default" zone if you already have AppleTalk routing
	     set up.
	
	     -OR-
	
	   - You can use the computer running Windows NT Server as the router by
	     "Enable Routing," and select the "Use This Router To Seed The Network"
	     check box. However, USE WITH CAUTION! This will increase network traffic,
	     and will make Windows NT Server an AppleTalk Router for your network. This
	     may also cause problems connecting to the Server.
	
	7. Can the Macintosh workstation see the Exchange server in the Chooser?
	
	  If so, can the Macintosh connect to a share? This is for testing the
	  connection and Windows NT authentication only. You do NOT have to connect to
	  a share in order to launch the Exchange client.
	
	  To check whether the Macintosh can connect to a share:
	
	  a. From the Macintosh, go to the Apple menu, and click Chooser.
	
	  b. Click AppleShare. Select the appropriate AppleTalk zone for the computer
	     running Exchange Server, and see whether the "file server" is listed under
	     "Select a File Server." Click OK.
	
	  c. Click "Registered User". Enter the name and password of the appropriate
	     Windows NT account. Click OK.
	
	     At minimum, there should be a Microsoft UAM Volume. Just highlight and see
	     if you can connect. (Do NOT check the box unless you want to log on every
	     time the Macintosh starts up.)
	
	  d. To disconnect from the share, drag the Volume icon to the trash.
	
	8. Password problems?
	
	  For additional information on password problems, please see the following
	  articles in the Microsoft Knowledge Base:
	
	  Q127943 Mac Client Can't Logon Because Password Has Expired
	
	  Q152923 Can't Change Expired Password From MAC Exchange Client
	
	  Q153213 XCLN: Can't Change Windows NT 3.51 Password w/AppleTalk
	
	  Q156182 XCLN: Changing Windows NT 4.0 Password in Microsoft Exchange
	
	9. Check for errors in the Event Viewer on the computer running Windows NT
	  Server and Exchange Server. Specifically, look for login errors, AppleTalk
	  load failures, or MacFile failures.
	
	  For example, if AppleTalk does not load before the Exchange server, then
	  Exchange Server does not create the appropriate server entry for AppleTalk
	  clients to connect.
	
	10. If the problem still cannot be identified, get a Network Monitor trace
	  between the Macintosh client, Exchange Server, and any primary domain
	  controllers (PDCs) or backup domain controllers (BDCs). For example, if
	  there is a router between the Macintosh and Exchange Server, AppleTalk
	  routing must be turned on at the Router.
	
	11. If the server has changed AppleTalk zones, the Macintosh Exchange clients
	  must create new Exchange Profiles.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : Macintosh:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
