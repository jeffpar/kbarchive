---
layout: page
title: "Q217425: A Simple ASP Example Using Posting Acceptor"
permalink: kb/217/Q217425/
---

## Q217425: A Simple ASP Example Using Posting Acceptor

	Article: Q217425
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Posting Acceptor is a server add-on component in the Windows NT Option
	Pack (NTOP) that enables the use of HTTP Post (RFC 1867) to publish content to
	your Web site.
	
	MORE INFORMATION
	================
	
	To get Posting Acceptor to work with as few steps as possible, perform the
	following steps:
	
	1. Install Posting Acceptor using one of the following methods:
	
	   - Install Posting Acceptor during the NTOP installation.
	
	  -OR-
	
	   - Run the NTOP setup and specify Add/Remove.
	
	2. In either of the above methods, specify the installation of Posting Acceptor,
	  by doing the following:
	
	  a. Select Microsoft Site Server Express 2.0.
	
	  b. Click Show Subcomponents.
	
	  c. Select Publishing - Posting Acceptor.
	
	  d. Click OK and complete the wizard.
	
	3. Verify that the Cpshost.dll file is in your Scripts folder.
	
	4. Create a new directory named Uploads and give it at least NTFS Add
	  permissions to valid users, but ensure that the "Everyone" and
	  IUSR_COMPUTERNAME accounts do not have rights to the folder.
	
	5. Create a new virtual directory that points to the new Uploads directory with
	  write access.
	
	6. Create a new text file named Postacpt.asp in your Scripts folder and paste
	  the following HTML code into it:
	
	  <SCRIPT RUNAT=SERVER LANGUAGE="JavaScript">
	   if (Request.ServerVariables("LOGON_USER") == '')
	     Response.Status('401 Access Denied');
	  </SCRIPT>
	  <html>
	  <body>
	  <form enctype="multipart/form-data" action="/scripts/cpshost.dll?PUBLISH" method="POST">
	   <center><table>
	     <tr>
	       <td align="left">File to upload</td>
	       <td align="left"><input name="file" type="file" size="20"></td>
	     </tr>
	     <tr>
	       <td align="left">Destination URL</td>
	       <td align="left"><input name="TargetURL" value="/uploads/" size="20">
	       <input type="Submit" value="Upload..."></td>
	     </tr>
	   <table></center>
	  </form>
	  </body>
	  </html>
	
	  Notes on the above code sample:
	
	   - The JavaScript code forces a browser to authenticate. You can remove this
	     code to allow anonymous posting, otherwise you will need to add
	     users/groups as specified in the step above.
	
	   - The form uses a new input of type "file" that should display a Browse
	     button on the Web page.
	
	7. Browse the page at "http://localhost/scripts/postacpt.asp" and upload a file
	  to verify the correct functionality.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q184352 HOWTO: Upload files to the Internet Information Server
	
	  Q189651 SAMPLE: Uploading a File to IIS Using a Browser
	
	  Q189272 Upload Folders with Write and Execute Access Are Vulnerable
	
	  Q179566 How to Do Anonymous Uploads
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
