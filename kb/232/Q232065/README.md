---
layout: page
title: "Q232065: How to Use ASP to Create a DHTML Table of Contents from an INI"
permalink: /kb/232/Q232065/
---

## Q232065: How to Use ASP to Create a DHTML Table of Contents from an INI

{% raw %}

	Article: Q232065
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft IIS and Active Server Pages (ASP) can be used to create Dynamic HTML
	(DHTML) pages for use with Microsoft Internet Explorer version 4.0 and later.
	This article explains how to create a dynamic table of contents from a .ini file
	with a list of URLs.
	
	MORE INFORMATION
	================
	
	Note: Microsoft provides programming examples for illustration only, without
	warranty either expressed or implied, including, but not limited to, the implied
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
	
	The following example creates a DHTML table of contents from a .ini file, which
	is formatted as described in the steps below.
	
	1. Save the following ASP code as "Links.inc" in the root of your Web server:
	
	  <script language="JavaScript">
	  <!--
	  function mouseOverLink(objLink) {
	     objLink.style.textDecorationUnderline = 'True';
	  }
	
	  function mouseOutLink(objLink) {
	     objLink.style.textDecorationNone = 'True';
	  }
	
	  function mouseClickLink(objItem)
	  {
	     if (objItem.style.display =='')
	        objItem.style.display = 'none';
	     else
	        objItem.style.display = '';
	  }
	  //-->
	  </script>
	
	  <%
	     With Response
	        .Write "<ul>" & VbCrLf
	        Dim objLinkFSO, objLinkFILE, objLinkTEMP
	        Dim objLinkSECT, objLinkTITLE, objLinkHREF
	        Dim intLinkSectionCount
	         Set objLinkFSO = Server.CreateObject("Scripting.FileSystemObject")
	        Set objLinkFILE = objLinkFSO.OpenTextFile(Server.MapPath("./") & "\links.ini", 1, FALSE, 0)
	        intLinkSectionCount = 0
	        Do While Not objLinkFILE.AtEndOfStream
	           objLinkTEMP = Trim(objLinkFILE.ReadLine)
	           If Left(objLinkTEMP,1) = "[" Then
	              objLinkSECT = Trim(Mid(objLinkTEMP,2,Len(objLinkTEMP) - 2))
	              If intLinkSectionCount Then
	                 .Write Chr(9) & Chr(9) & "</ul>" & vbCrLf
	                 .Write Chr(9) & "</li>" & vbCrLf
	              End If
	              intLinkSectionCount = intLinkSectionCount + 1
	              .Write Chr(9) & "<li><span onMouseOver=""mouseOverLink(this);"""
	              .Write " onMouseOut=""mouseOutLink(this);"""
	              .Write " onClick=""mouseClickLink(LinkSection" & intLinkSectionCount & ");"">"
	              .Write objLinkSECT & "</span>" & VbCrLf
	              .Write Chr(9) & Chr(9) & "<ul id=""LinkSection" & intLinkSectionCount & """"
	              .Write " style=""display:none"">" & VbCrLf
	           ElseIf InStr(objLinkTEMP,"=") Then
	              objLinkTITLE = Trim(Left(objLinkTEMP,Instr(objLinkTEMP,"=")-1))
	              objLinkHREF  = Trim(Right(objLinkTEMP,Len(objLinkTEMP) - Instr(objLinkTEMP,"=")))
	              .Write Chr(9) & Chr(9) & "<li><a href=""" & objLinkHREF & """"
	              .Write " style=""text-decoration:none"""
	              .Write " onMouseOver=""mouseOverLink(this);"""
	              .Write " onMouseOut=""mouseOutLink(this);"">"
	              .Write objLinkTITLE & "</a></li>" & VbCrLf
	           End If
	        Loop
	        objLinkFILE.Close
	        If intLinkSectionCount Then .Write Chr(9) & "</li>" & VbCrLf
	        .Write "</ul>" & VbCrLf
	     End With
	  %>
	
	2. Create a directory or virtual directory in the root of your Web server named
	  "Linktest" with at least Script Access enabled.
	
	3. Save the following text as "Links.ini" in the "Linktest" folder:
	
	  [Section 1]
	  Home Page=/ 
	  Microsoft Corp=http://www.microsoft.com/ 
	
	  [Section 2]
	  Microsoft Network=http://www.msn.com/ 
	  IIS Documentation=/iishelp/ 
	
	  [Section 3]
	  Microsoft Investor=http://investor.msn.com/ 
	  HotMail=http://www.hotmail.com/ 
	
	  The format for the entries is as follows:
	
	   - Section headings are in brackets as [Section Name].
	
	   - URLs are listed as Title=HREF, and can be absolute or relative references.
	
	4. Save the following ASP code as "Default.asp" in the "Linktest" folder:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <html>
	  <body>
	  <table>
	    <tr>
	      <td valign="top" align="left" width="200"><!--#include virtual="/links.inc"--></td>
	      <td valign="top" align="left">This is a test</td>
	    </tr>
	  </table>
	  </body>
	  </html>
	
	When the example page is browsed, it will read the contents of the "Links.ini"
	file in the same directory and create the DHTML table of contents. Because the
	ASP code in the "Links.inc" file always searches the local folder for the
	"Links.ini" file, you can create a separate list of contents for each folder on
	your Web server.
	
	To use the this code in any folder on your server, do the following:
	
	1. Include the following line of code in an ASP page where you want the table of
	  contents to be written:
	
	  <!--#include virtual="/links.inc"-->
	
	  This will include the code from the "Links.inc" ASP page from the root of your
	  Web server into the current page.
	
	2. Create a file named "Links.ini" in the same folder as the page from the
	  previous step.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
