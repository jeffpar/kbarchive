---
layout: page
title: "Q199233: How to Use DHTML with ASP and Long SQL Queries"
permalink: /kb/199/Q199233/
---

## Q199233: How to Use DHTML with ASP and Long SQL Queries

{% raw %}

	Article: Q199233
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When SQL Server queries take a great deal of time to process in an ASP page, the
	Web browser may be left with a blank page while information is gathered from the
	database. If you use Internet Explorer's Dynamic HTML features, a message can be
	displayed to a Web browser while the data is processed and then changed or
	erased when the page is finished being rendered.
	
	MORE INFORMATION
	================
	
	The following example ASP code uses a system Data Source Name (DSN) that points
	to the Adventure Works example Microsoft Access database that shipped with IIS
	3.0, but can be tested with any data source by changing the following two
	lines:
	
	  strSQL = "SELECT * FROM <Table Name>"
	  RS.Open strSQL, "DSN=<Datasource Name>"
	
	The following example page displays a message to the browser while loading the
	data, then changes that message to the record count after the data is loaded.
	Copy and save the following ASP code in your InetPub\Scripts folder as
	DhtmTest.asp, and then test the page by browsing to
	http://localhost/scripts/DhtmTest.asp.
	
	     <html>
	     <head><title>DHTML and ASP Example</title></head>
	     <body>
	
	     <h3 id="HideMe">Please wait while the data loads...</h3>
	
	     <%
	       Dim RS, strSQL, i
	       Set RS = Server.CreateObject("ADODB.RecordSet")
	       strSQL = "SELECT * FROM Products"
	       RS.CursorType = 1 ' open with adOpenKeyset
	       RS.Open strSQL, "DSN=AdvWorks"
	
	       If Not RS.EOF Then
	         Response.Write "<table border=1>" & vbCrLf
	
	         Response.Write "<tr>"
	         For i =  0 to (RS.Fields.Count - 1)
	           Response.Write "<th>" & RS.Fields(i).Name & "</th>"
	         Next
	         Response.Write "</tr>" & vbCrLf
	           
	         Do While Not RS.EOF
	           Response.Write "<tr>"
	           For i =  0 to (RS.Fields.Count - 1)
	             Response.Write "<td>" & RS.Fields(i).Value & "</td>"
	           Next
	           Response.Write "</tr>" & vbCrLf
	           RS.MoveNext
	         Loop
	
	         Response.Write "</table>" & vbCrLf
	       End If
	     %>
	
	     <script language="JavaScript" for="window" event="onload">
	        HideMe.innerText='<%=RS.RecordCount%> Record(s) displayed.'
	     </script>
	
	     <% RS.Close %>
	
	     </body>
	     </html>
	
	The above code can easily be modified to erase the message from the page by
	changing the script section to read as follows:
	
	     HideMe.style.display='none';
	
	Additional query words: jscript javascript scripting dhtml asp html
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : winnt:3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
