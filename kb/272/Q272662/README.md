---
layout: page
title: "Q272662: How to Create a Directory Viewer By Using ASP"
permalink: kb/272/Q272662/
---

## Q272662: How to Create a Directory Viewer By Using ASP

	Article: Q272662
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a sample page by using Microsoft Active
	Server Pages (ASP) technologies to display a generic directory viewer with
	Scripting.FileSystemObject.
	
	Important Note:
	
	If you use the code in this article improperly, the code can be used to view
	folders outside of a Web site. For additional information on preventing this,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q184717 AspEnableParentPaths MetaBase Property Should Be Set To False
	
	  Q276548 ASP Error 0131 When Browsing to Database Results Region ASP Page
	
	MORE INFORMATION
	================
	
	General Disclaimer:
	
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
	
	Directory Viewer Example Code:
	
	Use the following steps to create the directory viewer ASP page:
	
	NOTE: You must have Basic/Clear Text, Integrated/NTLM, or Digest authentication
	enabled to use this example.
	
	1. Open Notepad on a Web server that is running Microsoft Internet Information
	  Server version 4.0 or Internet Information Services version 5.0.
	
	2. Insert the following ASP code:
	
	  <% @Language="VBScript" %>
	  <%  
	    On Error Resume Next ' don't worry about errors
	
	    ' turn on buffering
	    Response.Buffer = True
	
	    ' make sure that client is authenticated
	    If Len(Trim(CStr(Request.ServerVariables("LOGON_USER")))) = 0 Then
	      Response.Status = "401 Access Denied"
	      Response.End
	    End If
	
	    ' get variables for the current page and submitted directory  
	    strURL = Request.ServerVariables("URL")
	    strDIR = Request("DIR")
	    ' if no directory was submitted, use the current folder
	    If strDIR = "" Then strDIR = Server.MapPath(".")
	
	    ' create file I/O objects
	    Set objFSO = Server.CreateObject("Scripting.FileSystemObject")
	    Set objFolder = objFSO.GetFolder(strDIR)
	  %>
	  <html>
	  <head>
	  <title>Directory Viewer</title>
	  </head>
	  <body>
	
	  <h2>Directory Viewer</h2>
	
	  <table width="100%" border="1">
	    <tr>
	      <td colspan="2" align="center" valign="middle">
	        <form action="<%=strURL%>" method="POST">     
	          Directory <input type="text" name="DIR" value="<%=strDIR%>" size="40">
	          <input type="submit" value="Get Directory">
	        </form>
	      </td>
	    </tr>
	
	    <tr>
	      <th width="50%" align="left" valign="top">Folders</th>
	      <th width="50%" align="left" valign="top">Files</th>
	    </tr>
	    
	    <tr>
	      <td width="50%" align="left" valign="top">
	        <ul>
	        <%    
	          ' if there are no folders, output status message
	          If objFolder.SubFolders.Count = 0 Then
	            Response.Write "<li>No folders or error trying to get the folder " & _
	              strDIR & "</li>" & vbCrLf
	          ' otherwise loop through list of subfolders
	          Else
	            For Each objSubFolder In objFolder.SubFolders
	              Response.Write "<li>" & objSubFolder.Name & "</li>" & vbCrLf
	            Next
	          End If    
	        %>
	        </ul>
	      </td>
	
	      <td width="50%" align="left" valign="top">
	        <ul>
	        <%
	          ' if there are no files, output status message
	          If objFolder.Files.Count = 0 Then
	            Response.Write "<li>No files or error trying to get the folder " & _
	              strDIR & "</li>" & vbCrLf
	          ' otherwise loop through list of files in the folder
	          Else    
	            For Each objFile In objFolder.Files
	              Response.Write "<li>" & objFile.Name & "</li>" & vbCrLf
	            Next
	          End If
	        %>
	        </ul>
	      </td>
	    </tr>
	  </table>
	
	  </body>
	  </html>
	
	3. Save the page as "Directory.asp" in the root folder of your Web site.
	
	4. Browse to the page through HTTP, and then enter the path of the directory
	  that you want to view. The folder's contents should display.
	
	References
	----------
	
	For additional information on this topic, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q218606 HOWTO: ASP and Scripting FileSystemObject to Create Dynamic TOC
	
	  Q224364 Creating a Directory Browsing Page Using ASP
	
	Additional query words: front page iis
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
