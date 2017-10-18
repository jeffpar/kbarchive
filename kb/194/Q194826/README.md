---
layout: page
title: "Q194826: HOWTO: Designate a Visual SourceSafe Project as a Web Project"
permalink: kb/194/Q194826/
---

## Q194826: HOWTO: Designate a Visual SourceSafe Project as a Web Project

	Article: Q194826
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbSSExplorer kbDSupport
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating a Web site from a Visual SourceSafe project, some of the
	information that is asked for is not fully explained.
	
	MORE INFORMATION
	================
	
	The following is a description of what each box on the Web Project tab expects:
	
	This Project represents a Web Site
	----------------------------------
	
	This is the project that is going to be made into a Web project.
	
	URL
	---
	
	This is the server location where the Web site will be located. This should
	include:
	
	  <LINK TYPE="GENERIC" VALUE="http://"">http://"</LINK>
	
	in front of it. It should be the entire path to the Web site. For example:
	
	  http://MyServer/MyDivision/MyProject
	
	Virtual Root
	------------
	
	If the project will be accessed from a different, shorter path, add that path
	here. In IIS, these are known as Virtual Directories; other Web Servers may have
	something similar that this might work with. You do not add the first "/" for
	the directory. For example, "MySite" would make this Web site's location be
	
	  "<LINK TYPE="GENERIC"
	  VALUE="http://MyServer/MySite".">http://MyServer/MySite".</LINK>
	
	Site map filename
	-----------------
	
	Change the default name of the site map you can create for this site. The default
	name is SiteMap.htm.
	
	Deployment path
	---------------
	
	This is where the Web site should be sent. It can contain multiple locations, all
	separated by commas. They should be ftp addresses or directory paths. Please see
	the following examples:
	
	  C:\InetPub\Wwwroot\mysite
	
	  \\Server\Wwwroot\mysite
	
	  ftp://username:password@www.microsoft.com/mysite
	
	 
	  \\Server\Wwwroot\mysite, 
	
	  ftp://username:password@Myserver
	
	Set Another
	-----------
	
	This commits the changes for this project and then clears the boxes so that you
	can set another if you choose. If you click OK, you commit the changes.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbSSExplorer kbDSupport 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
