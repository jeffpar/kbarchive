---
layout: page
title: "Q315584: HOW TO: Automatically Log a User Off from a Web Application"
permalink: kb/315/Q315584/
---

## Q315584: HOW TO: Automatically Log a User Off from a Web Application

	Article: Q315584
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbHOWTOmaster
	Last Modified: 05-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	- Microsoft Internet Explorer version 5.5 for Windows 2000 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	
	- SUMMARY
	
	   - Requirements
	- Use the HTTP Response Header to Log a User Off from a Web Application
	- Use the setInterval Method to Log a User Off from a Web Application
	- Verification
	
	SUMMARY
	=======
	
	This article describes two methods that you can use to automatically log a user
	out of your Web application.
	
	In the first method, you learn about the Refresh HTTP Response Header and how to
	add it to your HTML page to redirect a user to a logoff page.
	
	In the second method, you use HTML, Active Server Pages (ASP), and Microsoft
	Visual Basic Scripting Edition (VBScript) to produce a more sophisticated
	solution by using the VBScript method setInterval.
	
	Requirements
	------------
	
	The following items describe the recommended hardware, software, network
	infrastructure, skills, knowledge, and service packs that you need.
	
	- Internet Information Services (IIS) 3.0 or later.
	
	- Internet Explorer 4.0 or later.
	
	You also must have knowledge of the following:
	
	- A working knowledge of HTML.
	
	- Familiarity with ASP and VBScript.
	
	Use the HTTP Response Header to Log a User Off from a Web Application
	---------------------------------------------------------------------
	
	The first and easiest way to log a user off from a Web application is to use an
	HTTP response header to redirect the browser after a certain length of time.
	
	1. Open a text editor, such as Notepad, and then type the following HTML
	  content:
	
	  <HTML>
	  <HEAD>
	  <META HTTP-EQUIV="REFRESH" CONTENT="10;URL=Logoff.htm">
	    <TITLE>Redirect Demo</TITLE>
	  </HEAD>
	  <BODY>
	  <H1>You will be logged out after 10 seconds</H1>
	  </BODY>
	  </HTML>
	
	  The <META> tag redirects the browser to Logoff.htm after ten seconds
	  (unless the user refreshes the page, or loads a different page). The page
	  redirection occurs automatically even if the user is interacting with the
	  page at that time. In practice, a timeout of 20 minutes (1200 seconds) is
	  typically used with this type of redirection.
	
	2. Save this file as RedirectDemo.htm.
	
	3. Create a new file in Notepad, and then type the following HTML content:
	
	  <HTML>
	  <HEAD>
	    <TITLE>Redirect Demo - Logoff Page</TITLE>
	  </HEAD>
	  <BODY>
	  <H1>You have been logged out</H1>
	  </BODY>
	  </HTML>
	
	4. Save this file as Logoff.htm in the same folder as RedirectDemo.htm.
	
	5. Start Internet Explorer, and then load RedirectDemo.htm. The page displays
	  the message "You will be logged out after 10 seconds."
	
	  After ten seconds, the text "You have been logged out" appears. By looking in
	  the Address bar, you can see that you have been redirected to Logoff.htm.
	
	Use the SetInterval Method to Log a User Off from a Web Application
	-------------------------------------------------------------------
	
	If you require more control over the redirection of the user's browser, you can
	use the window.setInterval method in script. This causes a subroutine to be
	called at every instance of the interval.
	
	Each time the user does something on the page, such as clicking an element, or
	moving the cursor, you can clear the old interval, and then create a new one.
	This effectively resets the interval to zero, to delay the interval.
	
	1. Open a text editor, such as Notepad, and then type the following ASP
	  content:
	
	  <%@Language=VBScript%>
	  <%
	  ' Prevent non-authenticated access
	  If Session("UserID") = "" Then Response.Redirect("Logoff.asp")   
	  ' Prevent page from being cached
	  Response.Expires = -1                
	  %>
	  <HTML>
	  <HEAD>
	  <TITLE>setInterval Demo</TITLE>
	  <SCRIPT LANGUAGE=VBScript>
	  Dim timer
	
	  Sub Init()
	      ' Set up the timer. Set it for 5 seconds
	      timer = window.setInterval("Logout", 5000)
	  End Sub
	
	  Sub Logout()
	      ' Take whatever action is required at this point
	     MsgBox "Logging out..."
	     window.location = "Logoff.asp"
	  End Sub
	
	  Sub Delay()
	     ' Delay the logout
	     clearInterval(timer)
	     Init
	  End Sub
	  </SCRIPT>
	  </HEAD>
	  <BODY OnLoad="Init" 
	        OnClick="Delay" OnMouseMove="Delay" OnKeyPress="Delay">
	  This page is a test of automatic logout
	  </BODY>
	  </HTML>
	
	  The OnClick, OnMouseMove, and OnKeyPress events of the <BODY> tag trap
	  any user interaction on the whole page and delay the interval. The user is
	  only logged off from the page if no activity occurs for five seconds.
	
	2. Save this file as SetIntervalDemo.asp in the default Web folder on your
	  computer (which is typically C:\InetPub\wwwroot).
	
	3. The Session("UserID") variable must be created when the user is
	  authenticated, and you must use the server-side ASP script at the top of the
	  code sample in step 1 on every secure page to make sure that only
	  authenticated users can view them.
	
	  For the purposes of this example, create a new file in Notepad, and then type
	  the following ASP content:
	
	  <%@Language=VBScript%>
	  <%
	  Session("UserID") = "user"
	  Response.Redirect "SetIntervalDemo.asp"
	  %>
	  <HTML>
	  <HEAD>
	    <TITLE>setInterval Demo - Establish Session</TITLE>
	  </HEAD>
	  <BODY>
	  </BODY>
	  </HTML>
	
	4. Save this file as StartSession.asp in the same Web folder as
	  SetIntervalDemo.asp.
	
	5. Create a new file in Notepad, and then type the following ASP content for the
	  logoff page:
	
	  <%@Language=VBScript%>
	  <%
	  ' Flushes authentication information for the user and ends the session
	  Session.Abandon  
	  %>
	  <HTML>
	  <HEAD>
	     <TITLE>setInterval Demo - Logoff Page</TITLE>
	  </HEAD>
	  <BODY>
	  <H1>You have been logged out</H1>
	  </BODY>
	  </HTML>
	
	6. Save this file as Logoff.asp in the same Web folder as SetIntervalDemo.asp.
	
	Verification
	------------
	
	In Internet Explorer, type "localhost/StartSession.asp" (without the quotation
	marks) in the Address bar. You are immediately redirected to the
	SetIntervalDemo.asp page, and the text "This page is a test of automatic logout"
	appears. The Address bar now displays "localhost/SetIntervalDemo.asp". As long
	as you move the cursor, click the mouse, or press any keys on your keyboard,
	nothing occurs. Five seconds after you stop doing anything, the browser
	redirects to Logoff.asp and the text "You have been logged out" appears. Notice
	that the Address bar now shows "http://localhost/Logoff.asp".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper kbHOWTOmaster 
	Technology        : kbiisSearch kbIEsearch kbiis500 kbiis400 kbiis300 kbIE2000Search kbIE550Win2000 kbZnotKeyword7 kbIE550Search
	Version           : :3.0,4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
