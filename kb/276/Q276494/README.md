---
layout: page
title: "Q276494: Using Python Scripts with IIS"
permalink: kb/276/Q276494/
---

## Q276494: Using Python Scripts with IIS

	Article: Q276494
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 20-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Python is an interpreted scripting language similar in concept to Microsoft
	Visual Basic Script (VBScript), Microsoft JScript, Perl, or other scripting
	languages. While Internet Information Server (IIS) uses the Windows Scripting
	Host for its VBScript and JScript needs, IIS can use other script interpreters
	for Active Server Pages (ASP) as well as simple Common Gateway Interface (CGI)
	scripts. This article describes how to use Python as your scripting language of
	choice for both CGI and ASP.
	
	MORE INFORMATION
	================
	
	You can choose any Python interpreter as the script engine for processing Python
	scripts. The example in this article uses ActiveState's ActivePython 2.0.
	
	The following steps show how to set up the installed Python interpreter as a
	script engine for use with IIS and ASP.
	
	1. Make sure that the Web site containing the Python scripts has an application
	  set up. To do this, perform the following steps:
	
	  a. In the Internet Service Manager (ISM), right-click the directory that is
	     the application starting point, and then click Properties.
	
	  b. Click the Home Directory, Virtual Directory, or Directory tab.
	
	  c. Under Application Settings, verify that the Name text box is active, and
	     that it contains a name.
	
	  d. If the dialog box is inactive, click Create to create an application, and
	     then give the application a name (the default name is "Default
	     Application").
	
	  e. Under Permissions, verify that Execute (including script) is selected.
	
	  For more information about setting up applications, see "Configuring
	  Applications" in IIS Help.
	
	2. Verify that application mapping for .py files is set up. To do this, perform
	  the following steps:
	
	  a. In the ISM, under Internet Information Server, right-click the computer
	     name, and then click Properties.
	
	  b. From the Master Properties drop-down list, click WWW Service and then
	     click Edit.
	
	  c. Click the Home Directory tab, and then click Configuration.
	
	  d. To add the application mapping, click Add, and then create a new mapping
	     by using the following information (substituting the correct path on your
	     computer):
	
	      - Executable: "C:\Python20\python.exe %s %s" (The two "%s" after the
	        executable are required for console-based script interpreters but would
	        not be required for an Internet Server API [ISAPI]-based script
	        interpreter).
	
	      - Extension: .py
	
	      - Script engine: selected.
	
	      - Check that File Exists: selected (for security)
	
	Click OK.
	
	3. Verify that the file and directory permissions are set correctly in the
	  computer's access control list (ACL). For anonymous access, the
	  IUSR_[computername] and IWAM_[computername] user accounts must have at least
	  "read" permission (RX). When using other types of password authentication,
	  the permissions required may vary.
	
	The following Python script can be used to test for the proper installation and
	execution of Python-based CGI scripts with IIS.
	
	Create a file in a text editor such as Microsoft Notepad, and include the
	following lines of code. Save the file in the scripts folder as "Test.py"
	(without the quotation marks).
	
	  print
	  print 'Status: 200 OK'
	  print 'Content-type: text/html'
	  print
	
	  print '<HTML><HEAD><TITLE>Python Sample CGI</TITLE></HEAD>'
	  print '<BODY>'
	  print '<H1>This is a header</H1>'
	
	  print '<p>' #this is a comment
	  print 'See this is just like most other HTML'
	  print '<br>'
	  print '</BODY>'
	
	Browse "Test.py" on the Web site:
	
	  http://<computer_name>/scripts/test.py
	
	Alternatively, you can use the Python interpreter as your script interpreter in
	your ASP pages. After you have the Python scripting engine registered, create a
	file by using Notepad and include the following lines of code. Save the file in
	the scripts folder as "Python.asp" (without the quotation marks).
	
	  <%@LANGUAGE=Python%>
	  <HTML>
	  <head></head>
	  <body>
	  <h1>Python Test</h1>
	
	  <%
	  #do some python stuff here
	
	  Response.Write('Python Test<br>')
	  Response.write('<h3>Smaller heading</hr>')
	  %>
	
	  </body>
	  </html>
	
	Browse "Python.asp" on the Web site:
	
	  http://<computer_name>/scripts/python.asp
	
	REFERENCES
	==========
	
	For more information on Python see:
	
	  http://www.python.org/
	
	For the ActiveState Python Interpreter see:
	
	  http://www.activestate.com/Products/ActivePython/
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
