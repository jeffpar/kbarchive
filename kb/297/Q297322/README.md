---
layout: page
title: "Q297322: FP: Error Message: Cannot Open Service.lck for Writing, Reading"
permalink: /kb/297/Q297322/
---

## Q297322: FP: Error Message: Cannot Open Service.lck for Writing, Reading

{% raw %}

	Article: Q297322
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 19-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- FrontPage 2002 Server Extensions from Microsoft 
	- Microsoft FrontPage 2000 
	- FrontPage 2000 Server Extensions from Microsoft 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q222008.
	
	SYMPTOMS
	========
	
	If you try to open or list Webs by using the FrontPage Server Extensions running
	on an Internet Information Services (IIS) computer, or you try to open a
	disk-based Web, you may receive one of the following error messages:
	
	  Server Error: Cannot open file "C:\InetPub\WWWRoot\_vti_pvt\service.lck" for
	  writing.
	
	  -or-
	
	  Server Error: Cannot open file "C:\InetPub\WWWRoot\_vti_pvt\service.lck" for
	  reading.
	
	NOTE: If you receive this error message after transferring your Web from a
	compact disc, the problem is the result of the files being marked as read-only.
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q303255 FP2000: Error Message Saving Changes to Web: Cannot Open File
	  ...\_vti_pvt\Service.lck for Writing
	
	CAUSE
	=====
	
	The error messages described in the "Symptoms" section of this article can occur
	if either of the following is true:
	
	- The Service.lck file is corrupted.
	
	  -or-
	
	- There is a problem with the permissions on the Service.lck file in the Web
	  you are trying to open.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods.
	
	Method 1: Delete the Service.lck File
	-------------------------------------
	
	If a network connection terminates incorrectly or if FrontPage shuts down
	unexpectedly, the Service.lck file can become corrupted. To correct this
	problem, delete the Service.lck file. To do this, follow these steps:
	
	1. Quit FrontPage.
	
	2. Double-click the My Computer icon.
	
	3. Double-click the disk drive that contains your Web server. For example,
	  double-click drive C.
	
	4. Double-click the Inetpub folder.
	
	5. Double-click the Wwwroot folder.
	
	6. Double-click the _vti_pvt folder.
	
	7. Right-click the Service.lck file and click Delete on the menu that appears.
	
	8. If you are prompted to confirm the deletion, click Yes.
	
	Method 2: Reset the Permissions for the IIS Anonymous Account
	-------------------------------------------------------------
	
	To reset permissions for the IIS Anonymous Account, follow these steps:
	
	1. Open Internet Services Manager. To do this, use the method appropriate to
	  your situation:
	
	   - If you have IIS 5.0:
	
	     On the Windows Start menu, point to Programs, point to Administrative
	     Tools, and then click Internet Services Manager.
	
	   - If you have IIS 4.0:
	
	     On the Windows Start menu, point to Programs, point to Microsoft Windows NT
	     4 Option Pack, point to Microsoft Internet Information Server, and then
	     click Internet Services Manager.
	
	2. Right-click the virtual server that the web is running on (for example,
	  right-click the Default Web Site), and then click Properties on the menu that
	  appears.
	
	3. Click the Directory Security tab. In the "Anonymous Access and Authentication
	  Control" section, click Edit.
	
	4. Click to clear the Allow Anonymous check box.
	
	5. Click OK. Click Apply. Minimize Internet Services Manager.
	
	6. Start or switch to FrontPage. Open the web and then minimize FrontPage.
	
	7. Maximize Internet Services Manager. Click the Directory Security tab. In the
	  "Anonymous Access and Authentication Control" section, click Edit.
	
	8. Click to select the Allow Anonymous check box.
	
	9. Click OK twice and close Internet Services Manager.
	
	10. Switch to FrontPage. On the Tools menu, point to Security (in FrontPage
	  2000) or Server (in FrontPage 2002) and then click Permissions.
	
	11. Click the Users tab.
	
	  In FrontPage 2000:
	
	  Click to select the "Only registered users have browse access" check box.
	
	  In FrontPage 2002:
	
	  Click to select the "Valid username and password required to browse this web"
	  check box.
	
	12. Click Apply.
	
	13. After the process executes, do either of the following:
	
	  In FrontPage 2000:
	
	  Click to select the "Everyone has browse access" check box. Click Apply.
	
	  In FrontPage 2002:
	
	  Click to clear the "Valid username and password required to browse this web"
	  check box. Click Apply.
	
	14. Click OK to close the Permissions dialog box.
	
	
	MORE INFORMATION
	================
	
	Because the FrontPage permissions scheme is very specific, permissions related
	problems most commonly occur if the NTFS permissions in Windows NT Explorer were
	manually changed.
	
	  Q265468 FP2000: Security Command Is Not Available on Tools Menu
	
	  Q208628 FP2000: No Prompt for User Name and Password on IIS Web
	
	  Q271071 Minimum NTFS Permissions Required for IIS 5.0 to Work
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPageServXSearch kbZNotKeyword2 kbFrontPage2000Search kbFrontPage2002Search kbFrontPage2000ServX kbFrontPage2002ServX kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
