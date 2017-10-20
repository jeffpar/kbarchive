---
layout: page
title: "Q162522: ADT/ODE: Distributing a Split Database Application with ODE/ADT"
permalink: /kb/162/Q162522/
---

## Q162522: ADT/ODE: Distributing a Split Database Application with ODE/ADT

{% raw %}

	Article: Q162522
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbusagekbfaq
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	This article discusses issues that you should address when you redistribute a
	split database application with the Microsoft Office 97 Developer Edition Tools
	(ODE) or Microsoft Access Developer's Toolkit (ADT) version 7.0 tools. It
	addresses these topics:
	
	- What Is a Split Database Application?
	
	- Creating the Setup Files
	
	- Refreshing Linked Tables
	
	MORE INFORMATION
	================
	
	What Is a Split Database Application?
	-------------------------------------
	
	A split database consists of two database files. One database (called the
	back-end database) contains only the tables and relationships and resides on a
	network file server. The other database (referred to as the front-end database)
	contains all the other database objects: queries, forms, reports, macros and
	modules and resides on each user's computer.
	
	A split database design works well in multiuser environments, and it offers these
	advantages:
	
	- Performance is improved because the application portion of the database, the
	  user interface, is on the user's local hard disk.
	
	- Network traffic is reduced because only the data travels over the network;
	  all other objects in the database are local.
	
	- Updating your application is easier. You can make design changes to the
	  front-end database, and then distribute the changes to users without changing
	  any of the data in the back-end database.
	
	- In non-runtime environments, users can create their own custom objects, such
	  as queries, forms, or reports, without affecting other users.
	
	After you develop your application, you can manually create the back-end
	database, export the tables into it, and then link them back to your front- end
	database, or you can use the Database Splitter Wizard in Microsoft Access to
	automatically do the work for you.
	
	Creating the Setup Files
	------------------------
	
	When you distribute a split database application, create two separate collections
	of setup files: one setup for the front-end database and all of its support
	files, and one setup for the back-end database that contains only that file and,
	optionally, a Readme file.
	
	The setup for your back-end database does not need to include any shortcuts,
	registry values, or additional components. However, the Setup Wizard will
	automatically include Microsoft Access setup files, approximately 2 MB total,
	and those files will be installed on the file server along with your back-end
	database.
	
	When you distribute your application, instruct a network or system administrator
	to run the Setup program for your back-end database on the network file server
	first. Also provide instructions for setting the correct permissions for the
	folder where the data resides, such as Read, Write, Create, and Delete. You can
	include those and other instructions in a Readme file, and include the Readme
	file as part of the setup for your back-end database.
	
	After Setup install the appropriate files on the file server, instruct all users
	to run the setup program for your front-end database. This setup program sets up
	your main application and all of the Microsoft Access run- time files on each
	user's computer.
	
	Refreshing Linked Tables
	------------------------
	
	After you set up the back-end database on a network file server, you may need to
	provide a mechanism in your front-end database to refresh the linked table
	connections. In fact, it is a good idea to run a Visual Basic procedure each
	time the front-end database opens to verify that the table links are valid, and
	to refresh them if they are not. This can prevent potential problems if a user
	moves the back-end database to another location, or if the user's local computer
	is incorrectly mapped to the network server.
	
	The Developer Solutions sample application (Solutions.mdb) included with
	Microsoft Access contains a module called modRefreshTableLinks (or
	RefreshTableLinks in version 7.0) that you can use as a basis for writing your
	own Visual Basic procedure to refresh your table links. You can execute the
	procedure in the OnLoad event of your Startup form, or in an AutoExec macro in
	your application, so that table links are verified or refreshed each time your
	application is started.
	
	For more information about customizing modRefreshTableLinks to use in your own
	application, please see the following article in the Microsoft Knowledge Base:
	
	  Q154397 ADT/ODE: How to Modify RefreshTableLinks Module in Solutions.mdb
	
	NOTE: If you can emulate the network topology that your application's users will
	have, you do not have to refresh the table links in your application (front-end)
	database. For example, if you know your data (back-end) database will reside on
	G:\MyAppFolder, where G: is a mapped network drive, you can map a drive the same
	way in your development environment, and place the back-end database in
	G:\MyAppFolder. Then, when you distribute your application, each table's Connect
	property will already contain the correct path to the back-end database.
	However, because you cannot control whether users move the back-end database to
	another location or how each user will map their network drives, you should
	include a procedure to refresh table links in all your split database
	applications.
	
	REFERENCES
	==========
	
	For information about using the Database Splitter Wizard, search the Help Index
	for "Database Splitter."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbfaq
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
