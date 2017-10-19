---
layout: page
title: "Q218607: HOW TO: Create a File Defining the Constants for Use w/CDONTS"
permalink: /kb/218/Q218607/
---

## Q218607: HOW TO: Create a File Defining the Constants for Use w/CDONTS

	Article: Q218607
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - How to Include the Code in ASP
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article explains how to take advantage of Collaboration Data Objects (CDO).
	The NT Option Pack (NTOP) exposed CDO for Windows NT Server (CDONTS) provides
	the Active Server Pages (ASP) page an easier method for sending mail. This
	article describes how to create a file that defines the constants for use with
	the CDONTS.NewMail object.
	
	How to Include the Code in ASP
	------------------------------
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	To include the code in an ASP page, use the Server Side Includes (SSI) syntax to
	reference the path to the file:
	
	  <!--#include virtual="/cdovbs.inc"-->
	
	To use this page, copy the following ASP code, and then save it as "Cdovbs.inc"
	(without the quotation marks) in the root directory of a Web site:
	
	  <%
	  '--------------------------------------------------------------------
	  ' Microsoft CDONTS.NewMail
	  '
	  ' (c) 1999 Microsoft Corporation.  All Rights Reserved.
	  '
	  ' More NT Option Pack Documentation:
	  '   http://<ServerName>/iishelp/iis/htm/asp/amsm0qzj.htm
	  '
	  ' CDONTS.NewMail constants include file for VBScript
	  '
	  '--------------------------------------------------------------------
	
	  '---- BodyFormat Property ----
	  Const CdoBodyFormatHTML	= 0	' The Body property is to include Hypertext Markup Language (HTML).
	  Const CdoBodyFormatText	= 1	' The Body property is to be exclusively in plain text (default value).
	
	  '---- MailFormat Property ----
	  Const CdoMailFormatMime	= 0	' The NewMail object is to be in MIME format.
	  Const CdoMailFormatText	= 1	' The NewMail object is to be in uninterrupted plain text (default value).
	
	  '---- Importance Property ----
	  Const CdoLow	= 0		' Low importance
	  Const CdoNormal	= 1		' Normal importance (default)
	  Const CdoHigh	= 2		' High importance
	
	  '---- AttachFile and AttachURL Methods ----
	  Const CdoEncodingUUencode	= 0	' The attachment is to be in UUEncode format (default).
	  Const CdoEncodingBase64		= 1	' The attachment is to be in base 64 format.
	  %>
	
	The following is a sample ASP page that uses the preceding code:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <%
	  	Option Explicit
	  	Dim objNewMail
	  %>
	  <!--#include virtual="/cdovbs.inc"-->
	  <%
	  	Set objNewMail = Server.CreateObject("CDONTS.NewMail")
	  	objNewMail.From = "someone@example.com"
	  	objNewMail.To = "someone@example.com"
	  	objNewMail.Subject = "This is a test message"
	  	objNewMail.Body = "This is a test message"
	  	objNewMail.BodyFormat = CdoBodyFormatText
	  	objNewMail.MailFormat = CdoMailFormatText
	  	objNewMail.Importance = CdoNormal
	  	objNewMail.Send
	  	Set objNewMail = Nothing
	  %>
	  <html>
	  <head><title>CDONTS.NewMail Test</title></head>
	  <body>
	  Your mail has been sent!
	  </body>
	  </html>
	
	REFERENCES
	==========
	
	For more information about Microsoft scripting technologies, visit the following
	MSDN Web site:
	
	  http://msdn.microsoft.com/scripting
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
