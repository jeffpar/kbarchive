---
layout: page
title: "Q244758: Returns &quot;Type Mismatch&quot; Error After Request.BinaryRead() Method"
permalink: kb/244/Q244758/
---

## Q244758: Returns &quot;Type Mismatch&quot; Error After Request.BinaryRead() Method

	Article: Q244758
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an ASP page that uses the Request.BinaryRead() method generates an error
	and control is passed to the 500-100.asp error page, the following error is
	generated:
	
	  Microsoft VBScript runtime error '800a000d'
	  Type mismatch: 'Server.HTMLEncode'
	  /iisHelp/common/500-100.asp, line ...
	
	CAUSE
	=====
	
	This error is generated because the POST information from the Request.BinaryRead
	method returns an array, whereas the Server.HTMLEncode method in the 500-100.asp
	page expects a string to be passed.
	
	WORKAROUND
	==========
	
	The default 500-100.asp error page can be modified to ignore errors by adding an
	"On Error" statement:
	
	1. Open Windows Explorer.
	
	2. Change folders to your %SystemRoot%\help\iishelp\common folder.
	
	3. Open 500-100.asp in Notepad.
	
	4. The top lines of the file should resemble the following:
	
	  <%@ language="VBScript" %>
	  <%
	    Option Explicit
	
	    Const lngMaxFormBytes = 200
	
	5. Change the top few lines to read the following:
	
	  <%@ language="VBScript" %>
	  <%
	    Option Explicit
	    On Error Resume Next
	
	    Const lngMaxFormBytes = 200
	
	MORE INFORMATION
	================
	
	The following steps reproduce this error on a server that is using the default,
	unmodified 500-100.asp error page:
	
	1. Save the following code as ERRTEST1.ASP in the root directory of your Web
	  site:
	
	  <html>
	  <head><title>Page 1</title></head>
	  <body>
	  <form action="errtest2.asp" method="POST">
	  <input type="text" name="test">
	  <input type="submit">
	  </form>
	  </body>
	  </html>
	
	2. Next, save the following code as ERRTEST2.ASP in the root directory of your
	  Web site:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <html>
	  <head><title>Page 2</title></head>
	  <body>
	  <%
	    Dim vntPostedData, lngCount, lngError
	    lngCount = Request.TotalBytes
	    vntPostedData = Request.BinaryRead(lngCount)
	    Response.Write "POST Size: " & lngCount
	    lngError = 1/0
	  %>
	  </body>
	  </html>
	
	3. Browsing page 1 and submitting information to page 2 should return an error
	  message like the following:
	
	  Error Type: Microsoft VBScript runtime (0x800A000B) Division by zero
	  /errtest2.asp, line 10
	
	  Browser Type: Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)
	
	  Page: POST 9 bytes to /errtest2.asp
	
	  POST Data: Microsoft VBScript runtime error '800a000d' Type mismatch:
	  'Server.HTMLEncode' /iisHelp/common/500-100.asp, line 184
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
