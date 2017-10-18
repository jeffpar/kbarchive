---
layout: page
title: "Q315673: HOW TO: Use the Security Planning Tool in IIS"
permalink: kb/315/Q315673/
---

## Q315673: HOW TO: Use the Security Planning Tool in IIS

	Article: Q315673
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Install and Use the IIS Security Planning Tools
	
	- REFERENCES
	
	SUMMARY
	=======
	
	Web servers are the most common servers that are attacked by Internet intruders.
	To minimize the negative consequences of attack, you need to plan the security
	configuration of the Web server prior to implementing the Web server solution.
	One of the primary planning considerations is how the Web server processes
	permissions and access controls.
	
	There are three common Web server deployment scenarios. These deployment
	scenarios include:
	
	- Users access data is located on the Web server only. There are no virtual
	  directories that are located on other computers that are accessed by the Web
	  server.
	
	- Users access data is located on another computer. Data types that are
	  accessed might include Microsoft Access or Microsoft SQL Server databases or
	  files that are shared through a remote server file system.
	
	- Users access data is located on other computers by way of an intermediary.
	  For example: a server that is running a collection of DCOM components that
	  access database or file information on remote servers.
	
	With the Internet Information Services Security What If tool, you can determine
	which authentication schemes fit best based on the following factors:
	
	- Browser
	- Client operating system
	- Intranet or Internet server location
	- Version and domain membership of the Internet Information Services (IIS)
	  server
	- Web authentication method
	
	The security planning tool uses this information to determine which logon type is
	required and provides some helpful comments regarding your chosen
	configuration.
	
	Install and Use the IIS Security Planning Tools
	-----------------------------------------------
	
	Perform the following steps to install and to use the IIS Security Planning
	Tool:
	
	1. Download the tool from the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/release.asp?ReleaseID=24973
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=24973)
	
	2. Open the IISPerms.exe file. In the WinZIP Self-Extractor [IISPerms.exe]
	  dialog box, type "c:\IISPerms" (without the quotation marks) in the Unzip to
	  Folder text box, and then click Unzip.
	
	3. In Windows Explorer, open the IISPerms folder, and then double-click the
	  IISPermissions.htm file.
	
	4. The Internet Information Services Security What If Tool page opens. Configure
	  a scenario that matches your chosen Web server and Web client environment.
	  After you make your selections, click Check.
	
	5. The tool displays the required logon type for your scenario. There may also
	  be a comment that provides more details on your scenario. Under the comment,
	  there is a graphical representation of working and non-working
	  configurations.
	
	REFERENCES
	==========
	
	There are many facets to securing a Web server of which designing the
	appropriate authentication scheme is just one part. For more information about
	Microsoft Web server security, please visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security (http://www.microsoft.com/security)
	
	For a detailed explanation about why and how these scenarios work, please refer
	to Designing Secure Web-based Applications for Windows 2000, by Microsoft
	Press.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
