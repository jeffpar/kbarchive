---
layout: page
title: "Q224147: How to Reset Permissions Using FrontPage 98 Server Extensions"
permalink: kb/224/Q224147/
---

## Q224147: How to Reset Permissions Using FrontPage 98 Server Extensions

	Article: Q224147
	Product(s): Word Front Page
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to reset permissions in FrontPage Extended Webs on
	IIS Web servers.
	
	MORE INFORMATION
	================
	
	Incorrect permissions can be the root of many problems encountered with the use
	of the FrontPage Server Extensions. The following steps are a good starting
	point in trouble shooting problems with the Server Extensions.
	
	Note: You must be a FrontPage Administrator in order to do the following.
	
	1. Click Start and point to Programs.
	
	2. Click Microsoft FrontPage 98.
	
	3. If your Web is in the list, highlight it, click OK, and skip to step 6. If
	  your Web is not in the list, click More Webs and type the name of your server
	  in the box.
	
	4. Click List Webs.
	
	5. Highlight your Web and click OK.
	
	6. On the Tools menu, click Permissions.
	
	7. On the User tab, remove IUSR_<computername> (if it is there).
	
	8. On the Groups tab, remove Interactive, Network, and Everyone (if they are
	  listed).
	
	9. Click Apply.
	
	10. On the User tab, make sure that the correct radio button is selected to
	  either enable or restrict browse access, based on your preference.
	
	11. Click OK.
	
	If Interactive or Network is on the Groups tab, do the following:
	
	1. Click Start, and then click Run.
	
	2. Type the following path in the "Open:" box:
	
	  <drive>:\Program Files\Microsoft FrontPage\Version3.0\Bin\Fpsrvwin.exe
	
	  where <drive> is the drive where FrontPage is installed (C by default).
	
	3. In the Select Server or Port box, highlight your server and click the Check
	  and Fix button.
	
	4. If you are prompted to tighten security as much as possible, choose Yes.
	
	5. From a command prompt, type the following:
	
	  For IIS 4.0
	
	  net stop iisadmin /y
	  net start w3svc
	  net start msftpsvc
	  net start smtpsvc
	
	  For IIS 3.0
	
	  net stop w3svc
	  net start w3svc
	
	For more information about the specific permissions that FrontPage applies to the
	content, please see the following:
	
	  http://officeupdate.microsoft.com/frontpage/wpp/serk
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:
	
	=============================================================================
	
