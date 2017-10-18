---
layout: page
title: "Q301392: HOW TO: Create a Virtual Folder (Subweb) in IIS 4.0 or IIS 5.0"
permalink: kb/301/Q301392/
---

## Q301392: HOW TO: Create a Virtual Folder (Subweb) in IIS 4.0 or IIS 5.0

	Article: Q301392
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbAudITPro kbHOWTOmaster
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
	- Create the Content Folder
	- Create the Virtual Website
	
	SUMMARY
	=======
	
	This step-by-step article explains how to use Internet Services Manager to
	create a new virtual Web site with its own IP address.
	
	Requirements
	------------
	
	The following list outlines the recommended hardware, software, network
	infrastructure, and service packs that you will need:
	
	- A Windows Web server that is running either Internet Information Server (IIS)
	  4.0 or IIS 5.0.
	
	- A root Web site (in this example, the default Web site).
	
	- Administrative rights on the server computer.
	
	Create the Content Folder
	-------------------------
	
	NOTE: If you have already created a content folder, skip this section and proceed
	directly to section 3.
	
	1. Right-click Start and click Explore to open Windows Explorer.
	
	2. Select the drive in which you want to place the content folder for the new
	  Web site.
	
	3. Click File, point to New and click Folder.
	
	4. When the folder is created, the title area will be highlighted. Type the name
	  that you want to give the folder (such as Webcontent). Press ENTER.
	
	5. Click File and click Close to close Windows Explorer.
	
	Create the Virtual Website
	--------------------------
	
	- For IIS 4.0:
	
	  1. Click Start, point to Programs, select Windows NT 4.0 Option Pack, point
	     to Microsoft Internet Information Services and click Internet Services
	     Manager.
	
	     NOTE: Do not click HTML.
	
	  2. In the left pane, right-click Default Web Site, point to New, and then
	     click Virtual Directory.
	
	  3. In the first screen of the Virtual Directory Creation Wizard, type a name
	     for the site (such as Mywebsite) and click Next.
	
	  4. In the second screen, click Browse. Browse to the content folder that you
	     created in section 2 (in this example, it is Webcontent). Click Next.
	
	  5. In the third screen, select Read and Run scripts (such as ASP). Make sure
	     that the other check boxes are cleared. Click Finish to complete the
	     wizard.
	
	  6. Right-click the new virtual folder and click Properties.
	
	  7. Click Virtual Directory and make sure that the Web site name is listed in
	     the Application Name edit box under Application Settings. If it is not,
	     click Create.
	
	  8. Close the Properties dialog box and close IIS.
	
	- FOR IIS 5.0
	
	  1. Click Start, point to Programs, select Administrative Tools, and then
	     click Internet Services Manager.
	
	  2. In the left pane, right-click Default Web Site, point to New, and then
	     click Virtual Directory.
	
	  3. In the first screen of the Virtual Directory Creation Wizard, type a name
	     for the site (such as Mywebsite) and click Next.
	
	  4. In the second screen, click Browse. Browse to the content folder that you
	     created in section 2 (in this example, it is Webcontent). Click Next.
	
	  5. In the third screen, select Read and Run scripts (such as ASP). Make sure
	     that the other check boxes are cleared. Click Finish to complete the
	     wizard.
	
	  6. Right-click the new virtual folder and click Properties.
	
	  7. Click Virtual Directory and make sure that the Web site name is listed in
	     the Application Name edit box under Application Settings. If it is not,
	     click Create.
	
	  8. Close the Properties dialog box and close IIS.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
