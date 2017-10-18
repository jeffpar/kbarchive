---
layout: page
title: "Q189799: FP: Frequently Asked Questions About the Fpexedll.dll"
permalink: kb/189/Q189799/
---

## Q189799: FP: Frequently Asked Questions About the Fpexedll.dll

	Article: Q189799
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- SharePoint Team Services from Microsoft 
	- FrontPage 2002 Server Extensions from Microsoft 
	- Microsoft FrontPage 2002 
	- FrontPage 2000 Server Extensions from Microsoft 
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 98 for Windows 
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes the purpose and functionality of the Fpexedll.dll. This
	file is an Internet Server Application Programming Interface (ISAPI) filter that
	is installed with the FrontPage Server Extensions or SharePoint Team Services on
	a Web server based on Microsoft Internet Information Services (IIS).
	
	The following questions are answered:
	
	  
	  What is Fpexedll.dll?
	
	  Do I need to use Fpexedll.dll?
	
	  When should I remove IIS references to Fpexedll.dll?
	
	  Where is Fpexedll.dll physically stored?
	
	  How do I remove references to Fpexedll.dll from IIS 4.0 and later?
	
	  How do I remove references to Fpexedll.dll from IIS 2.0 or IIS 3.0?
	
	MORE INFORMATION
	================
	
	What is Fpexedll.dll?
	---------------------
	
	The Fpexedll.dll file is installed with the FrontPage Server Extensions on
	Microsoft Internet Information Services (IIS) to provide backward compatibility
	with Microsoft FrontPage for Windows, version 1.1, and Microsoft FrontPage for
	the Macintosh, version 1.0.
	
	When authoring on an IIS-based Web server, FrontPage versions 1.0 and 1.1 make
	requests for the older CGI-based Server Extension files (Shtml.exe, Author.exe,
	and Admin.exe) rather than the newer ISAPI-based files (Shtml.dll, Author.dll,
	and Admin.dll) as they are known in FrontPage 97 and later. The Fpexedll.dll
	filter examines every HTTP request coming into the system and, if a request is
	for one of the CGI-based executable files, the Fpexedll.dll filter converts the
	URL so that the corresponding ISAPI-based dynamic-link library (.dll) file is
	called.
	
	Do I need to use Fpexedll.dll?
	------------------------------
	
	The Fpexedll.dll ISAPI filter only provides backward-compatibility with FrontPage
	versions 1.0 and 1.1. If you are not using these versions of FrontPage, you do
	not need to use this filter. You can safely remove any references to the filter
	from your IIS configuration.
	
	NOTE: There is no need to physically delete the DLL file from your hard disk.
	
	When should I remove IIS references to Fpexedll.dll?
	----------------------------------------------------
	
	- If there are two references to the Fpexedll.dll file listed in your IIS
	  configuration, remove one of them. The remaining reference should point to
	  the correct location of Fpexedll.dll, depending on which version of the
	  FrontPage Server Extensions is installed.
	
	- If there is only one reference to Fpexedll.dll, make sure that no clients are
	  authoring against the server using either FrontPage 1.0 or FrontPage 1.1. If
	  there are no such clients, you can remove the reference to Fpexedll.dll. It
	  serves no functional purpose and could theoretically slow requests that are
	  processed by IIS.
	
	NOTE: There is no need to physically delete the DLL file from your hard disk.
	
	Where is Fpexedll.dll physically stored?
	----------------------------------------
	
	The physical location of Fpexedll.dll depends on the version of the FrontPage
	Server Extensions that you are using:
	
	- FrontPage 2002 Server Extensions or SharePoint Team Services from Microsoft
	
	  <Drive>:\Program Files\Common Files\Microsoft Shared\Web Server
	  Extensions\50\Bin\Fpexedll.dll
	
	- FrontPage 2000 Server Extensions
	
	  <Drive>:\Program Files\Common Files\Microsoft Shared\Web Server
	  Extensions\40\Bin\Fpexedll.dll
	
	- FrontPage 98 Server Extensions
	
	  <Drive>:\Program Files\Microsoft FrontPage\version3.0\Bin\Fpexedll.dll
	
	- FrontPage 97 Server Extensions
	
	  <Drive>:\Program Files\Microsoft FrontPage\Bin\Fpexedll.dll
	
	The location of any references to Fpexedll.dll depends on the version of IIS that
	you are using:
	
	- IIS versions 4.0, 5.0, and 5.1
	
	  In the Master WWW properties under ISAPI Filters.
	
	  NOTE: If you are using FrontPage 2002 Server Extensions, there may be
	  references in the ISAPI Filters list for each Web site that has the Server
	  Extensions installed. For additional information, please see the "References"
	  section later in this article.
	
	- IIS versions 2.0 and 3.0
	
	  In the following registry subkey:
	
	  
	
	  \HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W3svc\Parameters\Filter dlls
	
	How do I remove references to Fpexedll.dll from IIS 4.0 and later?
	------------------------------------------------------------------
	
	To remove references for Fpexedll.dll from an server based on IIS 4.0 and later,
	follow these steps:
	
	1. Open the Internet Services Manager. To do this, follow the steps for your
	  version of IIS.
	
	   - For IIS 4.0:
	
	     a. On the Windows Start menu, point to Programs, and then click "Windows
	        NT 4.0 Option Pack".
	
	     b. Click Microsoft Internet Information Server.
	
	     c. Select Internet Service Manager.
	
	   - For IIS 5.0:
	
	     a. On the Windows Start menu, point to Programs, and then click
	        Administrative Tools.
	
	     b. Select Internet Services Manager.
	
	   - For IIS 5.1:
	
	     a. Open Control Panel.
	
	     b. Double-click Administrative Tools.
	
	     c. Double-click Internet Information Services.
	
	2. Right-click the computer name and then click Properties on the menu that
	  appears.
	
	3. Click Edit to edit the Master Properties for the WWW Service.
	
	4. Click the ISAPI Filters tab.
	
	5. Select Fpexedll.dll and click Remove. There may be more than one entry;
	  remove them all.
	
	NOTE: If you are using FrontPage 2002 Server Extensions, there may be references
	in the ISAPI Filters list for each Web site that has the Server Extensions
	installed. In that case, repeat this procedure for each Web site that does not
	need the Fpexedll.dll reference. For additional information, please see the
	"References" section later in this article.
	
	NOTE: There is no need to physically delete the DLL file from your hard drive.
	
	How do I remove references to Fpexedll.dll from IIS 2.0 or IIS 3.0?
	-------------------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To remove Fpexedll.dll from a server based on IIS 2.0 or 3.0, follow these
	steps:
	
	1. On the Start menu, click Run.
	
	2. In the Open box, type "Regedt32" (without the quotation marks) and click OK.
	
	3. Locate the following registry subkey:
	
	HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/W3SVC/Parameters/Filter Dlls
	
	4. Double-click this subkey to edit it.
	
	5. Delete the reference to the Fpexedll.dll file and, if necessary, the
	  semicolon (";") separator between it and the next filter. For example, for
	  FrontPage 98 delete the following:
	
	  C:\Program Files\Microsoft FrontPage\version3.0\bin\Fpexedll.dll;
	
	  Do not delete references to other DLLs that precede or follow the reference to
	  the Fpexedll.dll file.
	
	6. Quit Registry Editor.
	
	NOTE: There is no need to physically delete the DLL file from your hard disk.
	
	REFERENCES
	==========
	
	For additional information about FrontPage Server Extensions or SharePoint Team
	Services, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q310931 FP2000: Where to Find the FrontPage 2000 Server Extensions Resource
	  Kit (SERK)
	
	  Q310932 FP2002: Where to Find the SharePoint Team Services Administrator's
	  Guide
	
	  Q294150 FP2002: Entries for Fpexedll.dll Are Added to Each Extended Site
	
	Additional query words: front page 97 98 2000 2002 fpexedll backward faq SPTS
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbbogus kbFrontPage97 kbFrontPage2002 kbFrontPageServXSearch _IKkbZNotKeyword4 kbZNotKeyword2 kbFrontPage2000Search kbFrontPage2002Search kbFrontPage97Search kbFrontPage98Search kbZNotKeyword3 kbFrontPage2000ServX kbFrontPage2002ServX kbZNotKeyword5 kbSharePtTeamSvc
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
