---
layout: page
title: "Q246915: Using &lt;% %&gt; Instead of &lt;SCRIPT&gt; Tags Affects Processing Order"
permalink: /kb/246/Q246915/
---

## Q246915: Using &lt;% %&gt; Instead of &lt;SCRIPT&gt; Tags Affects Processing Order

	Article: Q246915
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis400 kbiis500
	Last Modified: 13-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using <SCRIPT RUNAT="SERVER"></SCRIPT> tags instead of or in
	addition to <% %> tags to denote Active Server Pages (ASP) code in a page,
	the processing of ASP code may appear to be out of order.
	
	CAUSE
	=====
	
	This behavior is by design. ASP code in <SCRIPT> tags is processed after
	the end of the page's HTML information, whereas ASP code in <% %> tags is
	processed in-line.
	
	MORE INFORMATION
	================
	
	The following examples will illustrate this behavior.
	
	- Save the following script as "Test1.asp" (without the quotation marks) in a
	  folder with at least "script" access defined:
	
	  <html>
	  <body>
	  <script runat="server" language="vbscript">
	      Response.Write "<p>Line 1</p>"
	  </script>
	  <p>Line 2</p>
	  </body>
	  </html>
	
	  Browsing this page will output the following HTML:
	
	  <html>
	  <body>
	  <p>Line 2</p>
	  </body>
	  </html>
	  <p>Line 1</p>
	
	  The HTML output would seem at first glance to be out of order based on the
	  location of the script inside the page.
	
	- Save this next script as "Test2.asp" (without the quotation marks) in the
	  same folder as for the previous example:
	
	  <% @language="vbscript" %>
	  <html>
	  <body>
	  <%
	      Response.Write "<p>Line 1</p>"
	  %>
	  <p>Line 2</p>
	  </body>
	  </html>
	
	  Browsing this page will output the following HTML:
	
	  <html>
	  <body>
	  <p>Line 1</p>
	  <p>Line 2</p>
	  </body>
	  </html>
	
	  So, if you use <SCRIPT> tags for ASP, they process after the page has
	  processed, whereas <% %> tags execute in-line. This can lead to
	  confusion, as shown in the following scenario.
	
	- Save this page as "Test3.asp" (without the quotation marks) in the same
	  folder as earlier:
	
	  <script runat="server" language="vbscript">
	      strText = "<p>Line 1</p>"
	  </script>
	  <html>
	  <body>
	  <%
	      Response.Write strText
	  %>
	  <p>Line 2</p>
	  </body>
	  </html>
	
	  Browsing this page will output the following HTML:
	
	  <html>
	  <body>
	  <p>Line 2</p>
	  </body>
	  </html>
	
	  The text "Line 1" is not output because the variable "strText" will not be
	  populated until after the Response.Write has already been executed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
