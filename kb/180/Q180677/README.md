---
layout: page
title: "Q180677: New Features in IIS 4.0"
permalink: kb/180/Q180677/
---

## Q180677: New Features in IIS 4.0

	Article: Q180677
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Server (IIS) version 4.0 contains many
	improvements. In addition to resolving many of reported issues in IIS 3.0, IIS
	4.0 offers improvements in the areas of application stability and server
	management.
	
	MORE INFORMATION
	================
	
	The following is a summary of new features added to IIS 4.0 in the areas of
	application stability and server management, and a list of articles that discuss
	known IIS 3.0 issue resolutions. For more information, see the "Quick Tour of
	Features" in the online Microsoft Windows NT 4.0 Option Pack Documentation.
	
	Application Stability
	---------------------
	
	- Process isolation
	
	  Web Applications can be hosted in an environment that protects the core Web
	  services from poorly written applications. Isolated Web Applications each run
	  within their own Mtx.exe process. In the past, all ASP applications ran
	  within a single Inetinfo.exe process.
	
	- Microsoft Transaction Server (MTS) integration
	
	  Multiple steps and components can now be packaged into transactions that
	  succeed or fail as a whole. In IIS 3.0, ASP handled its own thread and memory
	  management within Asp.dll. IIS 4.0 takes advantage of the improved resource
	  usage and thread management in MTS, which allows Web application developers
	  to write scalable applications using the MTS foundation.
	
	- Improved database stack
	
	  Version 4.0 of IIS has an entirely new database stack that is of much better
	  quality than the previous release, and includes an improved thread-safe
	  Oracle driver.
	
	- ISAPI filtering by Web site
	
	  Each Web site on the server can have a different set of ISAPI filters. ISAPI
	  filters are programs that are executed when a given Web server event occurs.
	
	- ASP Debugging
	
	  IIS 4.0 includes an Active Server Pages debugger that is integrated with the
	  core ASP services. With this tool you can set breakpoints and step through
	  ASP code. Previously, in IIS 3.0, the only way to debug your ASP code was to
	  use Response.Write to send the information to the HTML output.
	
	- VBScript and Jscript
	
	  Version 3.0 of the Scripting engines provide enhanced capabilities such as
	  Directory Creation, File and Directory Deletion and the ability to determine
	  disk information (for example, the amount of free space and similar values).
	
	- New Java VM
	
	  Support has been added for JDK 1.1 as has the ability to make calls to Java
	  components from ASP scripts.
	
	- Message Queuing
	
	  Web applications using ASP can store data until a guaranteed connection is
	  made with the targeted Web application through the use of message queuing.
	  This has a significant impact on electronic commerce if it uses unreliable
	  networks.
	
	Server Management
	-----------------
	
	- Virtual servers using one IP address and host header names
	
	  Unique virtual Web servers can now be set up using the same IP address and
	  different names. Each virtual server can be controlled independently of each
	  other.
	
	- HTML administration
	
	  IIS 4.0 includes a full-featured Web-based administration utility to manage
	  the server remotely.
	
	- Improved metatag integration
	
	  Many functions that could only be done via metatags (expires, pic ratings,
	  custom headers) can now be down with the core server.
	
	- Customizable error messages
	
	  Error messages can be customized to improve the customer (end user of Web
	  sites) experience.
	
	- Command line administration
	
	  The same functionality found in the administration interfaces for IIS 4.0 is
	  now available through command line administration. This allows for easy ASP
	  scripting of administrative tasks.
	
	- Unattended installations
	
	  Customized installations can be implemented by using scripts to upgrade and
	  install multiple servers.
	
	- Integrated setup
	
	  Unlike IIS 3.0, IIS 4.0 offers an integrated setup for all of the components
	  of the Microsoft Windows NT 4.0 Option Pack.
	
	- Site Server Express
	
	  Tools are included for analyzing content and Web usage as well as for posting
	  files through the components of Site Server Express. The Content Analyzer,
	  Usage Import, Report Writer, and Posting Acceptor modules make up the
	  components of Site Server Express.
	
	- Flexible logging
	
	  There are now over 20 properties that can be logged for the Web server.
	  Included are server name, server IP and port, bytes sent and received, time
	  taken, and many more.
	
	IIS 3.0 Issue Resolutions
	-------------------------
	
	Many bug fixes for IIS 3.0 are included in IIS 4.0, including all hotfixes to
	Active Server Pages (ASP) and core services. The following list is a sample of
	known issues which are resolved in IIS 4.0.
	
	   Article ID  Article Title
	   ----------  ----------------------------------------------------------
	
	  Q163485 Active Server Pages Script Appears in Browser
	  Q163761 ASP Page Not Update Even if File Included in it Has Been Changed
	  Q165335 Active Server Pages: Progressive Memory Leak
	  Q166081 ASP Page Not Update Even if ASP File on UNC Virtual Dir. Changed
	  Q166082 ASP Page Not Update Even if File Included Is Changed
	  Q170856 IIS Log File May Be Truncated When Logging to Text File
	  Q172217 ASP Returns Invalid Application Name Error Message
	  Q173965 Max Number of SQL Statements Reached in IDC
	  Q179091 Multi-threaded Java Programs Stop on Multi-processor Computers
	  Q170852 Access Denied to Subdirectory w/ Windows NT Challenge/Response
	
	Additional query words: upgrade upgrading
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
