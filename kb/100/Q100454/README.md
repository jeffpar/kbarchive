---
layout: page
title: "Q100454: Mac Srv: Definition of Mail Server Threads"
permalink: /kb/100/Q100454/
---

## Q100454: Mac Srv: Definition of Mail Server Threads

{% raw %}

	Article: Q100454
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks' server processes
	requests via internal "threads." Depending on the version of Mail and memory
	allocation to the mail server, the number of threads available to the mail
	server can vary. Below is a detailed summary of the types and numbers of threads
	that are available to the server.
	
	1      System Thread - Used during initial Startup to initialize
	       database, etc.
	
	4-16   User Threads - User threads receive, process and respond to
	       requests from workstations. The number of threads is dependent
	       upon the amount of memory allocated to the server under Server
	       Settings and what processes are being handled by the server.
	
	       At a minimum there will be 4 user threads dedicated to
	       responding to user requests. If there is 2 MB or more of memory
	       allocated to the server and the Mail version is 3.1 or higher,
	       8 user threads will be initialized.
	
	       In version 3.1, the following applies:
	
	       If a user has a request regarding an attachment being processed by
	       the server, a secondary thread will be spawned. The user is then
	       transferred to the new thread while the enclosure information is
	       processed. At the completion of the enclosure processing, the
	       secondary thread is removed.
	
	       It is possible for the server to have a maximum of 16 user
	       requests being processed at any given time. This would indicate
	       that 8 clients were processing standard read/send message requests
	       and 8 additional users were sending/receiving attachments.
	
	1      Misc. Thread - Notify, Auto Logoff after 15 minutes, Database
	       Compression, and Empty Wastebasket.
	
	       Database Compression will only occur when System Activity is low.
	       Therefore, if a large amount of attachments/messages are deleted
	       from the server, then the Microsoft Mail Data File may not reduce
	       in size immediately.
	
	       When a Server is busy sending and receiving messages from users,
	       it is possible that users will not be instantly notified that
	       new messages have arrived.
	
	1-2    Server Threads - Server Thread for communications to other
	       servers.
	
	With ALL mail versions earlier than 3.1a, there is one server-server thread. This
	thread handles all messaging between servers. With 3.1a, when working across
	site names (routing), a secondary thread may be spawned for processing of
	messages from a different site.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
