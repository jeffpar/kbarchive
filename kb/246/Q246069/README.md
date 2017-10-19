---
layout: page
title: "Q246069: Encoding Form Data for SQL Server Input and Output to HTML"
permalink: /kb/246/Q246069/
---

## Q246069: Encoding Form Data for SQL Server Input and Output to HTML

	Article: Q246069
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are working with records in a database using Microsoft Active Server
	Pages (ASP) for Internet Information Services (IIS), errors may occur when the
	text has not been properly formatted for creating a SQL Server clause.
	
	For example, when you create an ASP page to store information posted from an HTML
	form to a database, you may see an error message similar to the following:
	
	  Microsoft OLE DB Provider for ODBC Drivers (0x80040E14)
	  [Microsoft][ODBC Microsoft Access Driver] Syntax error (missing operator) in
	  query expression '<SQL Text>'.
	  /<path>/<filename.asp>, line <nnn>
	
	MORE INFORMATION
	================
	
	The error message above occurs when you try to submit a name with an apostrophe,
	(for example "O'Malley"), and then insert that name into a SQL Server clause
	without first "escaping" it. This can result in a SQL Server clause that
	resembles the following:
	
	  INSERT INTO Table (txtName VALUES ('O'Malley')
	
	Because SQL Server uses the apostrophe as a text delimiter, the apostrophe in the
	name inadvertently signifies an end to the data, which causes the error message
	to occur. This text can be "escaped" by using two apostrophes, for example:
	
	  INSERT INTO Table (txtName VALUES ('O''Malley')
	
	Obviously, it is not ideal to mandate that all users on a Web site enter two
	apostrophes for each desired apostrophe. In addition, when text is later
	extracted from a database, certain formatting characters are ignored during HTML
	parsing on a client (for example CR-LF, TAB, and so on.)
	
	An ASP Solution:
	
	The following ASP code defines two functions that are designed to handle some
	simple parsing of information for input/output of SQL Server data, and can
	easily be expanded to incorporate more functionality:
	
	- FixForSQL() parses a string for input to SQL Server
	
	    Function FixForSQL(tmpText1)
	      ' define a working variable
	      Dim tmpText2
	      ' populate our working variable
	      tmpText2 = tmpText1
	      ' compact a CR-LF sequence as CR to save space
	      tmpText2 = Replace(tmpText1,vbCrLf,Chr(13))
	      ' replace each apostrophe with two apostrophes
	      tmpText2 = Replace(tmpText2,Chr(39),String(2,39))
	      ' return the fixed string
	      FixForSQL = tmpText2
	    End Function
	
	- FixForHTML() parses a string for output to HTML
	
	    Function FixForHTML(tmpText1)
	      ' define a working variable
	      Dim tmpText2
	      ' populate our working variable
	      tmpText2 = tmpText1
	      ' replace each CR with a line break tag and CR-LF
	      tmpText2 = Replace(tmpText2,Chr(13),"<br>" & vbCrLf)
	      ' replace each TAB character with four non-breaking space tags
	      tmpText2 = Replace(tmpText2,Chr(9),"&#xa0;&#xa0;&#xa0;&#xa0;")
	      ' return the fixed string
	      FixForHTML = tmpText2
	    End Function
	
	Practical Example - Guestbook Application:
	
	The following steps demonstrate how to use the above functions to create a simple
	guestbook application using ASP and a Microsoft Access database:
	
	1. Copy the following ASP code and save it to a folder in your Web site with at
	  least IIS script access enabled and Copy the following ASP code and save it
	  to a folder in your Web site with at least IIS "script" access enabled and
	  Everyone - Change NTFS permissions:
	
	  <% @Language="VBScript" %>
	  <%
	    Option Explicit
	
	    ' define our variables
	    Dim strMethod
	    Dim strURL
	    Dim strTitle
	    Dim strSQL
	    Dim objCN
	    Dim objRS
	
	    ' get some environment variables
	    With Request
	      strMethod = UCase(.ServerVariables("REQUEST_METHOD"))
	      strTitle = UCase(.ServerVariables("SERVER_NAME")) & " Guestbook"
	      strURL = LCase(.ServerVariables("URL"))
	    End With
	
	    ' open our database connection
	    Set objCN = Server.CreateObject("ADODB.Connection")
	    objCN.Open "driver={Microsoft Access Driver (*.mdb)};uid=admin;pwd=;" & _
	      "dbq=" & Server.MapPath(".\guestbook.mdb")
	
	    ' if the request was a POST then a guest submitted
	    If strMethod = "POST" Then
	      Dim strName, strComments
	      ' get the form data and format it
	      strName = FixForSQL(Request.Form("txtName"))
	      strComments = FixForSQL(Request.Form("txtComments"))
	      ' build the SQL string
	      strSQL = "INSERT INTO tblGuestbook (txtName, txtComments)"
	      strSQL = strSQL & " VALUES ('" & strName & "','" & strComments & "')"
	      ' execute the SQL
	      objCN.Execute(strSQL)
	    End If
	
	    ' create a SQL string to read all guest entries
	    strSQL = "SELECT * FROM tblGuestbook"
	    Set objRS = objCN.Execute(strSQL)
	
	  %>
	  <html>
	  <head><title><%=strTitle%></title></head>
	  <body>
	
	  <h1><%=strTitle%></h1>
	
	  <%
	    ' only show the guestbook when there are entries
	    If Not objRS.EOF Then
	  %>
	
	  <table border="1">
	    <tr>
	      <th>Name</th>
	      <th>Comments</th>
	    </tr>
	  <%
	    ' loop through the database
	    While Not objRS.EOF
	      With Response
	        .Write "<tr>" & vbCrLf
	        .Write "<td>" & FixForHTML(objRS("txtName")) & "</td>" & vbCrLf
	        .Write "<td>" & FixForHTML(objRS("txtComments")) & "</td>" & vbCrLf
	        .Write "</tr>" & vbCrLf
	      End With
	      objRS.MoveNext
	    Wend
	  %>
	  </table>
	
	  <% End If %>
	
	  <form action="<%=strURL%>" method="POST">
	    <table>
	      <tr>
	        <td>Name</td>
	        <td><input type="text" name="txtName"><br>
	      </tr>
	      <tr>
	        <td>Comments</td>
	        <td><textarea name="txtComments"></textarea><br>
	      </tr>
	      <tr>
	        <td colspan="2"><input type="submit" value="Submit Comments">
	      </tr>
	  </form>
	
	  </body>
	  </html>
	  <%
	    Function FixForSQL(tmpText1)
	      Dim tmpText2
	      tmpText2 = tmpText1
	      tmpText2 = Replace(tmpText1,vbCrLf,Chr(13))
	      tmpText2 = Replace(tmpText2,Chr(39),String(2,39))
	      FixForSQL = tmpText2
	    End Function
	
	    Function FixForHTML(tmpText1)
	      Dim tmpText2
	      tmpText2 = tmpText1
	      tmpText2 = Replace(tmpText2,Chr(13),"<br>" & vbCrLf)
	      tmpText2 = Replace(tmpText2,Chr(9),"&#xa0;&#xa0;&#xa0;&#xa0;")
	      FixForHTML = tmpText2
	    End Function
	  %>
	
	2. Open Microsoft Access, create a new database, and then save it as
	  Guestbook.mdb in the same folder as the above ASP page.
	3. Create a new table in the database named TblGuestbook with the following
	  fields:
	  +--------------------------------------+
	  | Field Name  | Data Type | Field Size | 
	  +--------------------------------------+
	  | txtName     | Text      | 50         | 
	  +--------------------------------------+
	  | txtComments | Memo      | N/A        | 
	  +--------------------------------------+
	
	4. Save the table to the database, and then close Microsoft Access.
	
	Testing the Guestbook Application
	
	1. When you browse the page for the first time, no data is displayed.
	2. When information has been submitted, any guestbook entries will appear.
	3. Entering apostrophes in names (for example O'Brien, O'Sullivan, and so on) or
	  contractions (such as don't, can't, and so on) are properly formatted and
	  stored in the database.
	
	REFERENCES
	==========
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	For more information on Microsoft scripting technologies, see the Microsoft
	Developer Network web site at the following URL:
	
	  http://msdn.microsoft.com/scripting/
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
