---
layout: page
title: "Q300991: HOW TO: Create New Virtual Web Site w/ Its Own IP Address in IIS"
permalink: kb/300/Q300991/
---

## Q300991: HOW TO: Create New Virtual Web Site w/ Its Own IP Address in IIS

	Article: Q300991
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 28-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- How to Create the Content Folder
	- How to Create the Virtual Web Site on IIS 4.0 or IIS 5.0
	
	   - IIS 4.0
	- IIS 5.0
	
	SUMMARY
	=======
	
	This article explains how to use Internet Services Manager to create a new
	virtual Web site that has its own IP address.
	
	Requirements
	------------
	
	- A static Internet Protocol (IP) address for the Web site to use.
	
	- A Windows Web server that is running either Internet Information Server (IIS)
	  4.0 or Internet Information Services (IIS) 5.0.
	
	- Administrative rights on the server computer.
	
	How to Create the Content Folder
	--------------------------------
	
	NOTE: If you have already created a folder that you want to use as the content
	for your new Web site, you can skip this section and proceed to the next
	section.
	
	1. Right-click the Windows Start menu, and then click Explore to open Windows
	  Explorer.
	
	2. Click the drive in which you want to place the content directory for the new
	  Web site.
	
	3. On the File menu, point to New, and then click Folder.
	
	4. Type a name for the folder (for example, type "Webcontent" (without the
	  quotation marks)), and then press ENTER key.
	
	5. On the File menu, click Close to close Windows Explorer.
	
	How to Create the Virtual Web Site on IIS 4.0 or IIS 5.0
	--------------------------------------------------------
	
	To create the virtual Web site on IIS 4.0 or IIS 5.0, use the steps in one of the
	following sections.
	
	IIS 4.0:
	
	1. On the Start menu, point to Programs, point to Windows NT 4.0 Option Pack,
	  point to Microsoft Internet Information Services, and then click Internet
	  Services Manager.
	
	  NOTE: Do not click Internet Services Manager (HTML).
	
	2. In the Console tree in the left pane, right-click your computer name, point
	  to New, and then click Web Site.
	
	3. On the first page of the Web Site Creation Wizard, type a name for the site
	  (for example, type "mywebsite" (without the quotation marks)), and click
	  Next.
	
	4. On the second page, in the Enter the IP address drop-down list box, click the
	  IP address that you have assigned to this Web site. Leave the Port number at
	  the default (which is normally 80). If you do not have Secure Sockets Layer
	  (SSL) on the server, the SSL Port text box is unavailable (grayed out);
	  otherwise, the default is 443. Click Next.
	
	  For more information about IP addressing, Host Headers, and SSL, see IIS Help
	  at the following location on your IIS computer:
	
	  http://localhost/iisHelp/iis/misc/default.asp
	
	5. On the third page, click Browse. Browse to the content folder that you
	  created in Section 2 (for example, the Webcontent folder). If this Web site
	  is intended for public use, make sure that the "Allow anonymous access to
	  this Web Site" check box is selected. If this Web site is meant to be
	  available to specific users only, clear this check box. Click Next.
	
	6. On the fourth page, select the Read and Run scripts (such as ASP) check
	  boxes. Make sure that the other check boxes are cleared. Click Finish to
	  complete the wizard.
	
	IIS 5.0:
	
	1. On the Start menu, point to Programs, point to Administrative Tools, and then
	  click Internet Services Manager.
	
	2. In the Console tree in the left pane, right-click your computer name, point
	  to New, and then click Web Site.
	
	3. On the first page of the Web Site Creation Wizard, click Next.
	
	4. On the second page, type a name for the site (for example, type "mywebsite"
	  (without the quotation marks)), and then click Next.
	
	5. On the third page, in the Enter the IP address drop-down list box, click the
	  IP address that you have assigned to this Web site. Leave the Port number at
	  the default (which is normally 80), and leave the "Host Header for this site"
	  text box blank. Click Next.
	
	  For more information about IP addressing, Host Headers, and SSL, see IIS Help
	  at the following location on your IIS computer:
	
	  http://localhost/iisHelp/iis/misc/default.asp
	
	6. On the fourth page, click Browse. Browse to the content folder that you
	  created in Section 2 (for example, the Webcontent folder). If this Web site
	  is intended for public use, make sure that the "Allow anonymous access to
	  this Web Site" check box is selected. If this Web site is intended to be
	  available to specific users only, clear this check box. Click Next.
	
	7. On the fifth page, select the Read and Run scripts (such as ASP) check boxes.
	  Make sure that the other boxes are cleared. Click Next, and then click Finish
	  to complete the wizard.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
