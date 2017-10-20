---
layout: page
title: "Q189409: INFO: Controlling the Caching of Web Pages with IIS 4.0"
permalink: /kb/189/Q189409/
---

## Q189409: INFO: Controlling the Caching of Web Pages with IIS 4.0

{% raw %}

	Article: Q189409
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSASP
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of this article is to describe how to control caching in the three
	applications that can control the caching of a Web page. It will not go into
	thorough detail for all, but will provide references to articles where you can
	find more details.
	
	MORE INFORMATION
	================
	
	Caching of Web Pages can happen in three separate entities in a Web environment.
	When you think about caching, you usually think about the Web pages cached
	locally in your temporary Internet files on your local machine as a result of
	having visited the page. But caching can also occur within the Internet
	Information Server (IIS) Server, and if a proxy server is present, it can be
	configured to cache the pages. This article describes how to prevent client
	browser caching and how to configure IIS 4.0 server caching. For more
	information please see the references section of this article.
	
	Browser Caching
	---------------
	
	By default, the browser caches a visited Web page and stores it in the temporary
	Internet files of the profile that was used to log into the computer. If users
	of the browser do not want to be presented with cached pages when requested,
	they can define how the Internet Explorer browser will request content by
	following these steps:
	
	1. Open Internet Explorer 4.x.
	
	2. From the View menu, click Internet Options.
	
	3. Click the General tab.
	
	4. Click the Settings button.
	
	5. Select "Every visit to the page" for how often to check for newer versions of
	  stored pages.
	
	But having all of your users do this is unreliable, and the above example
	describes only how to do this on one of many different browsers. To
	programmatically prevent a Web page from caching on the client, add the
	following line of code to the Meta section of your Web page:
	
	     <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
	
	IIS 4.0 Caching
	---------------
	
	ISAPI applications (Active Server Pages Web pages) can be cached on Internet
	Information Server. When you create a new IIS 4 application, caching of ISAPI
	Applications is on by default. Use these steps to disable caching:
	
	1. Open the Microsoft Management Console (Inetmgr.exe).
	
	2. Browse the Internet Information Server tree until you reach your application.
	
	3. Right-click your application, and select Properties.
	
	4. Click the Directory tab, and then click the configuration button*.
	
	5. Click the App Mappings Tab, and clear Cache ISAPI Applications.
	
	* If the virtual directory is not an application, the configuration button will
	not be available. Click the Create button, and then the configure button will be
	available.
	
	You have now prepared your IIS Application so that it won't cache your ASP pages.
	But this alone is not enough. At the top of the .asp page that you do not want
	cached, add the following line:
	
	     <% Response.Expires=0 %>
	
	Proxy Server Caching
	--------------------
	
	To prevent the caching of Active Server Pages at the proxy server, add the
	following lines at the top of your .asp page:
	
	     <% Response.cachecontrol="private" %>
	
	To Enable caching, add the following to your page:
	
	     <% Response.cachecontrol="public" %>
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q165150 : How to Use Pragma: No-cache with IIS and IE
	
	  Q172896 : PRB: Browser Doesn't Show Most Recent Versions of htm/asp Files
	
	  Q183763 : Error Msg: Warning: Page Has Expired: The Page You Requested...
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSASP 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
