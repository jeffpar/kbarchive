---
layout: page
title: "Q260267: FrontPage Server Extensions Image Map Files Expose Vulnerability"
permalink: /kb/260/Q260267/
---

## Q260267: FrontPage Server Extensions Image Map Files Expose Vulnerability

{% raw %}

	Article: Q260267
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FrontPage 97 and 98 Server Extensions include two image map files,
	Htimage.exe and Imagemap.exe, which are server-side NCSA and CERN compliant
	components, that are used to support server-side image maps.
	
	These files were originally provided to support image maps with Netscape and
	Internet Explorer versions 1.0 and 2.0. However, both files contain unchecked
	buffers that may be used to run arbitrary code. These files expose security
	vulnerabilities, which can result in buffer overruns, exploits of cross-site
	scripting, and access to drive path and file information.
	
	NOTE: This problem does not occur in the FrontPage 2000 Server Extensions.
	
	RESOLUTION
	==========
	
	To eliminate this vulnerability, customers who are hosting Web sites using any
	of the affected products need to delete all copies of the Htimage.exe and
	Imagemap.exe files from their servers. The only functionality lost by deleting
	these files is the ability to support image mapping for Web site visitors using
	legacy browser products.
	
	This is a short-term fix, because it is possible that FrontPage customers may
	unknowingly publish the files to the server in their normal course of updating
	their Webs.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FrontPage 97 and 98
	for Windows.
	
	MORE INFORMATION
	================
	
	The risk posed by this vulnerability is significantly restricted by the fact
	that the affected components run "out of process" and in the security context of
	the user. Therefore, there is no capability through this vulnerability that
	causes either the Web service or the server itself to stop responding, nor is
	there an opportunity to run code in an elevated security context. However, it
	may still be possible for a malicious user to perform actions that, although
	permitted, he or she would otherwise be unable to take because the functionality
	is not exposed through a Web page or script.
	
	The server-side image map components are rarely used, because, by default,
	FrontPage creates client-side image maps. Therefore, removing the files from the
	Web server results in minimal or no impact to the end user.
	
	Affected Software Versions:
	
	The affected components are part of the FrontPage 97 and 98 Server Extensions.
	However, they are also included with several other Web server products. The
	following is a complete list of products in which these components are
	included:
	
	- FrontPage 97 Server Extensions, included in FrontPage 97
	
	- FrontPage 98 Server Extensions, included in FrontPage 98
	
	- Microsoft Windows NT 4.0 Option Pack
	
	- Personal Web Server 4.0, included in Microsoft Windows 95 and Microsoft
	  Windows 98
	
	Remediation:
	
	It is recommended that ISPs and server administrators use the functionality that
	is built into the Server Extensions to limit authors from uploading files to
	executable folders on the Web server. The default setting for the FrontPage 2000
	Server Extensions is to deny uploading files to executable folders. The default
	setting for FrontPage 2000 prevents the Htimage.exe and Imagemap.exe files from
	being published to the Cgi-bin folder in the Web.
	
	To learn more about these settings with the FrontPage 2000 or FrontPage 98 Server
	Extensions, please see the following resources:
	
	From the FrontPage 2000 Server Extensions Resource Kit:
	
	  http://officeupdate.microsoft.com/frontpage/wpp/serk/apndx03.htm#apndx03.doc-1079
	
	  http://officeupdate.microsoft.com/frontpage/wpp/serk/apndx03.htm
	
	From the FrontPage 98 Server Extensions Resource Kit:
	
	  http://msdn.microsoft.com/workshop/languages/fp/
	
	References :
	
	Please see the following references for more information related to this issue:
	
	  Frequently Asked Questions: Microsoft Security Bulletin MS00-028
	
	  Microsoft TechNet Security web site
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch kbFrontPage97 _IKkbZNotKeyword4 kbZNotKeyword2 kbFrontPage97Search kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
