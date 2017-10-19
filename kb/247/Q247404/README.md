---
layout: page
title: "Q247404: How to Modify the Cache-Control HTTP Header When You Use IIS"
permalink: /kb/247/Q247404/
---

## Q247404: How to Modify the Cache-Control HTTP Header When You Use IIS

	Article: Q247404
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Web administrators who use Internet Information Services (IIS) may need to
	periodically disable the caching of content that changes frequently. This
	article describes how to set the value of the Cache-Control HTTP Header by using
	Active Server Pages (ASP), as well as the metabase property CacheControlCustom.
	
	MORE INFORMATION
	================
	
	When you work with content that often changes, you may want to specify what
	content can be cached and what cannot, and if the client or a proxy server
	should cache the content. You can specify these options in IIS through the
	CacheControlCustom property, which can be set for the entire server, a
	particular Web site, or a specific physical or virtual directory. Setting this
	property returns HTTP headers that resemble the following:
	
	  HTTP/1.1 200 OK
	  Server: Microsoft-IIS/5.0
	  Cache-Control: <CACHE SETTING>
	  Content-Type: <type>/<subtype>
	  Content-Length: <size of content>
	
	The cache setting value is determined by the HTTP/1.1 specification.
	
	Commonly-Used HTTP/1.1 Cache-Control Header Values
	--------------------------------------------------
	
	The HTTP/1.1 specification in RFC 2616 defines several values for the
	Cache-Control header. The following list contains a few of the more common
	values that are used.
	
	- Public: The HTTP response may be cached by any cache. For example, either a
	  client or a proxy server can cache the response. This allows sharing of
	  content across users who are using the same proxy server.
	
	- Private: The response message is intended for a single client and must not be
	  cached by a shared cache. For example, a proxy server should not cache the
	  response even though a client can. This allows the client to maintain a
	  cached version, while other clients that are using the same proxy server
	  maintain different cached versions.
	
	- No-cache: No cache in the entire path should maintain a cached copy of the
	  response. This allows you to specify that neither the client or proxy server
	  will respond to a subsequent content request by using a cached version.
	
	Setting the Cache-Control Property
	----------------------------------
	
	The following examples define different methods for setting this value:
	
	For a Page:
	
	Using Active Server Pages (ASP), the following ASP code disables caching of a
	particular page:
	
	  <% @Language="VBScript" %>
	  <% Response.CacheControl = "no-cache" %>
	
	NOTE: This code must be inserted at the beginning of the page, unless buffering
	is enabled, because it is modifying the HTTP headers.
	
	For a Folder:
	
	The following examples set the Cache-Control setting for a folder or virtual
	directory named "Images" in the default Web site:
	
	- Using Adsutil.vbs:
	
	  1. Open a command prompt and change to your C:\InetPub\AdminScripts folder.
	
	  2. Run the following command:
	
	  CSCRIPT ADSUTIL.VBS SET W3SVC/1/ROOT/images/CacheControlCustom "no-cache"
	
	- Using ADSI Scripting:
	
	  1. In Notepad, enter the following ADSI code:
	
	  Option Explicit
	  Dim objCache
	  Set objCache = GetObject("IIS://localhost/w3svc/1/root/images")
	  objCache.CacheControlCustom = "no-cache"
	  objCache.SetInfo
	
	  2. Save the file as Disablefolder.vbs in your C:\InetPub\AdminScripts folder,
	     and then close Notepad.
	
	  3. At a command prompt, change to your C:\InetPub\AdminScripts folder.
	
	  4. Run the following command:
	
	  CSCRIPT DISABLEFOLDER.VBS
	
	REFERENCES
	----------
	
	For more information on this topic, please see the following Microsoft Knowledge
	Base article:
	
	  Q247389 IIS: How to Disable Caching of Specific MIME Types
	
	In addition, see section 14.9 of the HTTP/1.1 specification in RFC 2616 at the
	following URL:
	
	  RFC 2616 Hypertext Transfer Protocol -- HTTP/1.1
	
	Additional query words: iis5 iis5.0
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
