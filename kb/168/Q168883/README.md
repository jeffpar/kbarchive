---
layout: page
title: "Q168883: XFOR: 4037 Event Starting Internet Mail Service, 1067 IMC Error"
permalink: /kb/168/Q168883/
---

## Q168883: XFOR: 4037 Event Starting Internet Mail Service, 1067 IMC Error

{% raw %}

	Article: Q168883
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage exc4 exc5 exc55
	Last Modified: 02-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service (or Internet Mail Connector, in version 4.0) stops
	responding and cannot be restarted. If you attempt to start it manually or run
	the Internet Mail Wizard, an event similar to the following is logged in the
	Windows NT Event Viewer application event log:
	
	  Event ID: 4037
	  Type: Error
	  Source: MSExchangeIMC
	  Category: Internal Processing
	  Description: An exception has occurred which was handled internally by the
	  Internet Mail Service. This may have resulted in a message not being
	  delivered.
	
	If you attempt to start the Internet Mail Connector, the following error message
	is also displayed:
	
	  Could not start the Microsoft Exchange Internet Mail Connector service on
	  \\<servername>.
	
	  Error 1067: The process terminated unexpectedly.
	
	If you attempt to stop the Internet Mail Service, you find that the Stop button
	is unavailable.
	
	CAUSE
	=====
	
	This problem may result from a corrupt message in the Exchange Server directory
	(the Imcdata\In or IMCdata\Out directories). Resolving this condition is the
	subject of this article.
	
	The same error and symptom may result from a corrupted message in the message
	transfer agent (MTA) store. For more information, see the "More Information"
	section of this article.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Stop the Internet Mail Service using the Kill.exe file or the Tlist utility
	  from the Windows NT Resource Kit or BackOffice Resource Kit. The IMC service
	  should be displayed as stopped in Control Panel when you double-click
	  Services.
	
	2. Create two sub-directories called Temp under the Imcdata\In and Imcdata\Out
	  directories.
	
	3. Move all the files from the Imcdata\In directory to the Imcdata\In\Temp
	  directory and from the Imcdata\Out directory to the Imcdata\Out\Temp
	  directory.
	
	4. Delete the Imcdata\queue.dat file.
	
	5. Restart the Internet Mail Service. If it starts and stays on, test the normal
	  operation, and then move to step 7.
	
	6. If the IMC stops again, the corrupt message is not in the directory, but
	  rather in the MTA store, and you have to follow the steps in the articles
	  referenced in the "More Information" section of this article.
	
	7. Move 50 percent of the messages from the Imcdata\In\Temp directory to the
	  Imcdata\In directory and from the Imcdata\Out\Temp directory to the
	  Imcdata\Out directory. Delete the Queue.dat file, and then stop the Internet
	  Mail Service and restart it. If this process is successful, repeat it until
	  you find the bad messages and move all the good messages out.
	
	NOTE: Another method to find the bad message is to move all the files from the
	Imcdata\In directory to the Imcdata\In\Temp directory and from the Out directory
	to the Out\Temp directory, when the IMC is still in the locked state. You may
	receive a message that a certain file cannot be moved because it is in use. This
	file is most probably the corrupt file, and the IMC crashed while trying to
	process it.
	
	MORE INFORMATION
	================
	
	The same error message and symptom may result from a corrupted message in the
	MTA store.
	
	For additional information about troubleshooting a corrupted message in the MTA
	store, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q165505 XADM: How to View/Delete Messages in MTS-IN and MTS-OUT Queues
	
	  Q157323 XCON: Identifying and/or Reconstructing a Connector Queue
	
	
	Additional query words: dr. watson
	
	======================================================================
	Keywords          : kbtshoot kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
