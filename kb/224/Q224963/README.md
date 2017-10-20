---
layout: page
title: "Q224963: Using Enhanced &lt;SCRIPT&gt; Tags for Includes"
permalink: /kb/224/Q224963/
---

## Q224963: Using Enhanced &lt;SCRIPT&gt; Tags for Includes

{% raw %}

	Article: Q224963
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Services (IIS) version 5.0 adds many new Active
	Server Pages (ASP) capabilities. This article describes how to use the new
	<SCRIPT> tag syntax to include ASP code in another page.
	
	MORE INFORMATION
	================
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	Previous versions of IIS allowed an ASP page to include the contents of another
	file using code similar to the following:
	
	  <!--#include file="FILE1.INC"-->
	  <!--#include virtual="/folder/FILE2.INC"-->
	
	IIS 5.0 has extended the server-side <SCRIPT> tag to include a new SRC
	attribute as an alternative method to include another page. The new syntax may
	then look similar to the following:
	
	  <SCRIPT LANGUAGE="VBSCRIPT" RUNAT="SERVER"
	  SRC="FILE.INC"></SCRIPT>
	
	All code in the included page appears to the scripting engine as though it were
	between the <SCRIPT> and </SCRIPT> tags. Therefore, unlike the
	#include directive, your included page should consist of raw code only.
	
	  For example, consider the following #include statement:
	
	  <!--#include file="file.inc"-->
	
	  This statement would need to include a page similar to the following:
	
	  <%
	    For X = 1 To 5
	      Response.Write "<p>Howdy!</p>"
	    Next
	  %>
	
	  Now consider the following <SCRIPT> statement:
	
	  <SCRIPT LANGUAGE="VBScript" RUNAT="SERVER"
	  SRC="file.inc"></SCRIPT>
	
	  This page would need to include a page similar to the following:
	
	  For X = 1 To 5
	    Response.Write "<p>Howdy!</p>"
	  Next
	
	  The <SCRIPT> example is treated by ASP as though the parent page
	  contains the following syntax:
	
	  <SCRIPT LANGUAGE="VBScript" RUNAT="SERVER" SRC="file.inc">
	  For X = 1 To 5
	    Response.Write "<p>Howdy!</p>"
	  Next
	  </SCRIPT>
	
	  Note: No actual code should placed between the <SCRIPT> and
	  </SCRIPT> tags in the parent page, as it will be ignored.
	
	The SRC attribute can use either relative or virtual paths, as shown in the
	following table:
	
	  
	  +-------------------------------------+
	  | Path Style | Example Syntax         | 
	  +-------------------------------------+
	  | Relative   | SRC="file.ext"         | 
	  +-------------------------------------+
	  | Relative   | SRC="folder\file.ext"  | 
	  +-------------------------------------+
	  | Virtual    | SRC="\folder\file.ext" | 
	  +-------------------------------------+
	  | Virtual    | SRC="/folder/file.ext" | 
	  +-------------------------------------+
	
	The following ASP code demonstrates how to use the new <SCRIPT> syntax to
	mix server-side and client-side scripting.
	
	1. Save the following ASP page as "ScriptTest.asp" to a Web folder with Script
	  Access enabled:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <html>
	  <head>
	  <title>Enhanced SCRIPT Example</title>
	  </head>
	  <body>
	  <h2 align="center">Enhanced SCRIPT Example</h2>
	
	  <p align="center">
	  <form method="GET" name="objForm"
	  action="<%=Request.ServerVariables("URL")%>">
	    <input type="text" name="Message">
	    <input type="submit" value="Submit">
	  </form>
	  </p>
	
	  <SCRIPT LANGUAGE="VBScript" RUNAT="SERVER"
	  SRC="server.inc"></SCRIPT>
	
	  <SCRIPT LANGUAGE="JavaScript">
	  <!--#include file="client.inc"-->
	  </SCRIPT>
	
	  </body>
	  </html>
	
	2. Save the following code as "Server.inc" to the same folder:
	
	  Dim strMessage
	  strMessage = Request.QueryString("Message")
	  If strMessage <> "" Then
	    Response.Write vbCrLf & "<script for=""window"" event=""onLoad"" language=""JavaScript"">"
	    Response.Write vbCrLf & "objForm.Message.value = '" & strMessage & "';"
	    Response.Write vbCrLf & "showMessage('" & strMessage & "');"
	    Response.Write vbCrLf & "</script>"
	  End If 
	
	3. Next, save the following code as "client.inc" to the same folder:
	
	  function showMessage(strText) {
	     alert(strText)
	  }
	
	Notes:
	
	- When you first browse "ScriptTest.asp," the form is displayed and the
	  client-side function is not called.
	- When you submit text to the page, the server-side script outputs another
	  client-side function that displays the submitted text in the form's input box
	  and in a pop-up window.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
