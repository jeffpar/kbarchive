---
layout: page
title: "Q156756: Using the IDC &quot;%z&quot; Parameter"
permalink: kb/156/Q156756/
---

## Q156756: Using the IDC &quot;%z&quot; Parameter

	Article: Q156756
	Product(s): Internet Information Server
	Version(s): 1.0 2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Internet Database Connector (IDC), and you create links or use
	the return value in arguments passed to other documents, you will be unable to
	pass arguments that contain spaces.
	
	CAUSE
	=====
	
	Spaces are viewed as delimiters and are not passed by default. You can use the
	"%z" parameter in your .HTX file to parse and convert these escape characters so
	they can be passed as parameters.
	
	RESOLUTION
	==========
	
	Use the following syntax as shown in this HTX sample. The following example will
	display a table that builds links dynamically from the queried database. In this
	example it returns 3 columns. The first column contains the argument being
	passed. The second column contains links that will fail if the value in the
	first column contains characters such as spaces. The third column contains links
	using the "%z" and will pass the argument properly.
	
	NOTE: This parameter is case sensitive you must use a lower case "z."
	
	  <TABLE BORDER>
	  <TR>
	  <TH><B>Argument</B></TH><TH><B>Broken</B></TH><TH><B>Works</B></TH>
	  </TR>
	  <%begindetail%>
	  <TR>
	  <TD><%Title%></TD>
	  <TD><A HREF=sqr1.idc?Tname=<%Title%>><%Description%></TD>
	  <TD><A HREF=sqr1.idc?Tname=<%"%z",Title%>><%Description%></TD>
	  </TR>
	  <%enddetail%>
	  </TABLE>
	
	MORE INFORMATION
	================
	
	For more information look in Chapter 8 of the Online Documentation for IIS that
	details the Internet Database Connector (IDC) and covers publishing dynamic data
	on the Web. Additionally you can view the JobForum an IDC database example
	application found on the web:
	
	  http://www.microsoft.com/accessdev/accwhite/jobforpa.htm
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : 1.0 2.0
	
	=============================================================================
	
