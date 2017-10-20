---
layout: page
title: "Q226474: Err Msg: Active Server Pages, ASP 0131 Disallowed Parent Path"
permalink: /kb/226/Q226474/
---

## Q226474: Err Msg: Active Server Pages, ASP 0131 Disallowed Parent Path

{% raw %}

	Article: Q226474
	Product(s): Internet Information Server
	Version(s): winnt:4.0;5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use relative paths in include statements with Microsoft's Active Server
	Pages (ASP), browsing a Web page may return an error message similar to the
	following:
	
	  Active Server Pages, ASP 0131
	  Disallowed Parent Path
	  The Include file '../<filename.ext>' cannot contain '..' to indicate the
	  parent directory.
	  /<path>/<filename.ext>, line <number>
	
	CAUSE
	=====
	
	This is caused by disabling ASP's "parent paths" for a Web site or application
	while using relative parent paths in an include statement.
	
	Relative parent paths in include statements use the following form:
	
	  
	
	  <!--#include file="../<filename.ext>"-->
	
	
	RESOLUTION
	==========
	
	The best solution to the problem is to use absolute virtual paths from the root
	of the Web site instead of relative paths.
	
	For example, if you use an include file named "foo.inc" at the root of your
	server, the virtual path would be "/foo.inc." If you use the same include file
	in a virtual directory named "/includes" on your server, the virtual path would
	be "/includes/foo.inc."
	
	The syntax example below illustrates how to implement virtual paths:
	
	  
	
	  <!--#include virtual="/<virtual path>/<filename.ext>"-->
	
	
	An alternative to using absolute virtual paths is to enable parent paths;
	however, this is not the preferred method. (See the notes in the More
	Information section for details.) This is accomplished for your default Web site
	by using the following steps:
	
	1. Open the Internet Services Manager in the Microsoft Management Console (MMC).
	
	2. Right-click on your Default Web Site and select Properties.
	
	3. Click the Home Directory tab.
	
	4. Click the Configuration button.
	
	5. Click the App Options tab.
	
	6. Click to select the Enable Parent Paths checkbox.
	
	7. Click the OK button until you return to the MMC.
	
	MORE INFORMATION
	================
	
	: There are additional security considerations to be considered when enabling
	parent paths on an IIS computer. For more information, please see the following
	Knowledge Base article:
	
	  Q184717 AspEnableParentPaths MetaBase Property Should Be Set To False
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0;5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
