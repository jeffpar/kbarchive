---
layout: page
title: "Q224418: Active Server Pages Appear Blank in the Web Browser"
permalink: /kb/224/Q224418/
---

## Q224418: Active Server Pages Appear Blank in the Web Browser

{% raw %}

	Article: Q224418
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Web site or modify an existing Web site with Visual Studio or
	Visual InterDev, all ASP pages for that Web site may stop working or display
	only blank content in the Web browser.
	
	ASP pages may work properly in other Web sites or other Web applications.
	
	All HTML files continue to work in all Web sites.
	
	CAUSE
	=====
	
	This is caused by certain "TypeLib" metadata tags that are present in the
	Global.asa for the Web site experiencing this problem.
	
	RESOLUTION
	==========
	
	Edit the Global.asa for the Web site experiencing the problem and look for the
	following or similar metadata tags:
	
	  <!--METADATA TYPE="TypeLib" NAME="Microsoft ActiveX Data Objects 2.0 Library" UUID="{00000200-0000-0010-8000-00AA006D2EA4}" VERSION="2.0"-->
	  <!--METADATA TYPE="TypeLib" NAME="Microsoft ActiveX Data Objects Recordset 2.0 Library" UUID="{00000300-0000-0010-8000-00AA006D2EA4}" VERSION="2.0"-->
	  <!--METADATA TYPE="TypeLib" NAME="Microsoft Active Server Pages Object Library" UUID="{D97A6DA0-A85C-11CF-83AE-00A0C90C2BD8}" VERSION="2.0"-->
	
	To determine whether you are experiencing this problem, remove any of the above
	tags if they are present, as well as any additional metadata tags from the
	Global.asa, and then try browsing ASP pages.
	
	This problem is caused by having an older version of Windows Scripting
	environment installed on the WWW server.
	
	Visual Studio and Visual InterDev assume a newer version is present when creating
	or managing Web sites and may create metadata tags specific to these newer
	versions of the scripting environment.
	
	To resolve this issue please obtain the latest version of the Windows Scripting
	environment at http://msdn.microsoft.com/ and download the latest version for
	your platform.
	
	WORKAROUND
	==========
	
	To work around this problem, you can remove the Metadata tags one at a time
	until you determine which ones are causing the ASP pages to not display.
	However, the recommended resolution is to install the latest Windows Scripting
	environment on the WWW server.
	
	Additional query words: ASP IIS Display Blank Data Content
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
