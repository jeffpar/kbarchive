---
layout: page
title: "Q115490: FFAPI: PUT Programs Work Only on First 50 Messages of MMF File"
permalink: /kb/115/Q115490/
---

## Q115490: FFAPI: PUT Programs Work Only on First 50 Messages of MMF File

{% raw %}

	Article: Q115490
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to FFAPI, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Software Development Kit (SDK) file format application
	programming interface (FFAPI) PUT programs do not deliver more than 50 messages
	from input mail message files (MMFs). No error messages are reported.
	
	After the first 50, additional messages are put into the Mail database, but they
	are not fully delivered to the intended recipient; the message is saved and the
	recipient information is stored in the INQUEUE3.MBG file.
	
	CAUSE
	=====
	
	FFAPI PUT leaves the remaining messages to be delivered by EXTERNAL or another
	gateway process.
	
	RESOLUTION
	==========
	
	You can complete the delivery of the additional messages by three means:
	
	- Run the GET program to extract messages from the database; it contains shared
	  code that delivers messages to users or downstream queues.
	
	- Run PUT again with no input file. Another 50 messages are delivered. Repeat
	  this until all the messages in the input MMF are delivered.
	
	  For example, if the input file name is MMF.IN and contains 130 messages, you
	  would use the PUT program three times:
	
	  gtwput -aadmin:password -dm -f2 mmf.in
	  gtwput -aadmin:password -dm -f2
	  gtwput -aadmin:password -dm -f2
	
	- Run EXTERNAL or another Mail Gateway process to finish delivering the
	  messages.
	
	  For example:
	
	  gtwput -aadmin:password -dm -f2 mmf.in
	  external
	  smtpgate
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFFAPI300 kbMailGateFFAPI210
	Version           : :2.1,3.0
	
	=============================================================================
	

{% endraw %}
