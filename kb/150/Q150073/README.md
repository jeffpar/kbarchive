---
layout: page
title: "Q150073: How to Query FoxPro Data on the Web Using ODBC"
permalink: kb/150/Q150073/
---

## Q150073: How to Query FoxPro Data on the Web Using ODBC

	Article: Q150073
	Product(s): Microsoft FoxPro
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 1.0 
	- Microsoft Internet Information Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a step-by-step procedure that demonstrates how to use the
	Visual FoxPro ODBC Driver and the Microsoft Internet Information Server (IIS) to
	query FoxPro data and display it in an HTML page.
	
	MORE INFORMATION
	================
	
	This example consists of three parts:
	
	- Setting up a Visual FoxPro ODBC Data Source Name (DSN)
	
	- Creating the HTML extension (.HTX) file and the Internet Database Connector
	  (.IDC) files.
	
	- Modifying the HTML page to create a link.
	
	In this example, you create a data source to the Tastrade database, then create a
	query that retrieves names from the customer table. The results of the query are
	displayed in an HTML page. All of these operations are accomplished from the
	server.
	
	Before you follow this example, you need to install Windows NT Server version
	3.51 and apply Service Pack 3 or higher. You also need to install the Microsoft
	Internet Information Server version 1.0, and the Visual FoxPro ODBC Driver
	version 1.0. For more information about installation, refer to the "Internet
	Database Connector and ODBC" topic in the Visual Foxpro online help.
	
	Setting up a Visual FoxPro System DSN
	-------------------------------------
	
	1. In Control Panel, click the ODBC icon.
	
	2. In the Data Sources dialog box, click the System DSN button. Note that this
	  step is very important because the Internet Database Connector only works
	  with System DSN.
	
	3. In the System DSN dialog box, click the Add button to display the Add Data
	  Source dialog box.
	
	4. In the Add Data Source dialog box, select the Microsoft Visual FoxPro driver
	  and click OK.
	
	5. Enter the following information in the ODBC Visual FoxPro Setup dialog box:
	
	   - Data Source Name: Tastrade2
	
	   - Click the Visual FoxPro Database (DBC) button
	
	   - Path: path to the Tastrade.dbc file. By default, tastrade is located in
	     the Vfp\samples\mainsamp\data directory.
	
	6. Click the OK button. Note that the System Data Sources dialog box is
	  displayed and displays the name of the data source you created. Click the
	  Close button.
	
	7. The Data Sources dialog box is displayed. Click the Close button to close it.
	
	Creating the HTX and the IDC files
	----------------------------------
	
	This example assumes that you want to place all of the files in the Myhome
	directory, and that the server name is Test. You can, however, place your HTML
	file in the server's root directory (wwwroot), and the HTX and IDC files in the
	HTML server's script directory (scripts). If you chose not to create a Myhome
	directory, you can skip steps 1 through 5.
	
	1. Start the Microsoft Internet Server.
	
	2. Double-click the WWW service. Note that the Service Properties window is
	  displayed.
	
	3. In the WWW Service Properties window, click the Directories tab.
	
	4. Select the c:\Myhome directory (your home directory), and click the Edit
	  Properties button.
	
	5. In the Properties window, select the Execute check box, which will allow
	  users to execute the query.
	
	6. In the c:\Myhome directory, or the scripts directory, create a text file
	  called Mydbf.htx. This file is a template for the information returned from
	  the query. Copy the following information into the file:
	
	        <HTML>
	        <HEAD><TITLE>HTTP ODBC Sample</TITLE></HEAD>
	        <BODY BGCOLOR="FFFFFF">
	        <TABLE>
	        <TR>
	        <TD></TD>
	        <TD>
	        <HR>
	        <FONT SIZE=2>
	        <CENTER>
	        <P>
	        <!--In this example, the information is displayed in a table-- >
	         <TABLE BORDER>
	
	        <TR>
	        <TH><B>Contact Name:</B></TH><TH><B>Address:</B></TH>
	        </TR>
	
	        <%begindetail%>
	        <TR><TD><%contact_name%></TD><TD><%address%></TD></TR>
	        <%enddetail%>
	        <P>
	        </TABLE>
	        </CENTER>
	
	        <HR>
	
	        </FONT>
	        </TD>
	        </TR>
	        </TABLE>
	        </BODY>
	        </HTML>
	
	7. Create a text file named Mydbf.idc in the C:\Myhome directory, or the scripts
	  directory. This file contains information about the system DSN, the user, the
	  HTX file used as a template, and the SQL SELECT statement. For example:
	
	        Datasource: tastrade2
	        Username:
	        Template: mydbf.htx
	        SQLStatement:
	        +SELECT contact_name,address FROM CUSTOMER
	
	Modifying the HTML page to create a link
	----------------------------------------
	
	Add the following information to the HTML page you need to modify. This will
	create a link to the IDC file.
	
	        <P>
	        <LI><A HREF="HTTP://test/mydbf.idc?">HTTP ODBC Example</A>
	        <P>
	
	To test this setup, start your Web Browser and type the following URL, which will
	load the home page on your Test server, or type the URL to the HTML page you
	have modified.
	
	  http://test
	
	Note that the page contains a hyperlink for the ODBC example. Click "HTTP ODBC
	Example," and the information from the Customer table in the Tastrade database
	is displayed.
	
	Additional query words: VFoxWin 3.00 3.00b IIS winnt nt internet search
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbiisSearch kbAudDeveloper kbiis100 kbODBCSearch kbODBCVFP100
	Version           : :1.0
	
	=============================================================================
	
