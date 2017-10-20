---
layout: page
title: "Q305628: PRB: Error &quot;Class Definition MAPI.SESSION is not found&quot;"
permalink: /kb/305/Q305628/
---

## Q305628: PRB: Error &quot;Class Definition MAPI.SESSION is not found&quot;

{% raw %}

	Article: Q305628
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500aFIX kbvfp600 kbGrpDSFox kbDSupport kbvfp
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending e-mail messages from Visual FoxPro applications, programmers
	usually use CREATEOBJECT("MAPI.Session"). Under some circumstances, however,
	this may return the following error messages:
	
	  Class definition MAPI.SESSION is not found
	
	  -or-
	
	  OLE error code: 0x8007007e Specified module cannot be found.
	
	CAUSE
	=====
	
	The most likely cause of these errors is that the Collaboration Data Objects
	(CDO) library is not installed. Although CDO ships with Microsoft Outlook 98 and
	later, it is not installed by default.
	
	Another possible cause is that Outlook is installed in Internet Mail Only (IMO)
	mode. MAPI and CDO are not supported in this mode.
	
	RESOLUTION
	==========
	
	If you already have Outlook 98 or later installed, and Outlook is not installed
	in IMO mode, you can install the CDO library by rerunning the Outlook setup
	program and explicitly including CDO. If installing Outlook is not possible, see
	the following article in the Microsoft Knowledge Base:
	
	  Q171440 INFO: Where to Acquire the CDO Libraries (all versions)
	
	If the CDO libraries are already installed and are not working, try using
	RegSvr32 to reregister them. For example, the following command line would work
	on Microsoft Windows 2000:
	
	  "RegSvr32 c:\WINNT\system32\cdonts.dll" (without the quotation marks)
	
	If this fails, contact Microsoft for further support.
	
	REFERENCES
	==========
	
	For additional information about Collaboration Data Objects, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q272402 OL2000: General Information About CDO
	
	  Q262701 OL2000: Developer Information About the Outlook E-mail Security
	  Update
	
	  Q252720 INFO: MAPI and CDO Are Not Supported in Outlook IMO Mode
	
	  Q254458 Windows 2000 Does Not Include Windows Messaging by Default
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500aFIX kbvfp600 kbGrpDSFox kbDSupport kbvfp500xSearch kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
