---
layout: page
title: "Q171119: Err. Msg.: Access Forbidden During Certificate Creation"
permalink: kb/171/Q171119/
---

## Q171119: Err. Msg.: Access Forbidden During Certificate Creation

	Article: Q171119
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to process a Certificate Request file through the sample
	Certificate Server web site (Krenroll.asp), you may get the following error
	message:
	
	  HTTP/1.1 403 Access Forbidden
	
	  Execute Access Denied
	
	  This Virtual Directory does not allow objects to be executed.
	
	CAUSE
	=====
	
	The script mapping for the .Cer extension is not marked as Execute (including
	script).
	
	RESOLUTION
	==========
	
	Use one of the following workarounds:
	
	I. REAPPLY THE SCRIPT MAPPING FOR THE .CER EXTENSION.
	
	Within the Microsoft Management Console
	---------------------------------------
	
	1. Select the plus sign beside IIS under the Console Root.
	
	2. Select the plus sign beside the appropriate Web Server.
	
	3. Right-click the appropriate web site, and click Properties on the shortcut
	  menu.
	
	4. In the web site properties, select the Home Directory tab.
	
	5. Click Configure under the Application Settings tab.
	
	6. Under the Application Mappings section, select the .Cer extension. Click
	  Edit.
	
	7. In the Add/Edit Application Extension Mapping dialog box, make sure the
	  Script Engine check box is selected.
	
	II. MARK THE VIRTUAL DIRECTORY AS "EXECUTE."
	
	Within the Microsoft Management Console
	---------------------------------------
	
	1. Select the plus sign beside IIS under the Console Root.
	
	2. Select the plus sign beside the appropriate Web Server.
	
	3. Right-click the appropriate Virtual Directory or Web Site, and select
	  Properties on the shortcut menu.
	
	4. In the Properties Sheet, click the Virtual Directory tab.
	
	5. Under the Permissions section, ensure that the Execute (including script)
	  button is selected.
	
	6. Close the appropriate dialog boxes and exit the Microsoft Management Console.
	
	MORE INFORMATION
	================
	
	During setup, the .Cer extension is not configured properly. When you change the
	Permissions to Execute, it forces the appropriate behavior. However, editing the
	.Cer extension is the most appropriate solution.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
