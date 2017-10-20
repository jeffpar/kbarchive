---
layout: page
title: "Q69570: Mac Srv: Server Hangs Immediately After Restart"
permalink: /kb/069/Q69570/
---

## Q69570: Mac Srv: Server Hangs Immediately After Restart

{% raw %}

	Article: Q69570
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Microsoft Mail server may hang or crash when it receives a damaged incoming
	message or user list from another Microsoft Mail server. This problem has been
	observed only with messages that originate from Mail version 2.00 servers.
	Messages can become damaged if an AppleTalk packet that makes up part of the
	message becomes damaged due to network problems or a faulty router.
	
	The Mail server will hang or crash when it attempts to process the damaged
	incoming message. When the server machine is restarted, it will again try to
	process the incoming message and hang or crash within five minutes after
	restart. This problem will not occur intermittently; it will consistently occur
	soon after restart. The incoming message queue must be deleted to correct this
	problem.
	
	To delete the incoming message queue on a Mail version 3.0 server, do the
	following:
	
	1. While in the Chooser on the server Macintosh, set Mail to log in
	  automatically as the Network Manager, with the password entered by the
	  system. Close the Chooser.
	
	2. While in the Finder, click once on the Mail Network Administrator program and
	  from the Special menu, choose Set Startup to set the Mail Network
	  Administrator program as a start-up application.
	
	3. Restart the Macintosh.
	
	4. Immediately after the Mail Network Administrator program has started, hold
	  down the OPTION key and choose Delete Queued Mail from the Admin menu.
	
	5. A list of currently queued mail will be displayed in the window. Select all
	  the messages that are currently inbound for this server and click the Delete
	  button.
	
	6. Quit and restart the machine. If the problem persists, repeat steps 1-5.
	
	To delete the incoming message queue on a Mail version 2.00 server, do the
	following:
	
	1. Shut down the Macintosh acting as the Mail server and physically disconnect
	  the server from the network.
	
	2. Restart the Macintosh.
	
	3. Set the clock on the Macintosh ahead by an amount greater than the number of
	  days set in Server Settings for "Return undeliverable mail after X days.",
	  where "X" is the number of days.
	
	4. Let the server run for at least a half hour. The message queues will be
	  purged when the global address list in the Address Mail window does not
	  display users from any other server.
	
	Important: Purging the incoming message queue on a Mail 2.00 server should only
	be done with full knowledge of the consequences of this action. If the Mail
	server is a master gateway server, purging the queues causes the server to lose
	all information about any access servers to this gateway. All access servers to
	this master server will have to then be reinstalled. Any users from other
	servers that are in local groups will be deleted from the group. All queued
	outgoing mail for other servers will be returned as undeliverable.
	
	MORE INFORMATION
	================
	
	Communication between Mail 3.00 servers has a checksum attached that prevents a
	Mail 3.00 server from passing and processing damaged messages. This checksum
	does not exist in messages originating from Mail 2.00 servers, making Mail 3.00
	servers unable to check the validity of incoming data from Mail 2.00 servers.
	Microsoft recommends that Microsoft Mail networks experiencing the problems
	described in this article upgrade to Mail 3.00.
	
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
