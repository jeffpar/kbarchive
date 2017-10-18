---
layout: page
title: "Q165346: FP: Server Side Includes Pose Security Threat W/ Feedback Form"
permalink: kb/165/Q165346/
---

## Q165346: FP: Server Side Includes Pose Security Threat W/ Feedback Form

	Article: Q165346
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Server Side Includes (SSI) can pose a security threat to any web server. If
	executable SSI are enabled on a server that contains a FrontPage feedback form,
	the security threat will be increased. This security threat occurs under
	specific conditions as described in the "More Information" section of this
	article.
	
	CAUSE
	=====
	
	The FrontPage Server Extensions enable you to write HyperText Markup Language
	(HTML) from a Web browser into a form and have it accurately evaluated by the
	Web server.
	
	RESOLUTION
	==========
	
	Microsoft strongly recommends that you disable executable SSI on any server on
	which you have installed the FrontPage Server Extensions.
	
	If your server must retain support for executable SSI, install the updated
	version of the FrontPage Server Extensions. You can download the updated
	FrontPage Server Extensions from the following Microsoft web site:
	
	  http://www.microsoft.com/frontpage/wpp/exts.htm
	
	The updated FrontPage Server Extensions will not allow HTML tags in any feedback
	form. Instead, the FrontPage Server Extensions will convert the HTML tags into
	the corresponding character entities that represent the code. For example, the
	less than sign (<) will be converted to &lt; and the greater than sign
	(>) will be converted to &gt;. This allows you to enter the HTML code
	into the feedback form. When you browse the form, the code will appear exactly
	as you typed it when you filled out the feedback form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft FrontPage Server
	Extensions version 2.0.2.1112. This problem was corrected in Microsoft FrontPage
	Server Extensions version 2.0.3.209.
	
	MORE INFORMATION
	================
	
	Any web site that uses the FrontPage Server Extensions and where the results
	from a WebBot Discussion component, WebBot Confirmation component, or WebBot
	Save Results component are saved to a public HTML page, such as a guest book,
	can be compromised by server-side executable commands entered into a feedback
	form.
	
	On Web servers that support SSI, the include capabilities are disabled by
	default. They can be activated by the administrator of the Web server. If they
	are enabled, the server only parses files with a mime type of either
	text/x-server-parsed-html or text/x-server-parsed-html3. Neither of these mime
	types exists in most standard mime types. Therefore, by default, no files are
	parsed for server-side includes even if SSI is enabled. If the administrator of
	the Web server enables SSI, SSI can still be configured to turn off #exec
	includes by modifying the configuration files for the Web server.
	
	If the Feedback Form is altered to create a file with the proper SSI extension,
	and if the server is configured to allow executable server- side includes then
	the new content can execute arbitrary programs on the server.
	
	The revised version of the FrontPage Server Extensions will still convert valid
	URLs into hyperlinks.
	
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
