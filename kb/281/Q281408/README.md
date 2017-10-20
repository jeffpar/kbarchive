---
layout: page
title: "Q281408: How to Implement a Single Logon Across Multiple Web Servers"
permalink: /kb/281/Q281408/
---

## Q281408: How to Implement a Single Logon Across Multiple Web Servers

{% raw %}

	Article: Q281408
	Product(s): Internet Information Server
	Version(s): 4.0,4.01,4.01 SP1,4.01 SP2,5,5.0,5.01,5.01 SP1,5.5,5.5 Service Pack 1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Explorer (Programming) versions 4.0, 4.01, 4.01 SP1, 4.01 SP2, 5, 5.01, 5.01 SP1, 5.5, 5.5 Service Pack 1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Basic authentication to password protect content that is running on
	multiple Web servers, users are forced to authenticate (enter credentials) when
	they establish a new connection to a Web server.
	
	CAUSE
	=====
	
	The HTTP standard for Basic authentication (RFC 2617) specifies that credentials
	should not be forwarded outside the protection space of the authenticated site.
	Based on these specifications, Internet Explorer does not automatically forward
	Basic credentials when users establish a connection to a new Web site.
	
	WORKAROUND
	==========
	
	NOTE: Basic authentication transmits user credentials (username and password)
	across the network in an unencrypted format. For this reason, Microsoft highly
	recommends that you only use Basic authentication in conjunction with some type
	of encryption, such as SSL. Although RFC 2617 dictates that the Web browser
	should not automatically pass credentials outside the protection space of the
	authenticated site, it is possible to programmatically persist credentials by
	forcing the browser to send credentials to a new server. Forwarding credentials
	outside the protection space of one authenticated site can be implemented with
	Microsoft Active Server Pages (ASP) and/or HTML redirects by inserting the
	credentials in the Request URI (after the protocol and before the hostname) when
	you use Common Internet Scheme Syntax, for example:
	
	  http://username:password@your.website.com
	
	The following examples illustrate how to implement forwarded credentials. To test
	any of the samples, paste the sample code into a .asp or .htm file on the IIS
	server.
	
	ASP redirect using the Response.Redirect method:
	
	  <%
	     Dim strNewSite, strBasicCreds
	     strNewSite = "www.microsoft.com"<BR/>
	     strBasicCreds = Request.ServerVariables("AUTH_USER") & ":" & _
	        Request.ServerVariables("AUTH_PASSWORD")
	     If Len(strBasicCreds) = 1 Then   'don't add credential delimiters 
	        strBasicCreds = ""            '  if credentials aren't passed
	     Else                     
	        strBasicCreds = strBasicCreds & "@"
	     End If
	     Response.Redirect "http://" & strBasicCreds & strNewSite
	     Response.End
	  %>
	
	HTML redirect generated with ASP:
	
	  <%
	     Dim strNewSite, strBasicCreds
	     strNewSite = "www.microsoft.com"
	     strBasicCreds = Request.ServerVariables("AUTH_USER") & ":" & _
	        Request.ServerVariables("AUTH_PASSWORD")
	     If Len(strBasicCreds) = 1 Then   'don't add credential delimiters 
	        strBasicCreds = ""            '  if credentials aren't passed
	     Else                     
	        strBasicCreds = strBasicCreds & "@"
	     End If
	     Response.Write "<META HTTP-EQUIV=""refresh"" CONTENT=""2;URL=http://" & _
	        strBasicCreds & strNewSite & "/default.asp"">"
	  %>
	
	NOTE: The 2 contained in the META tag above indicates the number of seconds that
	the browser displays the downloaded page, prior to redirecting to the new page
	specified by the URL address.
	
	HTML redirect with hard-coded Credentials:
	
	     <META HTTP-EQUIV="Refresh" CONTENT="2;URL=http://username:password@www.microsoft.com">
	
	MORE INFORMATION
	================
	
	By default, when connecting to web sites in the Internet Zone, Internet Explorer
	initially attempts to contact a Web server by using Anonymous authentication. If
	the anonymous user does not have permission to the Web content, and the Web
	server is configured to use Basic authentication, Internet Information Server
	responds to the client with a "HTTP 401 Access Denied" message, which includes
	the following HTTP header:
	
	  WWW-Authenticate: Basic
	
	When the browser receives this HTTP header, it prompts the user for credentials,
	then re-requests the same page, but this time, it includes Basic authentication
	credentials provided by the user. If those credentials are authenticated
	successfully, the requested page is then returned to the browser.
	
	By including the Basic credentials in the initial GET request, Internet Explorer
	stores the credentials and provide them to the server whenever the server
	responds with a Basic authentication challenge in that protected space.
	
	NOTE:When you request an URL that includes credentials, the credentials are
	visible to anyone who can see the browser or view the browser's history. To
	prevent credentials from being displayed in the URL window or in the browser's
	history, force the browser to rerequest a document. This document is on the
	target server after the browser has authenticated to the new site. To do this,
	use one of the following methods:
	
	- After the credentials are passed to the new site with the URL, use the
	  meta-refresh or Response.Redirect method to rerequest the same document on
	  the server, but omit the credentials from the URL in the new request.
	
	- During the redirection to the new server, do not redirect to a specific file.
	  Instead, redirect to the root of that site or to a virtual directory on the
	  new site, and omit the trailing slash from the URL (for example, redirect to
	  http://www.microsoft.com rather than http://www.microsoft.com/). Omitting the
	  trailing slash will cause IIS to send a courtesy redirect (to ensure that the
	  client requests properly formed URLs) by informing the client that it should
	  rerequest the page that was initially requested, with the trailing slash
	  added to the end.
	
	Both of these methods accomplish the same task, which is to force the client to
	connect to the new server without including the credentials in the URL. It is
	not necessary to include the credentials after the initial connection because
	Internet Explorer will cache the credentials for the new site, after it has
	successfully authenticated, and provide the Basic Authentication credentials
	automatically on subsequent connections to that site, while that browser
	instance remains open. For additional information, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q195192 Clear Logon Credentials to Force Reauthentication
	
	  Q239546 You Are Prompted for Username and Password When Redirected
	
	  Q231453 Internet Explorer 5.0 Fails to Pass Session Variables to IIS
	
	  Q264921 INFO: How IIS Authenticates Browser Clients
	
	The Request for Comments (RFCs) mentioned in this article are available from the
	following Web sites:
	
	  RFC 2616: Hypertext Transfer Protocol -- HTTP/1.1
	
	  RFC 2617: HTTP Authentication: Basic and Digest Access Authentication
	
	  RFC 1738: Uniform Resource Locators (URL)
	
	For additional information about how to configure SSL on Windows 2000, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q228836 Installing a New Certificate for Use in SSL/TLS
	
	For additional information about how to configure SSL with the Windows NT 4.0
	Option Pack, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q228991 How to Create and Install an SSL Certificate in IIS 4.0
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbIEsearch kbAudDeveloper kbSDKIESearch kbiis500 kbiis400 kbIE500Search kbSDKIE400 kbSDKIE401 kbSDKIE401SP1 kbSDKIE401SP2 kbSDKIE501SP1 kbSDKIE550SP1 kbSDKIE500 kbSDKIE501 kbSDKIE550 kbIE550Search
	Version           : :4.0,4.01,4.01 SP1,4.01 SP2,5,5.0,5.01,5.01 SP1,5.5,5.5 Service Pack 1
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
