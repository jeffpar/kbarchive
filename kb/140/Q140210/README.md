---
layout: page
title: "Q140210: INF: Microsoft Jet 3.0 Questions and Answers"
permalink: /kb/140/Q140210/
---

## Q140210: INF: Microsoft Jet 3.0 Questions and Answers

	Article: Q140210
	Product(s): Microsoft Product Support Information
	Version(s): 4.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Excel for Windows 95, version 7.0 
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	1. Q. What is the Microsoft Jet database engine?
	
	  A. The Microsoft Jet database engine version 3.0 is the new database engine
	  that ships with Microsoft Access for Windows 95 version 7.0, Microsoft Visual
	  Basic 4.0, Microsoft Excel for Windows 95, and the upcoming version of
	  Microsoft Visual C++. It cannot be purchased as a stand-alone product.
	
	2. Q. What is a database engine?
	
	  A. Database management systems (DBMS) are programs used to store and retrieve
	  data. A DBMS program has a number of important components. The user interface
	  is the component that handles interaction between the user and the program.
	  It also controls the way a user views data through forms and reports. The
	  database engine is the component that actually handles the data. The user
	  typically does not interact directly with the database engine.
	
	3. Q. So why should I care which database engine my products use?
	
	  A. Think of the database engine as the engine in your car. You don't see the
	  engine while you're driving. You manipulate the user interface: the steering
	  wheel, the pedals, and the other dashboard gadgets. Even though you don't
	  deal directly with the engine, you'll appreciate the difference in engines
	  when a high performance car roars past you.
	
	  The speed, performance, and reliability of a DBMS (or lack thereof) come from
	  the engine. The Jet database engine is an advanced database engine that
	  combines speed and performance with many other advanced features not found in
	  competing desktop DBMS products. The Microsoft Jet database engine is also a
	  reliable engine that offers certain transaction processing capabilities; for
	  example, it can wrap bulk operations into transactions and even nest those
	  transactions.
	
	4. Q. How does the Jet database engine store my data?
	
	  A. The Jet database engine stores data in a Microsoft Access database (.mdb)
	  file. All tables and indexes are stored in this file, as are any forms,
	  reports, macros, and modules used by Microsoft Access. According to user
	  feedback, having everything in one file makes it easy to manage data and
	  applications.
	
	5. Q. Can the Jet database engine read and write data in other formats?
	
	  A. Yes, the Jet database engine supports dBASE, Paradox, and the Microsoft
	  FoxPro database file formats as well as many popular spreadsheet and text
	  formats. In addition, the Jet database engine can use open database
	  connectivity (ODBC) to connect to external client/server database sources
	  that have ODBC drivers. The ODBC driver for Microsoft SQL Server ships with
	  the Jet database engine, and other drivers are readily available for
	  databases from Sybase, Oracle, and other vendors.
	
	6. Q. How do I use the Jet database engine in my applications?
	
	  A. The Jet database engine itself ships with Microsoft Access, Microsoft
	  Visual Basic, Microsoft Visual C++, and Microsoft Excel. However these are
	  not the only applications that can access the Jet database engine features.
	  The following scenarios show how a user or developer can tap into the Jet
	  database engine features:
	
	   - The Microsoft Access user interface calls upon the Jet database engine to
	     provide data retrieval and other services because all objects created in
	     Microsoft Access are stored in the Jet database engine's native .mdb file.
	
	   - Any program that is an OLE Automation controller, such as Microsoft
	     Project, can access the Jet database engine programmatically because the
	     Jet database engine's objects are fully exposed through DAO.
	
	   - Any program that ships with the Microsoft Jet database engine, such as
	     Microsoft Visual Basic, Microsoft Visual C++, or Microsoft Excel, can
	     control the Jet database engine programmatically.
	
	  Microsoft is working to implement a standard development environment called
	  Visual Basic for Applications across the entire Microsoft Office suite.
	  Visual Basic for Applications is shipped as part of Microsoft Access for
	  Windows 95, Microsoft Excel for Windows 95, and Microsoft Project for Windows
	  95. In the future, it will be incorporated into Microsoft Word and Microsoft
	  PowerPoint. Using Visual Basic for Applications, a developer can directly
	  manipulate all of the Jet database engine's objects to read and write data
	  stored in the Jet database engine tables, perform queries, or manage the Jet
	  database engine's security features. This means, for example, that a
	  Microsoft Excel developer can tap into the full power of the Jet database
	  engine without having to go through Microsoft Access.
	
	7. Q. Why is the Microsoft Jet database engine better than other database
	  engines?
	
	  A. Besides the basic features that users have come to expect from any database
	  engine, the Microsoft Jet database engine adds advanced capabilities that
	  were previously unavailable on desktop databases. These include:
	
	   - Access to heterogeneous data sources. The Jet database engine provides
	     transparent access, through industry-standard ODBC drivers, to over 170
	     different data formats, including dBASE, Paradox, ORACLE, Microsoft SQL
	     Server, and IBM DB2. Developers can build applications in which users read
	     and update data simultaneously in virtually any data format and can
	     replace a back-end data store with minimal programming should application
	     requirements change.
	
	   - Engine-level referential integrity and data validation. The Jet database
	     engine has built-in support for primary and foreign keys,
	     database-specific rules, and cascading updates and deletes. This means
	     that a developer is freed from having to create rules using procedural
	     code to implement data integrity. Also, these rules are consistently
	     enforced by the Jet database engine itself, so that they are available to
	     all application programs.
	
	   - Advanced workgroup security features. The Jet database engine stores User
	     and Group accounts in a separate database, typically located on the
	     network. Object permissions for database objects (such as tables and
	     queries) are stored in each database. By separating account information
	     from permission information, the Jet database engine makes it much easier
	     for system administrators to manage one set of accounts for all databases
	     on a network.
	
	   - Updateable recordsets. As opposed to most database engines which return
	     query results in temporary views or snapshots, the Jet database engine
	     returns a recordset that automatically propagates any changes users make
	     back to the original tables. This means that the results of a query, even
	     those based on multiple tables, can be treated as tables themselves. Users
	     can even base queries on other queries.
	
	   - Query optimization using Rushmore technology. The Jet database engine has
	     incorporated this innovative technology from Microsoft FoxPro to enhance
	     query performance.
	
	   - Multiuser features. The Jet database engine supports multiple users in all
	     products. You don't have to do anything to enable multiuser access. The
	     Jet database engine supports both optimistic and pessimistic locking. It
	     also supports transaction processing, with implicit transactions as a new
	     feature in the Microsoft Jet database engine version 3.0.
	
	8. Q. What's new in version 3.0 of the Jet database engine?
	
	  A. The Microsoft Jet database engine version 3.0 is a 32-bit, multithreaded
	  program. Microsoft's primary goal in developing this latest version was to
	  boost the Jet database engine's performance and improve its multiuser
	  capabilities. This means that most changes to the Jet database engine have
	  been made behind the scenes. However, some new, important features for
	  developers are worth noting:
	
	   - Replication support (explained below)
	
	   - Enhancements to DAO including new properties and methods to support
	     replication and a new Errors collection. Also, new extensions have been
	     added to existing functionality, such as the GetRows method (which
	     retrieves multiple rows into an array), the PercentPosition property
	     (which returns the approximate location of the current record), and the
	     AllPermissions property (which returns all permissions on an object).
	
	9. Q. What is replication and how does the Jet database engine support it?
	
	  A. Data replication is the ability of a system to automatically synchronize
	  copies of its data between local and remote connections. Replication is often
	  used to improve data availability.
	
	  Microsoft Access and Microsoft Visual Basic ship with new DLLs that implement
	  replication. The Microsoft Jet database engine version 3.0 introduces new DAO
	  methods and properties to support this functionality. Once those DLLs have
	  been installed on a system, replication is fully programmable through DAO.
	  This means that other applications, including Microsoft Excel and Microsoft
	  Visual C++, can benefit from this technology. In addition, the Microsoft
	  Access Developer's Toolkit contains the Microsoft Access Replication Manager,
	  which supplies enhancements to the basic functionality, including a graphical
	  user interface for administering and scheduling replication services.
	
	10. Q. How many users can the Jet database engine support?
	
	  A. Theoretically, the Jet database engine can support 255 simultaneous
	  connections to one database. The practical limit to the number of users it
	  can handle in multiuser applications depends on many factors. Applications
	  whose primary task is to perform queries can handle more users than
	  applications whose primary task is to update data. The network and file
	  server also play an important role in calculating this limit. In a properly
	  configured network setting, the Jet database engine can easily support 25-50
	  users in a transaction-oriented environment. Some multiuser applications
	  function well with 80 users.
	
	  If your application grows out of the Jet database engine's range, you can
	  upsize the data portion of your application to Microsoft SQL Server while
	  maintaining your investment in the Microsoft Access front end. The Microsoft
	  Access Upsizing Tools, available separately, make it easy for you to migrate
	  your data.
	
	11. Q. How do I distribute my applications that use the Jet database engine?
	
	  A. If your users already have Microsoft Office installed, then they already
	  have the Jet database engine DLLs installed. Installing Microsoft Office is
	  the easiest way to distribute the Jet database engine to your users.
	
	  If your application is written in Microsoft Access and your users have not
	  installed Microsoft Office, you need the Microsoft Access Developer's
	  Toolkit (ADT). The ADT contains an application Setup Wizard and allows you
	  to distribute run-time versions of your application.
	
	  Microsoft Visual Basic and Microsoft Visual C++ users already have the
	  ability to compile distributable applications.
	
	  Microsoft Excel solutions require that the users have copies of Microsoft
	  Excel, which they already have if they have installed Microsoft Office.
	
	12. Q. Does the Microsoft Jet database engine version 3.0 support record
	  locking?
	
	  A. The Microsoft Jet database engine version 3.0 continues to use page
	  locking because of its performance advantage in most scenarios. However,
	  many of the locking conflicts present in earlier versions of the Jet
	  database engine have been eliminated in version 3.0. Developers can choose
	  between optimistic and pessimistic locking.
	
	13. Q. Has performance in multiuser environments improved?
	
	  A. Yes, version 3.0 of the Jet database engine has improved its locking
	  during multiuser sessions. Here are the most important improvements:
	
	   - Fewer read locks on index pages. This removes many locking conflict issues
	     and removes the need for applications to call DBEngine.Idle DBFreeLocks.
	
	   - New mechanism for page reuse. The Microsoft Jet database engine version
	     3.0 no longer recycles pages until the last user closes the database. This
	     reduces concurrency conflicts and processing time.
	
	   - New mechanism for page allocation. In previous versions of the Jet
	     database engine, pages from different tables were often mixed together on
	     disk. In version 3.0, pages are typically allocated so that pages from the
	     same table are more contiguous. This scenario greatly enhances the Jet
	     database engine's read- ahead capabilities, and improves many search and
	     select operations.
	
	   - Faster delete operations. In version 2.x, pages were doubly linked,
	     causing a delete operation to visit every page when all rows were being
	     deleted. If there is no predicate attached to the delete statement and no
	     foreign keys referencing the table, this operation can now take advantage
	     of new storage techniques and remove the table almost instantaneously.
	
	   - Improved multi-user performance. In version 2.0, multiple insert
	     operations frequently blocked other users. Version 3.0 incorporates new
	     locking algorithms that can significantly reduce these conflicts.
	
	
	REFERENCES
	==========
	
	For more information about replication, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q138828 INF: Microsoft Jet Replication White Paper Available on MSL
	
	The content of this article is also available in QAjet30.exe from the Microsoft
	Software Library. For information on how to obtain QAjet30.exe, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q139483 INF: Microsoft Jet 3.0 Q&A Available on MSL
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbVC400 kbExcelSearch kbAudDeveloper kbAccessSearch kbExcel95 kbAccess95Search kbExcel95Search kbZNotKeyword3 kbAccess700
	Version           : :4.0,7.0
	
	=============================================================================
	
