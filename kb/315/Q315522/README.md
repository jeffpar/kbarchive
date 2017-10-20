---
layout: page
title: "Q315522: HOW TO: Extract the URLScan Tool and Lockdown Template Files"
permalink: /kb/315/Q315522/
---

## Q315522: HOW TO: Extract the URLScan Tool and Lockdown Template Files

{% raw %}

	Article: Q315522
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- To Extract URLScan and the Template Files
	
	SUMMARY
	=======
	
	This step-by-step article describes how to extract URLScan 2.0 and the lockdown
	template files from the Internet Information Services (IIS) Lockdown tool.
	URLScan 1.0 or 2.0 is required to install Urlscan 2.5, but it is only available
	in the IIS Lockdown tool (as of version 2.1).
	
	For additional information about Urlscan 2.5, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q307608 INFO: Availability of URLScan Version 2.5 Security Tool
	
	Requirements
	------------
	
	- The IIS Lockdown tool version 2.1. This tool is available from the following
	  Microsoft Web site:
	
	  http://www.microsoft.com/technet/treeview/default.asp?url=/technet/security/tools/tools/urlscan.asp?frame=true
	
	- Microsoft Windows running IIS 4.0 or later.
	
	To Extract URLScan and the Template Files
	-----------------------------------------
	
	To extract URLScan and the lockdown template files from the IIS Lockdown tool:
	
	1. Create a folder on your hard disk into which you want to extract URLScan and
	  the lockdown files.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "<path>:\iislockd.exe /q /c" (without the
	  quotation marks) (where <path> is the full path to the folder in which
	  you placed the Iislockd.exe file), and then press ENTER.
	
	4. When you are prompted, type (or browse to) the location of the folder that
	  you created in step 1, and then click OK. URLScan and the lockdown template
	  files are extracted to the folder that you created in step 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
