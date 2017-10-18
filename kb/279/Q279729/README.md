---
layout: page
title: "Q279729: Web Pages Not Serving from IIS"
permalink: kb/279/Q279729/
---

## Q279729: Web Pages Not Serving from IIS

	Article: Q279729
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbIIS kbiis300 kbiis400 kbiis500
	Last Modified: 06-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to browse a Web page that is hosted by Internet Information
	Server/Services, clients may report they are unable to connect.
	
	CAUSE
	=====
	
	Unfortunately, there is no single cause for IIS failing to serve Web pages. Even
	if network connectivity can be eliminated as the cause, additional information
	is required to determine the exact reason why clients cannot connect to the
	server.
	
	MORE INFORMATION
	================
	
	Because IIS is a complex product that relies on various operating system
	components, it is important to determine if only certain types of content have
	stopped being served. Following are two samples that you can use to test the two
	most common types of content: static HTML (.htm or .html files) and Active
	Server Pages (ASP) pages (.asp files).
	
	To test IIS's ability to serve HTML (static) content, create a file called
	"Hello.htm" (without the quotation marks) in the content folder for IIS (by
	default, this is C:\Inetpub\Wwwroot) that contains the sample code listed below,
	and then request http://localhost/hello.htm from the Web browser that is
	installed on the IIS server.
	
	  <HTML>
	  <TITLE>HTML Test Page</TITLE>
	  If the phrase "Hello World" is displayed below, then HTML pages are serving properly.<BR><BR>
	       <STRONG>Hello World</STRONG>
	  </HTML>
	
	To test IIS's ability to serve ASP (dynamic) content, create a file called
	"Hello.asp" (without the quotation marks) in the content folder for IIS (by
	default, C:\Inetpub\Wwwroot), that contains the following sample code, and then
	request http://localhost/hello.asp from the Web browser that is installed on the
	IIS server.
	
	  <%
	     strWrld="Hello World"
	  %>
	
	  <HTML>
	  <TITLE>ASP Test Page</TITLE>
	  If the phrase "Hello World" is displayed below, then ASP pages in this Web application are serving properly.<BR><BR>
	       <STRONG><%=strWrld%></STRONG>
	  </HTML>
	
	The Hello.htm and Hello.asp samples can also be downloaded. The following file is
	available for download from the Microsoft Download Center:
	
	  Hello.exe
	  (http://download.microsoft.com/download/iis50/other/1.0/WIN98MeXP/EN-US/Hello.exe)
	
	Release Date: May-17-2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The Hello.exe file contains the following files:
	
	  
	  +-----------------------+
	  | File Name | Size      | 
	  +-----------------------+
	  | Hello.htm | 631 bytes | 
	  +-----------------------+
	  | Hello.asp | 789 bytes | 
	  +-----------------------+
	
	Hello.asp Displays Properly:
	
	If the phrase "Hello World" is displayed properly on the ASP test page, but
	another ASP page does not serve properly, the following reasons may apply:
	
	- The failing ASP page is running in a separate process from the Web
	  application that is running the Hello.asp test page. Each process
	  (Inetinfo.exe, Mtx.exe, or Dllhost.exe) that is capable of serving ASP pages
	  (or any other Internet Server API application) has its own thread pool, which
	  is separate from the thread pool in other processes. If one process is
	  experiencing blocking (also known as ASP queuing, which occurs when all
	  available threads are in use but additional requests continue to come in), a
	  separate process may continue serving ASP pages properly because it has its
	  own thread pool from which to execute requests.
	
	- The failing page is not executing static HTML or ASP content. If the failing
	  page is a Common Gateway Interface (CGI) application, see the following
	  Microsoft Knowledge Base articles for additional information on
	  troubleshooting CGI applications:
	
	  Q160422 How IIS Launches a CGI Application
	
	  Q217202 PRB: CGI Applications and IIS OOP Applications May Intermittently
	  Fail
	
	  If the failing page is executed by an ISAPI application developed by a
	  third-party company, contact that third party for technical support.
	
	Hello.asp Does Not Display Properly:
	
	- If the phrase "Hello World" is not displayed on the ASP page, it is possible
	  that the ASP threads are queued, blocked, or deadlocked, which requires
	  additional problem-solving that is beyond the scope of this article.
	
	- The failing ASP page contains a problem that is preventing IIS from properly
	  serving ASP content (see the thread pool/ASP queuing information earlier in
	  this article). If custom COM objects are in use on any of the pages that are
	  failing, you can try contacting the vendor of those COM objects or the
	  developer of that page for technical support. To determine if COM objects are
	  in use, search for occurrences of "Set" (Microsoft Visual Basic Script) or
	  "var" (Microsoft JScript). If either of those keywords exist, the COM object
	  called is in the parentheses following CreateObject (VBScript or JScript) or
	  ActiveXObject (JScript).
	
	
	Hello.htm Does Not Display Properly:
	
	If Hello.htm does not display properly, one of the following reasons may apply:
	
	- IIS is not listening on the IP address and port requested by the client.
	
	- Networking issues are preventing the client from reaching the server
	  (consider testing with a Web browser on the IIS server).
	
	
	For more information on troubleshooting Web applications, see the following
	Microsoft Web pages:
	
	  Debugging Distributed Web Applications
	  http://msdn.microsoft.com/library/techart/windebug.htm
	
	  Problem Isolation with Web-Based Applications
	  ttp://support.microsoft.com/servicedesks/webcasts/WC070899/WC070899.asp
	
	To learn about recommended settings and optimization of IIS, see the following
	Microsoft Web pages:
	
	  The Art and Science of Web Server Tuning with Internet Information Services
	  5.0
	  http://www.microsoft.com/serviceproviders/whitepapers/tuningIIS.asp
	
	  Tuning Internet Information Server Performance
	  http://www.microsoft.com/isn/whitepapers/tuningIIS.asp
	
	
	Additional query words: hello
	
	======================================================================
	Keywords          : kbDSupport kbIIS kbiis300 kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
