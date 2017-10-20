---
layout: page
title: "Q187506: List of NTFS Permissions Required for IIS Site to Work"
permalink: /kb/187/Q187506/
---

## Q187506: List of NTFS Permissions Required for IIS Site to Work

{% raw %}

	Article: Q187506
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article lists the proper Microsoft Windows NT File System (NTFS) access
	permissions that are needed for an Internet Information Server (IIS) Web site,
	an Internet Information Services (IIS) Web site, or a File Transfer Protocol
	(FTP) site to work.
	
	NOTE: When IIS is installed, it creates the proper NTFS access permissions for
	the default Web and FTP sites for the anonymous (IUSR_<computer_name>)
	and, if applicable, application owner (IWAM_<computer_name>) user
	accounts.
	
	If you try to access a Web page that you do not have access to, you may receive
	the following error message:
	
	  HTTP Error 401 401.3 Unauthorized: Unauthorized due to ACL on resource.
	
	MORE INFORMATION
	================
	
	To properly access and manage IIS, the local System account and local
	Administrators group need FULL CONTROL permissions to all drives on the
	computer. These permissions can be added from a command prompt. Type the
	following commands on each NTFS drive:
	
	  cd \ 
	  cacls * /T /E /C /P System:F Administrators:F
	
	NOTE: Modifying permissions may take several minutes per drive, depending on the
	amount of data on that drive. If the drive has no files, you receive the
	following error message:
	
	  The System cannot find the file specified.
	
	To configure the minimum required NTFS permissions for users who access IIS,
	grant the following directory permissions to the anonymous Internet user account
	(by default, this is the IUSR_computer_name account) and any other accounts or
	groups that need access to the Web server:
	
	  Directory                            Permissions
	  ------------------------------------------------
	  Content                                READ (RX)
	
	  Winnt                                  READ (RX)
	
	  Winnt\System32                         READ (RX)
	
	  Winnt\System32\Inetsrv                 READ (RX)
	
	  Program Files\Common Files             READ (RX)
	  (and all subdirectories)
	
	NOTE: In IIS 3.0, Active Server Pages is an add-on product and is located in its
	own folder. For this reason, IIS 3.0 installations that are running ASP require
	READ (RX) permissions set on the Winnt\System32\Inetsrv\Asp folder.
	
	Content is defined as anything (such as Web pages, images, and files) that
	someone can use the Web browser to access. By default, the content folder for
	the World Wide Web Publishing Service is \InetPub\Wwwroot, and the content
	folder for the FTP Service is \InetPub\Ftproot.
	
	IIS requires both appropriate NTFS permissions and the appropriate user rights to
	access the Web server. The following table lists the authentication type and the
	corresponding user right that is required to use the specified authentication
	type:
	
	   Authentication Type            Required User Right
	   -------------------            -------------------
	   Anonymous                      Log on locally (Password Synchronization disabled)
	   Anonymous                      Access this computer from the network (Password Synchronization enabled)
	   Basic (Clear Text)             Log on locally
	   NT Challenge Response          Access this computer from the network
	   Digest (IIS 5.0 only)          Access this computer from the network
	   Integrated (IIS 5.0 only)      Access this computer from the network
	
	For additional information about how to determine which authentication types can
	be used by which browser and in which environments, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q229694 How to Use the IIS Security 'What If' Tool
	
	For more information, see the "Security" topic in the Windows NT 4.0 Option Pack
	documentation. To view this topic, locate Microsoft Internet Information Server,
	locate Server Administration, and then locate Security.
	
	For more information, see the "Security" topic in the Internet Information
	Services 5.0 documentation. To view this topic, locate Administration, locate
	Server Administration, and then locate Security.
	
	For additional information about troubleshooting permission issues with IIS,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q271071 Minimum NTFS Permissions Required for IIS 5.0 to Work
	
	
	  Q313075 How to Configure Web Server Permissions for Web Content in IIS
	
	  Q120929 How the System Account is Used in Windows
	
	  Q148437 Default NTFS Permissions in Windows NT
	
	  Q155253 Improper NTFS Permissions May Result in IIS Failure
	
	  Q265161 FP: Errors Appear When You Attempt to Connect to Database Results
	  Page
	
	
	For additional information about how to connect to a Microsoft Access .mdb file
	from Active Server Pages (ASP), click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q251254 PRB: 'Disk or Network Error' or 'Unspecified Error' Returned When
	  Using Jet
	
	Additional query words: acl access control list manager domains IUSR_<computername> IUSR_<machinename> IUSR_<machine_name> IWAM_<computername> IWAM_<machinename> IWAM_<machine_name> folder folders directories akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
