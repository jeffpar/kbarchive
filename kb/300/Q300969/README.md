---
layout: page
title: "Q300969: HOW TO: Make a COM Object and ASP Pages Run In-Process to IIS"
permalink: /kb/300/Q300969/
---

## Q300969: HOW TO: Make a COM Object and ASP Pages Run In-Process to IIS

{% raw %}

	Article: Q300969
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbHOWTOmaster
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Setting the Application Properties in IIS
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article explains how to make a Component Object Model (COM)
	object that is called from Active Server Pages (ASP) run in-process (that is, in
	the same process as Inetinfo.exe).
	
	Setting the Application Properties in IIS
	-----------------------------------------
	
	An ASP-based application is a collection of ASP pages and COM components. When
	you define an application, you use the Internet Information Services (IIS)
	snap-in to designate the application's starting-point folder in your Web site.
	Every file and folder that is under the starting-point folder in your Web site
	is considered part of the application. Therefore, you can use the folder
	structure to form application boundaries that define the scope of an
	application. You can have more than one application per Web site, and each
	application can be configured differently.
	
	One of the most important tasks that you face in developing your Web application
	is to determine how to assemble your ASP pages into a single Web application.
	IIS uses the concept of a namespace to identify applications. A namespace is a
	way of associating an area of memory with an easily recognized name; it
	identifies a group of files as belonging together. IIS uses virtual folders to
	define namespaces for applications. For example, with a default installation of
	IIS, you see a virtual folder called Default Web Site under the computer name in
	the IIS snap-in. You can create new virtual folders and sites under the Default
	Web Site and configure the application properties differently for each one.
	
	NOTE: In IIS version 4.0, the default setting is to run ASP pages and COM
	components in-process. In IIS version 5.0, the default setting is to run these
	as a pooled process, which is a separate process from IIS.
	
	To set the application properties of the Default Web Site in IIS 5.0 to run
	in-process with IIS, follow these steps:
	
	1. In Microsoft Windows 2000, click Start, point to Programs, point to
	  Administrative Tools, and then click Internet Services Manager.
	
	NOTE: To open Internet Services Manager if you are using Windows 2000
	Professional, click Start, point to Settings, point to Control Panel,
	double-click the Administrative Tools icon, and then click the Internet Services
	Manager icon.
	
	2. Click the plus sign (+) next to your computer name.
	
	3. Right-click Default Web Site, then click Properties.
	
	4. Click the Home Directory tab.
	
	5. In the Application Protectionlist, select Low (IIS Process).
	
	6. Click OK.
	
	Troubleshooting
	---------------
	
	Although running ASP pages and COM objects in-process offers the fastest
	performance, unstable components may cause the server to crash. Process
	isolation limits the effects of a crash to the single application that caused
	it. In addition to protecting your primary Web service from the crash, the
	application can be configured to restart automatically as often as you like. In
	the case of an application fatal error, the application's process is
	automatically terminated. Because the application is running in the Component
	Services system process, all transactions in progress are aborted. The Windows
	event log stores a record of the event, and Component Services restarts the
	application. The only clients that are affected by the failure are those with
	outstanding requests to that specific application.
	
	REFERENCES
	==========
	
	For more information, see the IIS 5.0 Help files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
