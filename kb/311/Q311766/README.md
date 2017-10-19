---
layout: page
title: "Q311766: HOW TO: Troubleshoot &quot;HTTP 500 - Internal Server Error&quot; Message"
permalink: /kb/311/Q311766/
---

## Q311766: HOW TO: Troubleshoot &quot;HTTP 500 - Internal Server Error&quot; Message

	Article: Q311766
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	
	- SUMMARY
	
	   - When You Try to Load the Localstart.asp File
	- When You Browse an ASP Page
	- When IIS 5.0 Returns a Server.GetLastError Error Message
	- When You Assign a Category to a File on Alpha or UNIX
	- When You Use the 500-100.asp File for Error Handling on a Non-Default Web
	  Site
	- When You Execute a Query in Index Server
	- When You Access a Provider from Within an ASP Page
	- When You Set the COM+ Application Identity on IIS 5.0
	- When You Set the MTS Application Identity on IIS 4.0
	
	- When IIS 4.0 Runs in its Own Memory Space
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot "HTTP 500 - Internal server error"
	errors. These errors have a number of causes and can affect many different
	system configurations. The procedures are classified by the situation in which
	the problem occurs. A member of the Administrators group must perform all of the
	procedures that this article describes.
	
	When You Try to Load the Localstart.asp File
	--------------------------------------------
	
	When one of the default documents for the Web site, Iisstart.asp, tries to load
	the Localstart.asp file, and the user who tries to access the page does not have
	the correct permissions to run the script that the Localstart.asp file contains,
	you receive an HTTP 500 error message. If you clear the Show Friendly HTTP Error
	Messages check box, you see information similar to the following with the HTTP
	500 error message:
	
	  Error Type:
	  Microsoft VBScript runtime (0x800A0046)
	  Permission denied: 'GetObject'
	  /localstart.asp, line 19
	
	This problem occurs because the Localstart.asp file contains Active Directory
	Service Interfaces (ADSI) and Visual Basic Scripting Edition (VBScript) code
	that uses the IIS Admin Objects to access the metabase. For security reasons,
	access to the metabase is restricted to members of the local Administrators
	group. This behavior is by design.
	
	To resolve this problem, follow these steps:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Internet Information Services.
	
	2. In the console tree, click Default Web Site. In the display pane, right-click
	  Localstart.asp, and then click Properties.
	
	3. On the File Security tab, click Edit under Anonymous access and
	  authentication control.
	
	4. On the Authentication Methods property page, click to clear Anonymous access.
	
	When You Browse an ASP Page
	---------------------------
	
	When you browse an Active Server Pages (ASP) Web page, you receive an "HTTP
	500.100 - Internal Server Error - ASP error" error message. If you clear the
	Show Friendly HTTP Error Messages check box, you see information similar to the
	following in the "Technical Information (for support personnel)" section:
	
	  Error Type:
	  Microsoft VBScript runtime (0x800A01F4)
	  Variable is undefined: 'x'
	  /OptionExplicitError.asp, line 9
	
	  Page:
	  GET /OptionExplicitError.asp
	
	To resolve this problem, either remove the Option Explicit statement or use the
	DIM keyword to declare the variable.
	
	To reproduce this behavior, run an ASP file that contains the following code in a
	virtual directory that permits script execution:
	
	  <% Option Explicit %>
	     <HTML>
	     <HEAD>
	     <TITLE>500-100 Undeclared Variable</TITLE>
	     </HEAD>
	     <BODY>
	     <P>About to use an undeclared variable</P>
	     <% 
	       x = 5
	     %>
	     </B></P>
	     </BODY>
	     </HTML>
	
	To fix this example, use the DIM statement to declare the X variable, as
	follows:
	
	  <% Option Explicit %>
	     <HTML>
	     <HEAD>
	     <TITLE>500-100 Undeclared Variable</TITLE>
	     </HEAD>
	     <BODY>
	     <P>About to use an undeclared variable</P>
	     <% 
	       DIM x
	       x = 5
	     %>
	     </B></P>
	     </BODY>
	     </HTML>
	
	When IIS 5.0 Returns a Server.GetLastError Error Message
	--------------------------------------------------------
	
	When a Web application or page is not available, IIS returns an error message. As
	a result, a customized ASP page handles the response for server-side script
	errors. This page returns a status of "500 Internal Server Error", which causes
	the client-side remote scripting applet to return no data to the remote
	scripting object.
	
	To resolve this problem, create a custom error page that returns a status of "200
	OK", and then reference this page in the "Custom Errors" section of your remote
	scripting server page or application. To do this, follow these steps:
	
	NOTE: You can set this custom error page for individual pages, for a whole
	application, or for the whole Web site or Web server.
	
	1. Create a copy of %SystemRoot%\WinNT\Help\IISHelp\Common\500-100.asp, and
	  store it in the same folder as the original file. Name the new file
	  500-100-OK.asp.
	
	2. Click Start, point to Programs, point to Accessories, and then click Notepad.
	
	3. In Notepad, click Open on the File menu. In the Look in drop-down box, browse
	  to the 500-100-OK.asp file, and then click Open.
	
	4. Replace the following code
	
	  Response.Status = "500 Internal Server Error"
	
	with the following:
	
	     Response.Status = "200 OK"
	
	NOTE: If the error message was not modified previously, the original line of code
	is line 12.
	
	5. On the File menu, click Save.
	
	6. In Internet Services Manager, click your Web server in the console tree. If
	  your remote scripting ASP page resides in a Web application under one of the
	  Web sites, expand your Web application.
	
	7. In the Details pane, right-click your remote scripting server ASP page, and
	  then click Properties.
	
	8. Click Custom Errors. In the list, locate the entry for 500;100. By default,
	  this is set to a URL and refers to Help/Common/500-100.asp. Click Edit
	  Properties.
	
	9. Modify the path to point to /IISHelp/Common/500-100-OK.asp, click OK, and
	  then click OK again.
	
	When You Assign a Category to a File on Alpha or UNIX
	-----------------------------------------------------
	
	When you assign a category to a file on Alpha or UNIX, you receive an HTTP 500
	error message.
	
	To resolve this problem, install Microsoft Office 2000 Service Release 1 (SR-1)
	or Service Release 1a (SR-1a). To download Office 2000 SR-1, see the following
	Microsoft Web site:
	
	  http://office.microsoft.com/downloads/2000/O2kSR1DDL.aspx
	
	When You Use the 500-100.asp File for Error Handling on a Non-Default Web Site
	------------------------------------------------------------------------------
	
	When you use the 500-100.asp file for error handling on a non-default Web site,
	you receive an HTTP 500 error message.
	
	To resolve this problem, follow these steps:
	
	1. In the console tree of the Internet Information Services snap-in, right-click
	  the appropriate Web site, click New, and then click Virtual Directory.
	
	2. In the Virtual Directory Creation Wizard, click Next. In the Alias text box,
	  type "IISHelp" (without the quotation marks), and then click Next.
	
	3. When you are prompted for the path to the content folder, click Browse,
	  select the WINNT\Help\IisHelp folder, and then click Next.
	
	4. On the Access Permissions page, accept all defaults, click Next, and then
	  click Finish.
	
	5. Right-click the Web site again, and then click Properties.
	
	6. On the Custom Errors tab, select the "500;100" error line, and then click
	  Edit Properties.
	
	7. In the Message Type list box, type "/iisHelp/common/500-100.asp" (without the
	  quotation marks) in the URL text box.
	
	8. Click OK, and then click OK again.
	
	When You Execute a Query in Index Server
	----------------------------------------
	
	After you click Go to execute a query in Index Server, you may receive an HTTP
	500 error message.
	
	This error occurs because no default application starting point is defined for
	the folder that contains the query pages.
	
	To resolve this problem, follow these steps:
	
	1. In the Internet Information Services snap-in, right-click the root of the
	  site that contains the query pages in the console tree, and then click
	  Properties.
	
	2. On the Home Directory tab, click Create.
	
	3. Click OK, and then retry the query.
	
	When You Access a Provider from Within an ASP Page
	--------------------------------------------------
	
	If you clear the Show Friendly HTTP Error Messages check box, you may receive the
	following error message when you try to access a provider from within the ASP
	page:
	
	  ADODB.Connection (0x800A0E7A) Provider cannot be found. It may not be
	  properly installed. /Nwind.asp, line 10
	
	This error occurs because a dynamic-link library (DLL) that the Microsoft Data
	Access Components (MDAC) requires is not registered.
	
	1. Click Start, click Run, and then type cmd.
	
	2. At a command prompt, type "cd %systemroot%:\Program Files\Common
	  Files\System\Ole" (without the quotation marks).
	
	3. At a command prompt, type "regsvr32 sqloledb.dll" (without the quotation
	  marks).
	
	4. When you receive confirmation that the DLL is registered successfully, click
	  OK.
	
	NOTE: This resolution uses a Microsoft SQL Server OLE Provider DLL, Sqloledb.dll,
	as an example. Because the unregistered DLL may vary based on the OLE DB
	provider that you are using, you must modify step 2 according to your
	situation.
	
	When You Set the COM+ Application Identity on IIS 5.0
	-----------------------------------------------------
	
	When you try to set the COM+ application identity on IIS 5.0, you receive an HTTP
	500 error message.
	
	This problem occurs when the identity for the COM+ application or the Microsoft
	Transaction Server (MTS) package is configured for Interactive user - the
	current logged on user. Because no user is currently logged on to the IIS
	console, the application cannot run.
	
	To resolve this problem, set the identity for the COM+ application or the MTS
	package to This User, and then specify a user account. To do this, follow these
	steps:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Component Services.
	
	2. In the console tree, expand Component Services, expand Computers, expand My
	  Computer, and then expand COM+ Applications. Locate the application whose
	  identity you want to change.
	
	3. Right-click the appropriate COM+ application, and then click Properties.
	
	4. On the Identity tab, click This User, type a valid account for the computer,
	  and then click OK.
	
	When You Set the MTS Application Identity on IIS 4.0
	----------------------------------------------------
	
	When you set the MTS application identity on IIS 4.0, you receive an HTTP 500
	error message.
	
	To resolve this problem, follow these steps:
	
	1. In the Internet Information Services snap-in, expand Computers, expand My
	  Computer, and then expand Microsoft Transaction Server. Locate the package
	  whose identity you want to change. The application is listed in the Packages
	  Installed folder.
	
	2. Right-click the package, and then click Properties.
	
	3. On the Identity tab, click This User, type a valid account, and then click
	  Apply.
	
	When IIS 4.0 Runs in its Own Memory Space
	-----------------------------------------
	
	You may receive an HTTP 500 error message when any of the following is true:
	
	- The default Web site of IIS version 4.0 is running as an isolated process in
	  its own memory space.
	
	- Microsoft Internet Explorer is configured to use the Web proxy on Proxy
	  Server 2.0.
	
	- Internet Explorer on BackOffice Small Business Server version 4.5 is
	  configured to use a proxy server, and proxy server packet filtering is
	  enabled.
	
	To resolve this problem, follow these steps:
	
	1. Click Start, point to Programs, click Microsoft Proxy Server, and then click
	  Microsoft Management Console.
	
	2. In the console tree, expand the Internet Information Server folder, and then
	  expand the server object.
	
	3. Right-click Default Web Site, and then click Properties.
	
	4. On the Home Directory tab, locate the Application Settings area, and then
	  click to clear Run in separate memory space (isolated process).
	
	5. Click Apply, and then click OK.
	
	6. Right-click Default Web Site, and then click Stop.
	
	7. Right-click Default Web Site, and then click Start.
	
	REFERENCES
	==========
	
	For additional information about the Show Friendly HTTP Error Messages option,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q218155 Description of Hypertext Transport Protocol Error Messages
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q245025 OFF2000: How to Obtain and Install the Microsoft Office 2000
	  SR-1/SR-1a Update
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
