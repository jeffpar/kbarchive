---
layout: page
title: "Q281570: HOWTO: Use ASP Request and Session Collections to Link Forms"
permalink: kb/281/Q281570/
---

## Q281570: HOWTO: Use ASP Request and Session Collections to Link Forms

	Article: Q281570
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbdta kbDSupport kbiis500
	Last Modified: 21-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Request and Session collections in Active
	Server Pages (ASP) to link the HTML forms on multiple Web pages.
	
	MORE INFORMATION
	================
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	To create the ASP sample, follow these steps:
	
	1. In Windows Explorer, open the root folder of your Web site.
	
	2. In Notepad, save each of the following pages in the root folder:
	
	  Page1.asp
	
	  <html>
	  <head>
	  <title>Page 1</title>
	  </head>
	  <body>
	  <form method="POST" action="page2.asp">
	    <p>NAME <input type="text" name="NAME" size="20"><br>
	    <input type="submit" value="Submit">
	    <input type="reset" value="Reset"></p>
	  </form>
	  </body>
	  </html>
	
	  Page2.asp
	
	  <!--#include file="session.inc"-->
	  <html>
	  <head>
	  <title>Page 2</title>
	  </head>
	  <body>
	  <form method="POST" action="page3.asp">
	    <p>ADDRESS <input type="text" name="ADDRESS" size="20"><br>
	    <input type="submit" value="Submit">
	    <input type="reset" value="Reset"></p>
	  </form>
	  </body>
	  </html>
	
	  Page3.asp
	
	  <!--#include file="session.inc"-->
	  <html>
	  <head>
	  <title>Page 3</title>
	  </head>
	  <body>
	  <form method="POST" action="page4.asp">
	    <p>PHONE <input type="text" name="PHONE" size="20"><br>
	    <input type="submit" value="Submit">
	    <input type="reset" value="Reset"></p>
	  </form>
	  </body>
	  </html>
	
	  Page4.asp
	
	  <!--#include file="session.inc"-->
	  <%
	    ' Declare variables for later use.
	    Dim strBody
	    Dim objMail
	
	    ' The following constants are used with the CDONTS.NewMail object:
	    '---- BodyFormat Property ----
	      ' The Body property is to include HTML.
	      Const CdoBodyFormatHTML = 0
	      ' The Body property is to be plain text (default).
	      Const CdoBodyFormatText = 1
	    '---- MailFormat Property ----
	      ' The NewMail object is to be in MIME format.
	      Const CdoMailFormatMime = 0
	      ' The NewMail object is to be in plain text (default).
	      Const CdoMailFormatText = 1
	    '---- Importance Property ----
	      ' Low importance
	      Const CdoLow    = 0
	      ' Normal importance (default)
	      Const CdoNormal = 1
	      ' High importance
	      Const CdoHigh   = 2
	  %>
	  <html>
	  <head>
	  <title>Page 4</title>
	  </head>
	  <body>
	  <%
	    strBody = "<html><body>" & vbCrLf
	
	    ' Loop through the session collection.
	    For Each objFIELD in Session.Contents
	      ' Build a Web page from the collection values.
	      strBody = strBody & "<p>" & objFIELD & " = "
	      strBody = strBody & Session(objFIELD) & "</p>" & vbCrLf
	    Next
	
	    strBody = strBody & "</body></html>" & vbCrLf
	
	    ' Create a mail object.
	    Set objMail = CreateObject("CDONTS.NewMail")
	      ' Set email addresses.
	      objMail.From = "someone@microsoft.com"
	      objMail.To = "someone@microsoft.com"
	      ' Add the subject.
	      objMail.Subject = "Form Results"
	      ' Set the mail format.
	      objMail.BodyFormat = CdoBodyFormatHTML
	      objMail.MailFormat = CdoMailFormatMime
	      ' Add the Web page.
	      objMail.Body = strBody
	      ' Send the email.
	      objMail.Send
	    Set objMail = Nothing
	    ' Erase the session collection.
	    Session.Abandon  
	  %>
	  <p>Your results have been mailed!</p>
	  </body>
	  </html>
	
	  Session.inc
	
	  <%
	    ' Loop through the submitted form fields.
	    For Each objFIELD in Request.Form
	      ' Save each value in a session variable.
	      Session(objFIELD) = Request.Form(objFIELD)
	    Next
	  %>
	
	3. When Page1.asp is browsed through HTTP, the values that are submitted on the
	  form are passed to Page2.asp.
	
	4. Page2.asp uses the server-side include file, Session.inc, to loop through any
	  fields from the form on Page1.asp through the Request collection and saves
	  the values to the Session collection.
	
	5. This behavior is repeated for Page3.asp and Page4.asp, but Page4.asp contains
	  additional ASP code that loops through the Session collection and builds and
	  HTML page that will be sent by e-mail message.
	
	References
	----------
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q218607 How to Create a File Defining the Constants for Use w/ CDONTS
	
	  Q186204 HOWTO: Use CDONTS to Collect and Mail Information From a User
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbdta kbDSupport kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
