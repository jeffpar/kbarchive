---
layout: page
title: "Q143101: FP: Using FrontPage Without the Server Extensions"
permalink: /kb/143/Q143101/
---

## Q143101: FP: Using FrontPage Without the Server Extensions

	Article: Q143101
	Product(s): Word Front Page
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194134.
	
	SUMMARY
	=======
	
	If the FrontPage Server Extensions are not available on the target Web server,
	you can still use FrontPage to develop your Web pages. For example, you can
	develop the Web by using the Microsoft Personal Web Server on your computer and
	then transferring your Web content to the target Web server. Keep in mind that
	when you do this, you may lose some features or experience some
	incompatibilities between your working server and the target server. This
	article discusses features to avoid if you are publishing your content to a
	server on which you have not installed the FrontPage Server Extensions and how
	to handle these incompatibilities.
	
	MORE INFORMATION
	================
	
	If your Web server and operating system are compatible with the FrontPage Server
	Extensions, ask your service provider to install them. If the FrontPage Server
	Extensions do not currently support your Web server and operating system, you
	can submit a suggestion asking Microsoft to provide extensions for your server.
	Microsoft welcomes suggestions or comments about changes in functionality and
	product design. You are invited to submit suggestions by filling out the form at
	the following Microsoft Web site:
	
	  http://www.microsoft.com/regwiz/regwiz.asp
	
	NOTE: To determine whether your server and operating system are compatible With
	the FrontPage Server Extensions, please see the following Microsoft World Wide
	Web site:
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnservext/html/fpse02win.asp
	
	Avoiding Browse-Time WebBot Components
	--------------------------------------
	
	Most WebBot components affect the Web only at authoring time. For example, a
	WebBot Include component or WebBot Table of Contents component affects the page
	it is on only when that page or some other page is created or modified. These
	WebBot components are inactive at browse-time. However, some WebBot components,
	especially those that are used with forms, rely on the FrontPage Server
	Extensions at browse-time. If you are transferring your files to a Web server on
	which the FrontPage Server Extensions are not installed, you should avoid using
	the following WebBot components:
	
	  WebBot Confirmation Field component
	  WebBot Discussion component
	  WebBot Guest Book component
	  WebBot Registration component
	  WebBot Save Results component
	  WebBot Scheduled Image component
	  WebBot Scheduled Include component
	  WebBot Search component
	
	If you use any of these WebBot components, customers who browse your Web Site may
	receive an "HTTP 404" error when using the corresponding form.
	
	Avoiding FrontPage Image Maps in FrontPage 1.0
	----------------------------------------------
	
	Image maps created with FrontPage 1.0 rely on the FrontPage Server Extensions at
	browse-time. To avoid problems at browse-time, you should use The image map
	utility that is supported by your Web server.
	
	FrontPage 1.1 is capable of generating both client-side image maps and native
	image maps for several server types. For more information about this feature,
	click Web Settings on the Tools menu in FrontPage Explorer, and then click the
	Advanced tab. When a browser is capable of using a client-side image map, it
	will use this instead of a server-side image map.
	
	Avoiding Server Incompatibilities
	---------------------------------
	
	If possible, develop your content on the same type of Web server that you are
	using for your target Web server. If this is not possible, avoid
	incompatibilities between your working server and your target server. Some
	potential trouble areas include the following:
	
	Access Control:
	
	Access control does not carry over between Web servers of different types. You
	will have to re-enter any access control information for the new server.
	
	File Name Extensions:
	
	Different Web servers may have different rules for mapping file name extensions
	to Multipurpose Internet Mail Extensions (MIME) types. For example, a
	Windows-based server may recognize only .htm as HyperText Markup Language
	(HTML), while a UNIX-based server may recognize only .html.
	
	NOTE: You can reconfigure your working server to match the target server. The
	FrontPage wizards and templates generate pages that have the .htm extension. If
	possible, you should make sure that your target server recognizes the .htm
	extension for HTML files.
	
	Default Pages:
	
	Different Web servers have different conventions for naming the default page. For
	example, the CERN server recognizes Welcome.html (among others) by default,
	while NCSA 1.4 recognizes Index.html. Note that you can reconfigure your working
	server to match the target server. FrontPage will create the home page document
	with whatever name the working server provides. For additional information about
	configuring the default home page for the FrontPage Personal Web Server, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q150681 FP: How to Use a Document Other Than Index.htm as Default Page
	
	Transferring the Content
	------------------------
	
	Once your content has been developed and tested on your working server, you can
	copy or transfer the files via File Transfer Protocol (FTP) to the target
	server. The following files and folders should not be transferred:
	
	All folders beginning with _vti_:
	
	These folders contain information for use only when the FrontPage Server
	Extensions are present.
	
	Access Control Files:
	
	These files vary depending on the type of Web server. In general, you should
	remove all files that begin with a period if you are transferring files to a
	UNIX server, and you should remove all files that begin with the number sign (#)
	if you are moving files to a Windows-based server.
	
	NOTE: If you are using FrontPage 1.1, you can obtain the Microsoft Web Publishing
	Wizard to automate the FTP process. It will warn you if your Web contains files
	that will not work on a server that does not have the FrontPage Server
	Extensions. And, it will copy only the files that do work to the destination
	server. You can download the Web Publishing Wizard from the following Microsoft
	World Wide Web site:
	
	  http://www.microsoft.com/windows/software/webpost/
	
	For additional information about publishing your web to a server that does not
	have the FrontPage Server Extensions installed, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q181127 FP: How to Publish Your Web to a Server w/o FrontPage Extensions
	
	Additional query words: front page explorer editor personal Web server vermeer extensions bot bots publish mspws fppws
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbFrontPage97 kbZNotKeyword kbZNotKeyword2 kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage100 kbFrontPage110 kbFrontPageMacSearch
	Version           : :1.0,1.1
	Hardware          : MAC x86
	Issue type        : kbinfo
	
	=============================================================================
	
