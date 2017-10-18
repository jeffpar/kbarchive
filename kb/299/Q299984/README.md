---
layout: page
title: "Q299984: Using ASP to Retrieve Authentication Information About Web Users"
permalink: kb/299/Q299984/
---

## Q299984: Using ASP to Retrieve Authentication Information About Web Users

	Article: Q299984
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbHOWTOmaster
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- The Code
	- Making the Code More Useful
	
	SUMMARY
	=======
	
	This step-by-step guide explains the correct ASP syntax for retrieving user
	authentication information from a Web site visitor. This information can only be
	captured if the site uses Basic Authentication, Windows NT Challenge Response
	(NTLM), or Windows Integrated Authentication.
	
	Requirements
	------------
	
	- A Windows-based Web server running IIS 4.0 or IIS 5.0
	
	- A text or ASP editor such as Notepad or Microsoft Visual InterDev.
	
	The Code
	--------
	
	To capture the visitor's domain and login, paste the following code into your ASP
	page. If the page also contains HTML, paste this code above the HTML tag.
	
	  <%
	  Dim strUser
	  strUser = Request.ServerVariables("LOGON_USER")
	  Response.Write strUser
	  %>
	
	This code will capture the user's domain and login, and then display it in the
	browser.
	
	Making the Code More Useful
	---------------------------
	
	Now that you have a method for capturing the user's login information, you may
	want to store it somewhere. The steps in this section demonstrate how to create
	a text file and write the information to it. Note that this method is only one
	of many that use Request.ServerVariables.
	
	1. Right-click Start, and then click Explore to open Windows Explorer.
	
	2. In Windows Explorer, click File, point to New, and then click Folder.
	
	3. This will create a new folder with the name area highlighted. Type "ASP"
	  (without the quotation marks), and then press ENTER to name the new folder
	  "ASP."
	
	4. Paste the following code into your ASP page. If the page also contains HTML,
	  paste this code above the HTML tag.
	
	  <%
	  Dim objFSO, strUser, objFile
	  strUser = Request.ServerVariables("LOGON_USER")
	  set objFSO = Server.CreateObject("scripting.FileSystemObject")
	  set objFile = objFSO.CreateTextFile("C:\asp\test.txt", true)
	  objFile.WriteLine strUser
	  objFile.Close
	  Response.Write strUser
	  %>
	
	5. This code will write the user's login information to a text file that is
	  automatically created in the ASP folder (the folder you created in step 3).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
