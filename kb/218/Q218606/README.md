---
layout: page
title: "Q218606: HOWTO: Use ASP and Scripting.FileSystemObject to Create a TOC"
permalink: /kb/218/Q218606/
---

## Q218606: HOWTO: Use ASP and Scripting.FileSystemObject to Create a TOC

{% raw %}

	Article: Q218606
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbASP kbGrpDSASP kbDSupport kbFSO kbAudITPro kbHOWTOmaster
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Creating a Table of Contents
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article shows an example of how to use an Active Server Page
	(ASP) to create a dynamic table of contents for a Web site that is updated
	frequently. Active Server Pages makes it easier to keep Web sites up to date
	without having to manually update a contents page.
	
	Creating a Table of Contents
	----------------------------
	
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
	
	The following ASP code is designed to create a table of contents from the files
	that are listed in the "docs" subfolder. To use this example, copy the ASP code
	in to a file, and then save the file as "contents.asp" (without the quotation
	marks) in a folder that has at least "Script" access. To change the location of
	the folder to display, change the line of code that defines the strDocsPath
	variable.
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <%
	  	Option Explicit	
	
	  	Dim strDocsPath, strDocsPhysicalPath
	  	Dim objFSO, objFolder, objFiles, objFile
	  	Dim strName, strFile, strType, lngSize
	
	  	' NOTE: set the following line to the folder to display
	  	strDocsPath = "docs"
	
	  	' map the folder to a physical path
	  	strDocsPhysicalPath = Server.MapPath(strDocsPath)
	
	  	' create a system file object
	   	Set objFSO = Server.CreateObject("Scripting.FileSystemObject")
	
	  	' create an object for the folder
	  	Set objFolder = objFSO.GetFolder(strDocsPhysicalPath)
	
	  %>
	  <html>
	  <head>
	  <title>Table Of Contents</title>
	  </head>
	
	  <body>
	
	  <h1 align="center">Table Of Contents</h1>
	
	  <h4>Please choose the Document to view.</h4>
	
	  <ul>
	  <%
	  	' create a files collection
	  	Set objFiles = objFolder.Files
	
	  	' step through the files collection
	  	For Each objFile in objFiles
	
	  		' get a file's name
	  		strName = objFile.Name
	
	  		' make it lowercase for the URL
	  		strFile = Lcase(strName)
	
	  		' get the file's type
	  		strType = objFile.Type
	
	  		' make the name a title for display
	  		strName = MakeTitle(strName)
	
	  		' get the file size in KB
	  		lngSize = objFile.Size\1024
	
	  		' output the filename and URL
	  		Response.Write "<li><a href=""" & strDocsPath & "/" & strFile & """>" & strName & "</a><br>"
	
	  		' output the file's size and type
	  		Response.Write "<em>(" & lngSize & "KB " & strType & ")</em></li>" & vbCrLf
	  	Next
	
	  	' this function drops the extension from a file
	  	Function MakeTitle(strTemp)
	  		If InStrRev(strTemp,".") Then
	  			strTemp = Left(strTemp,InStrRev(strTemp,".")-1)
	  		End If
	  		MakeTitle = strTemp
	  	End Function
	  %>
	  </ul>
	  </body>
	  </html>
	
	REFERENCES
	==========
	
	For more information about Microsoft Scripting Technologies, please visit the
	following Microsoft Web site:
	
	  http://msdn.microsoft.com/scripting
	
	Additional query words: file system object
	
	======================================================================
	Keywords          : kbASP kbGrpDSASP kbDSupport kbFSO kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
