---
layout: page
title: "Q222618: Using ASP and User Names with Posting Acceptor"
permalink: /kb/222/Q222618/
---

## Q222618: Using ASP and User Names with Posting Acceptor

	Article: Q222618
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Posting Acceptor is a server add-on component of the Windows NT Option
	Pack (NTOP) that enables the use of HTTP Post (RFC 1867) to publish content to
	your Web site. Web administrators and authors using Posting Acceptor in
	conjunction with Microsoft Active Server Pages (ASP) can automate document
	publishing by using the logged-on user's name to store files in a virtual
	directory of the same name.
	
	MORE INFORMATION
	================
	
	The following steps show how to install Posting Acceptor from the NTOP.
	
	Install Posting Acceptor using one of the following two methods:
	
	   - During the initial NTOP installation
	
	  -OR-
	
	- Running the NTOP setup in maintenance mode and specifying Add/Remove
	
	In either of the above scenarios, specify the installation of Posting Acceptor by
	following these steps:
	
	1. Select Microsoft Site Server Express 2.0.
	
	2. Click Show Subcomponents.
	
	3. Select Publishing - Posting Acceptor.
	
	4. Click OK to continue the wizard.
	
	5. Verify that the Cpshost.dll file is in your Scripts folder.
	
	These next steps will walk you through creating a virtual directory to upload
	files to based on a user name. For this example, "Administrator" account is
	used; however, any valid user account may be used.
	
	1. Log on to your Windows NT server as "Administrator."
	
	2. Create a new folder on an NTFS drive such as "X:\ADMIN", where X is your
	  drive letter.
	
	3. Open the security settings for the new folder.
	
	4. Grant NTFS Full Control permissions to the "Administrator" and "System"
	  accounts.
	
	5. Remove all other users and groups.
	
	6. Create a new virtual directory that points to the new folder.
	
	7. Open the Internet Services Manager in the MMC.
	
	8. Right-click your default Web site.
	
	9. Click New, and then select Virtual Directory from the pop-up menu.
	
	10. Click Next to start the wizard.
	
	11. Enter "administrator" for the alias and click Next.
	
	12. Browse to the ADMIN folder from earlier and click Next.
	
	13. Select only Read and Write, and then click Next.
	
	14. Click Finish to complete the wizard.
	
	Next, copy the following ASP code and save it to your SCRIPTS folder as
	"Postlogon.asp." This ASP code is actually two HTML form examples on one page.
	
	- The first form uses a form text field that is populated with the user's name,
	  but allows the field's contents to be changed.
	
	- The second form uses a hidden form field that will also be populated with the
	  user's name, but prevents the field's contents from being changed.
	
	  <%@LANGUAGE="VBScript"%>
	  <%
	    ' check to see if the user has logged on at all
	    If Request.ServerVariables("LOGON_USER") = "" Then
	      ' force authentication if not
	      Response.Clear
	      Response.Status = "401 Access Denied"
	      Response.End
	    Else
	      ' store the client's user name ins a session variable
	      strLogonUser = Request.ServerVariables("LOGON_USER")
	      ' is this an NT domain logon?
	      If InStr(strLogonUser,"\") then
	        ' strip out an NT domain from the user name if present
	        strLogonUser = Mid(strLogonUser,InStr(strLogonUser,"\")+1)
	      End If
	    End If
	  %>
	  <html>
	  <body>
	  <h2 align="center">Logged On User Posting Acceptor Example</h2>
	  <hr>
	  <form enctype="multipart/form-data" action="/scripts/cpshost.dll?PUBLISH" method="POST">
	    <center><table border="1">
	      <tr>
	        <th align="center" colspan="2">Using Visible Form Field</th>
	      </tr>
	      <tr>
	        <th align="left">File to upload</th>
	        <td align="left"><input name="file" type="file" size="30"></td>
	      </tr>
	      <tr>
	        <th align="left">Destination URL</th>
	        <td align="left"><input type="text" name="TargetURL" value="/<%=strLogonUser%>/" size="30">
	        <input type="Submit" value="Upload..."></td>
	      </tr>
	    </table></center>
	  </form>
	  <hr>
	  <form enctype="multipart/form-data" action="/scripts/cpshost.dll?PUBLISH" method="POST">
	    <input type="hidden" name="TargetURL" value="/<%=strLogonUser%>/">
	    <center><table border="1">
	      <tr>
	        <th align="center" colspan="2">Using Hidden Form Field</th>
	      </tr>
	      <tr>
	        <th align="left">File to upload</th>
	        <td align="left"><input name="file" type="file" size="30">
	        <input type="Submit" value="Upload..."></td>
	      </tr>
	    </table></center>
	  </form>
	  <hr>
	  </body>
	  </html>
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q184352 HOWTO: Upload files to the Internet Information Server
	
	  Q189651 SAMPLE: Uploading a File to IIS Using a Browser
	
	  Q189272 Upload Folders with Write and Execute Access Are Vulnerable
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
