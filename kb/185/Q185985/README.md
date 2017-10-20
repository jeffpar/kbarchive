---
layout: page
title: "Q185985: Using Index Server to Query and Display META TAG Information"
permalink: /kb/185/Q185985/
---

## Q185985: Using Index Server to Query and Display META TAG Information

{% raw %}

	Article: Q185985
	Product(s): Internet Information Server
	Version(s): WINNT:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, you cannot include META information in query results from Index
	Server version 2.0. This article shows how you can both query META information
	and show this information in the result sets using Active Server Pages (ASP).
	
	MORE INFORMATION
	================
	
	Step 1
	------
	
	a. First the META information must be cached by Index Server. To do this, open
	  the Index Server Management Console, and go to the property list for the
	  content that has been indexed.
	
	  If there are entries in the HTML document such as:
	
	        <meta name="animal" content="Elephant">
	   
	
	  Then in the Properties list there should be an entry for "animal" under the
	  Property Column, with a Property set of:
	
	     d1b5d3f0-c0b3-11cf-9a92-00a0c908dbf1
	
	
	  (The above is the globally unique identifier [GUID] for all META information.)
	
	b. Right-click this entry, and then select Properties.
	
	c. Check the option to cache this value. Set the Data Type to VT_LPWSTR. The
	  default size should be acceptable for most string types.
	
	d. To commit these changes, right-click Properties in the left panel and select
	  Commit.
	
	e. Re-scan the directories with the HTML files that have the META information
	  required.
	
	Step 2
	------
	
	a. To build an ASP to use this information, you must first define a Column using
	  Q.DefineColumn. This requires the GUID given above.
	
	b. To query just the META information, the query string must be preceded with
	  @metaname (in this example @animal). This forces Index Server to query only
	  the META information.
	
	ASP Example
	-----------
	
	A sample ASP that uses this information follows. Remember to replace all
	incidences of "animal" with your own Meta Tag Name. Note that the Q.DefineColumn
	line is continuous with the line containing the GUID:
	
	   <html>
	   <head>
	   <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	
	   <%
	   set Q = Server.CreateObject ("IXSSO.Query")
	
	   Q.DefineColumn "animal (DBTYPE_WSTR) =
	   'append to above    d1b5d3f0-c0b3-11cf-9a92-00a0c908dbf1 animal"
	
	      Q.Query = "@animal Elephant"
	      Q.Columns = "animal"
	      set RS = Q.CreateRecordSet("sequential")
	
	   %>
	
	   <title>Sample Search</title>
	   </head>
	   <body>
	   <p>
	   <%
	   Do While Not RS.EOF
	   %>
	   <p>
	   <b>Type of animal: </b><%= RS("animal") %>
	   </p>
	   <%
	      RS.MoveNext
	           Loop
	   %>
	   </p>
	   </body>
	   </html>
	
	Additional query words: 4.0
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : WINNT:2.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
