---
layout: page
title: "Q313820: HOW TO: Enable UPN Logon for FTP in IIS 5.0"
permalink: kb/313/Q313820/
---

## Q313820: HOW TO: Enable UPN Logon for FTP in IIS 5.0

	Article: Q313820
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 19-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Enable UPN Logon for FTP Using IIS 5.0
	
	   - Enable UPN Logon for FTP with Adsutil.vbs
	- Enable UPN Logon for FTP with Mdutil.exe
	
	- REFERENCES
	
	SUMMARY
	=======
	
	The name of a user in the form of user@domain.com is known as the user principal
	name (UPN). This step-by-step article describes how to allow UPN logon for the
	Microsoft File Transfer Protocol (FTP) service.
	
	Enable UPN Logon for FTP Using IIS 5.0
	--------------------------------------
	
	Note that you can only enable UPN logon for FTP in a Windows 2000 domain
	environment. That is, you must have Active Directory running, and the user must
	be in a domain account in that directory.
	
	Before you begin, verify that you are not experiencing the problem that is
	described in the following Knowledge Base article, and request the hotfix in the
	article if necessary:
	
	  Q299273 UPN Logon Option Does Not Work After You Apply Fix from MS01-026
	  Security Bulletin
	
	You can use either the Adsutil.vbs utility or the Mdutil.exe utility to allow UPN
	logon for the FTP service.
	
	Enable UPN Logon for FTP with Adsutil.vbs:
	
	To use the Adsutil.vbs file to enable UPN logon for FTP, you must add the
	DefaultLogonDomain entry to the FTP service properties in the metabase and set
	the value to the backslash character (\). For additional information on how to
	do this, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q184319 FTP Service's DefaultLogonDomain Not Available in MMC
	
	Enable UPN Logon for FTP with Mdutil.exe:
	
	To enable UPN logon for all local FTP sites, type the following at a command
	prompt:
	
	  mdutil.exe set msftpsvc/DefaultLogonDomain \
	
	To enable UPN logon for the first FTP site, type the following at a command
	prompt:
	
	  mdutil.exe set msftpsvc/1/DefaultLogonDomain \
	
	NOTE: You cannot enable UPN logon for FTP by setting a backslash (\) for the
	root, as follows:
	
	  mdutil set /msftpsvc/1/root/DefaultLogonDomain \
	
	For more information on Mdutil.exe, see the following Knowledge Base article:
	
	  Q240225 Description of Adsutil and MetaEdit Utilities Used to Modify the
	  Metabase
	
	REFERENCES
	==========
	
	For more information, see the following Knowledge Base article:
	
	  Q260269 How to Enable UPN (or Single) Logon with IIS 5.0
	
	Additional query words: upn ftp msftpsvc DefaultLogonDomain authentication iis
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
