---
layout: page
title: "Q294807: HOWTO: Disable &quot;Friendly&quot; Error Messages on the Server Side"
permalink: /kb/294/Q294807/
---

## Q294807: HOWTO: Disable &quot;Friendly&quot; Error Messages on the Server Side

	Article: Q294807
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbHOWTOmaster
	Last Modified: 11-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Introduction
	- Method 1
	- Method 2
	- Method 3
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes different methods to turn off the "Show
	Friendly HTTP Error Messages" feature on the server.
	
	Introduction
	------------
	
	When you access Web pages from Internet Explorer 5.x and Internet Explorer 6.x,
	the actual text of an HTTP 500 message that is sent to the browser may be masked
	by an Internet Explorer "friendly" error message. Although you can turn off this
	feature manually for each client, this article also provides several server-side
	workarounds to inhibit the display of "friendly" error messages.
	
	According to the HTTP 1.1 specification, Internet Information Services (IIS) 5.0
	returns a status code of 500 for any response that is not handled by another
	1xx, 2xx, 3xx, 4xx, or 5xx status code, such as "302 - Object Moved", or "404 -
	File not Found". Because IIS 4.0 does not strictly follow RFC 2616, it returns
	Active Server Pages (ASP)-based Microsoft Visual Basic Scripting Edition
	(VBScript) errors with a status code of 200.
	
	For more information about the HTTP 1.1 specification, visit the following Web
	site:
	
	  RFC 2616
	  http://rfc.net/rfc2616.html
	
	Several frequently-seen status codes have "friendly" error messages that Internet
	Explorer 5.x displays and that effectively mask the actual text message that the
	server sends. However, these "friendly" error messages are only displayed if the
	response that is sent to the client is less than a specified threshold. For
	example, to see the exact text of an HTTP 500 response, the content length must
	be greater than or equal to 512 bytes.
	
	For additional information about all status codes that display friendly error
	messages and the registry location for the corresponding error threshold to
	override that friendly message, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q218155 Description of Hypertext Transport Protocol Error Messages
	
	To display the actual message that the Web server sends, use one of the following
	methods.
	
	Method 1
	--------
	
	1. Turn off the friendly error message option in the browser as follows:
	
	  a. In Internet Explorer 5.x and 6.x, on the Tools menu, click Internet
	     Options.
	
	  b. On the Advanced tab, under the Browsing section, click to clear the Show
	     friendly HTTP error messages check box, and then click OK.
	
	  c. Close the browser.
	
	2. Use the Internet Explorer Administration Kit or System Policies to push the
	  Show friendly HTTP error messages option down to clients. For more
	  information about how to configure the "Custom ASP Errors" feature, visit the
	  following Microsoft Web site:
	
	  http://www.microsoft.com/windows/ieak/
	
	Method 2
	--------
	
	1. Use the "Custom ASP Errors" feature in IIS 5.0 to pad the response that the
	  server sends with enough characters to override the friendly error messages.
	  To download the "Custom ASP Errors" feature, visit the following Microsoft
	  Web site:
	
	  http://www.microsoft.com/windows2000/en/server/iis/htm/core/iierrcst.htm
	
	2. Implement this padding. To do this, use the VBScript String function to
	  return a string of the same character, which is one more than the
	  ErrorThreshold that Internet Explorer 5.x uses to display the friendly error
	  message. For example, add the following line immediately before the
	  </body> tag of 500-100.asp:
	
	  <% Response.Write String(513, "_") %>
	
	3. Configure the general 500 error to use Type=URL and 500-100.asp instead of
	  Type=Default. By default, the 500 error is configured to use Type=Default.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q224070 Creating Custom ASP Error Pages
	
	NOTE: IIS internally processes some HTTP 500 responses that are sent to the
	client as another HTTP status code. That internal status code is changed to 500
	before the response to the client is sent. This is the case with the ASP
	Response.Status method. In these cases, the custom ASP error code is not checked
	in IIS. To work around these situations, use an Internet Server Application
	Programming Interface (ISAPI) filter that determines the status code that is
	sent to the client after IIS processes the page.
	
	Method 3
	--------
	
	Use an ISAPI filter that forces the content length of all HTTP 500 responses to
	be larger than 512 bytes, effectively padding all 500 responses so that they are
	large enough to override the "friendly" error setting in Internet Explorer 5.x
	and 6.x. Padresponse.exe is a sample ISAPI filter (and its source code) that
	demonstrates how to pad the response that is sent to the client (based on
	receiving an HTTP 500 status code).
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Padresponse.exe now
	  (http://download.microsoft.com/download/IIS50/Sample/1/NT45/EN-US/Padresponse.exe)
	
	Release Date: April 27, 2001
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q261200 HTTP 500 Error Displays Instead of ASP Error from 500-100.asp
	
	  Q150312 HOWTO: Install an ISAPI Filter Dynamic-Link Library
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
