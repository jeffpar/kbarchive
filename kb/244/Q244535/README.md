---
layout: page
title: "Q244535: HOW TO: Move a FrontPage Extended Web Site to Different Location"
permalink: /kb/244/Q244535/
---

## Q244535: HOW TO: Move a FrontPage Extended Web Site to Different Location

{% raw %}

	Article: Q244535
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- FrontPage 2000 Server Extensions from Microsoft 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	
	- SUMMARY
	
	   - Move the Web Site to a Different Drive
	
	SUMMARY
	=======
	
	This step-by-step article describes how to move the content of your Web site to
	a new folder and maintain the use of FrontPage Server Extensions.
	
	Move the Web Site to a Different Drive
	--------------------------------------
	
	Content that is used in a Web site is placed in the C:\Inetpub\Wwwroot folder by
	default. You can place these files in any local or remote folder if you
	configure the Web site to reference the new folder. For example, you can move
	the Home folder from drive C to drive D.
	
	To move your content to drive D, follow these steps:
	
	1. In Control Panel, click Performance and Maintenance, click Administrative
	  Tools, click Services, and then stop the IIS Admin service.
	
	2. Click Start, point to Programs, click Windows NT 4.0 Option Pack, click
	  Internet Information Server, and then click Internet Service Manager.
	
	3. Right-click the site that you want to move, and then point to All Tasks.
	
	4. Select Remove Server Extensions.
	
	5. When you receive the prompt to preserve meta data, ensure that Preserve web
	  meta-information for later upgrade or reinstall of FrontPage Server
	  Extensions is selected.
	
	6. Open Windows NT Explorer and create a folder on drive D.
	
	NOTE: If you want to move your Web site content to a different server, create the
	folder on the remote server.
	
	7. Copy all folders that contain your content to the folder that you created on
	  drive D.
	
	8. In Internet Services Manager, right-click the Web site that you want to move,
	  and then click Properties.
	
	9. Click the Home Directory tab.
	
	NOTE: If you want to move your Web site content to a different server, click the
	Home Directory tab, and then select A share located on another computer.
	
	10. Change the local path to reflect the new location of your Web contents on
	  drive D.
	
	NOTE: If you want to move your Web site content to a different server, the path
	is the network share on the other computer (for example,
	<\\Server2\wwwroot>). You must also specify the account that you want to
	use when you connect to the share.
	
	11. Click Apply, and then click OK.
	
	12. In the Internet Service Manager, right-click the Web site, click All Tasks,
	  and then click Configure Server Extensions. Reset the extensions to match
	  the previous configuration.
	
	13. Start the IIS Admin service.
	
	14. In the Internet Service Manager, right-click the Web site that you just
	  changed, and then click Browse. The default content that is now stored in
	  the new folder appears.
	
	15. Remove and reapply the FrontPage Server Extensions to ensure that the
	  FrontPage Server Extensions operate properly.
	
	Additional query words: migrate
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbFrontPageSearch kbFrontPageServXSearch kbiis400 kbFrontPage2000Search kbFrontPage2000ServX
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
