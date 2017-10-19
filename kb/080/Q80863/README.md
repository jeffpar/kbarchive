---
layout: page
title: "Q80863: Limiting Simultaneous Users of an Application"
permalink: /kb/080/Q80863/
---

## Q80863: Limiting Simultaneous Users of an Application

	Article: Q80863
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	SUMMARY
	=======
	
	A major advantage to having a local area network is that software can be easily
	installed and maintained, and accessed by a large number of users. A single
	installation of a product, such as Microsoft Excel for Windows, can be accessed
	by hundreds of users.
	
	Unfortunately, the advantages local area networks provide can also lead to
	licensing difficulties. For example, a company may have only 15 licenses for
	Excel and therefore must never have more than 15 users accessing the application
	at one time.
	
	This article describes three approaches to restricting the number of users that
	can simultaneously access an application:
	
	- Run a utility that writes a record to a database when you enter and exit the
	  specified application.
	
	- Add code to the application itself to lock portions of an audit file for each
	  user who enters the application.
	
	- Use Microsoft LAN Manager's ability to limit the number of users who can
	  simultaneously access a shared resource.
	
	Details of these three approaches, advantages, and disadvantages are given
	below.
	
	APPROACH 1: WRITING RECORDS TO A DATABASE
	-----------------------------------------
	
	This method works by writing a record to a database each time a user enters and
	exits an application. When a user enters the application, code is required to
	check the database and verify that the specified number of users has not been
	exceeded. If it has, the application does not start. This approach can be part
	of the initialization code for the application itself, or it can be written in a
	utility that is run each time a user enters and exits the application. The
	specific steps of this approach are:
	
	1. Count the number of "In" records in the database that do not have
	  corresponding "Out" records.
	
	2. If the number of "In" records is less than the number of licenses, continue.
	  If it is not, do not enter the application.
	
	3. Write an "In" record to the database.
	
	4. Enter the application.
	
	5. Exit the application.
	
	6. Write an "Out" record to the database.
	
	Advantages:
	
	The main advantage of this approach is that you do not have to access to the
	application's code to control the number of users. You can write a utility that
	runs in a batch file before the application is opened and also runs after the
	application is exited, and the utility appropriately controls the number of
	simultaneous users.
	
	Disadvantages:
	
	The main problem with methods that use batch files is that no one is required to
	use the batch file to access the application. In this case, users who do not use
	the batch file are not monitored. Also, if a user's machine is powered off,
	rebooted, or if the network connection is lost while a user is in the
	application, the "Out" record is never written; that user appears to be using
	one of the licenses continuously.
	
	APPROACH 2: LOCKING PORTIONS OF A FILE
	--------------------------------------
	
	This approach requires access to the application's code. An initialization
	procedure that opens an audit file and attempts to lock certain blocks of that
	file is added to the application. The number of blocks should be equal to the
	number of licenses. If any of the blocks are free, access to the application is
	permitted. If the lock request fails on all blocks, all the licenses are
	currently in use, and the program closes with an appropriate message. When a
	user exits the application, the lock is released to allow other users access.
	The steps for this approach are:
	
	1. The user starts the application.
	
	2. Attempt to lock each of the consecutive blocks in the audit file until
	  successful. (The number of blocks is equal to the number of licenses.)
	
	3. If all blocks are already locked by other users, access should be denied, and
	  the program should close. If a lock is successful, the user should be allowed
	  access to continue running the application.
	
	4. The main portion of the application is run.
	
	5. When the user exits the application, the lock should be released, and the
	  audit file should be closed.
	
	
	Advantages:
	
	With this approach, if a user reboots the machine, powers off the machine, or
	loses a network connection, usage of the application is freed as soon as a
	session time-out occurs (usually within one minute, which is the default). Also,
	no batch files are needed to run any utilities; therefore, the problem of users
	accessing the application without using the batch file is eliminated.
	
	Disadvantage:
	
	You must have access to the application's source code.
	
	APPROACH 3: LIMIT ACCESSES TO SHARED RESOURCES
	----------------------------------------------
	
	With LAN Manager you can control the number of users who can access a shared
	resource. You can use this feature of LAN Manager to limit the number of users
	using an application by incorporating the use of the resource with the execution
	of the application. The easiest way to implement this approach is by using batch
	files. The following example is a batch file that accesses Microsoft Excel:
	
	  net use f: \\server1\excelshr
	  f:
	  excel
	  c:
	  net use f: /d
	
	With this example, it is assumed that the administrator has set up a shared
	resource on SERVER1 called EXCELSHR, and the appropriate files are located in
	this directory on the server. You can limit the number of users in the
	full-screen NET ADMIN. From the View menu, choose Shared Resources. Highlight
	the share name and select ZOOM. Change the User Limit from Unlimited to Max
	Users, and type the number of licenses at the prompt. Choose OK to save the
	setting.
	
	Advantages:
	
	This approach eliminates problems that occur if a workstation loses its network
	connection or is powered off, because its use of the share is discarded when a
	session time-out occurs. This approach does not require writing your own code,
	paying for third-party software, or accessing an application's code. The LAN
	Manager utility APPSTART.EXE uses this approach.
	
	
	Disadvantages:
	
	A batch file (or some other batch mechanism) is required to use this approach.
	There is no method to ensure that the batch file is used; therefore, users can
	manually use the shared resource and be counted as users of the application even
	if they have not started the application. You should also make sure that
	AUTODISCONNECT is turned off if you use this approach.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
