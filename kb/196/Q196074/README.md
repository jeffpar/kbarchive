---
layout: page
title: "Q196074: How to Store the Authenticated User Name in a Session Variable"
permalink: kb/196/Q196074/
---

## Q196074: How to Store the Authenticated User Name in a Session Variable

	Article: Q196074
	Product(s): Internet Information Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to store an authenticated user name in a session
	variable for later use in Web pages.
	
	MORE INFORMATION
	================
	
	Typically, when permissions are applied to a Web page and a client browses the
	page, a status code of 401 is returned to the browser and it displays a logon
	dialog. When the user enters a name and password, the client is either allowed
	to enter the site or denied access. If the user is allowed access, the server
	environment variable named LOGON_USER will contain the user name as entered by
	the client.
	
	The following example simulates when permissions are applied to a Web page by
	checking this variable and returning a 401 status if it is empty. If the user
	has been authenticated, then it stores the user name in a session variable so it
	can be used later without having to force authentication.
	
	Paste the following ASP code into Notepad and save the file in the root directory
	of your Web site as "401LogonUser.inc" (without the quotation marks):
	
	  <%
	    ' Check to see if the session variable is already populated.
	    If Session("LOGON_USER") = "" Then
	      ' Check to see if the user has logged on at all.
	      If Request.ServerVariables("LOGON_USER") = "" Then
	        ' Force authentication if not.
	        Response.Clear
	        Response.Status = "401 Access Denied"
	        Response.End
	      Else
	        ' Store the client's user name in a session variable.
	        Session("LOGON_USER") = Request.ServerVariables("LOGON_USER")
	        ' Strip out an NT domain from the user name.
	        If InStr(Session("LOGON_USER"),"\") then
	          Session("LOGON_USER") = Mid(Session("LOGON_USER"),InStr(Session("LOGON_USER"),"\")+1)
	
	        End If
	      End If
	    End If
	  %>
	
	Then include the following code at the very top of (at least) the first ASP page
	that needs the variable:
	
	     <%@ LANGUAGE="VBSCRIPT"%>
	     <!--#include virtual="/401LogonUser.inc"-->
	
	You can include the code on every page if you want to be sure that a client has
	bypassed the starting page for a Web site or Web application.
	
	When the variable has been populated, you can then reference it when you need it,
	as follows:
	
	     <% somevariable = Session("LOGON_USER") %>
	
	You can also force the authentication process at any time by abandoning the
	session:
	
	     <%Session.Abandon%>
	
	The following page illustrates the above examples in a page that will set the
	timeout to one minute, authenticate the user, and then authenticate the user if
	the page is refreshed after being left idle for the one minute timeout.
	
	NOTE: Even after abandoning the session, the browser is still holding the logon
	credentials.
	
	     <%@ LANGUAGE="VBSCRIPT"%>
	     <%Session.Timeout = 1%>
	     <!--#include virtual="/401LogonUser.inc"-->
	     <html>
	     <head><title>LOGON_USER Test</title></head>
	     <body>
	     Hello <%=UCase(Session("LOGON_USER"))%>!
	     </body>
	     </html>
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : :3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
