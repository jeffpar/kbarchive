---
layout: page
title: "Q243756: HOWTO: Use Encrypting File System (EFS) with IIS"
permalink: /kb/243/Q243756/
---

## Q243756: HOWTO: Use Encrypting File System (EFS) with IIS

{% raw %}

	Article: Q243756
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows 2000 employs a security technology named Encrypting File
	System (EFS), which enables users to encrypt and decrypt files. Windows users
	can utilize EFS to keep sensitive files safe from unauthorized access. This
	article summarizes how to use this technology to encrypt personal Web documents
	for additional security.
	
	MORE INFORMATION
	================
	
	WARNING: EFS will fail encryption attempts on files with the System attribute.
	Administrators should not attempt to defeat this safeguard to encrypt files in
	the system directory. The private keys needed for decryption are not available
	during the boot process. Therefore, a system will be rendered unusable if its
	system files are encrypted. Future releases of Windows may provide secure boot
	capabilities that support encryption of system files.
	
	
	EFS is enabled for documents in Windows 2000 through an optional advanced file
	attribute. To implement this feature, follow these steps:
	
	1. In Windows Explorer, create a new folder named SecureTest in the root folder
	  for your Web site.
	
	2. In the new folder, save the following Active Server Pages (ASP) code as
	  Default.asp:
	
	  <html>
	  <body>
	  You are logged on as:
	  "<b><%=Request.ServerVariables("LOGON_USER")%></b>"
	  </body>
	  </html>
	
	3. Right-click the Default.asp file and then click Properties.
	
	4. Click Advanced.
	
	5. Select the Encrypt contents to secure data check box.
	
	6. Click OK.
	
	7. If you are prompted to encrypt the parent folder, select the Encrypt the file
	  only radio button and then click OK.
	
	8. Click OK again to return to Windows Explorer.
	
	When you browse to the http://<servername>/SecureTest/default.asp page, the
	page requires authentication and your user name is displayed, even if anonymous
	authentication is enabled for the entire Web site. This is because files that
	are encrypted with EFS are private files, and only the user that encrypted the
	files can browse to them. The authentication method used may be Basic/Clear
	Text, Windows Integrated, or Digest, depending on how the Web site is
	configured.
	
	The following is a list of best practices regarding EFS:
	
	- Protect the private keys associated with data recovery certificates. Export
	  them into a Personal Information Exchange (.pfx) file protected with a strong
	  password. Store .pfx files on a floppy disk, and lock the floppy disk away
	  for safekeeping.
	
	- Encrypt folders rather than individual files. Explorer only allows encryption
	  at the folder level. However, the Cipher.exe file can encrypt individual
	  files. Applications work on files in various ways. For example, when a user
	  edits a file with an application, the application may create temporary files
	  in the same folder as the original. Encrypting at the folder level ensures
	  that these temporary files are not created or saved as plain text.
	
	- Encrypt the My Documents folder (%UserProfile%\My Documents) to ensure that
	  the personal folder, in which most Microsoft Office documents are saved, is
	  encrypted by default.
	
	- Encrypt the Temp folder (%TEMP%) to ensure that the temporary files that are
	  created by various applications are encrypted.
	
	
	REFERENCES
	==========
	
	For additional information on Windows File Protection, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q222193 Description of the Windows 2000 Windows File Protection Feature
	
	For additional information on Web site authentication methods, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q264921 INFO: How IIS Authenticates Browser Clients
	
	  Q142868 IIS: Authentication and Security Features
	
	  Q222028 Setting Up Digest Authentication for Use with Internet Information
	  Services 5.0
	
	Additional query words: iis efs
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
