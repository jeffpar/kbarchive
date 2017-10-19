---
layout: page
title: "Q137097: HOWTO: Implement a Real-Time Application Using OLE"
permalink: /kb/137/Q137097/
---

## Q137097: HOWTO: Implement a Real-Time Application Using OLE

	Article: Q137097
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Real-time applications are used to solve a wide range of business problems. For
	example, an application may have a connection to a data source where certain
	data elements are continuously changing. The application needs to be aware of
	these changes and needs to perform some actions accordingly. One solution would
	be for the application to continuously poll the data source. This would
	constitute a great performance hit to the application and will virtually suspend
	other application functions.
	
	A better alternative would be to have a backend poll the data source
	independently and notify the application when changes take place. Such a model
	can be easily implemented using OLE automation. This article gives a broad
	description of how to do it.
	
	MORE INFORMATION
	================
	
	The backend model is based on asynchronous notifications. The way to do this
	with OLE is to have the OLE client application pass an object reference to the
	OLE server. The server then calls a method of that object when it's time to
	notify the client. The server runs in the background doing periodic tests to see
	if the threshold conditions for notification are met.
	
	Here's an example. The OLE client application exposes a Receiver object with a
	Notify method. The parameters of the Notify method can be variants, so that
	arrays of data can be passed efficiently. The OLE server application exposes a
	Notification object with a Register method. The parameters of the Register
	method specify the condition to check for, the frequency, and a reference to an
	instance of the OLE client's Receiver class.
	
	When the client application is run, it creates an instance of its Receiver class.
	It then requests an instance of the Notification object from the server. The
	client calls the Register method of the Notification object, passing condition,
	frequency, and a reference to the Receiver object. The Register method returns
	immediately, and the client goes about its business.
	
	The OLE server has some mechanism for executing periodic events, such as a timer
	on a hidden form. Whenever the timer event fires, the first thing it checks is
	to see if any new registrations have been made. These are added to its
	notification list. The timer event then performs whatever database operations
	are necessary to determine whether any client's notification conditions have
	been met.
	
	If a client's notification condition is met, the OLE server calls the Notify
	method of the client's Receiver object, passing the data as one of the
	parameters.
	
	This scenario becomes even more interesting when you add Remote Automation to the
	picture. If the workstations are running a Win32 operating system (Windows 95,
	Windows 98, Windows NT, or Windows 2000), they can pass their Receiver object
	reference across the network to an OLE server running on a network computer.
	(This requires the Remote Automation Manager on the workstation.) The network
	computer can be dedicated to servicing notifications for a large number of
	workstations.
	
	Designed carefully with a lot of RAM at the server, you could even locate the OLE
	server on the same computer as the SQL Server database, so that the database
	operations would be local.
	
	REFERENCES
	==========
	
	For more information, please see the following product documentation:
	
	- Creating OLE Servers.
	
	- Building Client/Server Applications.
	
	- The CallBack sample application in \Samples\Remauto\Callback, Enterprise
	  Edition only.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
